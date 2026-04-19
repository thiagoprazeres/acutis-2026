import type { HomeContent } from './types.ts'

// The root page is an editorial portal, not a scaffold.
// It states the piece, frames the method, and lets the reader choose a language.
export const home: HomeContent = {
  htmlLang: 'en',
  meta: {
    title: 'Acutis, 2026 — a multilingual editorial piece',
    description:
      'A sober editorial reading of Carlo Acutis as programmer, web designer and digital mediator of the sacred. Available in English, Portuguese, Italian, Spanish and French.',
  },
  masthead: {
    eyebrow: 'An editorial piece · 2026',
    title: 'Carlo Acutis',
    tagline: 'Programmer. Web designer. Digital mediator of the sacred.',
  },
  manifesto: [
    'This site is a single piece in five languages. It does not set out to prove that Carlo Acutis was a saint, and it does not set out to prove that he was not. It begins a step before: it asks what kind of object his online work actually is.',
    'The object in question is a small exhibition of Eucharistic miracles — a set of printable panels, a multilingual website, a quiet network of parishes and devotional associations. Read as devotion, it is a cult. Read as code, it is a communication architecture.',
    'The piece reads the second register. It treats the exhibition as a deliberate design — content, interface, distribution, legitimation, ritual — and places it in conversation with digital religion studies, information architecture, mediation theory and the critique of platform capitalism.',
    'The text is short by design, but the research layer behind it is not a scaffold: primary documentary anchors are kept explicit, and the secondary literature is grouped by register. Each language below opens the same argument under the same five headings: problem, hypothesis, state of the art, external record, references.',
  ],
  selector: {
    heading: 'Read in',
    hint: 'The five versions are the same piece, told in each language’s own voice. Paragraphs may differ; the structure does not.',
  },
  method: {
    heading: 'A note on method',
    paragraphs: [
      'The site is static, multilingual and small by design. No router. No client-side translation layer. No CMS. Each language lives as its own page; switching languages is a link, not a runtime event.',
      'Sources are cited in place. External assets are referenced, never rehosted. The bibliography separates the primary documentary record (the artefact itself, Christus Vivit, the canonization, the first ethnographic reading) from the secondary literature, and the secondary literature is grouped by register: digital religion studies, communication architecture and mediation, and the older critique of religion as cultural work.',
    ],
  },
  colophon: {
    note: 'This release is v0.8.0 — Research edition. The v0.4.0 architecture still holds; the bibliography is now grouped by register, and the split between primary documentary anchors and secondary literature is explicit.',
    license: 'Text: CC BY 4.0 · Code: MIT.',
  },
}
