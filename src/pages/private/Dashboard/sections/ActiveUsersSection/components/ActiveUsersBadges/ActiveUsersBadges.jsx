import ScrollContainer from "react-indiana-drag-scroll";

import { useGetStats } from "@/services/features/stats/hooks/useStats/useStats";

import ActiveUsersBadge from "./ActiveUsersBadge/ActiveUsersBadge";
import ActiveUsersBadgesSkeleton from "./ActiveUsersBadgesSkeleton";

const ActiveUsersBadges = () => {
  const { stats, isPending } = useGetStats();

  if (isPending) return <ActiveUsersBadgesSkeleton />;

  return (
    <ScrollContainer className="flex-items-center justify-between gap-6 fa:rtl">
      {stats.generalData.map((stat) => (
        <ActiveUsersBadge key={stat.id} data={stat} />
      ))}
    </ScrollContainer>
  );
};

export default ActiveUsersBadges;
