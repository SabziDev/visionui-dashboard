import { useTranslation } from "react-i18next";
import { useMatches } from "react-router";

import Badges from "./components/Badges/Badges";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import SearchInput from "./components/SearchInput/SearchInput";

const Header = () => {
  const urlMatches = useMatches();

  const { t } = useTranslation();

  const currentUrlMatch = urlMatches.at(-1);

  const { pageTitle, pagePath } = currentUrlMatch.handle ?? {};

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

            <Badges />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
