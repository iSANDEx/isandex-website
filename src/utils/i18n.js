import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translation_en from "./locales/en/translation.json";
import translation_sp from "./locales/sp/translation.json";

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
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
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }, 
    resources: { // Finally, this was the best solution for a small project (https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next)
        en: {
            translation: translation_en
        },
        sp: {
            translation: translation_sp
        }
    }
    // backend: {
    //     ns: ['translation'],
    //     // for all available options read the backend's repository readme file
    //     loadPath: 'public/locales/{{lng}}/{{ns}}.json'
    //   }
    });


export default i18n;