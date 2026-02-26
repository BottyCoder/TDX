# Think Digital X - Static Landing Page

## Overview
A static landing page for Think Digital X (TDX), an enterprise tech-media platform operating in South Africa. The site showcases the company's value proposition, solutions, team, compliance, and contact forms.

## Architecture
- **Static site**: Single `public/index.html` file containing all HTML, CSS, and JavaScript
- **Server**: Minimal Express static file server (`server.js`) on port 5010
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
`node server.js` — serves static files from `public/` on port 5010

## Git (multi-environment)
If you work from more than one clone (e.g. Replit + local), set a default pull strategy once so `git pull origin main` doesn’t ask how to reconcile divergent branches:
```bash
git config pull.rebase true
```
After that, `git pull` will rebase your local commits on top of `origin/main` and you won’t need to run merge commands.
