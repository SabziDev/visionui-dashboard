import { useTranslation } from "react-i18next";

const PWAInstallPopupTitle = () => {
  const { t } = useTranslation();

  return (
    <h6 className="text-sm font-bold">{t("layouts.pwaInstallBanner.title")}</h6>
  );
};

export default PWAInstallPopupTitle;
