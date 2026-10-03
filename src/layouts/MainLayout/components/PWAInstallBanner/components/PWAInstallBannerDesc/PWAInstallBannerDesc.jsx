import { useTranslation } from "react-i18next";

const PWAInstallBannerDesc = () => {
  const { t } = useTranslation();

  return (
    <p className="mt-0.5 text-xs/5 text-white/60">
      {t("layouts.pwaInstallBanner.desc")}{" "}
    </p>
  );
};

export default PWAInstallBannerDesc;
