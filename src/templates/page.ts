import { documentShell, baseRelative } from './layout.ts'
import { escapeAttr, escapeHtml } from '../utils/html.ts'
import { locales } from '../content/locales.ts'
import { site } from '../config.ts'
import type {
  LocaleContent,
  EditorialSection,
  ExternalReference,
  ExternalRecordSection,
  Reference,
  ReferencesSection,
} from '../content/types.ts'

function renderLanguageSwitcher(current: LocaleContent): string {
  const items = locales
    .map((l) => {
      const isCurrent = l.code === current.code
      const href = baseRelative(`${l.code}/`)
      if (isCurrent) {
        return `<li><span aria-current="page" class="text-ink font-medium">${escapeHtml(l.label)}</span></li>`
      }
      return `<li><a href="${escapeAttr(href)}" hreflang="${escapeAttr(l.htmlLang)}" lang="${escapeAttr(l.htmlLang)}" class="hover:text-ink transition-colors underline-offset-4 hover:underline">${escapeHtml(l.label)}</a></li>`
    })
    .join('<li aria-hidden="true" class="text-rule">·</li>')

  return `
      <nav aria-label="${escapeAttr(current.nav.otherLanguages)}" class="ml-auto">
        <ul class="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">${items}</ul>
      </nav>`
}

function renderTableOfContents(locale: LocaleContent): string {
  const items: Array<{ id: string; label: string }> = [
    { id: 'problem', label: locale.nav.sectionLabels.problem },
    { id: 'hypothesis', label: locale.nav.sectionLabels.hypothesis },
    { id: 'state-of-the-art', label: locale.nav.sectionLabels.stateOfTheArt },
    { id: 'external-record', label: locale.nav.sectionLabels.externalRecord },
    { id: 'references', label: locale.nav.sectionLabels.references },
  ]

  const list = items
    .map(
      (it, i) =>
        `<li class="flex items-baseline gap-3"><span class="font-mono text-[0.7rem] text-muted tabular-nums">${String(i + 1).padStart(2, '0')}</span><a class="underline-offset-4 hover:underline" href="#${escapeAttr(it.id)}">${escapeHtml(it.label)}</a></li>`,
    )
    .join('\n            ')

  return `
      <aside class="md:col-span-4 md:sticky md:top-8 self-start">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(locale.nav.onThisPage)}</p>
        <ol class="mt-4 space-y-2 text-sm">
            ${list}
        </ol>
      </aside>`
}

function renderSection(id: string, section: EditorialSection): string {
  const paragraphs = section.paragraphs
    .map((p) => `          <p>${escapeHtml(p)}</p>`)
    .join('\n')

  return `
      <section id="${escapeAttr(id)}" class="scroll-mt-16 grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10 py-16 md:py-24 border-b border-rule">
        <header class="md:col-span-4">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(section.eyebrow)}</p>
          <h2 class="mt-4 font-serif text-3xl md:text-4xl leading-tight tracking-[-0.01em] max-w-md">${escapeHtml(section.title)}</h2>
        </header>
        <div class="md:col-span-8 space-y-5 font-serif text-lg md:text-xl leading-[1.7] max-w-prose">
${paragraphs}
        </div>
      </section>`
}

function hostLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function renderExternalEntry(
  ref: ExternalReference,
  kindLabels: ExternalRecordSection['kindLabels'],
  accessedLabel: string,
  index: number,
): string {
  const number = String(index + 1).padStart(2, '0')
  const host = hostLabel(ref.url)
  const kind = kindLabels[ref.kind]
  const datePart = ref.date ? `<span> · ${escapeHtml(ref.date)}</span>` : ''

  return `
          <li class="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-4 py-5 border-t border-rule">
            <span class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted pt-1 tabular-nums">${number}</span>
            <div class="text-[0.95rem] md:text-base leading-relaxed">
              <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                <span>${escapeHtml(kind)}</span>
                <span aria-hidden="true"> · </span>
                <span>${escapeHtml(ref.institution)}</span>${datePart}
              </p>
              <p class="mt-2">
                <a
                  href="${escapeAttr(ref.url)}"
                  rel="noopener noreferrer external"
                  target="_blank"
                  class="italic underline-offset-4 hover:underline decoration-rule hover:decoration-ink transition-colors"
                >${escapeHtml(ref.title)}</a>
                <span class="ml-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">${escapeHtml(host)}<span aria-hidden="true"> ↗</span></span>
              </p>
              <p class="mt-3 text-muted leading-relaxed">${escapeHtml(ref.note)}</p>
              <p class="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">${escapeHtml(accessedLabel)} ${escapeHtml(ref.accessed)}</p>
            </div>
          </li>`
}

function renderExternalRecord(section: ExternalRecordSection): string {
  const list = section.items
    .map((ref, i) =>
      renderExternalEntry(ref, section.kindLabels, section.accessedLabel, i),
    )
    .join('\n')

  return `
      <section id="external-record" class="scroll-mt-16 grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10 py-16 md:py-24 border-b border-rule">
        <header class="md:col-span-4">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(section.eyebrow)}</p>
          <h2 class="mt-4 font-serif text-3xl md:text-4xl leading-tight tracking-[-0.01em] max-w-md">${escapeHtml(section.title)}</h2>
          <p class="mt-4 max-w-prose text-base text-muted leading-relaxed">${escapeHtml(section.intro)}</p>
          <p class="mt-4">
            <a
              href="${escapeAttr(section.policyUrl)}"
              rel="noopener noreferrer external"
              target="_blank"
              class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted hover:text-ink underline-offset-4 hover:underline"
            >${escapeHtml(section.policyLabel)} <span aria-hidden="true">↗</span></a>
          </p>
        </header>
        <div class="md:col-span-8">
          <ol class="border-b border-rule">
${list}
          </ol>
        </div>
      </section>`
}

function renderReferenceEntry(ref: Reference, index: number): string {
  const number = String(index + 1).padStart(2, '0')
  const tail = [ref.publisher, ref.note].filter(Boolean).join(' · ')
  const tailHtml = tail ? `<span class="block text-muted mt-1">${escapeHtml(tail)}</span>` : ''

  return `
          <li class="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-4 py-4 border-t border-rule">
            <span class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted pt-1 tabular-nums">${number}</span>
            <div class="text-[0.95rem] md:text-base leading-relaxed">
              <span class="font-medium">${escapeHtml(ref.author)}</span>
              <span class="text-muted"> · ${escapeHtml(ref.year)}</span>
              <span class="block italic mt-1">${escapeHtml(ref.title)}</span>
              ${tailHtml}
            </div>
          </li>`
}

function renderReferences(section: ReferencesSection): string {
  const intro = section.intro
    ? `<p class="mt-4 max-w-prose text-base text-muted leading-relaxed">${escapeHtml(section.intro)}</p>`
    : ''

  const list = section.items
    .map((ref, i) => renderReferenceEntry(ref, i))
    .join('\n')

  return `
      <section id="references" class="scroll-mt-16 grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10 py-16 md:py-24 border-b border-rule">
        <header class="md:col-span-4">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(section.eyebrow)}</p>
          <h2 class="mt-4 font-serif text-3xl md:text-4xl leading-tight tracking-[-0.01em] max-w-md">${escapeHtml(section.title)}</h2>
          ${intro}
        </header>
        <div class="md:col-span-8">
          <ol class="border-b border-rule">
${list}
          </ol>
        </div>
      </section>`
}

export function renderPage(locale: LocaleContent): string {
  const leadHtml = escapeHtml(locale.masthead.lead)
  const switcher = renderLanguageSwitcher(locale)
  const toc = renderTableOfContents(locale)

  const body = `    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:text-sm">${escapeHtml(locale.nav.skipToContent)}</a>

    <header class="border-b border-rule">
      <div class="mx-auto w-full max-w-6xl px-6 md:px-10 py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href="${escapeAttr(baseRelative(''))}" class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted hover:text-ink transition-colors">
          <span aria-hidden="true">← </span>${escapeHtml(locale.nav.backToIndex)}
        </a>
        <span class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-rule hidden md:inline">·</span>
        <span class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(site.name)}</span>
${switcher}
      </div>
    </header>

    <main id="main" class="mx-auto w-full max-w-6xl px-6 md:px-10">
      <section class="pt-16 md:pt-24 pb-10 md:pb-14 border-b border-rule">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(locale.masthead.eyebrow)}</p>
        <h1 class="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">${escapeHtml(locale.masthead.title)}</h1>
        <p class="mt-6 font-serif text-xl md:text-2xl leading-snug text-muted max-w-3xl">${escapeHtml(locale.masthead.subtitle)}</p>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10 py-12 md:py-16 border-b border-rule">
        <div class="md:col-span-4">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">Lead</p>
          <p class="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-muted">${escapeHtml(locale.masthead.byline)}</p>
        </div>
        <div class="md:col-span-8 font-serif text-xl md:text-2xl leading-[1.55] text-ink/90 max-w-prose">
          <p class="first-letter:font-serif first-letter:text-5xl md:first-letter:text-6xl first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9] first-letter:mt-1">${leadHtml}</p>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10 pt-8 md:pt-14">
${toc}
        <div class="md:col-span-8">
${renderSection('problem', locale.sections.problem)}
${renderSection('hypothesis', locale.sections.hypothesis)}
${renderSection('state-of-the-art', locale.sections.stateOfTheArt)}
${renderExternalRecord(locale.sections.externalRecord)}
${renderReferences(locale.sections.references)}
        </div>
      </div>
    </main>

    <footer class="mx-auto w-full max-w-6xl px-6 md:px-10 py-10 md:py-14">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted max-w-md">${escapeHtml(locale.colophon.note)}</p>
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">${escapeHtml(locale.colophon.license)}</p>
      </div>
    </footer>`

  return documentShell({
    htmlLang: locale.htmlLang,
    dir: locale.dir,
    title: locale.meta.title,
    description: locale.meta.description,
    pathSuffix: `${locale.code}/`,
    body,
    alternates: locales,
  })
}
