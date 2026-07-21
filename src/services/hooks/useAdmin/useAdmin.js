import { useQuery } from "@tanstack/react-query";

import { getAdminApi } from "@/services/adminApi";

const useAdminQuery = () => {
  const queryKey = ["admins"];

  const { data: admins, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAdminApi({ signal }),
  });

  return { admin: admins?.[0], ...rest };
};

export { useAdminQuery };
