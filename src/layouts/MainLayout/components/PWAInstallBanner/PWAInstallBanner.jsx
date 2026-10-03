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

    setIsInstalling(true);

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }

    setIsInstalling(false);
  };

  return (
    <div className="fixed inset-e-0 bottom-0 z-100 m-2.5 overflow-hidden rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl bg-primary-gradient">
      <div className="flex-items-center gap-3">
        <PWAInstallBannerIcon />

        <div className="flex-1 space-y-1">
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
