import Head from "@/layouts/components/Head";

import ProjectsTableSection from "../sections/ProjectsTableSection/section";
import ActiveUsersSection from "./sections/ActiveUsersSection/section";
import OverviewSection from "./sections/OverviewSection/section";
import SalesOverviewSection from "./sections/SalesOverviewSection/section";
import ToadyStatsSection from "./sections/ToadyStatsSection/section";

const Dashboard = () => {
  return (
    <>
      <Head />

      <ToadyStatsSection />
      <OverviewSection />
      <div className="flex-center flex-col gap-6 xl:flex-row">
        <SalesOverviewSection />
        <ActiveUsersSection />
      </div>
      <ProjectsTableSection isShowMoreBtn />
    </>
  );
};

export default Dashboard;
