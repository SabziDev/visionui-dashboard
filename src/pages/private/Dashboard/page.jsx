import { useTranslation } from "react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";

import Head from "@/pages/components/Head";

import ReferralTracking from "./components/ReferralTracking/ReferralTracking";
import SatisfactionRate from "./components/SatisfactionRate/SatisfactionRate";
import ToadyStats from "./components/ToadyStats/ToadyStats";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.dashboard.title")}</title>
        <meta name="description" content={t("pagesMeta.dashboard.desc")} />
      </Head>

      <ToadyStats />

      <div className="flex flex-col justify-between gap-6 md:items-center 2xl:flex-row en:ltr fa:rtl">
        <WelcomeCard />

        <ScrollContainer className="flex-items-center gap-6 sm:justify-center">
          <SatisfactionRate value={75} />
          <ReferralTracking value={93} />
        </ScrollContainer>
      </div>
    </>
  );
};

export default Dashboard;
