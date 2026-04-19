// Minimal static preview server for the built dist/ directory.
// No external dependencies. Not for production.

import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, resolve } from 'node:path'

const PORT = Number(process.env.PORT ?? 5173)
const ROOT = resolve(process.cwd(), 'dist')
// The built HTML references assets under `/acutis-2026/` (the GitHub Pages
// base path). Allow local preview at both `/` and `/acutis-2026/` by stripping
// the configured prefix from incoming URLs.
const BASE_PREFIX = (process.env.BASE_PATH ?? '/acutis-2026/').replace(/\/+$/, '')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
}

function stripBase(pathname) {
  if (BASE_PREFIX && pathname === BASE_PREFIX) return '/'
  if (BASE_PREFIX && pathname.startsWith(BASE_PREFIX + '/')) {
    return pathname.slice(BASE_PREFIX.length) || '/'
  }
  return pathname
}

async function resolveFile(urlPath) {
  const [raw] = urlPath.split('?')
  const clean = decodeURIComponent((raw ?? '/').split('#')[0] ?? '/')
  const withoutBase = stripBase(clean)
  let abs = resolve(ROOT, '.' + withoutBase)
  if (!abs.startsWith(ROOT)) return null
  try {
    const s = await stat(abs)
    if (s.isDirectory()) abs = join(abs, 'index.html')
    await stat(abs)
    return abs
  } catch {
    return null
  }
}

const server = createServer(async (req, res) => {
  const file = await resolveFile(req.url ?? '/')
  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
    res.end('404 not found')
    return
  }
  const ext = extname(file).toLowerCase()
  res.writeHead(200, { 'content-type': MIME[ext] ?? 'application/octet-stream' })
  createReadStream(file).pipe(res)
})

server.listen(PORT, () => {
  console.log(`preview: http://localhost:${PORT}/`)
})
