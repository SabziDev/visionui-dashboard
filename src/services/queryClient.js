/* eslint-disable max-params */
/* eslint-disable unicorn/no-global-object-property-assignment */

import { MutationCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { i18n } from "@/i18n";

const FIVE_MINUTES = 1000 * 60 * 5;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: FIVE_MINUTES,
    },
  },

  mutationCache: new MutationCache({
    onSuccess: (_data, _vars, _onMR, mutation) => {
      const message = mutation.options.meta?.successMessage;
      if (message) toast.success(i18n.t(message));
    },
  }),
});
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

export default queryClient;
