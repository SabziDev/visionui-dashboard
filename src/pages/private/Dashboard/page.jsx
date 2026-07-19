import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import ProjectsTable from "./components/ProjectsTable/ProjectsTable";
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
      <div className="flex-center flex-col gap-6 xl:flex-row">
        <SalesOverviewSection />
        <ActiveUsersSection />
      </div>
      <ProjectsTable isShowMoreBtn />
    </>
  );
};

export default Dashboard;
