const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the deploy base path (GitHub Pages). */
export function asset(path: string): string {
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
