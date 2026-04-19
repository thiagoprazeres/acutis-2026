// Content types shared across locale files and templates.
// These types are intentionally flat. No CMS layer, no runtime indirection.

export interface Reference {
  readonly author: string
  readonly year: string
  readonly title: string
  readonly publisher?: string
  readonly note?: string
}

export interface EditorialSection {
  readonly eyebrow: string
  readonly title: string
  readonly paragraphs: readonly string[]
}

// Secondary literature is organised in thematic groups so the bibliography
// reads as a research layer rather than a flat list. Primary documentary
// anchors live in `externalRecord`; scholarly literature lives here.
export interface ReferenceGroup {
  readonly heading: string
  readonly description?: string
  readonly items: readonly Reference[]
}

export interface ReferencesSection {
  readonly eyebrow: string
  readonly title: string
  readonly intro?: string
  readonly groups: readonly ReferenceGroup[]
}

// External references are plain hyperlinks, never embedded, never rehosted.
// See MEDIA.md at the repo root for the full policy.
export type ExternalReferenceKind =
  | 'archive'
  | 'document'
  | 'press'
  | 'scholarship'
  | 'site'

export interface ExternalReference {
  readonly kind: ExternalReferenceKind
  readonly institution: string
  readonly title: string
  readonly url: string
  readonly date?: string
  readonly accessed: string
  readonly note: string
}

export interface ExternalRecordSection {
  readonly eyebrow: string
  readonly title: string
  readonly intro: string
  readonly accessedLabel: string
  readonly policyLabel: string
  readonly policyUrl: string
  readonly kindLabels: Readonly<Record<ExternalReferenceKind, string>>
  readonly items: readonly ExternalReference[]
}

export interface LocaleContent {
  readonly code: string
  readonly label: string
  readonly htmlLang: string
  readonly dir: 'ltr' | 'rtl'
  readonly meta: {
    readonly title: string
    readonly description: string
  }
  readonly masthead: {
    readonly eyebrow: string
    readonly title: string
    readonly subtitle: string
    readonly lead: string
    readonly byline: string
  }
  readonly sections: {
    readonly problem: EditorialSection
    readonly hypothesis: EditorialSection
    readonly stateOfTheArt: EditorialSection
    readonly externalRecord: ExternalRecordSection
    readonly references: ReferencesSection
  }
  readonly nav: {
    readonly skipToContent: string
    readonly otherLanguages: string
    readonly backToIndex: string
    readonly onThisPage: string
    readonly sectionLabels: {
      readonly problem: string
      readonly hypothesis: string
      readonly stateOfTheArt: string
      readonly externalRecord: string
      readonly references: string
    }
  }
  readonly colophon: {
    readonly note: string
    readonly license: string
  }
}

export interface HomeContent {
  readonly htmlLang: string
  readonly meta: {
    readonly title: string
    readonly description: string
  }
  readonly masthead: {
    readonly eyebrow: string
    readonly title: string
    readonly tagline: string
  }
  readonly manifesto: readonly string[]
  readonly selector: {
    readonly heading: string
    readonly hint: string
  }
  readonly method: {
    readonly heading: string
    readonly paragraphs: readonly string[]
  }
  readonly colophon: {
    readonly note: string
    readonly license: string
  }
}
