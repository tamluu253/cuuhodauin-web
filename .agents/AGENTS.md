# Workflow Rules

## QA Checklist Rule (Self-Correction)
Before confirming any task as 'DONE', you MUST explicitly verify:
1. **Navigation**: If you created a new page/route, is there a working, visible link to it from the parent/index page?
2. **Deployment**: Did you run `git commit` and `git push` so the Vercel/live environment can build the changes?
3. **Data Quality**: Is the data perfectly formatted in Vietnamese? Did you accidentally dump raw extracted texts (like Chinese characters) into the UI?

Always double-check these 3 points explicitly in your thought process before responding to the user.
