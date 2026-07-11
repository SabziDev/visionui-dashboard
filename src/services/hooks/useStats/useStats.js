import { useQuery } from "@tanstack/react-query";

import { getStatsApi } from "@/services/statsApi";

const useStatsQuery = () => {
  const queryKey = ["stats"];

  const { data: stats, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getStatsApi({ signal }),
  });

  return { stats, ...rest };
};

export { useStatsQuery };
