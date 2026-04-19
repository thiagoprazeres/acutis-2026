# Media policy

This project is an editorial piece, not a gallery. It is released in numbered editorial stages, and every stage must respect the rules below before it is tagged.

## Absolute rule

**Any media asset found on the internet is an external reference only.**

We do not:

- download third-party media into the repository
- commit third-party media into `src/` or `public/`
- rehost third-party images, audio, video, or documents
- cache third-party media locally, even temporarily
- transform third-party media into local assets of this repository
- embed third-party media in a way that makes the repository act as a silent mirror

We do, in order of preference:

1. **Plain hyperlink** to the source host, with institution and date of access.
2. **Textual citation** of a passage, with institution, date and URL.
3. **Contextual embed**, only when the host explicitly invites embedding and ownership is unambiguous; even then, never with autoplay and never as decoration.

If ownership or license is unclear, we use a plain hyperlink. Not an embed.

## What counts as local and what does not

**Allowed locally (no restriction):**

- text written for this project
- code written for this project
- typography served from the user's system (system font stacks only — no remote font loads)
- project-owned design tokens, CSS, and build scripts

**Not allowed locally:**

- third-party photographs, illustrations, screenshots, or scanned documents
- third-party logos, seals, crests, or institutional emblems
- third-party video or audio in any container or codec
- third-party PDFs, even open-access ones — link to the host instead
- any file whose provenance or license we cannot state in one line

## Provenance format

Every external reference visible on the site must carry, at minimum:

- **Institution** — the publisher or host (e.g. *Holy See*, *Vatican News*, *West Chester University*).
- **Title** — the title of the work or page as it appears on the source.
- **URL** — the canonical URL on the institutional host.
- **Date** — the publication or event date, when applicable.
- **Accessed** — the ISO date the reference was curated.

Shared provenance lives in `src/content/externalAnchors.ts`; translated notes live in each `src/content/<locale>.ts` file under the `externalRecord` section. A reference without a clear institution does not ship.

## Fallback behavior

External references are rendered as HTML `<a href>`. The site ships no embed iframes at this release. If a future release ever introduces an embed:

- The embed **must** have a visible caption with the same provenance as the link.
- The embed **must** be wrapped so that, when the host fails or refuses the request, the plain caption and the hyperlink remain readable on the page.
- The embed **must not** auto-play, auto-scroll, or otherwise move without user action.
- If any of the above cannot be guaranteed, downgrade to a plain hyperlink.

## Link vs embed — decision rule

Use a plain hyperlink when:

- the reference is a document, article, or landing page (almost always)
- ownership or license of a media asset is unclear
- the source host does not invite embedding
- the editorial purpose is pointing, not showing

Use a contextual embed when, and only when:

- the host invites embedding explicitly (e.g. an official embed code)
- ownership is unambiguous and attribution is preserved
- the embed meaningfully improves the reading of a specific paragraph
- a plain link would be materially weaker for the argument

When in doubt, link.

## Non-goals

This policy is **not** a media CMS. It is **not** an asset pipeline. It is **not** a cache. There is no `assets/media/` directory in this repository, and there is no plan to add one. External references enrich the reading precisely by staying external.

## Review

Every release that touches external references must, before tagging:

- run `npm run check` and `npm run build`
- confirm that `dist/` contains no third-party media binaries
- confirm that all new external references declare institution, title, URL and access date
- confirm that no new top-level directory hosts third-party media

Releases that introduce new references are expected to verify that each URL resolves at the time of curation. Link rot afterwards is expected; the discipline is honesty about the `accessed` date, not guaranteed permanence of hosts we do not control.
