/* eslint-disable @stylistic/padding-line-between-statements */

import {
  mutationOptions,
  queryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import updateCache from "@/services/hooks/updateCache";

import { getAdminApi, updateAdminApi } from "../../admin.api";

const queryKey = ["admins"];

export const adminsQueryOpts = queryOptions({
  queryKey,
  queryFn: getAdminApi,
});
const adminUpdateOpts = mutationOptions({
  mutationFn: updateAdminApi,
  onSuccess: (_, payload) => {
    updateCache({ type: "UPDATE", queryKey, payload });
  },
});

const useAdminQuery = () => {
  const { data: admins, ...rest } = useQuery(adminsQueryOpts);

  return { admin: admins?.[0], ...rest };
};
const useUpdateAdminMutation = () => {
  const { mutate: updateAdmin, ...rest } = useMutation(adminUpdateOpts);

  return { updateAdmin, ...rest };
};

export { useAdminQuery, useUpdateAdminMutation };
