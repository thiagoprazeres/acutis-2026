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
  digiovine: {
    kind: 'scholarship',
    institution: 'West Chester University',
    title: 'Carlo Acutis: Modern Sainthood and (Virtual) Pilgrimage',
    url: 'https://www.wcupa.edu/sciences-mathematics/anthropologySociology/museum/m-digiovine/research-carlo-acutis.aspx',
    date: '2023',
    accessed: ACCESSED,
  },
} as const satisfies Record<string, ExternalAnchor>

export const POLICY_URL =
  'https://github.com/thiagoprazeres/acutis-2026/blob/main/MEDIA.md'
