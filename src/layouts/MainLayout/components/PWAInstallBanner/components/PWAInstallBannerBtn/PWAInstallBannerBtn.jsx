import { useTranslation } from "react-i18next";

const PWAInstallBannerBtn = ({ isInstalling, handleInstall }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      disabled={isInstalling}
      onClick={handleInstall}
      className="shrink-0 rounded-xl bg-green px-4 py-2.5 font-VazirBold text-xs text-white shadow-(--color-green)/20 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 disabled:cursor-wait disabled:opacity-60
          "
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
