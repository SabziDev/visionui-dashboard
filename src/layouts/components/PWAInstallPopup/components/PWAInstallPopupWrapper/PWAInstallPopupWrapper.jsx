/* eslint-disable @stylistic/padding-line-between-statements */

import { useEffect } from "react";

import PWAInstallPopupBtn from "./PWAInstallPopupBtn/PWAInstallPopupBtn";
import PWAInstallPopupCloseBtn from "./PWAInstallPopupCloseBtn/PWAInstallPopupCloseBtn";
import PWAInstallPopupDesc from "./PWAInstallPopupDesc/PWAInstallPopupDesc";
import PWAInstallPopupGradientLine from "./PWAInstallPopupGradientLine/PWAInstallPopupGradientLine";
import PWAInstallPopupIcon from "./PWAInstallPopupIcon/PWAInstallPopupIcon";
import PWAInstallPopupTitle from "./PWAInstallPopupTitle/PWAInstallPopupTitle";

const PWAInstallPopupWrapper = ({
  closePopup,
  installPrompt,
  setInstallPrompt,
}) => {
  useEffect(() => {
    const handleInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    const handleInstallComplete = () => setInstallPrompt(null);

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    window.addEventListener("appinstalled", handleInstallComplete);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
      window.removeEventListener("appinstalled", handleInstallComplete);
    };
  }, [setInstallPrompt]);

  if (!installPrompt) return null;

  const installPWA = async () => {
    installPrompt.prompt();

    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-100 m-2.5 overflow-hidden rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl select-none bg-primary-gradient sm:inset-s-auto sm:inset-e-0">
      <PWAInstallPopupCloseBtn onClose={closePopup} />

      <div className="flex-items-center gap-3">
        <PWAInstallPopupIcon />
        <div className="flex-1 space-y-1">
          <PWAInstallPopupTitle />
          <PWAInstallPopupDesc />
        </div>

        <PWAInstallPopupBtn installPWA={installPWA} />
      </div>

      <PWAInstallPopupGradientLine />
    </div>
  );
};

export default PWAInstallPopupWrapper;
