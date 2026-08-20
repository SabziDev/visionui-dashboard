import clsx from "clsx";

import Overlay from "@/components/Overlay/Overlay";

import SidebarNav from "./components/SidebarNav/SidebarNav";
import SidebarNeedHelp from "./components/SidebarNeedHelp/SidebarNeedHelp";
import SidebarSettings from "./components/SidebarSettings/SidebarSettings";
import SidebarTitle from "./components/SidebarTitle/SidebarTitle";

const Sidebar = ({ isShowSidebar, toggleSidebar }) => {
  return (
    <>
      <Overlay
        isShow={isShowSidebar}
        onClose={toggleSidebar}
        className="lg:hidden"
      />

      <aside
        className={clsx([
          "fixed z-100 m-2.5 flex-items-center h-[calc(100dvh-20px)] w-65 flex-col rounded-2xl bg-navy p-2 py-9 transition-[translate,opacity] duration-250 2xl:w-70",
          isShowSidebar
            ? "max-lg:translate-x-0 max-lg:opacity-100"
            : "max-lg:opacity-0 en:max-lg:-translate-x-full fa:max-lg:translate-x-full",
        ])}
      >
        <SidebarTitle onCloseSidebar={toggleSidebar} />

        <div className="mt-5.5 flex-justify-center size-full flex-col justify-between gap-10 overflow-x-hidden overflow-y-auto px-2">
          <SidebarNav onCloseSidebar={toggleSidebar} />

          <div>
            <SidebarSettings toggleSidebar={toggleSidebar} />

            <SidebarNeedHelp />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
