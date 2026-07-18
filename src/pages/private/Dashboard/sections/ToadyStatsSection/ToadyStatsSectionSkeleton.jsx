import ScrollContainer from "react-indiana-drag-scroll";

import Skeleton from "@/components/Skeleton/Skeleton";

const TodayStatsSectionSkeleton = () => (
  <ScrollContainer className="flex gap-2 rounded-2xl py-1">
    {Array.from({ length: 4 }, (_, i) => (
      <Skeleton key={i} className="h-16 w-1/2 shrink-0 xl:max-w-96" />
    ))}
  </ScrollContainer>
);

export default TodayStatsSectionSkeleton;
