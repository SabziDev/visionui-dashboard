import { queryOptions, useQuery } from "@tanstack/react-query";

import { getProjectsApi } from "../../projects.api";

const queryKey = ["projects"];

const projectsQueryOpts = queryOptions({
  queryKey,
  queryFn: getProjectsApi,
});

const useProjectsQuery = () => {
  const { data: projects, ...rest } = useQuery(projectsQueryOpts);

  return { projects, ...rest };
};

export { useProjectsQuery };
