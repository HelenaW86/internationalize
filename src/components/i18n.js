import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'

i18n
.use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/languages/{{lng}}/translation.json'
    },
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