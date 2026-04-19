# Acutis, 2026

A sober multilingual editorial piece about Carlo Acutis — programmer, web designer, digital mediator of the sacred — read in a 2026 key.

This is not a startup landing page. It is not a devotional scrapbook. It is not a marketing microsite. It reads Acutis's online work as a small communication architecture, and publishes that reading as a primary editorial object in five languages. The v2 edition adds an original storytelling layer from Carlo's beginning to the 2026 continuation of the Eucharistic-miracles project.

## Stack

- TypeScript (ESM)
- Tailwind CSS v4
- Static generation via a small TS build script
- GitHub Pages (served from `dist/`)
- GitHub Actions (deploy workflow)

No framework. No router. No CMS. No client-side hydration. No runtime translation layer.

## Structure

```
src/
  config.ts              # site-level metadata (base path, canonical)
  content/
    types.ts             # content types
    locales.ts           # ordered locale registry
    home.ts              # root page content (manifesto, method)
    en.ts / pt.ts / ...  # per-locale editorial content
  templates/
    layout.ts            # document shell, meta, hreflang
    home.ts              # root editorial language selector
    page.ts              # locale page (story, argument, external records, references)
  styles/
    app.css              # Tailwind v4 entry + design tokens
  utils/
    html.ts              # minimal HTML escaping
scripts/
  build.ts               # static build (HTML + CSS)
  serve.mjs              # tiny preview server, no deps
public/
  .nojekyll              # ensures GitHub Pages serves files as-is
```

## Develop

```sh
npm install
npm run build       # writes dist/
npm run preview     # serves dist/ on http://localhost:5173
npm run check       # tsc --noEmit
```

To build with a custom base path:

```sh
BASE_PATH=/ CANONICAL_ORIGIN=https://example.org npm run build
```

## Releases

The site is released in numbered editorial stages. Current release: **v2.1.0 — 2026 continuity anchor**. This release keeps the v2 storytelling layer intact and sharpens its present-day landing point: the February 2026 mobile continuation of Carlo Acutis's Eucharistic-miracles work, read as continuity from catalog to exhibition to site to app.

The v2 boundary is editorial, not infrastructural. It adds narrative and a stricter remote-asset register without changing the stack, adding dependencies, rehosting third-party media, or turning the project into a dynamic application.

## Media policy

All third-party media are referenced externally; nothing is rehosted. See [`MEDIA.md`](./MEDIA.md) for the rules, the provenance format, and the link-vs-embed decision.

## License

- Text content: CC BY 4.0
- Code: MIT
