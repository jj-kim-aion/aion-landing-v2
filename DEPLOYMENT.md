# Deployment Guide - Aion AI Landing Page v2

## Quick Start Deployment

### Option 1: Deploy to Vercel (Recommended)

#### Using Vercel CLI (Fastest)
```bash
# From project root
cd /home/node/.openclaw/workspace/agents/jj/aion-product-landing-v2

# Deploy using authenticated wrapper
../vercel-wrapper.sh deploy --prod

# Or use the alternative wrapper
../vercel-jj deploy --prod
```

#### Using Vercel Dashboard
1. **Push to GitHub:**
   ```bash
   # Create GitHub repository (if not already created)
   gh repo create aion-landing-v2 --public --source=. --remote=origin
   
   # Push code
   git push -u origin master
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Select your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

### Option 2: Deploy to Other Platforms

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### AWS Amplify
- Connect your GitHub repository in AWS Amplify Console
- Amplify will auto-detect Next.js and configure build settings

## Environment Variables (Optional)

### Calendly Integration
```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/aion-ai/impact-assessment
```

Replace the Calendly placeholder in `app/components/QualificationForm.tsx`:

```tsx
// Step 3: Replace placeholder with actual Calendly embed
<div
  className="calendly-inline-widget"
  data-url={process.env.NEXT_PUBLIC_CALENDLY_URL}
  style={{ minWidth: '320px', height: '700px' }}
/>

<script
  type="text/javascript"
  src="https://assets.calendly.com/assets/external/widget.js"
  async
/>
```

### Form Backend Integration
```env
NEXT_PUBLIC_FORM_ENDPOINT=https://your-api.com/api/leads
```

Update `app/components/QualificationForm.tsx` to submit to your backend:

```tsx
const onStep2Submit = async (data: Step2Data) => {
  setIsSubmitting(true)
  
  const fullData = { ...step1Data, ...data }
  
  // Send to your backend
  const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fullData),
  })
  
  if (response.ok) {
    setStep(3)
  } else {
    // Handle error
    alert('Submission failed. Please try again.')
  }
  
  setIsSubmitting(false)
}
```

### Analytics
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In the <head> section:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## Pre-Deployment Checklist

- [ ] Verify production build completes: `npm run build`
- [ ] Test locally: `npm run dev` → http://localhost:3000
- [ ] Update `NEXT_PUBLIC_CALENDLY_URL` in environment variables
- [ ] Configure form submission endpoint (if using backend)
- [ ] Add Google Analytics tracking code (if needed)
- [ ] Test all 9 sections on desktop and mobile
- [ ] Verify form validation works (especially corporate email check)
- [ ] Ensure all CTAs link correctly
- [ ] Check case studies display properly
- [ ] Test responsiveness on iOS Safari and Chrome mobile

## Performance Optimization

### Already Implemented
- ✅ Next.js static generation for instant page loads
- ✅ Mobile-first responsive design
- ✅ Optimized CSS with Tailwind purging
- ✅ Semantic HTML for accessibility
- ✅ Font preloading in layout.tsx

### Post-Deployment
1. **Enable Vercel Analytics** (free tier available)
2. **Add Image Optimization:** If adding images beyond placeholders
3. **Configure CDN caching:** Already handled by Vercel
4. **Monitor Core Web Vitals:** Use Vercel Speed Insights

## Domain Configuration

### Custom Domain on Vercel
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `aion-ai.com`)
4. Update DNS records as instructed by Vercel
5. SSL certificates are automatically provisioned

### DNS Configuration Example
```
Type: CNAME
Name: www (or @)
Value: cname.vercel-dns.com
```

## Monitoring & Maintenance

### Error Tracking
Consider integrating Sentry for production error monitoring:

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### Analytics Dashboard
Track these key metrics:
- **Conversion Rate:** Form submissions / total visitors
- **Qualification Rate:** Step 3 completions / Step 1 starts
- **Bounce Rate:** Should be <40% for qualified traffic
- **Time on Page:** Target >2 minutes for engaged visitors
- **CTA Click Rate:** Track "Schedule Assessment" clicks

### A/B Testing Recommendations
Once live, test these variations:
1. **Hero headline wording** (outcome-focused vs. process-focused)
2. **CTA button copy** ("Schedule Assessment" vs. "Get Started")
3. **Case study order** (industry-specific vs. outcome-specific)
4. **Form placement** (mid-page vs. footer-only)

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install --include=dev

# Try build again
npm run build
```

### Deployment Fails on Vercel
1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Ensure Node.js version matches (18.x or higher)
4. Check for missing dependencies in package.json

### Form Not Submitting
1. Check browser console for errors
2. Verify corporate email validation logic
3. Test with valid corporate email address
4. Check backend endpoint (if configured)

## Post-Launch Enhancements

### Phase 2 Features
- [ ] Integrate real Calendly embed (replace placeholder)
- [ ] Connect form to CRM (HubSpot, Salesforce, etc.)
- [ ] Add exit-intent popup for "AI Implementation Playbook" download
- [ ] Implement scroll animations (subtle, tasteful)
- [ ] Add video testimonials
- [ ] Create industry-specific landing page variants

### Phase 3 Features
- [ ] Build case study detail pages
- [ ] Create ROI calculator tool
- [ ] Add live chat for qualified leads
- [ ] Implement multi-language support
- [ ] Add blog/resources section
- [ ] Create customer login portal

## Support

**Developer:** JJ Kim, CTO  
**Contact:** tech@aionresearch.io  
**Repository:** `/home/node/.openclaw/workspace/agents/jj/aion-product-landing-v2`

---

**Status:** ✅ Production-Ready  
**Last Build:** Successful  
**Deployment Platform:** Vercel (recommended)  
**Estimated Deployment Time:** <5 minutes
