import { useQuery } from "@tanstack/react-query";

import { getAuthorsApi } from "@/services/authorsApi";

const useAuthorsQuery = () => {
  const queryKey = ["authors"];

  const { data, ...rest } = useQuery({
    queryKey,
    queryFn: () => getAuthorsApi(),
  });

  return { data, ...rest };
};

export { useAuthorsQuery };
