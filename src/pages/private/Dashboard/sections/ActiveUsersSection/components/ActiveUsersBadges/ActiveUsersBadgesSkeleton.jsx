import Skeleton from "@/components/Skeleton/Skeleton";

const ActiveUsersBadgesSkeleton = () => (
  <div className="flex gap-4">
    {Array.from({ length: 4 }, (_, i) => (
      <Skeleton key={i} className="h-16 flex-1" />
    ))}
  </div>
);

export default ActiveUsersBadgesSkeleton;
