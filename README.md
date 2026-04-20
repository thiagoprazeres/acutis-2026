# Acutis, 2026

This repository publishes a static multilingual editorial project about Carlo Acutis as programmer, webdesigner, and digital mediator of sacred memory.

The site reads Carlo's work on the Eucharistic miracles catalog as an architecture of public trust: catalog -> exhibition -> site -> mobile app. The 2026 mobile continuation matters here because it shows that Carlo's original digital mission remains active, not because the app replaces him as the subject.

Carlo stays at the center. Gregor Hohpe helps explain integration and architecture. Charles Sanders Peirce helps explain sign and interpretation. Luciano Floridi enters as the future v3 horizon for information ethics, semantic capital, provenance, and the care of the infosphere.

## What This Is

This is an editorial codebase, not a product shell.

It contains:

- a static site generated from TypeScript content files
- five localized long-form pages
- a concise homepage opening
- a source and external media policy
- future-work documents for a possible v3 research direction

The current public layer is v2.1: the definitive storytelling version with the 2026 continuity anchor.

The future research layer is v3: an architecture of trust grounded in Carlo Acutis and clarified through Luciano Floridi.

## Repository Map

```text
src/
  config.ts              site-level metadata
  content/
    home.ts              homepage manifesto and language selector copy
    en.ts                English editorial content
    pt.ts                Portuguese editorial content
    es.ts                Spanish editorial content
    fr.ts                French editorial content
    it.ts                Italian editorial content
    externalAnchors.ts   shared external source register
    locales.ts           locale registry
    types.ts             content schema
  templates/
    layout.ts            HTML shell, metadata, hreflang
    home.ts              root page renderer
    page.ts              locale page renderer
  styles/
    app.css              Tailwind entry and design tokens
  utils/
    html.ts              escaping helpers

scripts/
  build.ts               static site build
  serve.mjs              local preview server

public/
  .nojekyll              GitHub Pages compatibility

dist/                    generated site output
inputs/                  source editorial prompts and drafts
```

Root documents:

- [`MEDIA.md`](./MEDIA.md) defines the external media and provenance policy.
- [`FutureWork-definitive.md`](./FutureWork-definitive.md) frames v3 as a future inheritance question.
- [`Architecture-of-Trust.md`](./Architecture-of-Trust.md) develops the v3 research dossier.
- [`ReleasePlan-v3.md`](./ReleasePlan-v3.md) defines the v3 milestone, tag policy, gates, and open issues.

## Editorial Spine

The project follows a strict hierarchy:

1. Carlo Acutis remains the subject.
2. Carlo is treated as programmer and webdesigner, not as one or the other.
3. Hohpe and Peirce amplify Carlo's work; they do not replace him.
4. The 2026 app reinforces continuity of mission: catalog -> exhibition -> site -> mobile app.
5. Floridi belongs to future work as an ethical and philosophical horizon.
6. Technical provenance standards are instruments, not the thesis.

The tone should remain forward-looking, constructive, synthesis-driven, and precise. The project avoids defensive language, academic-report prose, and inflated metaphors.

## Static Architecture

The site is deliberately small.

- TypeScript content modules
- static HTML generation
- Tailwind CSS v4
- no framework runtime
- no router changes
- no CMS behavior
- no client-side translation layer
- no third-party media copied into `src/` or `public/`

The content architecture is intentionally boring because the editorial work is the point.

## Development

Install dependencies:

```sh
npm install
```

Run type validation:

```sh
npm run check
```

Build the static site:

```sh
npm run build
```

Preview the generated site:

```sh
npm run preview
```

Build with a custom deployment base:

```sh
BASE_PATH=/ CANONICAL_ORIGIN=https://example.org npm run build
```

## Release Position

Current editorial release:

**v2.1.0 — 2026 continuity anchor**

This release preserves the definitive storytelling layer and anchors the work in 2026 through the Vatican News development around the mobile continuation of Carlo's Eucharistic miracles catalog.

v3 is not yet a site release. It is documented as future work in:

- [`FutureWork-definitive.md`](./FutureWork-definitive.md)
- [`Architecture-of-Trust.md`](./Architecture-of-Trust.md)
- [`ReleasePlan-v3.md`](./ReleasePlan-v3.md)

## Media And Sources

Third-party media remains external.

The repository does not download, commit, cache, or rehost third-party images, videos, documents, logos, or scans. External references are preserved as links with provenance. Shared source anchors live in `src/content/externalAnchors.ts`; localized source notes live in the locale content files.

See [`MEDIA.md`](./MEDIA.md) before adding any external reference.

## Why This Exists

This project is a record of care.

It treats Carlo Acutis's work as a serious act of digital organization: a way of making sacred memory publicly legible without reducing it to content. It also leaves a future question open for Francisco and for whoever continues the work:

How should technology serve memory, trust, faith, and human formation in the next generation?

## License

- Text content: CC BY 4.0
- Code: MIT
