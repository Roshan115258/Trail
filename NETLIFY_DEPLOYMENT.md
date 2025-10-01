# Netlify Deployment Guide

## Architecture Overview

This site is built as a **static JAMstack application** optimized for Netlify deployment with:
- **Frontend**: React SPA built with Vite
- **Products Data**: Static JSON file (`client/public/products.json`)
- **Forms**: Formspree integration for contact, newsletter, and checkout
- **Shopping Cart**: Client-side with localStorage persistence
- **No Backend Server**: All data is static or handled by third-party services

## Prerequisites

1. A Netlify account (sign up at https://netlify.com)
2. Your GitHub/GitLab repository connected to Netlify (or manual deployment)
3. Formspree account for form submissions (already configured)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Connect Repository**
   - Log in to Netlify
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select this repository

2. **Configure Build Settings**
   - Build command: `npx vite build`
   - Publish directory: `dist/public`
   - (These are already configured in `netlify.toml`)

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from project root)
netlify deploy --prod
```

## Build Configuration

The `netlify.toml` file contains all build configuration:

```toml
[build]
  command = "npx vite build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Important**: Specifying `command = "npx vite build"` in netlify.toml overrides the package.json `build` script. Netlify will run this command instead of `npm run build`, ensuring only the frontend is built (no backend compilation).

## Environment Variables (Optional)

If you need to customize any settings:

1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add these optional variables:
   - `VITE_GA_MEASUREMENT_ID`: Google Analytics tracking ID
   - `VITE_FORMSPREE_ENDPOINT`: Custom Formspree endpoint (default is already configured)

## Static Files Included

The build outputs to `dist/public/` with:
- `index.html` - Main SPA entry point
- `products.json` - Product catalog data (7 dairy equipment products)
- `_redirects` - SPA routing configuration
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine directives
- `/assets/*` - Optimized JS, CSS, and images
- `/images/*` - Product images

## Form Submissions

All forms use Formspree (no backend required):
- **Contact Form**: Contact page
- **Newsletter**: Footer subscription
- **Checkout**: Shopping cart checkout

Submissions are sent to: `https://formspree.io/f/meorgyae`

## Shopping Cart

- Client-side implementation using React Context + localStorage
- No server-side processing
- Cart data persists across browser sessions
- Checkout sends cart data to Formspree

## Custom Domain (Optional)

1. Go to Netlify Dashboard → Domain settings
2. Add your custom domain: `severalsustain.in`
3. Update DNS records as instructed by Netlify
4. SSL certificate is automatically provisioned

## Troubleshooting

### Build Fails with Backend Errors
- **Cause**: Netlify trying to build backend code
- **Solution**: Verify `netlify.toml` has `command = "npx vite build"` (this overrides the package.json build script)

### Products Not Loading
- **Cause**: products.json not in build output
- **Solution**: Ensure `client/public/products.json` exists and build completes

### SPA Routes Return 404
- **Cause**: Missing redirect configuration
- **Solution**: Verify `_redirects` file is in `dist/public/`

### Form Submissions Failing
- **Cause**: Formspree endpoint issue
- **Solution**: Check Formspree dashboard and verify endpoint URL

## Local Development vs Production

### Local Development
- Runs Express server for dev environment: `npm run dev`
- Backend code exists but is NOT deployed to Netlify

### Production (Netlify)
- **Only the frontend is built and deployed**
- Command: `npx vite build` (frontend only)
- No backend server or API routes

## Performance Optimizations

The static build includes:
- ✅ Code splitting and tree shaking
- ✅ Asset optimization (images, CSS, JS)
- ✅ Gzip compression
- ✅ CDN delivery via Netlify
- ✅ Automatic HTTPS

## Maintenance

### Updating Products
1. Edit `client/public/products.json`
2. Commit and push changes
3. Netlify auto-deploys on push

### Updating Content
- All content is in React components
- Edit files in `client/src/pages/` and `client/src/components/`
- Push changes to trigger auto-deployment

## Support

For deployment issues:
- Check Netlify build logs in the dashboard
- Review this guide
- Ensure `netlify.toml` configuration is correct
