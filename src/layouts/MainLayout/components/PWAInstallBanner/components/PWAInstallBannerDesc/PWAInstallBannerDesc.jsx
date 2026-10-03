import { useTranslation } from "react-i18next";

const PWAInstallBannerDesc = () => {
  const { t } = useTranslation();

  return (
    <p className="text-xs text-white/60">
      {t("layouts.pwaInstallBanner.desc")}{" "}
    </p>
  );
};

export default PWAInstallBannerDesc;
