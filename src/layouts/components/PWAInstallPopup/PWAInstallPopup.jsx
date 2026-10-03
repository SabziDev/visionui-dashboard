/* eslint-disable @stylistic/padding-line-between-statements */

import { useEffect, useState } from "react";

import PWAInstallPopupBtn from "./components/PWAInstallPopupBtn/PWAInstallPopupBtn";
import PWAInstallPopupCloseBtn from "./components/PWAInstallPopupCloseBtn/PWAInstallPopupCloseBtn";
import PWAInstallPopupDesc from "./components/PWAInstallPopupDesc/PWAInstallPopupDesc";
import PWAInstallPopupGradientLine from "./components/PWAInstallPopupGradientLine/PWAInstallPopupGradientLine";
import PWAInstallPopupIcon from "./components/PWAInstallPopupIcon/PWAInstallPopupIcon";
import PWAInstallPopupTitle from "./components/PWAInstallPopupTitle/PWAInstallPopupTitle";

const PWAInstallPopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const handleAppInstalled = () => setDeferredPrompt(null);

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  if (!deferredPrompt || !isVisible) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setDeferredPrompt(null);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-100 m-2.5 overflow-hidden rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl bg-primary-gradient sm:inset-s-auto sm:inset-e-0">
      <div className="flex-items-center gap-3">
        <PWAInstallPopupIcon />

        <div className="flex-1 space-y-1">
          <PWAInstallPopupTitle />
          <PWAInstallPopupDesc />
        </div>

        <PWAInstallPopupBtn handleInstall={handleInstall} />
      </div>

      <PWAInstallPopupGradientLine />
      <PWAInstallPopupCloseBtn handleClose={handleClose} />
    </div>
  );
};

export default PWAInstallPopup;
