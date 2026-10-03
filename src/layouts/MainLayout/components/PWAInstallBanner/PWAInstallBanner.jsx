/* eslint-disable @stylistic/padding-line-between-statements */

import { useEffect, useState } from "react";

import GradientLine from "./components/GradientLine/GradientLine";
import PWAInstallBannerBtn from "./components/PWAInstallBannerBtn/PWAInstallBannerBtn";
import PWAInstallBannerDesc from "./components/PWAInstallBannerDesc/PWAInstallBannerDesc";
import PWAInstallBannerIcon from "./components/PWAInstallBannerIcon/PWAInstallBannerIcon";
import PWAInstallBannerTitle from "./components/PWAInstallBannerTitle/PWAInstallBannerTitle";

const PWAInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };
    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsInstalling(false);
    };

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

  if (!deferredPrompt) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    const { outcome } = await deferredPrompt.userChoice;

    setIsInstalling(true);
    deferredPrompt.prompt();

    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
    setIsInstalling(false);
  };

  return (
    <div className="fixed inset-e-4 bottom-4 z-50 mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl bg-primary-gradient sm:inset-e-6 sm:w-full">
      <div className="relative flex-items-center gap-3">
        <PWAInstallBannerIcon />

        <div className="min-w-0 flex-1">
          <PWAInstallBannerTitle />
          <PWAInstallBannerDesc />
        </div>

        <PWAInstallBannerBtn
          isInstalling={isInstalling}
          handleInstall={handleInstall}
        />
      </div>

      <GradientLine />
    </div>
  );
};

export default PWAInstallBanner;
