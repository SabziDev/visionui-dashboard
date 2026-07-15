import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import ActiveUsersSection from "./sections/ActiveUsersSection/ActiveUsersSection";
import OverviewSection from "./sections/OverviewSection/OverviewSection";
import SalesOverviewSection from "./sections/SalesOverviewSection/SalesOverviewSection";
import ToadyStatsSection from "./sections/ToadyStatsSection/ToadyStatsSection";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.dashboard.title")}</title>
        <meta name="description" content={t("pagesMeta.dashboard.desc")} />
      </Head>

      <ToadyStatsSection />
      <OverviewSection />
      <div className="flex-center flex-col md:flex-row gap-6">
        <SalesOverviewSection />
        <ActiveUsersSection />
      </div>
    </>
  );
};

export default Dashboard;
