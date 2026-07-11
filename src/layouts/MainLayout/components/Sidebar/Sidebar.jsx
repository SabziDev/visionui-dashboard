import clsx from "clsx";
import { useEffect } from "react";
import { useLocation } from "react-router";

import SidebarNav from "./components/SidebarNav/SidebarNav";
import SidebarSettings from "./components/SidebarSettings/SidebarSettings";
import SidebarTitle from "./components/SidebarTitle/SidebarTitle";
import SliderNeedHelp from "./components/SliderNeedHelp/SliderNeedHelp";

const Sidebar = ({ isShowSidebar, setIsShowSidebar }) => {
  const location = useLocation();

  useEffect(
    () => setIsShowSidebar(false),
    [location.pathname, setIsShowSidebar],
  );

  return (
    <>
      {isShowSidebar && (
        <span
          onClick={() => setIsShowSidebar((state) => !state)}
          className="fixed inset-0 z-99 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={clsx([
          "fixed z-100 m-2.5 flex-items-center h-[calc(100dvh-20px)] w-65 flex-col rounded-2xl bg-navy p-2 py-9 transition-[translate,opacity] duration-300 2xl:w-70",
          isShowSidebar
            ? "max-lg:translate-x-0 max-lg:opacity-100"
            : "max-lg:opacity-0 ltr:max-lg:-translate-x-full rtl:max-lg:translate-x-full",
        ])}
      >
        <SidebarTitle />

        <div className="mt-5.5 flex-justify-center size-full flex-col justify-between gap-10 overflow-x-hidden overflow-y-auto px-2">
          <SidebarNav />

          <div>
            <SidebarSettings />

            <SliderNeedHelp />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
