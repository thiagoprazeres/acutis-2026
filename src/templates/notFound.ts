import { documentShell, baseRelative } from './layout.ts'
import { escapeAttr, escapeHtml } from '../utils/html.ts'
import { locales } from '../content/locales.ts'
import { site } from '../config.ts'

// Minimal editorial 404. Same typographic shell as the rest of the site,
// noindex by construction, and a short multilingual safety net.
export function renderNotFound(): string {
  const languageList = locales
    .map(
      (l) =>
        `<li><a href="${escapeAttr(baseRelative(`${l.code}/`))}" hreflang="${escapeAttr(l.htmlLang)}" lang="${escapeAttr(l.htmlLang)}" class="hover:text-ink transition-colors underline-offset-4 hover:underline">${escapeHtml(l.label)}</a></li>`,
    )
    .join('<li aria-hidden="true" class="text-rule">·</li>')

  const body = `    <a href="#main" class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:text-sm">Skip to content</a>

    <header class="border-b border-rule">
      <div class="mx-auto w-full max-w-6xl px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <a href="${escapeAttr(baseRelative(''))}" class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted hover:text-ink transition-colors">
          <span aria-hidden="true">← </span>Back to index
        </a>
        <span class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(site.name)}</span>
      </div>
    </header>

    <main id="main" class="mx-auto w-full max-w-6xl px-6 md:px-10">
      <section aria-labelledby="not-found-heading" class="pt-24 md:pt-40 pb-24 md:pb-32 border-b border-rule">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">404</p>
        <h1 id="not-found-heading" class="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">This page is not in the piece.</h1>
        <p class="mt-8 font-serif text-xl md:text-2xl leading-snug text-muted max-w-2xl">
          The address you followed points to nothing on this site. The index lists what exists, in five languages.
        </p>
        <p class="mt-10">
          <a href="${escapeAttr(baseRelative(''))}" class="inline-block border border-ink px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] hover:bg-ink hover:text-paper transition-colors">
            Open the index
          </a>
        </p>
      </section>

      <section aria-labelledby="not-found-languages-heading" class="py-12 md:py-16">
        <h2 id="not-found-languages-heading" class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">Read in</h2>
        <ul class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-muted">${languageList}</ul>
      </section>
    </main>

    <footer class="mx-auto w-full max-w-6xl px-6 md:px-10 py-10 md:py-14">
      <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(site.name)} · ${escapeHtml(site.release.version)} · ${escapeHtml(site.release.label)}</p>
    </footer>`

  return documentShell({
    htmlLang: 'en',
    dir: 'ltr',
    title: 'Not found · Acutis, 2026',
    description: 'The requested page does not exist on this site.',
    pathSuffix: '',
    body,
    alternates: locales,
    noIndex: true,
  })
}
