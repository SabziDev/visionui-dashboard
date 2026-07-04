import { useQuery } from "@tanstack/react-query";

import { getStatsApi } from "@/services/statsApi";

const useStatsQuery = () => {
  const queryKey = ["stats"];

  const { data, ...rest } = useQuery({
    queryKey,
    queryFn: () => getStatsApi(),
  });

  return { data, ...rest };
};

export { useStatsQuery };
