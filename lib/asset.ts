// Prefixes static asset paths with the base path when the site is built for
// a subdirectory host (GitHub Pages serves it at /Yacht). On Vercel or local
// dev NEXT_PUBLIC_BASE_PATH is unset and paths pass through unchanged.
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;
