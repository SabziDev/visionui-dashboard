import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import AppProviders from "./AppProviders.jsx";
import { AuthContextProvider } from "./contexts/Auth.jsx";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <AppProviders>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AppProviders>
  </StrictMode>,
);
