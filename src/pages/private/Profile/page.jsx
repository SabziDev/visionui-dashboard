import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import CarInfoSection from "./sections/CarInfoSection/CarInfoSection";
import OverviewSection from "./sections/OverviewSection/OverviewSection";
import PlatformSettingsSection from "./sections/PlatformSettingsSection/PlatformSettingsSection";
import ProfileInfoSection from "./sections/ProfileInfoSection/ProfileInfoSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
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
      <div className="grid grid-cols-1 gap-6 [grid-template-areas:'welcome'_'profile'_'car'] sm:grid-cols-2 sm:[grid-template-areas:'welcome_profile'_'car_car'] 2xl:grid-cols-[1fr_2fr_1fr] 2xl:[grid-template-areas:'welcome_car_profile'] fa:rtl">
        <WelcomebackSection />
        <CarInfoSection />
        <ProfileInfoSection />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_2fr] 2xl:grid-cols-[1fr_3fr] fa:rtl">
        <PlatformSettingsSection />
        <ProjectsSection />
      </div>
    </>
  );
};

export default Profile;
