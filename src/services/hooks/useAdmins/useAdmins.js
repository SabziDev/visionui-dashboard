import { useQuery } from "@tanstack/react-query";

import { getAdminsApi } from "@/services/adminsApi";

const useAdminsQuery = () => {
  const queryKey = ["admins"];

  const { data: admins, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAdminsApi({ signal }),
  });

  return { admin: admins?.[0], ...rest };
};

export { useAdminsQuery };
