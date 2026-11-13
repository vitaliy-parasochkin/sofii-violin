// Секції головної: для меню в хедері (nav: true).
// Посилання — `/#id`, щоб меню працювало і з майбутніх підсторінок.
export interface SectionLink {
  id: string;
  label: string;
  nav: boolean;
}

export const SECTIONS: SectionLink[] = [
  { id: 'top', label: 'Головна', nav: false },
  { id: 'pro-mene', label: 'Про мене', nav: true },
  { id: 'dlia-koho', label: 'Для кого', nav: true },
  { id: 'yak-prokhodyt-urok', label: 'Урок', nav: true },
  { id: 'vidguky', label: 'Відгуки', nav: true },
  { id: 'faq', label: 'Питання', nav: true },
];
