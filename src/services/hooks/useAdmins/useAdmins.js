import { useQuery } from "@tanstack/react-query";

import { getAdminsApi } from "@/services/adminsApi";

const useAdminsQuery = () => {
  const queryKey = ["admins"];

  const { data: admins, ...rest } = useQuery({
    queryKey,
    queryFn: () => getAdminsApi(),
  });

  return { admins, ...rest };
};

export { useAdminsQuery };
