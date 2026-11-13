// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Від site залежать canonical, OG-URL, sitemap і robots.txt; усі внутрішні шляхи — через withBase() (src/lib/url.ts).
  // Домен прив'язано в Settings → Pages (при деплої через Actions файл public/CNAME не потрібен).
  site: 'https://sofiiviolin.com',
  output: 'static',
  // Один формат URL (/faq/) для canonical, sitemap і GitHub Pages.
  trailingSlash: 'always',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Lora',
      cssVariable: '--font-heading',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'cyrillic'],
      formats: ['woff2'],
      display: 'swap',
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Golos Text',
      cssVariable: '--font-body',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin', 'cyrillic'],
      formats: ['woff2'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
