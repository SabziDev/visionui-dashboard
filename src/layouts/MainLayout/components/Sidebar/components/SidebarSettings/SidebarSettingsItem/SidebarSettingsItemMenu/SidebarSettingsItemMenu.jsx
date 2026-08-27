import { use } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

import AuthContext from "@/contexts/Auth";

import SidebarSettingsItem from "../SidebarSettingsItem";

const SidebarSettingsItemMenu = ({ toggleSidebar }) => {
  const { setAdminId } = use(AuthContext);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <ul className="mt-1 flex-center flex-col gap-1">
      <SidebarSettingsItem
        Icon={IoLanguage}
        onClick={() => {
          i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa");
          toggleSidebar(false);
        }}
      >
        <div>
          <span>{t("layouts.sidebar.menu.accountPages.switchLanguage")}</span>
          <span>{i18n.language === "fa" ? "انگلیسی" : "Persian"}</span>
        </div>
      </SidebarSettingsItem>

      <SidebarSettingsItem
        Icon={TbLogout}
        onClick={() => setAdminId({ value: null })}
      >
        <span>{t("layouts.sidebar.menu.accountPages.logout")}</span>
      </SidebarSettingsItem>
    </ul>
  );
};

export default SidebarSettingsItemMenu;
