import { useState } from "react";

import PWAInstallPopupWrapper from "./components/PWAInstallPopupWrapper/PWAInstallPopupWrapper";

const PWAInstallPopup = () => {
  const [isShow, setIsShow] = useState(true);
  const [installPrompt, setInstallPrompt] = useState(null);

  const closePopup = () => {
    setIsShow(false);
    setInstallPrompt(null);
  };

  return (
    isShow &&
    installPrompt && (
      <PWAInstallPopupWrapper
        closePopup={closePopup}
        installPrompt={installPrompt}
        setInstallPrompt={setInstallPrompt}
      />
    )
  );
};

export default PWAInstallPopup;
