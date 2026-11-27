# Workflow Rules

## QA Checklist Rule (Self-Correction)
Before confirming any task as 'DONE', you MUST explicitly verify:
1. **Navigation**: If you created a new page/route, is there a working, visible link to it from the parent/index page?
2. **Deployment**: Did you run `git commit` and `git push` so the Vercel/live environment can build the changes?
3. **Data Quality**: Is the data perfectly formatted in Vietnamese? Did you accidentally dump raw extracted texts (like Chinese characters) into the UI?
4. **Auto-GSC & Sitemap Sync (Mandatory)**: Whenever ANY page, route, article, pillar, product, or SEO/content change is made on `cuuhodauin.com`:
   - Ensure `src/app/sitemap.ts` includes all newly created indexable routes (and excludes any deleted/redirected/noindex routes).
   - Immediately after `git push`, run `npm run gsc:sync` (`node scripts/auto-gsc-sync.js`) to automatically resubmit `https://www.cuuhodauin.com/sitemap.xml` to Google Search Console (GSC).

Always double-check these 4 points explicitly in your thought process before responding to the user.
