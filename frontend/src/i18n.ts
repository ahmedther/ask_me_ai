import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import ar from "./translations/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    ar: ar,
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
