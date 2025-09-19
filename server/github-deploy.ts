import { getUncachableGitHubClient } from './github-client.js';

export async function createGitHubRepo(repoName: string) {
  try {
    const github = await getUncachableGitHubClient();
    
    // Create repository
    const repo = await github.rest.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'Heath Coaching Website - Professional health and wellness coaching services',
      private: false,
      auto_init: true,
      homepage: 'https://heathcoaching.com'
    });
    
    console.log(`✅ Repository created: ${repo.data.html_url}`);
    return repo.data;
  } catch (error: any) {
    if (error.status === 422) {
      console.log('Repository already exists, fetching details...');
      const github = await getUncachableGitHubClient();
      const user = await github.rest.users.getAuthenticated();
      return await github.rest.repos.get({
        owner: user.data.login,
        repo: repoName
      }).then(r => r.data);
    }
    throw error;
  }
}

export async function uploadFilesToGitHub(repoOwner: string, repoName: string, files: Array<{path: string, content: string}>) {
  const github = await getUncachableGitHubClient();
  
  for (const file of files) {
    try {
      await github.rest.repos.createOrUpdateFileContents({
        owner: repoOwner,
        repo: repoName,
        path: file.path,
        message: `Update ${file.path}`,
        content: Buffer.from(file.content).toString('base64'),
      });
      console.log(`✅ Uploaded: ${file.path}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${file.path}:`, error);
    }
  }
}