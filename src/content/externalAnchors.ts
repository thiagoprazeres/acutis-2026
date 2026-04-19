import type { ExternalReferenceKind } from './types.ts'

// Language-agnostic provenance for every external reference shown on the site.
// Institution, title, URL, date and accessed date are the same across locales.
// Only the editorial `note` is translated per locale.
//
// All URLs were verified at curation time. See MEDIA.md for the external-asset
// policy that governs why these stay as plain links rather than embeds.

interface ExternalAnchor {
  readonly kind: ExternalReferenceKind
  readonly institution: string
  readonly title: string
  readonly url: string
  readonly date?: string
  readonly accessed: string
}

const ACCESSED = '2026-04-19'

export const externalAnchors = {
  biography: {
    kind: 'site',
    institution: 'Associazione Amici di Carlo Acutis',
    title: 'Who is Carlo Acutis?',
    url: 'https://www.carloacutis.com/en/association/chiecarloacutis',
    accessed: ACCESSED,
  },
  timeline: {
    kind: 'site',
    institution: 'Associazione Amici di Carlo Acutis',
    title: "Carlo's timeline",
    url: 'https://www.carloacutis.com/en/association/la-linea-del-tempo-di-carlo',
    accessed: ACCESSED,
  },
  exhibitionAssociation: {
    kind: 'site',
    institution: 'Associazione Amici di Carlo Acutis',
    title: 'Eucharistic Miracles Exhibition',
    url: 'https://www.carloacutis.com/en/association/mostra-miracoli-eucaristici',
    accessed: ACCESSED,
  },
  exhibition: {
    kind: 'archive',
    institution: 'Associazione Amici di Carlo Acutis',
    title: 'Mostra dei Miracoli Eucaristici del mondo',
    url: 'https://www.miracolieucaristici.org/',
    date: '2006–',
    accessed: ACCESSED,
  },
  christusVivit: {
    kind: 'document',
    institution: 'Holy See',
    title: 'Christus Vivit (§104–106)',
    url: 'https://www.vatican.va/content/francesco/en/apost_exhortations/documents/papa-francesco_esortazione-ap_20190325_christus-vivit.html',
    date: '2019-03-25',
    accessed: ACCESSED,
  },
  canonization: {
    kind: 'press',
    institution: 'Vatican News',
    title: 'Carlo Acutis and Pier Giorgio Frassati to be canonized together',
    url: 'https://www.vaticannews.va/en/pope/news/2025-06/carlo-acutis-and-pier-giorgio-frassati-to-be-canonized-together.html',
    date: '2025-06',
    accessed: ACCESSED,
  },
  vaticanApp: {
    kind: 'press',
    institution: 'Vatican News',
    title: 'New mobile app dedicated to Eucharistic miracles and St. Carlo Acutis',
    url: 'https://www.vaticannews.va/en/church/news/2026-02/st-carlo-acutis-eucharistic-miracles-new-mobile-app.html',
    date: '2026-02-18',
    accessed: ACCESSED,
  },
  digiovine: {
    kind: 'scholarship',
    institution: 'West Chester University',
    title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
    url: 'https://www.wcupa.edu/sciences-mathematics/anthropologySociology/museum/m-digiovine/research-carlo-acutis.aspx',
    date: '2023',
    accessed: ACCESSED,
  },
  commons: {
    kind: 'asset',
    institution: 'Wikimedia Commons',
    title: 'Category: Carlo Acutis',
    url: 'https://commons.wikimedia.org/wiki/Category:Carlo_Acutis',
    accessed: ACCESSED,
  },
  hohpeMessageBus: {
    kind: 'theory',
    institution: 'Enterprise Integration Patterns',
    title: 'Message Bus',
    url: 'https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBus.html',
    accessed: ACCESSED,
  },
  hohpeMessageTranslator: {
    kind: 'theory',
    institution: 'Enterprise Integration Patterns',
    title: 'Message Translator',
    url: 'https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageTranslator.html',
    accessed: ACCESSED,
  },
  peirceSigns: {
    kind: 'theory',
    institution: 'Stanford Encyclopedia of Philosophy',
    title: "Peirce's Theory of Signs",
    url: 'https://plato.stanford.edu/archives/spr2024/entries/peirce-semiotics/',
    accessed: ACCESSED,
  },
} as const satisfies Record<string, ExternalAnchor>

export const POLICY_URL =
  'https://github.com/thiagoprazeres/acutis-2026/blob/main/MEDIA.md'
