import { useQuery } from "@tanstack/react-query";

import { getAuthorsApi } from "../../authors.api";

const queryKey = ["authors"];

const useAuthorsQuery = () => {
  const { data: authors, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAuthorsApi(signal),
  });

  return { authors, ...rest };
};

export { useAuthorsQuery };
