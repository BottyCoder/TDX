# TDX (Think Digital X) — Project LTM

**Purpose:** Long-term memory for the TDX website project. Use this to stay up to date on what’s been built, where things live, and how to deploy.

**Last updated:** Session covering copy updates (Target Media Networks, Transparent Reporting & Analytics Engine, Meet the team, High Trust Ad Tech), product card (New) styling, two-line Analytics headline, index variants sync, Replit cache learnings, and build-output option.

---

## 1. Repo and deploy

- **Repo:** `https://github.com/BottyCoder/TDX`
- **Live site:** `https://tdx.woosh.ai` (custom domain; Replit static deploy).
- **Source of truth:** All edits and commits from Cursor (or one dev environment); push to GitHub. Replit is used only to **run** and **deploy**.
- **Replit workflow (avoid “not seeing latest”):** Before every Publish on Replit run:
  ```bash
  git fetch origin
  git reset --hard origin/main
  ```
  Then trigger **Publish**. Do not commit from Replit when also editing from Cursor. See `replit.md` for full Git/deploy notes.
- **Static deploy:** `.replit` → `deploymentTarget = "static"`, `publicDir = "public"`. Served content is `public/index.html` and `public/logos-thinkwifi/` etc.
- **Cache:** Meta tags and `.replit` response headers only *request* no-cache; Replit/woosh CDN and browsers can still cache. **Reliable no-cache when sharing:** use a unique query string, e.g. `index.html?v=20250226`, and change `?v=` when you want a fresh load.
- **Single index:** Only `public/index.html` is used. All copy and layout changes go in this one file.

---

## 2. Site structure (single-page)

- **File:** `public/index.html` — single HTML file with inline CSS and script; no separate build step for the static deploy.
- **Sections (in order):** Hero → Value Engine (three streams) → Product (ThinkZone) → Solutions (heading "Target Media Networks"; Malls, Townships, Health, DHA, Taxi Ranks) → Dashboard (heading "Transparent Reporting & Analytics Engine", two lines) → Media Kit → Brands (marquee) → Team → Compliance → Contact (three cards) → Footer.

---

## 3. Content and copy (current)

- **Hero heading:** “Intelligent Publishing, Powerful Reach, Purpose-driven Results.” Same color spread as before: gold → cyan → gradient for the three accents.
- **Hero subtitle:** (unchanged) “Bridging the gap between enterprises and the mass market…”
- **Product / ThinkZone intro (dark section under “ThinkZone”):**  
  “ThinkZone enables agencies, brands and malls to engage high-value audiences through an AI-enabled digital publishing platform built for precision, performance and scale—turning every connection into measurable growth and every engagement into tangible impact.”
- **Value Engine:** Three streams (Trust & Compliance, Yield & Monetisation, Connectivity & Insights). No “Three powerful streams converge” paragraph; main heading size increased.
- **Compliance / hero-style line:** “High Trust Ad Tech, Security is Core” in bright yellow; “Privacy by Architecture” in yellow (via `--tdx-blue` which is yellow in palette).
- **Brand Safety (media kit):** “Brand Safe = IAB and Google, Popia and GDPR compliant.”
- **Brands section:** Heading “Brands who have used our platform”. Logo marquee with images from `public/logos-thinkwifi/` (sourced from ThinkWiFi); grayscale by default, colour on hover; `mix-blend-mode: multiply` to reduce white boxes. Many source assets have white/light backgrounds; client to provide transparent (PNG alpha or SVG) logos for a clean look on dark background.
- **Team section:** Intro line: "Meet the team." One group-photo placeholder above three role blocks. Placeholder: “Group photo coming soon” + users icon; replace with real image when client provides (e.g. `public/team-group.jpg` or URL). Three blocks (no per-card photos): **Platform Operations** (Technical Infrastructure; “Leading deployment and optimisation…”), **Commercial** (Performance & Growth; “Driving growth and transformation through strategic partnerships”), **Compliance & Security** (Data Protection; unchanged).
- **Footer / contact:** Three columns with phone + email; “Get in touch” copy; contact email `info@tdx.media` (replacing info@thinkdigitalmedia.online). Phone numbers use `white-space: nowrap` and grid `minmax(10rem,1fr)` so they don’t wrap. Ecosystem links: “Partner with TDX”, “Advertise with TDX”.

---

## 4. Forms (Contact section)

- **Advertiser form (middle card):**  
  Full Name, Email → **Campaign type** (Direct, Programmatic, Private Market Place) → **Length of campaign** (Always on, 1–12 months) → **Geolocation** (National, Regional, Venue specific) → **Target** (Spend, Reach) → **Budget Range** (R1–R50k through R1M+) → Campaign Details → Request Quote.
- **Supply Partner** and **Do it yourself** cards unchanged in structure; “Do it yourself” CTA uses contact flow as agreed.

---

## 5. Solutions

- **Header nav dropdown:** All Solutions, Malls, Townships, Health, DHA, **Taxi Ranks**.
- **Product cards:** Titles like "Digital Signage (New)" and "eWallet & Digital Vouchering (New)" — "(New)" is in regular weight (not bold), via `<span style="font-weight:normal">(New)</span>` inside the `<h3>`.
- **Footer Solutions list:** Same; includes Taxi Ranks after DHA.
- **Solutions grid:** Cards for Malls, Townships, Health, DHA, **Taxi Ranks** (id=`taxi-ranks`). “Learn more” links aligned on one horizontal line (flex + `margin-top: auto` on `.solution-card > a:last-of-type`). DHA and Taxi Ranks use yellow (building/map-pin icons).

---

## 6. Design system (palette)

- **Swapped palette (client ask):** Brown/ochre → Purple; bright blue/cyan → Turquoise; dark blue (navy) → Yellow.
- **Variables:** `--tdx-cyan` (#40E0D0), `--tdx-gold` (#B026D4), `--tdx-blue` / `--tdx-yellow` (#FFD700). Use these (and avoid hardcoded old hex) so future changes stay consistent.
- **Hero / accents:** Gold, cyan, gradient (cyan→yellow) for the three hero accents and similar highlights.

---

## 7. Assets and scripts

- **Logos (brands marquee):** `public/logos-thinkwifi/` — downloaded from ThinkWiFi “Brands who’ve used our platform”; used in marquee with grayscale + colour on hover. Pending: transparent versions from client.
- **Team group photo:** Placeholder in place; replace with `team-group.jpg` in `public/` or URL when provided.
- **fetch-thinkwifi-logos.js:** One-off script to pull logos from ThinkWiFi; not required for normal run/deploy.
- **docs/feedback-slide-map.md:** Maps client feedback (e.g. from PowerPoint comments) to sections/elements in `public/index.html` for consistent interpretation.

---

## 8. Pending / client

- Transparent logo assets for brands section (replace current files in `public/logos-thinkwifi/` or update paths).
- Team group photo to replace “Group photo coming soon” placeholder.
- Any further copy or structure changes from client feedback (use feedback-slide-map and PROJECT-LTM for context).

---

## 9. Key files

| What | Where |
|------|--------|
| Single-page site | `public/index.html` |
| Static server (Run) | `server.js` (serves `public/`) |
| Replit config + deploy headers | `.replit` |
| Git/deploy workflow | `replit.md` |
| Feedback → HTML mapping | `docs/feedback-slide-map.md` |
| This LTM | `docs/PROJECT-LTM.md` |

---

*Use this LTM at session start or when switching to TDX so decisions and current state are clear without re-reading the whole codebase.*
