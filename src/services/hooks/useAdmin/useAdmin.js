import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getAdminApi, updateAdminApi } from "@/services/adminApi";

const useAdminQuery = () => {
  const queryKey = ["admins"];

  const { data: admins, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getAdminApi({ signal }),
  });

  return { admin: admins?.[0], ...rest };
};

const useAdminMutation = () => {
  const queryClient = useQueryClient();

  const queryKey = ["admins"];

  const { mutate: updateAdmin, ...rest } = useMutation({
    mutationFn: ({ data, adminId }) => updateAdminApi({ data, adminId }),

    onSuccess: (_, { data, adminId }) => {
      queryClient.setQueryData(queryKey, (cachedAdmins) =>
        cachedAdmins.map((admin) =>
          admin.id === adminId
            ? {
                ...admin,
                settings: data,
              }
            : admin,
        ),
      );
    },
  });

  return { updateAdmin, ...rest };
};

export { useAdminMutation, useAdminQuery };
