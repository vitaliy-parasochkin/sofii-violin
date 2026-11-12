// Шляхи всередині сайту з урахуванням `base` з astro.config.mjs.
// Зараз сайт живе в підпапці (github.io/sofii-violin/), з власним доменом base прибирається — і код не змінюється.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/favicon.svg' → '/sofii-violin/favicon.svg'; '/#faq' → '/sofii-violin/#faq'. Шлях має починатися з «/». */
export const withBase = (path: string) => `${BASE}${path}`;
