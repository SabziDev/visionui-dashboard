import { queryOptions, useQuery } from "@tanstack/react-query";

import { getAuthorsApi } from "../../authors.api";

const queryKey = ["authors"];

const authorsQueryOpts = queryOptions({
  queryKey,
  queryFn: getAuthorsApi,
});

const useGetAuthors = () => {
  const { data: authors, ...rest } = useQuery(authorsQueryOpts);

  return { authors, ...rest };
};

export { useGetAuthors };
