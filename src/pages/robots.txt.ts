import type { APIRoute } from 'astro';
import { withBase } from '../lib/url';

// Генерується під час білду, щоб домен брався з `site` в astro.config.mjs.
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), site).href;
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemapUrl}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
