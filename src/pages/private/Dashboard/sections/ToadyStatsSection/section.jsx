import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { useStatsQuery } from "@/services/hooks/useStats/useStats";

import ToadyStat from "./components/ToadyStat/ToadyStat";
import TodayStatsSectionSkeleton from "./SectionSkeleton";

const ToadyStatsSection = () => {
  const { stats, isPending } = useStatsQuery();

  if (isPending) return <TodayStatsSectionSkeleton />;

  return (
    <ScrollContainer className="flex-items-center justify-between gap-2 *:flex-1 xl:gap-6 fa:rtl">
      {stats.today.map((stat) => (
        <ToadyStat key={stat.id} data={stat} />
      ))}
    </ScrollContainer>
  );
};

export default ToadyStatsSection;
