# Heroku Frontend Deployment

This document outlines the deployment process for the FoodWagen frontend to Heroku.

## Prerequisites

1. Heroku CLI installed
2. Git repository initialized
3. Heroku account created

## Deployment Steps

### 1. Create Heroku App

```bash
# Login to Heroku
heroku login

# Create new app for frontend (replace with your app name)
heroku create your-foodwagen-frontend

# Add Node.js buildpack
heroku buildpacks:set heroku/nodejs
```

### 2. Configure Environment Variables

```bash
# Set production environment variables
heroku config:set NEXT_PUBLIC_APP_NAME=FoodWagen
heroku config:set NEXT_PUBLIC_APP_URL=https://your-foodwagen-frontend.herokuapp.com
heroku config:set NEXT_PUBLIC_API_URL=https://your-foodwagen-backend.herokuapp.com
heroku config:set NEXT_PUBLIC_DEFAULT_FOOD_IMAGE=/api/placeholder/357/301
heroku config:set NEXT_PUBLIC_DEFAULT_LOGO_IMAGE=/api/placeholder/77/77
heroku config:set NEXT_PUBLIC_COMPANY_NAME=FoodWagen
heroku config:set NEXT_PUBLIC_COMPANY_EMAIL=info@foodwagen.com
heroku config:set NEXT_PUBLIC_COMPANY_PHONE="+1 (555) 123-4567"
```

### 3. Deploy

```bash
# Add Heroku remote (if not already added)
heroku git:remote -a your-foodwagen-frontend

# Deploy to Heroku
git add .
git commit -m "Deploy frontend to Heroku"
git push heroku main
```

### 4. Open Application

```bash
heroku open
```

## Important Notes

- Make sure to update the API_URL to point to your backend Heroku app
- The app will automatically detect it's a Next.js project and use the appropriate build process
- Environment variables are set at the Heroku app level and will override local .env files
