import SidebarNav from "./components/SidebarNav/SidebarNav";
import SidebarSettings from "./components/SidebarSettings/SidebarSettings";
import SidebarTitle from "./components/SidebarTitle/SidebarTitle";
import SliderNeedHelp from "./components/SliderNeedHelp/SliderNeedHelp";

const Sidebar = () => {
  return (
    <aside className="fixed z-100 m-2.5 flex-items-center h-[calc(100dvh-20px)] w-70 flex-col rounded-2xl bg-navy px-4 py-9">
      <SidebarTitle />

      <div className="mt-5.5 flex h-full flex-col justify-between gap-5 overflow-x-hidden overflow-y-auto px-2">
        <SidebarNav />

        <div>
          <SidebarSettings />

          <SliderNeedHelp />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
