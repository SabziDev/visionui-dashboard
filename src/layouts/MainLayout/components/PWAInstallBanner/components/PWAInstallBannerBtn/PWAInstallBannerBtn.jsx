import { useTranslation } from "react-i18next";

const PWAInstallBannerBtn = ({ isInstalling, handleInstall }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      disabled={isInstalling}
      onClick={handleInstall}
      className="rounded-xl bg-green px-4 py-2.5 font-VazirBold text-xs text-white shadow-lg shadow-green/20 transition-all duration-200 hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
    >
      {t(
        `layouts.pwaInstallBanner.${
          isInstalling ? "installingBtn" : "installBtn"
        }`,
      )}
    </button>
  );
};

export default PWAInstallBannerBtn;
