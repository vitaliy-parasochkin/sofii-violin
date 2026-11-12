# Sofii Violin

Сайт-портфоліо викладачки скрипки Софії: індивідуальні онлайн-уроки скрипки українською для дорослих і дітей.

Статичний сайт на [Astro](https://astro.build): без клієнтських фреймворків, чистий CSS, зображення через `astro:assets`.

## Команди

| Команда           | Що робить                                         |
| :---------------- | :------------------------------------------------ |
| `npm install`     | Встановити залежності                             |
| `npm run dev`     | Dev-сервер на `localhost:4321`                    |
| `npm run build`   | Зібрати сайт у `./dist/`                          |
| `npm run preview` | Переглянути зібраний сайт локально                |

Версія Node — у `.nvmrc`.

## Де що міняти

- `src/data/site.ts` — назва, опис для пошуку, посилання на Instagram і Telegram, роки досвіду, вік учнів.
- `src/data/faq.ts` — питання і відповіді (з них же будується розмітка `FAQPage` для Google).
- `src/data/sections.ts` — пункти меню в хедері.
- `src/components/Reviews.astro` — список скрінів відгуків (масив `shots`).
- `src/assets/photos/` — фото; `public/` — favicon і OG-зображення.
- `src/styles/tokens.css` — кольори, шрифти, відступи.

## Деплой

GitHub Pages через GitHub Actions (`.github/workflows/deploy.yml`): сайт збирається і публікується після кожного push у `main`.

Перед першим запуском: у налаштуваннях репозиторію **Settings → Pages → Source** обрати **GitHub Actions**, а в `astro.config.mjs` вказати справжній домен у полі `site`.
