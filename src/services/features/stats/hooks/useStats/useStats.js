import { queryOptions, useQuery } from "@tanstack/react-query";

import { getStatsApi } from "../../stats.api";

const queryKey = ["stats"];

const statsQueryOpts = queryOptions({
  queryKey,
  queryFn: getStatsApi,
});

const useGetStats = () => {
  const { data: stats, ...rest } = useQuery(statsQueryOpts);

  return { stats, ...rest };
};

export { useGetStats };
