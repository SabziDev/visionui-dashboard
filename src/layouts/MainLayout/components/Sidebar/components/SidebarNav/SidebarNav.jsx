/* eslint-disable @eslint-react/no-array-index-key */

import { useTranslation } from "react-i18next";

import sidebar from "@/data/sidebar/sidebar";

import SidebarNavItem from "./SidebarNavItem/SidebarNavItem";

const SidebarNav = ({ onCloseSidebar }) => {
  const { t } = useTranslation();

  return (
    <ul className="flex-center flex-col gap-3">
      {sidebar.map((item, i) => (
        <SidebarNavItem
          key={i}
          to={item.to}
          Icon={item.Icon}
          onCloseSidebar={onCloseSidebar}
        >
          {t(item.text)}
        </SidebarNavItem>
      ))}
    </ul>
  );
};

export default SidebarNav;
