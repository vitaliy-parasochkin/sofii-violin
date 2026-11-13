// Шляхи всередині сайту з урахуванням `base` з astro.config.mjs.
// Зараз base порожній (сайт у корені домену); якщо колись знову з'явиться підпапка — код не змінюється.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** З base '/sub': '/favicon.svg' → '/sub/favicon.svg'; '/#faq' → '/sub/#faq'. Шлях має починатися з «/». */
export const withBase = (path: string) => `${BASE}${path}`;
