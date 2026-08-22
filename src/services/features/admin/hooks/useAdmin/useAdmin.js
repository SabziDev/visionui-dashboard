import { useMutation, useQuery } from "@tanstack/react-query";

import updateCache from "@/services/hooks/updateCache";

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
  const { mutate: updateAdmin, ...rest } = useMutation({
    mutationFn: ({ id, data }) => updateAdminApi({ id, data }),

    onSuccess: (_, payload) =>
      updateCache({ type: "UPDATE", queryKey, payload }),
  });

  return { updateAdmin, ...rest };
};

export { useAdminQuery, useUpdateAdminMutation };
