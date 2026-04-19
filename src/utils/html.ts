// Minimal HTML escaping for static string templates.
// Intentionally tiny: no dependency, no framework.

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function escapeAttr(input: string): string {
  return escapeHtml(input)
}
