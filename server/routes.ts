import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { createGitHubRepo, uploadFilesToGitHub } from "./github-deploy.js";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Create GitHub repository
  app.post("/api/github/create-repo", async (req, res) => {
    try {
      const repo = await createGitHubRepo("heath-coaching-website");
      res.setHeader('Content-Type', 'application/json');
      res.json({ 
        success: true, 
        repo: {
          name: repo.name,
          url: repo.html_url,
          clone_url: repo.clone_url
        }
      });
    } catch (error: any) {
      console.error("GitHub repo creation error:", error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).json({ success: false, error: error.message });
    }
  });

  // Build and deploy static site to GitHub
  app.post("/api/github/deploy", async (req, res) => {
    // Helper function to read directory recursively
    const readDirRecursive = (dir: string, baseDir: string = ""): Array<{path: string, content: string}> => {
      const files: Array<{path: string, content: string}> = [];
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(baseDir, entry.name);
        
        if (entry.isDirectory()) {
          files.push(...readDirRecursive(fullPath, relativePath));
        } else {
          try {
            // Skip binary files and only read text files
            const ext = path.extname(entry.name).toLowerCase();
            const textExtensions = ['.html', '.css', '.js', '.json', '.txt', '.md', '.svg', '.xml'];
            
            if (textExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'utf8');
              files.push({ path: relativePath, content });
            } else {
              // For binary files, just skip them or handle differently
              console.log(`Skipping binary file: ${relativePath}`);
            }
          } catch (error) {
            console.error(`Error reading file ${relativePath}:`, error);
          }
        }
      }
      return files;
    };

    try {
      // Build static version
      console.log("Building static site...");
      execSync("vite build --outDir=static-deploy", { stdio: 'pipe' });
      
      // Read built files
      const staticPath = "./static-deploy";
      let files: Array<{path: string, content: string}> = [];
      
      if (fs.existsSync(staticPath)) {
        files = readDirRecursive(staticPath);
      }
      
      // Add custom files for GitHub Pages
      const indexContent = fs.readFileSync("./client/index.html", 'utf8');
      files.push({ path: "index.html", content: indexContent });
      files.push({ path: "404.html", content: indexContent });
      files.push({ path: "CNAME", content: "heathcoaching.com" });
      
      // Get user info and upload
      const { getUncachableGitHubClient } = await import('./github-client.js');
      const github = await getUncachableGitHubClient();
      const user = await github.rest.users.getAuthenticated();
      
      await uploadFilesToGitHub(user.data.login, "heath-coaching-website", files);
      
      res.setHeader('Content-Type', 'application/json');
      res.json({ 
        success: true, 
        message: "Site deployed to GitHub!",
        files: files.length,
        repo_url: `https://github.com/${user.data.login}/heath-coaching-website`,
        pages_url: `https://${user.data.login}.github.io/heath-coaching-website`
      });
    } catch (error: any) {
      console.error("Deploy error:", error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).json({ success: false, error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
