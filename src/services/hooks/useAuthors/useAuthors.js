import { useQuery } from "@tanstack/react-query";

import { getAuthorsApi } from "@/services/authors.api";

const useAuthorsQuery = () => {
  const queryKey = ["authors"];

  const { data: authors, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAuthorsApi({ signal }),
  });

  return { authors, ...rest };
};

export { useAuthorsQuery };
