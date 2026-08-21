import { useQuery } from "@tanstack/react-query";

import { getStatsApi } from "../../stats.api";

const queryKey = ["stats"];

const useStatsQuery = () => {
  const { data: stats, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getStatsApi({ signal }),
  });

  return { stats, ...rest };
};

export { useStatsQuery };
