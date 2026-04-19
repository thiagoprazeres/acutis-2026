import { site } from '../config.ts'
import { escapeAttr, escapeHtml } from '../utils/html.ts'
import type { LocaleContent } from '../content/types.ts'

interface DocumentShellInput {
  readonly htmlLang: string
  readonly dir: 'ltr' | 'rtl'
  readonly title: string
  readonly description: string
  // Path relative to basePath, with trailing slash. Examples: '' for root, 'en/' for locale.
  readonly pathSuffix: string
  // The inner body markup (without <body> tags).
  readonly body: string
  // Other locales used to emit hreflang alternates. Home uses all locales; pages use all too.
  readonly alternates: readonly LocaleContent[]
}

function absolute(pathSuffix: string): string {
  const base = site.basePath.endsWith('/') ? site.basePath : `${site.basePath}/`
  return `${site.canonicalOrigin}${base}${pathSuffix}`
}

function baseRelative(pathSuffix: string): string {
  const base = site.basePath.endsWith('/') ? site.basePath : `${site.basePath}/`
  return `${base}${pathSuffix}`
}

export function documentShell(input: DocumentShellInput): string {
  const canonical = absolute(input.pathSuffix)
  const cssHref = baseRelative('assets/app.css')

  const hreflangLinks = input.alternates
    .map(
      (l) =>
        `<link rel="alternate" hreflang="${escapeAttr(l.htmlLang)}" href="${escapeAttr(absolute(`${l.code}/`))}" />`,
    )
    .join('\n    ')

  const xDefault = `<link rel="alternate" hreflang="x-default" href="${escapeAttr(absolute(''))}" />`

  return `<!doctype html>
<html lang="${escapeAttr(input.htmlLang)}" dir="${input.dir}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(input.title)}</title>
    <meta name="description" content="${escapeAttr(input.description)}" />
    <meta name="author" content="${escapeAttr(site.author)}" />
    <meta name="color-scheme" content="light dark" />
    <meta name="generator" content="acutis-2026 · v${site.year} · static" />
    <link rel="canonical" href="${escapeAttr(canonical)}" />
    ${hreflangLinks}
    ${xDefault}
    <meta property="og:site_name" content="${escapeAttr(site.name)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeAttr(input.title)}" />
    <meta property="og:description" content="${escapeAttr(input.description)}" />
    <meta property="og:url" content="${escapeAttr(canonical)}" />
    <meta name="twitter:card" content="summary" />
    <link rel="stylesheet" href="${escapeAttr(cssHref)}" />
  </head>
  <body class="min-h-screen bg-paper text-ink antialiased selection:bg-ink selection:text-paper">
${input.body}
  </body>
</html>
`
}

export { baseRelative, absolute }
