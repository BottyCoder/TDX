# TDX feedback deck → page map

Client feedback is given in a slide deck (e.g. PowerPoint/Google Slides). Comments don’t include slide numbers or element names. This file maps **deck slide number** → **section and elements in `public/index.html`** so we can apply feedback without changing the client’s process.

**Source of truth:** `public/index.html` (single live page).

---

## Slide → section

| Deck slide | Section on site | Location in index.html |
|------------|-----------------|-------------------------|
| 1 | Hero + global nav | `<header>`, `.video-hero`, hero content, `.video-label`, `.privacy-badge` |
| 2 | Value Engine | `#value` — eyebrow, heading, three value cards |
| 3 | Solutions | `#solutions` — eyebrow, heading, subtext, four solution cards (Malls, Townships, Health, DHA) |
| 4 | Dashboard | `#dashboard` — intro text, dashboard frame, gradient line |
| 5 | Media kit + stats | `#media-kit` — copy, download CTA, four stat boxes (Monthly Reach, Active Nodes, Brand Safety, Avg. ROAS) |
| 6 | Trusted brands | `#trusted` — `.trusted-logos`, brand items |
| 7 | Team | `#team` — heading, three team cards |
| 8 | Contact (two forms) | `#contact` — Supply Partner form, Advertiser form (incl. Budget Range dropdown) |
| 9 | Compliance / testimonial | `#compliance` — image, copy, blockquote (Marnus Kruger) |
| 10 | Footer + platform status | `.footer` — logo, links, status line, UP TIME |

---

## Slide 2 (Value Engine) – element map

When the client says “Remove” or “Swap this blue” on the **Value** slide, use this:

| Comment type / position | Element in index.html | What to do |
|-------------------------|------------------------|------------|
| **Remove** (top of section, small label) | `<p class="mono">The Value Engine</p>` inside `#value` (line ~401) | Remove this eyebrow label entirely. |
| **Remove** (intro paragraph) | *(already removed)* Was the paragraph under the heading. | — |
| **Swap this blue for bright yellow** (top-right of hero) | `.video-label` — text “Infrastructure Becoming Digital” (hero, line ~376). Class `.video-label` in `<style>` (line ~211): set `color: var(--tdx-yellow);` | Make the video label bright yellow. |

---

## Slide 8 (Contact) – element map

| Comment type | Element in index.html | What to do |
|--------------|------------------------|------------|
| Budget range “1–R50k, R50k–R100k, etc.” | Advertiser form `<select>` Budget Range (lines ~778–782) | First option should be “R1 – R50k” (or “1–R50k”), then R50k–R100k, etc. |
| “3rd option: Do it yourself” | Contact section has two cards (Supply, Advertiser). No third card. | Add a third contact option/card with placeholder copy until Janine/Marnus provide it. |

---

## How to use this

1. When you get a new feedback deck or export of comments, note which **slide number** each comment is on (e.g. from the deck or from comment file name: comment1.xml = slide 1, comment2.xml = slide 2, etc.).
2. Look up that slide in **Slide → section** to get the section (`#value`, `#contact`, etc.).
3. If the comment is vague (“Remove”, “this blue”), use the **element map** for that slide (if present) to find the exact element.
4. For “get content from @person”: still implement **structure and placeholders** in index.html; replace with real copy when the client provides it.

---

*Last updated from `public/index.html` structure. If the page layout changes, update this map.*
