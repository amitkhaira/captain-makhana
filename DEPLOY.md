# 🚀 How to Enable Auto-Deployment

Your website failed to deploy because of a one-time configuration setting in GitHub. 

### 1️⃣ Fix the Settings
1. Go to your repository **Settings** tab:  
   `https://github.com/amitkhaira/captain-makhana/settings/pages`
   
2. Under **"Build and deployment"** find the **"Source"** dropdown.

3. Change it from **"Deploy from a branch"** to **"GitHub Actions"**.

   > **Why?** We are using a modern `deploy.yml` workflow to build and optimize your site automatically. The default setting expects a manual branch push.

### 2️⃣ Trigger the Deployment
Once you change the setting:

1. Go to the **Actions** tab.
2. Click on the failed **"Deploy to GitHub Pages"** run on the left.
3. Click the **"Re-run jobs"** button in the top right.

-- OR --

Simply make any small change to the code and push it, and it will auto-deploy!

### ✅ Verify
Your site will be live at:  
`https://amitkhaira.github.io/captain-makhana/`
