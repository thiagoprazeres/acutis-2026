import type { LocaleContent } from './types.ts'
import { en } from './en.ts'
import { pt } from './pt.ts'
import { it } from './it.ts'
import { es } from './es.ts'
import { fr } from './fr.ts'

// Ordered locale registry. Order is used as-is for the language selector
// and the hreflang list. Keep it small and deliberate.
export const locales: readonly LocaleContent[] = [en, pt, it, es, fr]

export const localeByCode: Readonly<Record<string, LocaleContent>> =
  Object.fromEntries(locales.map((l) => [l.code, l]))
