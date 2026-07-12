import ScrollContainer from "react-indiana-drag-scroll";

import Skelton from "@/components/Skelton/Skelton";

import "react-indiana-drag-scroll/dist/style.css";

import AppLoadError from "@/services/components/AppLoadError/AppLoadError";
import { useStatsQuery } from "@/services/hooks/useStats/useStats";

import ToadyStat from "./ToadyStat/ToadyStat";

const ToadyStats = () => {
  const { stats, isPending, isError } = useStatsQuery();

  if (isError) {
    return <AppLoadError />;
  }
  if (isPending) {
    return (
      <Skelton className="gap-2 *:h-16 *:w-1/2">
        <div />
        <div />
        <div />
        <div />
      </Skelton>
    );
  }

  return (
    <ScrollContainer className="flex-items-center justify-between gap-2 *:flex-1 xl:gap-6">
      {stats &&
        stats.today.map((stat) => <ToadyStat key={stat.id} data={stat} />)}
    </ScrollContainer>
  );
};

export default ToadyStats;
