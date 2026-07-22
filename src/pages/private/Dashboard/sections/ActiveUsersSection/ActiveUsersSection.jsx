import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";

import ActiveUsersBadges from "./components/ActiveUsersBadges/ActiveUsersBadges";
import ActiveUsersChart from "./components/ActiveUsersChart/ActiveUsersChart";

const ActiveUsersSection = () => {
  return (
    <div className="flex h-117 w-full max-w-162.5 flex-col justify-between section-card">
      <div className="mx-auto mb-6 h-55.5 w-full max-w-155 rounded-2xl bg-navy py-4">
        <ActiveUsersChart />
      </div>

      <div>
        <SectionTitle
          title="pages.private.dashboard.activeUsers.title"
          desc={{
            beforeValue: "pages.private.dashboard.activeUsers.desc.0",
            afterValue: "pages.private.dashboard.activeUsers.desc.1",
          }}
          isSplitDesc
        />
        <ActiveUsersBadges />
      </div>
    </div>
  );
};

export default ActiveUsersSection;
