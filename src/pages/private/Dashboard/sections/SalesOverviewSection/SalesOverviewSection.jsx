import { useTranslation } from "react-i18next";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SalesOverviewChart from "./components/SalesOverviewChart/SalesOverviewChart";

const SalesOverviewSection = () => {
  const { t } = useTranslation();

  return (
    <div className="h-111.25 w-full max-w-230 rounded-2xl px-5.5 py-7 pb-110 bg-primary-gradient ltr">
      <SectionTitle
        title={t("pages.private.dashboard.salesOverview.title")}
        beforeDesc={t("pages.private.dashboard.salesOverview.desc.0")}
        afterDesc={t("pages.private.dashboard.salesOverview.desc.1")}
      />

      <SalesOverviewChart />
    </div>
  );
};

export default SalesOverviewSection;
