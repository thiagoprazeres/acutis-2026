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

export interface ReferencesSection {
  readonly eyebrow: string
  readonly title: string
  readonly intro?: string
  readonly items: readonly Reference[]
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
