import { useTranslation } from "react-i18next";
import { IoHome, IoPerson, IoStatsChartSharp } from "react-icons/io5";

import SidebarNavItem from "./SidebarNavItem/SidebarNavItem";

const SidebarNav = ({ onCloseSidebar }) => {
  const { t } = useTranslation();

  return (
    <ul className="flex-center flex-col gap-3">
      <SidebarNavItem to="/" Icon={IoHome} onCloseSidebar={onCloseSidebar}>
        {t("layouts.sidebar.menu.dashboard")}
      </SidebarNavItem>
      <SidebarNavItem
        to="/tables"
        Icon={IoStatsChartSharp}
        onCloseSidebar={onCloseSidebar}
      >
        {t("layouts.sidebar.menu.tables")}
      </SidebarNavItem>
      <SidebarNavItem
        to="/profile"
        Icon={IoPerson}
        onCloseSidebar={onCloseSidebar}
      >
        {t("layouts.sidebar.menu.profile")}
      </SidebarNavItem>
    </ul>
  );
};

export default SidebarNav;
