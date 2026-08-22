import { useQuery } from "@tanstack/react-query";

import { getProjectsApi } from "../../projects.api";

const queryKey = ["projects"];

const useProjectsQuery = () => {
  const { data: projects, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getProjectsApi(signal),
  });

  return { projects, ...rest };
};

export { useProjectsQuery };
