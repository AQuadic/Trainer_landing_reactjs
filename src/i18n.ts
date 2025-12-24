import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import heroEn from "./locales/en/home/hero.json";
import heroAr from "./locales/ar/home/hero.json";

import homefeaturesEn from "./locales/en/home/homefeatures.json";
import homefeaturesAr from "./locales/ar/home/homefeatures.json";

import homemembershipEn from "./locales/en/home/homemembership.json";
import homemembershipAr from "./locales/ar/home/homemembership.json";

import homestandEn from "./locales/en/home/homestand.json";
import homestandAr from "./locales/ar/home/homestand.json";

import testimonialsEn from "./locales/en/home/testimonials.json";
import testimonialsAr from "./locales/ar/home/testimonials.json";

import faqEn from "./locales/en/faq/faq.json";
import faqAr from "./locales/ar/faq/faq.json";

import blogEn from "./locales/en/blog/blog.json";
import blogAr from "./locales/ar/blog/blog.json";

import pricingEn from "./locales/en/pricing/pricing.json";
import pricingAr from "./locales/ar/pricing/pricing.json";

import seemoreEn from "./locales/en/seemore/seemore.json";
import seemoreAr from "./locales/ar/seemore/seemore.json";

import businesstypeEn from "./locales/en/business/businesstype.json";
import businesstypeAr from "./locales/ar/business/businesstype.json";

import managementEn from "./locales/en/features/management.json";
import managementAr from "./locales/ar/features/management.json";

import ownappEn from "./locales/en/features/ownapp.json";
import ownappAr from "./locales/ar/features/ownapp.json";

import schedualEn from "./locales/en/features/schedual.json";
import schedualAr from "./locales/ar/features/schedual.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        hero: heroEn,
        homefeatures: homefeaturesEn,
        homemembership: homemembershipEn,
        homestand: homestandEn,
        testimonials: testimonialsEn,
        faq: faqEn,
        blog: blogEn,
        pricing: pricingEn,
        seemore: seemoreEn,
        businesstype: businesstypeEn,
        management: managementEn,
        ownapp: ownappEn,
        schedual: schedualEn,
      },
      ar: {
        hero: heroAr,
        homefeatures: homefeaturesAr,
        homemembership: homemembershipAr,
        homestand: homestandAr,
        testimonials: testimonialsAr,
        faq: faqAr,
        blog: blogAr,
        pricing: pricingAr,
        seemore: seemoreAr,
        businesstype: businesstypeAr,
        management: managementAr,
        ownapp: ownappAr,
        schedual: schedualAr,
      },
    },
    lng: "en",
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
