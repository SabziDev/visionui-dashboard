import { useMutation, useQuery } from "@tanstack/react-query";

import { getAdminApi, updateAdminApi } from "@/services/admin.api";

import useUpdateCache from "../useUpdateCache";

const useAdminQuery = () => {
  const queryKey = ["admins"];

  const { data: admins, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAdminApi({ signal }),
  });

  return { admin: admins?.[0], ...rest };
};

const useUpdateAdminMutation = () => {
  const queryKey = ["admins"];
  const updateCache = useUpdateCache({ type: "UPDATE", queryKey });

  const { mutate: updateAdmin, ...rest } = useMutation({
    mutationFn: ({ id, data }) => updateAdminApi({ id, data }),

    onSuccess: (_, { id, data }) => {
      updateCache({ id, data: { settings: data } });
    },
  });

  return { updateAdmin, ...rest };
};

export { useAdminQuery, useUpdateAdminMutation };
