import { DeployPanel } from "@/components/deploy-panel";

export default function Deploy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Deploy to External Hosting
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Keep using Replit for development while hosting your site externally on your custom domain
            </p>
          </div>
          
          <DeployPanel />
        </div>
      </div>
    </div>
  );
}