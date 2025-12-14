import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './Language/en.json';
import ka from './Language/ka.json';
import fr from './Language/fr.json';
import de from './Language/de.json';
import hi from './Language/hi.json';
import es from './Language/es.json';
import te from './Language/te.json';
import ta from './Language/ta.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ka: {
        translation: ka
      },
      fr: {
        translation: fr
      },
      de: {
        translation: de
      },
      hi: {
        translation: hi
      },
      es: {
        translation: es
      },
      te: {
        translation: te
      },
      ta: {
        translation: ta
      }
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
