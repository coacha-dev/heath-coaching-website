import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the frontend
console.log('🔨 Building static site...');
execSync('npm run build', { stdio: 'inherit' });

// Create a simple static deployment structure
const distPath = './dist';
const staticPath = './static-deploy';

// Clean and create static deploy directory
if (fs.existsSync(staticPath)) {
  fs.rmSync(staticPath, { recursive: true });
}
fs.mkdirSync(staticPath, { recursive: true });

// Copy built frontend files
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  files.forEach(file => {
    const srcPath = path.join(distPath, file);
    const destPath = path.join(staticPath, file);
    fs.cpSync(srcPath, destPath, { recursive: true });
  });
}

// Create GitHub Pages compatible structure
const indexHtml = fs.readFileSync('./client/index.html', 'utf8');
fs.writeFileSync(path.join(staticPath, 'index.html'), indexHtml);

// Create 404.html for GitHub Pages
fs.writeFileSync(path.join(staticPath, '404.html'), indexHtml);

// Create CNAME file for custom domain
fs.writeFileSync(path.join(staticPath, 'CNAME'), 'heathcoaching.com');

console.log('✅ Static site built successfully in ./static-deploy');
console.log('📁 Files ready for deployment:');
console.log(fs.readdirSync(staticPath).map(f => `  - ${f}`).join('\n'));