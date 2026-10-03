import { useTranslation } from "react-i18next";

const PWAInstallPopupBtn = ({ installPWA }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={installPWA}
      className="rounded-xl bg-green px-4 py-2.5 font-VazirBold text-xs text-white shadow-lg shadow-green/20 transition-[filter] hover:brightness-110"
    >
      {t("layouts.pwaInstallBanner.btn")}
    </button>
  );
};

export default PWAInstallPopupBtn;
