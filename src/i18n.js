// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ua: {
        translation: {
            nav:{
                home: "Головна",
                generate: "Генерація",
                subscribe: "Підписка",
                faq: "FAQ",
                login: "Вхід/Реєстрація"
            }
        }
      },
      en: {
        translation: {
            nav: {
                home: "Home",
                generate: "Generation",
                subscribe: "Subscribe",
                faq: "FAQ",
                login: "Sign in / Register"
            }
        }
      }
    }
  });

export default i18n;
