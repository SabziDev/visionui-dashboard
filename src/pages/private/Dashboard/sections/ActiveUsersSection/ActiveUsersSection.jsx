import { useTranslation } from "react-i18next";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ActiveUsersBadges from "./components/ActiveUsersBadges/ActiveUsersBadges";
import ActiveUsersChart from "./components/ActiveUsersChart/ActiveUsersChart";

const ActiveUsersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="h-111.25 w-full max-w-175 rounded-2xl p-4 primary-gradient">
      <div className="mx-auto mb-6 h-55.5 w-full max-w-155 rounded-2xl bg-navy py-4">
        <ActiveUsersChart />
      </div>

      <SectionTitle
        title={t("pages.private.dashboard.activeUsers.title")}
        beforeDesc={t("pages.private.dashboard.activeUsers.desc.0")}
        afterDesc={t("pages.private.dashboard.activeUsers.desc.1")}
      />

      <ActiveUsersBadges />
    </div>
  );
};

export default ActiveUsersSection;
