/* eslint-disable @stylistic/padding-line-between-statements */

import { useEffect, useState } from "react";

import PWAInstallPopupBtn from "./components/PWAInstallPopupBtn/PWAInstallPopupBtn";
import PWAInstallPopupCloseBtn from "./components/PWAInstallPopupCloseBtn/PWAInstallPopupCloseBtn";
import PWAInstallPopupDesc from "./components/PWAInstallPopupDesc/PWAInstallPopupDesc";
import PWAInstallPopupGradientLine from "./components/PWAInstallPopupGradientLine/PWAInstallPopupGradientLine";
import PWAInstallPopupIcon from "./components/PWAInstallPopupIcon/PWAInstallPopupIcon";
import PWAInstallPopupTitle from "./components/PWAInstallPopupTitle/PWAInstallPopupTitle";

const PWAInstallPopup = () => {
  const [isShow, setIsShow] = useState(true);
  const [installPrompt, setInstallPrompt] = useState(null);

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
  }, []);

  if (!installPrompt || !isShow) return null;

  const installPWA = async () => {
    installPrompt.prompt();

    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") setInstallPrompt(null);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-100 m-2.5 overflow-hidden rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl select-none bg-primary-gradient sm:inset-s-auto sm:inset-e-0">
      <PWAInstallPopupCloseBtn handleClose={() => setIsShow(false)} />

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

export default PWAInstallPopup;
