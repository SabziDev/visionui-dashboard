import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import CarInfoSection from "./sections/CarInfoSection/CarInfoSection";
import OverviewSection from "./sections/OverviewSection/OverviewSection";
import ProfileInfoSection from "./sections/ProfileInfoSection/ProfileInfoSection";
import WelcomebackSection from "./sections/WelcomebackSection/WelcomebackSection";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.profile.title")}</title>
        <meta name="description" content={t("pagesMeta.profile.desc")} />
      </Head>

      <OverviewSection />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-[320px_1fr_450px] fa:rtl">
        <WelcomebackSection />
        <CarInfoSection />
        <ProfileInfoSection />
      </div>
    </>
  );
};

export default Profile;
