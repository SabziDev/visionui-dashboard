import { useTranslation } from "react-i18next";

import useCurrentRouteMeta from "@/layouts/hooks/useCurrentRouteMeta";

import Badges from "./components/Badges/Badges";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import SearchInput from "./components/SearchInput/SearchInput";

const Header = ({ onShowSidebar }) => {
  const { pageTitle, pagePath } = useCurrentRouteMeta("breadcrumb");
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <div className="flex-items-center justify-between">
          <div className="select-none">
            <Breadcrumb pagePath={pagePath} />
            <span className="font-VazirMedium">{t(pageTitle)}</span>
          </div>
          <div className="flex-center gap-x-8">
            <SearchInput />

            <Badges onShowSidebar={onShowSidebar} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
