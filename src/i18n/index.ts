import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isDevelopment = process.env.NODE_ENV === 'development';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false,
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: isDevelopment,
    keySeparator: '.',
    ns: ['common', 'login'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: ['localStorage'],
    },
  });

export default i18n;
