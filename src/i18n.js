import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; //automatic language detection
import translationFR from "./locales/fr.json";
import translationAR from "./locales/ar.json";

// The translations
const resources = {
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
};


i18n
  .use(LanguageDetector) // detect language automatically
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "fr", // Default language
    fallbackLng: "fr", // Fallback language if the current one is missing translations
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
