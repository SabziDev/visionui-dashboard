/* eslint-disable unicorn/no-top-level-side-effects */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import fa from "./fa";

const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

const initialLanguage = localStorage.getItem("lang") ?? "en";

const updateDocumentLanguage = (language) => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
};

updateDocumentLanguage(initialLanguage);

i18n.on("languageChanged", (language) => {
  localStorage.setItem("lang", language);
  updateDocumentLanguage(language);
});

i18n.use(initReactI18next).init({
  resources,

  lng: initialLanguage,

  interpolation: {
    escapeValue: false,
  },
});

export { default as i18n } from "i18next";
