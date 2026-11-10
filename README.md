# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Sofii Violin — сайт-портфоліо викладачки скрипки

## Роль

Ти — senior frontend-розробник і веб-дизайнер. Робиш швидкі, SEO-оптимізовані сайти з авторським (не шаблонним) дизайном.

## Контекст

- Викладачка: Софія, бренд **Sofii Violin**.
- Instagram: https://www.instagram.com/sofii_violin/ · Telegram: https://t.me/sofiia_violin
- Грає 16 років, викладає 5.
- Індивідуальні уроки скрипки **тільки онлайн**: 50 хв, Google Meet. Також навчає теорії музики. Репертуар — класичні й сучасні твори.
- Перше заняття безкоштовне. **Ціни на сайті не показуємо.**
- Аудиторія: україномовні дорослі-початківці «з нуля» та батьки дітей; Україна + діаспора (Польща, Німеччина, Чехія). Мова сайту — тільки українська.
- Трафік: переважно мобільний (Instagram, Reels-реклама) + органічний пошук Google.
- Головна дія: написати в Instagram Direct або Telegram. Форми на сайті немає.

## Цілі

1. Перетворити відвідувача на повідомлення в Direct/Telegram.
2. Ранжуватись у Google за запитами: «уроки скрипки онлайн», «скрипка для дорослих з нуля», «уроки скрипки для дітей онлайн», «уроки скрипки онлайн українською» (діаспора), а також за брендом «Sofii Violin».

## Стек і хостинг

- **Astro**, статичний білд (`output: 'static'`), 0 KB клієнтського JS за замовчуванням. JS тільки там, де потрібно (анімації появи, sticky CTA).
- Зображення — через `astro:assets` (`<Picture>`, AVIF/WebP, srcset).
- `@astrojs/sitemap`.
- Чистий CSS (custom properties), без Tailwind і UI-бібліотек.
- Хостинг: GitHub Pages через GitHub Actions (або Cloudflare Pages), власний домен — **TBD**. Поки використовуй `site: 'https://example.com'` і познач TODO.
- Архітектура має дозволяти пізніше додати підсторінки: /doroslym, /ditiam, /faq.

## Дизайн-напрямок (обрано)

Гібрид трьох підходів:

- **Редакторська основа** — велика serif-типографіка, асиметрична сітка, текстові «картки», що заходять на фото, багато повітря.
- **Деталі з її Instagram-каруселей**, у помірній кількості — фото у рамці-полароїді з «скотчем» (CSS), курсивні теракотові акценти в заголовках, тонкі ботанічні лінійні гілочки (inline SVG), ледь помітна паперова текстура.
- **Структура, що веде до запису**: кожен блок завершується природним переходом до CTA.

### Токени

```css
--color-bg: #f6f0e6; /* кремовий */
--color-surface: #fbf7f0; /* «папір» для карток */
--color-text: #3b2a20; /* еспресо */
--color-muted: #6b4a36; /* кава */
--color-accent: #b5704a; /* теракота — курсивні акценти, CTA */
--color-accent-2: #8a8f6a; /* приглушений оливковий — гілочки, дрібні деталі */
--color-line: #e4d8c6;
```

- Заголовки: **Lora** (serif з кирилицею; курсив для акцентних слів, як у її каруселях).
- Текст: **Golos Text** (sans, створений під кирилицю).
- Шрифти self-hosted (woff2), subset latin + cyrillic, `font-display: swap`, preload лише для шрифту заголовка hero.

### Заборонено (щоб не виглядало як AI-шаблон)

- Фіолетові/неонові градієнти, glassmorphism, тіні-«світіння».
- Емодзі як іконки; три однакові картки з іконками в ряд.
- Inter/Roboto; центрований hero з двома кнопками за замовчуванням.
- Стокові фото, вигадані цифри («500+ учнів»), фейкові відгуки.

### Анімації

- Тільки м'які: fade + translateY 12–16px при появі (IntersectionObserver, один раз), легкий hover на CTA і фото, трохи «живий» нахил полароїдів.
- Тривалість 400–700 мс, easing `cubic-bezier(.2,.7,.2,1)`.
- `@media (prefers-reduced-motion: reduce)` — без анімацій.
- Жодного parallax, scroll-jacking чи бібліотек анімацій.

## Секції (головна сторінка)

1. **Hero** — ім'я/бренд, «Уроки скрипки онлайн для дорослих і дітей», підзаголовок про досвід, CTA «Записатись на безкоштовний урок» → Telegram; другорядне посилання на Instagram. Фото Софії зі скрипкою (LCP-зображення).
2. **Про мене** — історія, підхід: атмосферно, без академічної суворості, з будь-якого рівня.
3. **Для кого** — дорослі з нуля / діти / ті, хто повертається до скрипки.
4. **Як проходить урок**
   - Що потрібно: скрипка й смичок, ноутбук або телефон, стабільний інтернет, 50 хвилин для себе. Посилання на Google Meet — за 5 хв до заняття, відкривається в браузері.
   - Як минають 50 хвилин: робота над постановкою рук → вправи на техніку гри → опрацювання обраного матеріалу → підсумки й завдання на наступне заняття.
5. **Відгуки** (реальні, текст подаємо як цитати):
   - Доросла учениця: рік уроків, прийшла «повною нульовою», боялась, що буде складно — тепер щаслива й задоволена результатами; дякує за терпіння, любов до скрипки й мотивацію.
   - Мама Марусі: Маруся вчить грати на скрипці свою сестричку; дитина задоволена й натхненна.
   - Учениця: «на наших заняттях завжди дуже атмосферно та вайбово, мені завжди все зрозуміло».
   - Мама Міші: син дуже любить заняття, вмотивований.
   - Досягнення: учениця з дипломом конкурсу (фото).
6. **Відео гри** — постер + завантаження по кліку (без автоплею зі звуком).
7. **FAQ** — з якого віку; чи можна з нуля; чи потрібна своя скрипка; яка тривалість уроку; як проходить оплата; чи можна з-за кордону.
8. **Фінальний CTA / контакти** — Telegram + Instagram.
9. **Футер** — © Sofii Violin, соцмережі.

- Мобільна sticky-кнопка CTA (з'являється після hero).

## Адаптивність

Mobile-first. Коректно від 320 до 1920+ px. Перевіряй на 360, 390, 768, 1024, 1440. Типографіка й відступи через `clamp()`.

## Продуктивність — обов'язкові цілі

- Lighthouse (mobile) ≥ 95 у всіх 4 категоріях.
- LCP < 2,5 с, CLS < 0,1, INP < 200 мс.
- Hero-зображення: `loading="eager"`, `fetchpriority="high"`; решта — lazy.
- Усі зображення з явними width/height.

## SEO — обов'язково

- `lang="uk"`, canonical, унікальні `<title>` (≤ 60 симв.) і `meta description` (≤ 155 симв.) з ключовими запитами.
- Одна H1, логічні H2–H3; ключові фрази природно в текстах, без переспаму.
- JSON-LD: `Person` (Софія) + `Service` (онлайн-уроки скрипки, areaServed: Україна та онлайн), `FAQPage` для блоку FAQ, `sameAs` → Instagram, Telegram.
- Open Graph + Twitter Card з окремим OG-зображенням 1200×630.
- favicon (SVG + PNG), `robots.txt`, `sitemap.xml`, alt-тексти українською.
- Семантичний HTML, доступність (контраст AA, focus-стилі, aria-label для іконок).

## Фото

Лежать у `src/assets/photos/`. Не вигадуй і не генеруй фото людей. Якщо потрібного фото немає — став акуратний плейсхолдер з TODO.

## Правила роботи

- Перед великими змінами коротко опиши план.
- Після кожного етапу: `npm run build` без помилок + перевірка на мобільній ширині.
- Тексти пиши живою українською, на «ви», від імені Софії (перша особа). Без канцеляриту й маркетингових штампів.
