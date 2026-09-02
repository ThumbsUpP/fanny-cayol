import type { APIRoute } from 'astro';

const paths = [
  '/',
  '/osteopathie/',
  '/osteopathie-femme/',
  '/osteopathie-pediatrique/',
  '/drainage-lymphatique/',
  '/massages/',
  '/fanny-cayol-peridon/',
  '/cabinet-tarifs-rendez-vous/',
  '/mentions-legales/',
  '/politique-confidentialite/',
];

const lastModified = '2026-09-02';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://www.fanny-cayol-peridon.fr');
  const urls = paths
    .map(
      (path) =>
        `  <url>\n    <loc>${new URL(path, baseUrl).toString()}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
