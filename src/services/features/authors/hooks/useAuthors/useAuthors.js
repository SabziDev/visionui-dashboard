import { useQuery } from "@tanstack/react-query";

import { getAuthorsApi } from "../../authors.api";

const queryKey = ["authors"];

const authorsQueryOpts = {
  queryKey,
  queryFn: getAuthorsApi,
};

const useAuthorsQuery = () => {
  const { data: authors, ...rest } = useQuery(authorsQueryOpts);

  return { authors, ...rest };
};

export { useAuthorsQuery };
