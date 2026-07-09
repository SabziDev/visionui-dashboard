import { useTranslation } from "react-i18next";
import { IoCard, IoHome, IoPerson, IoStatsChartSharp } from "react-icons/io5";

import SidebarNavItem from "./SidebarNavItem/SidebarNavItem";

const SidebarNav = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex-center flex-col gap-3">
      <SidebarNavItem to="/" Icon={IoHome}>
        {t("layouts.sidebar.menu.dashboard")}
      </SidebarNavItem>
      <SidebarNavItem to="/tables" Icon={IoStatsChartSharp}>
        {t("layouts.sidebar.menu.tables")}
      </SidebarNavItem>
      <SidebarNavItem to="/billing" Icon={IoCard}>
        {t("layouts.sidebar.menu.billing")}
      </SidebarNavItem>
      <SidebarNavItem to="/profile" Icon={IoPerson}>
        {t("layouts.sidebar.menu.profile")}
      </SidebarNavItem>
    </ul>
  );
};

export default SidebarNav;
