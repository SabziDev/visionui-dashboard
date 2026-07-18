import { useQuery } from "@tanstack/react-query";

import { getProjectsApi } from "@/services/projectsApi";

const useProjectsQuery = () => {
  const queryKey = ["projects"];

  const { data: projects, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getProjectsApi({ signal }),
  });

  return { projects, ...rest };
};

export { useProjectsQuery };
