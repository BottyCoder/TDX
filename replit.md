# Think Digital X - Static Landing Page

## Overview
A static landing page for Think Digital X (TDX), an enterprise tech-media platform operating in South Africa. The site showcases the company's value proposition, solutions, team, compliance, and contact forms.

## Architecture
- **Static site**: Single `public/index.html` file containing all HTML, CSS, and JavaScript
- **Server**: Minimal Express static file server (`server.js`). Uses `PORT` from environment; default 5000 (do not change for Replit).
- **Three.js**: Liquid ether fluid simulation as the hero background animation (loaded via ESM/CDN)

## Key Sections
- Hero with Three.js fluid animation background
- Value Engine (Trust, Yield, Connectivity cards)
- Solutions (Malls, Townships, Health Facilities, DHA)
- Dashboard preview (locked demo)
- Media Kit download
- Trusted logos
- Team section
- Compliance / Privacy section
- Contact forms (Supply Partner + Advertiser)
- Footer

## Fonts
- Cabinet Grotesk (headings)
- Satoshi (body)
- JetBrains Mono (monospace labels)
- Loaded via FontShare CDN

## Brand Colors
- Cyan: #00D0FF
- Gold: #C79143
- Blue: #1A498A
- Purple: #7c3bed

## Running
`node server.js` — serves static files from `public/`. Port: `process.env.PORT` or 5000 (Replit sets PORT; do not change port numbers when publishing to Replit).

## Git (multi-environment)
If you work from more than one clone (e.g. Replit + local), set a default pull strategy once so `git pull origin main` doesn't ask how to reconcile divergent branches:
```bash
git config pull.rebase true
```
After that, `git pull` will rebase your local commits on top of `origin/main` and you won't need to run merge commands.

### Replit: avoid “not seeing latest changes” (keep in sync with GitHub)
**Source of truth:** Edits and commits happen in Cursor (or your main dev environment) and are pushed to GitHub. Replit is used only to **run** and **deploy** the site.

**Before every Publish on Replit**, sync with GitHub so the deployed site matches the repo:
```bash
git fetch origin
git reset --hard origin/main
```
Then trigger **Publish**. That way you never deploy an old or diverged branch. If Replit ever creates a local commit (e.g. “Published your App”), the next reset will drop it and match GitHub again. **Don’t commit from Replit** if you also edit from Cursor—commit only in one place and push to GitHub.

### Replit: after pulling, redeploy so the live site updates
Static deployment (`.replit` → `publicDir = "public"`) serves the **public** folder. After you sync (or pull) on Replit, trigger **Publish** (or **Redeploy**) so the live site picks up the new files. A hard refresh (Ctrl+Shift+R / Cmd+Shift+R) may be needed to avoid cache.

### Replit: push when remote has new commits
If Replit says "updates were rejected because the remote contains work that you do not have", align Replit with GitHub then push:

1. **Set pull to rebase (once):**
   ```bash
   git config pull.rebase true
   ```

2. **Pull remote into Replit (rebases your Replit commits on top of origin/main):**
   ```bash
   git pull origin main
   ```

3. **If there are conflicts:** fix the files it lists, then:
   ```bash
   git add .
   git rebase --continue
   ```
   (Or to abort and merge instead: `git rebase --abort`, then `git pull origin main` with merge.)

4. **Push:**
   ```bash
   git push origin main
   ```
