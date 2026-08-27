/* eslint-disable @stylistic/padding-line-between-statements */

import {
  mutationOptions,
  queryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import updateCache from "@/services/utils/updateCache";

import { getAdminApi, updateAdminApi } from "../../admin.api";

const queryKey = ["admins"];

export const adminsQueryOpts = queryOptions({
  queryKey,
  queryFn: getAdminApi,
});
const adminUpdateOpts = mutationOptions({
  mutationFn: updateAdminApi,
  meta: { toast: { type: "LOADING" } },
  onSuccess: (_, payload) => updateCache({ type: "UPDATE", queryKey, payload }),
});

const useGetAdmin = () => {
  const { data: admins, ...rest } = useQuery(adminsQueryOpts);

  return { admin: admins?.[0], ...rest };
};
const useUpdateAdmin = () => {
  const { mutate: updateAdmin, ...rest } = useMutation(adminUpdateOpts);

  return { updateAdmin, ...rest };
};

export { useGetAdmin, useUpdateAdmin };
