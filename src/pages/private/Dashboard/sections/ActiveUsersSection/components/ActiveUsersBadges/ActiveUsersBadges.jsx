import ScrollContainer from "react-indiana-drag-scroll";

import { useStatsQuery } from "@/services/hooks/useStats/useStats";

import ActiveUsersBadge from "./ActiveUsersBadge/ActiveUsersBadge";
import ActiveUsersBadgesSkeleton from "./ActiveUsersBadgesSkeleton";

const ActiveUsersBadges = () => {
  const { stats, isPending } = useStatsQuery();

  if (isPending) return <ActiveUsersBadgesSkeleton />;

  return (
    <ScrollContainer className="flex-items-center justify-between gap-6">
      {stats.generalData.map((stat) => (
        <ActiveUsersBadge key={stat.id} data={stat} />
      ))}
    </ScrollContainer>
  );
};

export default ActiveUsersBadges;
