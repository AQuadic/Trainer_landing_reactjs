import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import heroEn from "./locales/en/home/hero.json";
import heroAr from "./locales/ar/home/hero.json";

import homefeaturesEn from "./locales/en/home/homefeatures.json";
import homefeaturesAr from "./locales/ar/home/homefeatures.json";

import homemembershipEn from "./locales/en/home/homemembership.json";
import homemembershipAr from "./locales/ar/home/homemembership.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        hero: heroEn,
        homefeatures: homefeaturesEn,
        homemembership: homemembershipEn,
      },
      ar: {
        hero: heroAr,
        homefeatures: homefeaturesAr,
        homemembership: homemembershipAr,
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