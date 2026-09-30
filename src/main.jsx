import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import AppProviders from "./AppProviders.jsx";
import { AuthContextProvider } from "./contexts/Auth/Auth.jsx";

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((regiter) => {
      console.log("Registered Successfylly =>", regiter);
    })
    .catch((error) => console.log(error));
} else {
  console.log("Not Support");
}

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <AppProviders>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AppProviders>
  </StrictMode>,
);
