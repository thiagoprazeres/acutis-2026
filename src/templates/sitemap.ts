import { site } from '../config.ts'
import { locales } from '../content/locales.ts'
import { escapeHtml } from '../utils/html.ts'

// Build an absolute URL for a given path suffix (no leading slash, trailing slash expected).
function absolute(pathSuffix: string): string {
  const base = site.basePath.endsWith('/') ? site.basePath : `${site.basePath}/`
  return `${site.canonicalOrigin}${base}${pathSuffix}`
}

// Emit a single <url> entry with a full xhtml:link alternates block, matching the
// hreflang set advertised in each page's <head>.
function renderUrlEntry(pathSuffix: string, lastmod: string): string {
  const alternates = locales
    .map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${escapeHtml(l.htmlLang)}" href="${escapeHtml(absolute(`${l.code}/`))}" />`,
    )
    .join('\n')
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeHtml(absolute(''))}" />`

  return `  <url>
    <loc>${escapeHtml(absolute(pathSuffix))}</loc>
    <lastmod>${escapeHtml(lastmod)}</lastmod>
${alternates}
${xDefault}
  </url>`
}

export function renderSitemap(lastmod: string): string {
  const entries = [
    renderUrlEntry('', lastmod),
    ...locales.map((l) => renderUrlEntry(`${l.code}/`, lastmod)),
  ].join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`
}
