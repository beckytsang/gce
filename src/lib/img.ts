/**
 * Resolve a public/ asset path against the Vite base URL so the same build
 * works from a domain root (preview) and a sub-path (GitHub Pages).
 */
export function im(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return base + path.replace(/^\//, '');
}
