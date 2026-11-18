// Built from the request's own origin, so it is correct on any domain.
const paths = [
  { path: '/', priority: '1.0' },
  { path: '/work', priority: '0.8' }
]

export default defineEventHandler((event) => {
  const origin = getRequestURL(event).origin
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  const urls = paths
    .map(
      ({ path, priority }) =>
        `  <url>\n    <loc>${origin}${path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
