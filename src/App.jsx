import i18next from "i18next";
import { useEffect, useLayoutEffect } from "react";
import { RouterProvider } from "react-router";

import useLocalStorage from "./hooks/useLocalStorage";
import logDeveloperSignature from "./layouts/components/DeveloperSignature/logDeveloperSignature";
import router from "./routes";

const removeAppPreloader = () => {
  setTimeout(() => {
    document.querySelector("#app-preloader")?.remove();
    document.body.classList.remove("overflow-hidden");
  }, 300);
};

const App = () => {
  const [lang] = useLocalStorage({
    key: "lang",
    defaultValue: "en",
  });

  useLayoutEffect(() => {
    if (i18next.language === lang) return;

    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    i18next.changeLanguage(lang);
  }, [lang]);
  useEffect(() => {
    logDeveloperSignature();
    removeAppPreloader();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
