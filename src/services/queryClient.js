/* eslint-disable max-params */
/* eslint-disable unicorn/no-global-object-property-assignment */

import { MutationCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { i18n } from "@/i18n";

const toastIds = new WeakMap();

const FIVE_MINUTES = 1000 * 60 * 5;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: FIVE_MINUTES,
    },
  },

  mutationCache: new MutationCache({
    onMutate: (_, mutation) => {
      const toastMeta = mutation.options.meta?.toast;
      if (toastMeta?.type !== "LOADING") return;

      const toastMessage = toastMeta?.message ?? "loading";
      const toastId = toast.loading(i18n.t(toastMessage));
      toastIds.set(mutation, toastId);
    },
    onSuccess: (_, __, ___, mutation) => {
      const toastMeta = mutation.options.meta?.toast;
      const toastId = toastIds.get(mutation);
      const toastMessage = toastMeta?.message ?? "success";

      if (toastMeta?.type === "SUCCESS") toast.success(i18n.t(toastMessage));
      if (toastMeta?.type === "LOADING") {
        toast.success(i18n.t(toastMessage), { id: toastId });
      }
    },
    onError: (_, __, ___, mutation) => {
      const toastId = toastIds.get(mutation);

      if (toastId) {
        toast.dismiss(toastId);
        toastIds.delete(mutation);
      }
    },
  }),
});

window.__TANSTACK_QUERY_CLIENT__ = queryClient;
export default queryClient;
