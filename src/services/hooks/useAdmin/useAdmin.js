import { useQuery } from "@tanstack/react-query";

import { getAdminsApi } from "@/services/adminsApi";

const useAdminQuery = () => {
  const queryKey = ["admins"];

  const { data, ...rest } = useQuery({
    queryKey,
    queryFn: () => getAdminsApi(),
  });

  return { data, ...rest };
};

export { useAdminQuery };
