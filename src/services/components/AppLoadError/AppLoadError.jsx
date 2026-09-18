import { useEffect } from "react";
import { createPortal } from "react-dom";

import AppLoadErrorBgPattern from "./components/AppLoadErrorBgPattern/AppLoadErrorBgPattern";
import AppLoadErrorBtn from "./components/AppLoadErrorBtn/AppLoadErrorBtn";
import AppLoadErrorDesc from "./components/AppLoadErrorDesc/AppLoadErrorDesc";
import AppLoadErrorTitle from "./components/AppLoadErrorTitle/AppLoadErrorTitle";

const AppLoadError = () => {
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex-center flex-col overflow-hidden px-4 text-center select-none"
      style={{
        background:
          "radial-gradient(circle at top right, #000041, #004162, #89a0ae)",
      }}
    >
      <AppLoadErrorBgPattern />

      <AppLoadErrorTitle />
      <AppLoadErrorDesc />
      <AppLoadErrorBtn />
    </div>,

    document.body,
  );
};

export default AppLoadError;
