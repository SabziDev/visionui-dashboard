import { useTranslation } from "react-i18next";

import { useStatsQuery } from "@/services/hooks/useStats/useStats";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SalesOverviewChart from "./components/SalesOverviewChart/SalesOverviewChart";

const SalesOverviewSection = () => {
  const { stats, isPending, isError } = useStatsQuery();

  const { t } = useTranslation();

  return (
    <div className="h-111.25 w-full max-w-230 rounded-2xl px-5.5 py-7 pb-110 ltr primary-gradient">
      <SectionTitle
        title={t("pages.private.dashboard.salesOverview.title")}
        beforeDesc={t("pages.private.dashboard.salesOverview.desc.0")}
        afterDesc={t("pages.private.dashboard.salesOverview.desc.1")}
      />

      <SalesOverviewChart
        data={stats?.salesOverview}
        isPending={isPending}
        isError={isError}
      />
    </div>
  );
};

export default SalesOverviewSection;
