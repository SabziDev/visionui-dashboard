/* eslint-disable unicorn/no-global-object-property-assignment */

import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { i18n } from "@/i18n";

const FIVE_MINUTES = 1000 * 60 * 5;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: FIVE_MINUTES,
    },
  },

  queryCache: new QueryCache({
    onError: (err) =>
      err.customFlags?.isShowToast !== false &&
      toast.error(i18n.t(err.message)),
  }),
  mutationCache: new MutationCache({
    onError: (err) =>
      err.customFlags?.isShowToast !== false &&
      toast.error(i18n.t(err.message)),
    onSuccess: () => toast.success(i18n.t("words.toast")),
  }),
});
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

export default queryClient;
