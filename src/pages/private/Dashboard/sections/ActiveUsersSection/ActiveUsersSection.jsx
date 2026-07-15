import { useTranslation } from "react-i18next";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ActiveUsersBadges from "./components/ActiveUsersBadges/ActiveUsersBadges";

const ActiveUsersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="h-111.25 w-full max-w-175 rounded-2xl p-4 primary-gradient">
      <div className="mb-6 h-55.5 max-w-155 mx-auto w-full rounded-2xl bg-navy" />

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
