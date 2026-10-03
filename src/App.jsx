import { useEffect } from "react";
import { RouterProvider } from "react-router";

import "./layouts/components/DeveloperSignature/logDeveloperSignature";
import PWAInstallPopup from "./layouts/MainLayout/components/PWAInstallPopup/PWAInstallPopup";
import router from "./routes";

const removeAppPreloader = () => {
  document.body.classList.remove("overflow-hidden");
  document.querySelector("#app-preloader")?.remove();
};

const App = () => {
  useEffect(() => removeAppPreloader(), []);

  return (
    <>
      <PWAInstallPopup />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
