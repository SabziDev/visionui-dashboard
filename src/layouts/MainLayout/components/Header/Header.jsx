import { use } from "react";
import { useTranslation } from "react-i18next";
import { IoMdSettings } from "react-icons/io";
import { IoNotificationsSharp, IoPerson, IoSearch } from "react-icons/io5";
import { useMatches } from "react-router";

import AuthContext from "@/contexts/Auth";

const Header = () => {
  const { admin } = use(AuthContext);
  const urlMatches = useMatches();
  const { t } = useTranslation();

  const currentUrlMatch = urlMatches.at(-1);

  const { pageTitle, pagePath } = currentUrlMatch.handle;

  return (
    <header>
      <div className="container">
        <div className="flex-items-center justify-between">
          <div className="select-none">
            <div className="mb-1.5 font-VazirMedium text-sm">
              <span className="text-slate-400">Pages</span>
              <span> / {pagePath}</span>
            </div>
            <span className="font-VazirMedium">{t(pageTitle)}</span>
          </div>
          <div className="flex-center gap-x-8">
            <label
              htmlFor="search"
              className="flex-items-center h-12 w-60 justify-start gap-x-2 rounded-2xl border border-slate-500/50 px-3 py-3.5"
            >
              <IoSearch className="size-5 cursor-pointer" />
              <input
                id="search"
                type="search"
                placeholder={t("layouts.header.searchInput.placeholder")}
                className="ring-0"
              />
            </label>

            <div className="flex-center cursor-pointer gap-x-1 text-gray-500">
              <IoPerson className="size-5" />
              <span className="font-VazirMedium">{admin.profile.fullName}</span>
            </div>
            <div className="flex-center gap-x-4 text-gray-500 *:size-5 *:cursor-pointer">
              <IoNotificationsSharp />
              <IoMdSettings />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
