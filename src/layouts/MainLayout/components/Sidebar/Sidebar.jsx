import { useTranslation } from "react-i18next";
import { IoHelp } from "react-icons/io5";

import SidebarNav from "./components/SidebarNav/SidebarNav";
import SidebarSettings from "./components/SidebarSettings/SidebarSettings";
import SidebarTitle from "./components/SidebarTitle/SidebarTitle";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="fixed z-100 m-2.5 mr-0 flex-items-center h-[calc(100dvh-20px)] w-70 flex-col rounded-2xl bg-navy px-4 py-9">
      <SidebarTitle />

      <div className="mt-5.5 flex-justify-center flex-col gap-10">
        <SidebarNav />

        <div>
          <span className="ml-4 font-VazirMedium">
            {t("layouts.sidebar.menu.accountPages.title")}
          </span>

          <SidebarSettings />
        </div>

        <div className="relative h-42.5 w-55 overflow-hidden rounded-2xl p-4">
          <img
            src="/images/shapes/layouts/main/sidebar/bg.png"
            alt="halo-shape"
            className="absolute inset-0 -z-1"
          />

          <div className="flex-center size-9 rounded-xl bg-white">
            <IoHelp className="flex-center size-5 rounded-full bg-blue p-0.5 text-white" />
          </div>

          <div className="mt-5">
            <span className="font-VazirBold">
              {t("layouts.sidebar.needHelp.title")}
            </span>
            <p className="font-VazirRegular text-sm">
              {t("layouts.sidebar.needHelp.desc")}
            </p>

            <button
              type="button"
              className="mt-2.5 w-full rounded-xl bg-navy/70 px-10 py-2 font-VazirBold text-xs transition-colors hover:bg-navy/80"
            >
              {t("layouts.sidebar.needHelp.btn")}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
