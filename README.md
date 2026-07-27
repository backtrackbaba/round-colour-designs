# Round Colour Designs — Astro website

A static, SEO/AEO-focused portfolio and lead-generation website built with Astro 5 and Tailwind CSS 4.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
The generated site is written to `dist/`. Netlify uses the root `netlify.toml`.

## Architecture
- `src/components`: reusable interface and SEO components
- `src/content`: typed project, service, FAQ, testimonial and journal collections
- `src/pages`: static pages and generated project case-study routes
- `src/styles/tokens.css`: brand and typography tokens
- `src/styles/global.css`: semantic component and layout styles
- `docs/IMPLEMENTATION-TRACKER.md`: delivery status and remaining launch work

## Typography review
The visible front-end switcher offers Editorial, Boutique and Modern Studio font pairings. It is intentionally enabled for internal review.

## Content warning
Stock founder images, project visuals, project facts and testimonials are temporary placeholders. Replace and verify them before publishing the site publicly.
