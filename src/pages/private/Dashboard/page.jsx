import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import Overview from "./components/Overview/Overview";
import ToadyStats from "./components/ToadyStats/ToadyStats";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.dashboard.title")}</title>
        <meta name="description" content={t("pagesMeta.dashboard.desc")} />
      </Head>

      <ToadyStats />
      <Overview />
    </>
  );
};

export default Dashboard;
