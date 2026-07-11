import ScrollContainer from "react-indiana-drag-scroll";

import { useStatsQuery } from "@/services/hooks/useStats/useStats";

import "react-indiana-drag-scroll/dist/style.css";

import ToadyStat from "./ToadyStat/ToadyStat";

const ToadyStats = () => {
  const { stats } = useStatsQuery();

  return (
    <ScrollContainer className="flex-items-center justify-between gap-2 *:flex-1 xl:gap-6">
      {stats &&
        stats.today.map((stat) => <ToadyStat key={stat.id} data={stat} />)}
    </ScrollContainer>
  );
};

export default ToadyStats;
