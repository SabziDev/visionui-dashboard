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

const supportedLanguages = ["en", "fa"];
const initialLanguage = localStorage.getItem("lang");

const language = supportedLanguages.includes(initialLanguage)
  ? initialLanguage
  : "en";

const updateLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
};

i18n.on("languageChanged", (lang) => updateLanguage(lang));

i18n.use(initReactI18next).init({
  resources,

  lng: language,

  interpolation: {
    escapeValue: false,
  },
});

export { default as i18n } from "i18next";
