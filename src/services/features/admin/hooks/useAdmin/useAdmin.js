import { useMutation, useQuery } from "@tanstack/react-query";

import useUpdateCache from "@/services/hooks/useUpdateCache";

import { getAdminApi, updateAdminApi } from "../../admin.api";

const queryKey = ["admins"];

const useAdminQuery = () => {
  const { data: admins, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAdminApi({ signal }),
  });

  return { admin: admins?.[0], ...rest };
};

const useUpdateAdminMutation = () => {
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
