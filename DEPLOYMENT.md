# Vercel Deployment Guide for Kana TV Blog

## 🚀 Deployment Steps

### 1. Deploy to Vercel

1. **Push your code to GitHub** (if not already done)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

### 2. Configure Environment Variables in Vercel

In your Vercel dashboard, add these environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=vya0ywny
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk3swAMmalxPd80yLv84mwqyLl8xX7WfqwfgoZkT77HboiLOORSCBBbUKEHu22Y42kGW2TzGzyB4oVNP8
```

### 3. Update Sanity CORS Origins

After your first deployment, get your Vercel URL (e.g., `https://your-app-name.vercel.app`) and run:

```bash
# Add your Vercel URL to CORS origins
npx sanity cors add https://your-app-name.vercel.app --credentials
npx sanity cors add https://your-app-name.vercel.app/studio --credentials
```

### 4. Verify Deployment

- **Blog**: `https://your-app-name.vercel.app/blog`
- **Studio**: `https://your-app-name.vercel.app/studio`
- **API Test**: `https://your-app-name.vercel.app/api/sanity`

## 🔧 Important Notes

### Environment Variables
- `SANITY_API_TOKEN` is included in `vercel.json` for automatic deployment
- Make sure to add it in Vercel dashboard as well for security

### CORS Configuration
- You must add your Vercel URL to Sanity CORS origins
- Include both the main URL and `/studio` path
- Use `--credentials` flag for authentication

### Custom Domain (Optional)
If you get a custom domain later:
1. Add the custom domain to Sanity CORS origins
2. Update environment variables if needed
3. No code changes required

## 🎯 Production URLs

After deployment, your URLs will be:
- **Blog**: `https://your-vercel-app.vercel.app/blog`
- **CMS Studio**: `https://your-vercel-app.vercel.app/studio`
- **Home**: `https://your-vercel-app.vercel.app`

## 🔒 Security Notes

- The API token is included for demo purposes
- For production, consider using environment-specific tokens
- The token has full access to your Sanity project

## 📝 Next Steps

1. Deploy to Vercel
2. Add CORS origins with your Vercel URL
3. Test the studio and blog functionality
4. Create your first blog posts!
