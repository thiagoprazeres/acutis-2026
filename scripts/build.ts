/**
 * Static build for the Acutis 2026 multilingual editorial piece.
 *
 * - Writes HTML pages from TypeScript templates into `dist/`.
 * - Compiles Tailwind v4 CSS via `@tailwindcss/cli`.
 * - Copies anything under `public/` verbatim into `dist/`.
 *
 * No framework, no bundler, no router. Runs with `tsx scripts/build.ts`.
 */

import { execFileSync, spawn } from 'node:child_process'
import { cp, mkdir, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { locales } from '../src/content/locales.ts'
import { renderHome } from '../src/templates/home.ts'
import { renderNotFound } from '../src/templates/notFound.ts'
import { renderPage } from '../src/templates/page.ts'
import { renderSitemap } from '../src/templates/sitemap.ts'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = resolve(ROOT, 'dist')
const PUBLIC_DIR = resolve(ROOT, 'public')
const CSS_IN = resolve(ROOT, 'src/styles/app.css')
const CSS_OUT = resolve(DIST, 'assets/app.css')

async function exists(path: string): Promise<boolean> {
  try {
    await stat(path)
    return true
  } catch {
    return false
  }
}

async function writeOut(relPath: string, contents: string): Promise<void> {
  const full = resolve(DIST, relPath)
  await mkdir(dirname(full), { recursive: true })
  await writeFile(full, contents, 'utf8')
}

function runTailwind(): Promise<void> {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(
      'npx',
      [
        '--yes',
        '@tailwindcss/cli',
        '-i',
        CSS_IN,
        '-o',
        CSS_OUT,
        '--minify',
      ],
      { stdio: 'inherit', cwd: ROOT },
    )
    child.on('close', (code) => {
      if (code === 0) resolvePromise()
      else rejectPromise(new Error(`@tailwindcss/cli exited with code ${code}`))
    })
    child.on('error', rejectPromise)
  })
}

// Return a stable YYYY-MM-DD date for sitemap <lastmod>.
// Preference order: BUILD_DATE env → latest git commit date → today.
function resolveLastmod(): string {
  const override = process.env.BUILD_DATE
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override

  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs'], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out
  } catch {
    // git unavailable or no commits; fall through to today's date
  }

  return new Date().toISOString().slice(0, 10)
}

async function copyPublic(): Promise<void> {
  if (!(await exists(PUBLIC_DIR))) return
  const entries = await readdir(PUBLIC_DIR)
  for (const entry of entries) {
    await cp(resolve(PUBLIC_DIR, entry), resolve(DIST, entry), {
      recursive: true,
    })
  }
}

async function main(): Promise<void> {
  await rm(DIST, { recursive: true, force: true })
  await mkdir(DIST, { recursive: true })

  await copyPublic()

  await writeOut('index.html', renderHome())
  for (const locale of locales) {
    await writeOut(`${locale.code}/index.html`, renderPage(locale))
  }
  await writeOut('404.html', renderNotFound())
  await writeOut('sitemap.xml', renderSitemap(resolveLastmod()))

  await runTailwind()

  const pages = locales.length + 2 // + home + 404
  console.log(`built ${pages} pages + sitemap.xml → dist/`)
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
