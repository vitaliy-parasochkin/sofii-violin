// Єдине джерело даних про бренд: використовується в мета-тегах, JSON-LD і (пізніше) у секціях.

export const SITE = {
  name: 'Sofii Violin',
  locale: 'uk_UA',
  lang: 'uk',
  title: 'Уроки скрипки онлайн для дорослих і дітей | Sofii Violin',
  description:
    'Індивідуальні уроки скрипки онлайн українською для дорослих з нуля і дітей. 50 хвилин у Google Meet. Перше заняття безкоштовне.',
  themeColor: '#f6f0e6',
} as const;

export const TEACHER = {
  name: 'Софія',
  jobTitle: 'Викладачка скрипки',
  yearsPlaying: 16,
  yearsTeaching: 5,
  /** З якого віку можна починати (підтверджено 2026-11-10). */
  minStudentAge: 5,
} as const;

export const LINKS = {
  telegram: 'https://t.me/sofiia_violin',
  instagram: 'https://www.instagram.com/sofii_violin/',
} as const;

/** Нікнейми — показуємо текстом, щоб Софію можна було знайти і вручну. */
export const HANDLES = {
  instagram: '@sofii_violin',
} as const;

export const OG_IMAGE = {
  src: '/og-image.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Софія, викладачка скрипки Sofii Violin, тримає скрипку на тлі квітучого саду',
} as const;
