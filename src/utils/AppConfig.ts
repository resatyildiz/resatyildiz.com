import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'Reşat YILDIZ',
  locales: ['en', 'tr'],
  company: 'Gordion',
  companyURL: 'https://www.gordionteknoloji.com/',
  jobTitle: 'Senior Frontend Developer',
  defaultLocale: 'en',
  localePrefix,
};
