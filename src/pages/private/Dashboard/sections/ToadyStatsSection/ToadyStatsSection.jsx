import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { useStatsQuery } from "@/services/hooks/useStats/useStats";

import ToadyStat from "./components/ToadyStat/ToadyStat";
import ToadyStatsSectionSkelton from "./ToadyStatsSectionSkelton";

const ToadyStatsSection = () => {
  const { stats, isPending } = useStatsQuery();

  if (isPending) return <ToadyStatsSectionSkelton />;

  return (
    <ScrollContainer className="flex-items-center justify-between gap-2 *:flex-1 xl:gap-6">
      {stats &&
        stats.today.map((stat) => <ToadyStat key={stat.id} data={stat} />)}
    </ScrollContainer>
  );
};

export default ToadyStatsSection;
