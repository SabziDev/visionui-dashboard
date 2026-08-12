import { useTranslation } from "react-i18next";

const SidebarSettingsItemTitle = () => {
  const { t } = useTranslation();

  return (
    <span className="ms-4 font-VazirMedium">
      {t("layouts.sidebar.menu.accountPages.title")}
    </span>
  );
};

export default SidebarSettingsItemTitle;
