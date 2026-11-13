// Єдине джерело даних про бренд: використовується в мета-тегах, JSON-LD і (пізніше) у секціях.

export const SITE = {
  name: 'Sofii Violin',
  locale: 'uk_UA',
  lang: 'uk',
  title: 'Уроки скрипки онлайн для дорослих і дітей | Sofii Violin',
  description:
    'Уроки скрипки онлайн українською для дорослих з нуля і дітей від 5 років. Один на один у Google Meet, перший урок безкоштовний.',
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

/** Umami Cloud (без cookie). Порожній ID — скрипт аналітики не підключається. */
export const ANALYTICS = {
  umamiWebsiteId: '4736ac03-eeb4-4f0d-90c2-a9bef5da4f28',
} as const;

/** Підтвердження власності сайту. Не видаляти: без тегу Search Console втратить доступ. */
export const VERIFICATION = {
  google: 'cy554oMDRihapguL43w4qwpXUw1BpKc1hDtMb_Osh6o',
} as const;

export const OG_IMAGE = {
  src: '/og-image.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Софія, викладачка скрипки Sofii Violin, тримає скрипку на тлі квітучого саду',
} as const;
