import { useQuery } from "@tanstack/react-query";

import { getStatsApi } from "../../stats.api";

const queryKey = ["stats"];

const statsQueryOpts = {
  queryKey,
  queryFn: ({ signal }) => getStatsApi(signal),
};

const useStatsQuery = () => {
  const { data: stats, ...rest } = useQuery(statsQueryOpts);

  return { stats, ...rest };
};

export { useStatsQuery };
