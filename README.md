# GCE (H.K.) Ltd — Homepage Redesign Concept

A bilingual (English / 繁體中文) single-page redesign concept for
[gce.com.hk](https://www.gce.com.hk), built around a "Corten & Ink" design
system: an Ocean Navy colour ladder drawn from deep-water marine engineering,
a corten-rust accent taken from the GCE logo, and warm-paper surfaces.

**Live site:** https://beckytsang.github.io/gce/ (served from the `gh-pages`
branch — see *Deployment* below)

## Stack

- React 18 + TypeScript + Vite 7
- Tailwind CSS 3.4 with shadcn/ui components
- Archivo (Latin) + Noto Sans TC via Google Fonts, `display=swap`
- No backend — fully static

## Design system highlights

- **Colour:** ink-950 `#16283F`, ink-900 `#21476B`, ink-800 `#2A5478`,
  ink-700 `#37648E`; rust-600 `#984016`, rust-500 `#B2501F`, on-dark accent
  rust-400 `#EEA668` (4.7:1 AA); paper `#F6F4EF`. White on ink-900 is 9.6:1
  (WCAG AAA).
- **Motion:** IntersectionObserver reveals, line-mask headline rises,
  marquee ticker, count-up stats — all gated behind
  `prefers-reduced-motion`.
- **i18n:** full EN + TC copy in `src/i18n.tsx`; `<html lang>` toggles
  `en` / `zh-HK`; no italicised Chinese.
- **Icons:** custom 24px-grid stroke icon set in
  `src/components/icons.tsx`.

## Sections

Hero (50th anniversary) → client ticker → Who We Are → Services (7
categories, icon-led ledger) → Featured Projects → Why GCE (stats, timeline,
differentiators) → Latest Projects (snap strip) → Accreditation (certifications
+ client logo grid) → CTA / Footer.

## Develop

```bash
npm install
bash scripts/fetch-images.sh        # one-off: pull photo assets (see below)
python3 scripts/enhance-images.py   # optional: apply the photo grade
npm run dev
```

## Photo & logo assets

Binary assets are **not stored in git**. `scripts/fetch-images.sh` downloads
the 30 photographs/logos from the live gce.com.hk site (the redesign reuses
GCE's own photography), and `scripts/enhance-images.py` applies the subtle
contrast/colour grade and normalises the logo set. Both run automatically in
CI.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`: fetch assets →
grade → `npm run build -- --base=./` → publish `dist/` to the `gh-pages`
branch.

One-time GitHub setup (repo **Settings**):

1. *General → Danger Zone → Change visibility* → **Public** (GitHub Pages
   on free plans requires a public repo).
2. *Pages → Build and deployment → Source*: **Deploy from a branch**, branch
   **gh-pages**, folder **/(root)** → Save.

The site then serves at `https://beckytsang.github.io/gce/`.

---

Redesign concept. All photography, logos, accreditation references and company
facts belong to Geotechnics and Concrete Engineering (H.K.) Ltd and were taken
from the public gce.com.hk website.
