import { useQuery } from "@tanstack/react-query";

import { getAuthorsApi } from "@/services/authorsApi";

const useAuthorsQuery = () => {
  const queryKey = ["authors"];

  const { data: authors, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAuthorsApi({ signal }),
  });

  return { authors, ...rest };
};

export { useAuthorsQuery };
