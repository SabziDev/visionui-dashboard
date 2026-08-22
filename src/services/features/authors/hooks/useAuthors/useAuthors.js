import { useQuery } from "@tanstack/react-query";

import { getAuthorsApi } from "../../authors.api";

const queryKey = ["authors"];

const authorsQueryOpts = {
  queryKey,
  queryFn: ({ signal }) => getAuthorsApi(signal),
};

const useAuthorsQuery = () => {
  const { data: authors, ...rest } = useQuery(authorsQueryOpts);

  return { authors, ...rest };
};

export { useAuthorsQuery };
