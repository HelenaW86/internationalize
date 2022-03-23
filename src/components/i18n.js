import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from '../languages/en/translationEn.json'
import translationSv from '../languages/sv/translationSv.json'
import translationDe from '../languages/de/translationDe.json'

const resources = {
  en: {
    translation: translationEn
  },
  sv: {
    translation: translationSv
  },
  de: {
    translation: translationDe
  }
}

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sv',
    debug: true,
    fallbackLng: 'en',
    detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
    },
    interpolation: {
      escapeValue: false,
    },
});

export default i18n;