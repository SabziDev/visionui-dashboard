import SidebarSettingsItemMenu from "./SidebarSettingsItem/SidebarSettingsItemMenu/SidebarSettingsItemMenu";
import SidebarSettingsItemTitle from "./SidebarSettingsItem/SidebarSettingsItemTitle/SidebarSettingsItemTitle";

const SidebarSettings = ({ toggleSidebar }) => {
  return (
    <div>
      <SidebarSettingsItemTitle />

      <SidebarSettingsItemMenu toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default SidebarSettings;
