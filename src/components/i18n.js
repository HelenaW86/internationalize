import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React',
            part3: 'here we are fully testing!'
          }
      }
    },
    de: {
        translation: {
          description: {
            part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            part2: 'Lerne React',
            part3: 'Hier testen wir vollständig'
          }
        }
      },
      sv: {
        translation: {
          description: {
            part1: 'ändra <1>src/App.js</1> och spara för att ladda om.',
            part2: 'Lär React',
            part3: 'här testar vi för fullt!'
          }
        }
      }
  }
});

export default i18n;