import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.dashboard.title")}</title>
        <meta name="description" content={t("pagesMeta.dashboard.desc")} />
      </Head>

      <h1>Dash</h1>
    </>
  );
};

export default Dashboard;
