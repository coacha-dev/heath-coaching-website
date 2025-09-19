import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function DeployPanel() {
  const [isCreatingRepo, setIsCreatingRepo] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [repoInfo, setRepoInfo] = useState<any>(null);
  const [deployInfo, setDeployInfo] = useState<any>(null);
  const { toast } = useToast();

  const createRepo = async () => {
    setIsCreatingRepo(true);
    try {
      const response = await fetch('/api/github/create-repo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      
      if (data.success) {
        setRepoInfo(data.repo);
        toast({
          title: "Repository Created!",
          description: `GitHub repository created successfully at ${data.repo.name}`,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsCreatingRepo(false);
    }
  };

  const deployToGitHub = async () => {
    setIsDeploying(true);
    try {
      const response = await fetch('/api/github/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      
      if (data.success) {
        setDeployInfo(data);
        toast({
          title: "Deployment Successful!",
          description: `${data.files} files deployed to GitHub Pages`,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Deployment Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            GitHub Repository Setup
          </CardTitle>
          <CardDescription>
            Create a GitHub repository for your website to enable external hosting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!repoInfo ? (
            <Button 
              onClick={createRepo} 
              disabled={isCreatingRepo}
              className="w-full"
            >
              {isCreatingRepo ? "Creating Repository..." : "Create GitHub Repository"}
            </Button>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">
                    Repository Created
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    {repoInfo.name}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  Ready
                </Badge>
              </div>
              <a 
                href={repoInfo.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                View Repository <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Deploy to GitHub Pages
          </CardTitle>
          <CardDescription>
            Build and deploy your static site to GitHub Pages with custom domain support
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={deployToGitHub} 
            disabled={isDeploying || !repoInfo}
            className="w-full"
          >
            {isDeploying ? "Deploying..." : "Deploy to GitHub Pages"}
          </Button>
          
          {deployInfo && (
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  Deployment Complete
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-300">
                  {deployInfo.files} files deployed successfully
                </p>
              </div>
              <div className="space-y-2">
                <a 
                  href={deployInfo.repo_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                >
                  <Github className="h-3 w-3" />
                  View Repository <ExternalLink className="h-3 w-3" />
                </a>
                <br />
                <a 
                  href={deployInfo.pages_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                >
                  <Globe className="h-3 w-3" />
                  View Live Site <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next Steps: Custom Domain Setup</CardTitle>
          <CardDescription>
            After deployment, configure your custom domain
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-2">
            <p><strong>1. GitHub Pages Setup:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Go to your repository Settings → Pages</li>
              <li>Select "Deploy from a branch" → main branch</li>
              <li>Your site will be live at the GitHub Pages URL</li>
            </ul>
            
            <p><strong>2. Custom Domain (heathcoaching.com):</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>In GitHub Pages settings, add "heathcoaching.com" as custom domain</li>
              <li>Update your GoDaddy DNS:</li>
              <li className="ml-4">• A Record: @ → 185.199.108.153</li>
              <li className="ml-4">• A Record: @ → 185.199.109.153</li>
              <li className="ml-4">• A Record: @ → 185.199.110.153</li>
              <li className="ml-4">• A Record: @ → 185.199.111.153</li>
              <li className="ml-4">• CNAME: www → [your-username].github.io</li>
              <li>Wait 24 hours for DNS propagation</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}