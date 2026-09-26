// Runs automatically after `next build` (see package.json's "build"
// script). Writes sitemap.xml straight into the exported `out/` folder,
// listing every static page plus every published project's URL — so
// new projects appear in the sitemap the moment the site is rebuilt.

import { writeFileSync } from 'fs';
import { fetchPublishedProjects } from '../lib/firestore.js';

const SITE_URL = process.env.SITE_URL || 'https://YOUR-DOMAIN-HERE';

const STATIC_PAGES = ['', '/work', '/solutions', '/about', '/demo', '/contact'];

async function generateSitemap() {
  const projects = await fetchPublishedProjects();
  const projectUrls = projects.map((p) => `/work/${p.slug}`);
  const allUrls = [...STATIC_PAGES, ...projectUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url><loc>${SITE_URL}${url}</loc></url>`).join('\n')}
</urlset>`;

  writeFileSync('out/sitemap.xml', xml);
  // eslint-disable-next-line no-console
  console.log(`Sitemap written with ${allUrls.length} URLs.`);
}

generateSitemap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Sitemap generation failed:', err);
  // Don't fail the whole build over a sitemap issue — log it and move on.
});
