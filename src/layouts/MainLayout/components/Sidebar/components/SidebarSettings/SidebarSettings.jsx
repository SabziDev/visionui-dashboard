import SidebarSettingsItemMenu from "./SidebarSettingsItem/SidebarSettingsItemMenu/SidebarSettingsItemMenu";
import SidebarSettingsItemTitle from "./SidebarSettingsItem/SidebarSettingsItemTitle/SidebarSettingsItemTitle";

const SidebarSettings = ({ setIsShowSidebar }) => {
  return (
    <div>
      <SidebarSettingsItemTitle />

      <SidebarSettingsItemMenu setIsShowSidebar={setIsShowSidebar} />
    </div>
  );
};

export default SidebarSettings;
