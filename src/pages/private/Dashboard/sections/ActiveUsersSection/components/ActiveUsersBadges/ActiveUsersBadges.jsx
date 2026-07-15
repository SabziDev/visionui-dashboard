import Skelton from "@/components/Skelton/Skelton";
import { useStatsQuery } from "@/services/hooks/useStats/useStats";

import ActiveUsersBadge from "./ActiveUsersBadge/ActiveUsersBadge";

const ActiveUsersBadges = () => {
  const { stats, isPending, isError } = useStatsQuery();

  if (isPending || isError) {
    return (
      <Skelton className="gap-2 bg-linear *:h-16 *:w-1/2 xl:*:max-w-90">
        <div />
        <div />
        <div />
        <div />
      </Skelton>
    );
  }

  return (
    <div className="flex-items-center justify-between">
      {stats &&
        stats.generalData.map((stat) => (
          <ActiveUsersBadge key={stat.id} data={stat} />
        ))}
    </div>
  );
};

export default ActiveUsersBadges;
