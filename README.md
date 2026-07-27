# Round Colour Designs
Astro + Tailwind website foundation with reusable design tokens and a temporary public typography switcher.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Project progress is tracked in `docs/IMPLEMENTATION-TRACKER.md`.

## Deploy to Netlify

The repository includes a root-level `netlify.toml` configured for this static Astro site.

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: 22

To deploy from Git, import the repository into Netlify and leave the detected settings unchanged. Netlify will read `netlify.toml` automatically.

For a manual deploy, build locally first and upload the generated `dist/` directory:

```bash
npm install
npm run build
```

The canonical production URL remains configured as `https://www.roundcolourdesigns.com` in `astro.config.mjs`, even while previewing through a temporary `netlify.app` URL.
