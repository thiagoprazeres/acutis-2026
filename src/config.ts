// Site-level configuration.
// Keep this tiny. Nothing here should depend on runtime state.

export const site = {
  name: 'Acutis, 2026',
  shortName: 'Acutis',
  author: 'Thiago Prazeres',
  year: 2026,
  // The GitHub Pages base path. When deployed at
  // https://<user>.github.io/acutis-2026/ this must stay as "/acutis-2026/".
  // Override with BASE_PATH=/ when deploying to a custom domain root.
  basePath: process.env.BASE_PATH ?? '/acutis-2026/',
  canonicalOrigin:
    process.env.CANONICAL_ORIGIN ?? 'https://thiagoprazeres.github.io',
  defaultLocale: 'en',
} as const
