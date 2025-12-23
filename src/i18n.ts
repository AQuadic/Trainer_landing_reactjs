import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import heroEn from "./locales/en/hero.json";
import heroAr from "./locales/ar/hero.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        hero: heroEn,
      },
      ar: {
        hero: heroAr,
      },
    },
    fallbackLng: "en",
    defaultNS: "hero",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;