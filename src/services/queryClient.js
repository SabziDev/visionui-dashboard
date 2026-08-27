/* eslint-disable max-params */
/* eslint-disable unicorn/no-global-object-property-assignment */

import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
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

  queryCache: new QueryCache({
    onError: (err) => {
      if (err.customFlags?.isShowToast !== false)
        toast.error(i18n.t(err.message));
    },
  }),
  mutationCache: new MutationCache({
    onMutate: (_, mutation) => {
      const toastMeta = mutation.options.meta?.toast;
      const toastMessage = toastMeta.message ?? "loading";

      if (toastMeta?.type !== "LOADING") {
        const toastId = toast.loading(i18n.t(toastMessage));
        toastIds.set(mutation, toastId);
      }
    },
    onSuccess: (_, __, ___, mutation) => {
      const toastMeta = mutation.options.meta?.toast;
      const toastMessage = toastMeta?.message ?? "success";
      const toastId = toastIds.get(mutation);

      if (toastMeta?.type === "SUCCESS") toast.success(i18n.t(toastMessage));
      if (toastMeta?.type === "LOADING") {
        toast.success(i18n.t(toastMessage), { id: toastId });
        toastIds.delete(mutation);
      }
    },
    onError: (err, _, __, mutation) => {
      const toastId = toastIds.get(mutation);

      if (toastId) {
        toast.error(i18n.t(err.message), { id: toastId });
        toastIds.delete(mutation);
      } else if (err.customFlags?.isShowToast !== false) {
        toast.error(i18n.t(err.message));
      }
    },
  }),
});

window.__TANSTACK_QUERY_CLIENT__ = queryClient;
export default queryClient;
