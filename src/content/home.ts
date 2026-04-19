import type { HomeContent } from './types.ts'

// The root page is an editorial portal, not a scaffold.
// It states the piece, frames the method, and lets the reader choose a language.
export const home: HomeContent = {
  htmlLang: 'en',
  meta: {
    title: 'Acutis, 2026 — a multilingual editorial piece',
    description:
      'A sober editorial reading of Carlo Acutis as programmer and web designer, and as a digital mediator of the sacred. Available in English, Portuguese, Italian, Spanish and French.',
  },
  masthead: {
    eyebrow: 'An editorial piece · 2026',
    title: 'Carlo Acutis',
    tagline: 'Programmer and web designer. Digital mediator of the sacred.',
  },
  manifesto: [
    'Carlo Acutis was more than a devout teenager with technical talent. He was a programmer and webdesigner who understood that faith also needs structure, language, and circulation. By cataloging Eucharistic miracles approved by the Church and turning them into exhibition, site, and public journey, he gave digital form to what had long remained scattered across archives, local memory, and devotion. In 2026, that mission is still alive. What began as catalog became exhibition, then site, and now continues in mobile form. Carlo matters now because he showed how technology can organize trust, not just information.',
    'The v2.1 edition follows that arc from Carlo’s beginning through the cataloging of Eucharistic miracles and toward the February 2026 mobile continuation of that digital itinerary. The story passes through systems integration, Peircean semiosis and Carlo as the meeting point between archive, interface and sacrament.',
    'The research layer behind the piece keeps primary documentary anchors explicit, remote media external, and the secondary literature grouped by register. Each language opens the same argument under the same structure, with a storytelling section and a remote-asset register added for v2.',
  ],
  selector: {
    heading: 'Read in',
    hint: 'The five versions are the same piece, told in each language’s own voice. Paragraphs may differ; the structure does not.',
  },
  method: {
    heading: 'A note on method',
    paragraphs: [
      'The site stays static, multilingual and small by design. Each language lives as its own page, and switching languages is a direct link.',
      'Sources are cited in place. External assets are referenced, never rehosted. The bibliography separates the primary documentary record (the artefact itself, Christus Vivit, the canonization, the first ethnographic reading) from the secondary literature, and the secondary literature is grouped by register: digital religion studies, communication architecture and mediation, and the older critique of religion as cultural work.',
    ],
  },
  colophon: {
    note: 'This release is v2.1.0 — 2026 continuity anchor. The storytelling layer now lands in the February 2026 mobile continuation of Carlo’s Eucharistic-miracles work.',
    license: 'Text: CC BY 4.0 · Code: MIT.',
  },
}
