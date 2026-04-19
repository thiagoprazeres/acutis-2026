import { documentShell, baseRelative } from './layout.ts'
import { escapeAttr, escapeHtml } from '../utils/html.ts'
import { home } from '../content/home.ts'
import { locales } from '../content/locales.ts'
import { site } from '../config.ts'

function renderLanguageCard(locale: (typeof locales)[number]): string {
  const href = baseRelative(`${locale.code}/`)
  return `
        <li>
          <a
            href="${escapeAttr(href)}"
            hreflang="${escapeAttr(locale.htmlLang)}"
            lang="${escapeAttr(locale.htmlLang)}"
            class="group block h-full border border-rule hover:border-ink focus-visible:border-ink transition-colors p-6 md:p-7"
          >
            <div class="flex items-baseline justify-between gap-4">
              <span class="font-serif text-2xl tracking-tight">${escapeHtml(locale.label)}</span>
              <span class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted" aria-hidden="true">${escapeHtml(locale.code)}</span>
            </div>
            <p class="mt-4 text-sm text-muted leading-relaxed">
              ${escapeHtml(locale.masthead.subtitle)}
            </p>
            <div class="mt-6 text-xs uppercase tracking-[0.18em] text-muted group-hover:text-ink transition-colors">
              <span aria-hidden="true">Read →</span>
              <span class="sr-only">Open the ${escapeHtml(locale.label)} version</span>
            </div>
          </a>
        </li>`
}

export function renderHome(): string {
  const languageCards = locales.map(renderLanguageCard).join('\n')
  const manifestoParagraphs = home.manifesto
    .map((p) => `        <p>${escapeHtml(p)}</p>`)
    .join('\n')
  const methodParagraphs = home.method.paragraphs
    .map((p) => `          <p>${escapeHtml(p)}</p>`)
    .join('\n')

  const body = `    <a href="#main" class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:text-sm">Skip to content</a>

    <header class="border-b border-rule">
      <div class="mx-auto w-full max-w-6xl px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <span class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(site.name)}</span>
        <span class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(site.release.version)} · ${escapeHtml(site.release.label)}</span>
      </div>
    </header>

    <main id="main" class="mx-auto w-full max-w-6xl px-6 md:px-10">
      <section class="pt-16 md:pt-28 pb-16 md:pb-24 border-b border-rule">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(home.masthead.eyebrow)}</p>
        <h1 class="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">${escapeHtml(home.masthead.title)}</h1>
        <p class="mt-6 font-serif text-xl md:text-2xl leading-snug text-muted max-w-3xl">${escapeHtml(home.masthead.tagline)}</p>
      </section>

      <section aria-labelledby="manifesto-heading" class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10 py-16 md:py-24 border-b border-rule">
        <div class="md:col-span-4">
          <h2 id="manifesto-heading" class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">Manifesto</h2>
        </div>
        <div class="md:col-span-8 space-y-5 font-serif text-lg md:text-xl leading-[1.6] max-w-prose">
${manifestoParagraphs}
        </div>
      </section>

      <section aria-labelledby="language-selector-heading" class="py-16 md:py-24 border-b border-rule">
        <div class="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(home.selector.heading)}</p>
            <h2 id="language-selector-heading" class="mt-3 font-serif text-3xl md:text-4xl tracking-tight">Choose a language</h2>
          </div>
          <p class="max-w-md text-sm text-muted leading-relaxed">
            ${escapeHtml(home.selector.hint)}
          </p>
        </div>

        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-rule border border-rule">
${languageCards}
        </ul>
      </section>

      <section aria-labelledby="method-heading" class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10 py-16 md:py-24 border-b border-rule">
        <div class="md:col-span-4">
          <h2 id="method-heading" class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(home.method.heading)}</h2>
        </div>
        <div class="md:col-span-8 space-y-5 font-serif text-base md:text-lg leading-[1.7] text-muted max-w-prose">
${methodParagraphs}
        </div>
      </section>
    </main>

    <footer class="mx-auto w-full max-w-6xl px-6 md:px-10 py-10 md:py-14">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted max-w-md">${escapeHtml(home.colophon.note)}</p>
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(home.colophon.license)}</p>
      </div>
    </footer>`

  return documentShell({
    htmlLang: home.htmlLang,
    dir: 'ltr',
    title: home.meta.title,
    description: home.meta.description,
    pathSuffix: '',
    body,
    alternates: locales,
  })
}
