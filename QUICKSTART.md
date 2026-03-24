# Quick Start - Deploy in 5 Minutes

## Fastest Path to Production

```bash
# 1. Navigate to project
cd /home/node/.openclaw/workspace/agents/jj/aion-product-landing-v2

# 2. Verify build is successful (already done, but you can recheck)
npm run build

# 3. Deploy to Vercel
../vercel-wrapper.sh deploy --prod
```

**That's it!** Your landing page will be live at a Vercel URL.

---

## Alternative: GitHub + Vercel Dashboard (7 minutes)

```bash
# 1. Create GitHub repository
gh repo create aion-landing-v2 --public --source=. --remote=origin

# 2. Push code
git push -u origin master

# 3. Go to Vercel dashboard
# Visit: https://vercel.com/new
# Select your GitHub repo
# Click "Deploy"
```

---

## Post-Deployment Configuration (Optional)

### Add Custom Domain
1. Go to Vercel project settings → Domains
2. Add your domain (e.g., `aion-ai.com`)
3. Update DNS as instructed
4. SSL auto-provisioned

### Integrate Calendly
1. Get your Calendly embed URL
2. Set environment variable: `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...`
3. Update `app/components/QualificationForm.tsx` to use real embed
4. Redeploy

### Add Analytics
1. Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
2. Add tracking script to `app/layout.tsx` (code in DEPLOYMENT.md)
3. Redeploy

---

## Test Checklist

After deployment, verify:

- [ ] Homepage loads in <2 seconds
- [ ] All 9 sections render correctly
- [ ] Form validation works (try invalid email)
- [ ] Corporate email filter blocks gmail/yahoo
- [ ] Mobile responsive on iPhone/Android
- [ ] All CTAs link to #qualification
- [ ] Case studies display properly
- [ ] Testimonials render correctly
- [ ] Footer links work

---

## Need Help?

**Documentation:**
- Full guide: `README.md`
- Deployment details: `DEPLOYMENT.md`
- Complete summary: `PROJECT_SUMMARY.md`

**Developer:** JJ Kim, CTO  
**Contact:** tech@aionresearch.io

---

**Status:** ✅ Production-Ready  
**Estimated Deployment Time:** < 5 minutes  
**Platform:** Vercel (recommended)
