/* eslint-disable unicorn/no-global-object-property-assignment */

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import "./i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },

  queryCache: new QueryCache({
    onError: (err) => err.isShowToast !== false && toast.error(err.message),
  }),
  mutationCache: new MutationCache({
    onError: (err) => err.isShowToast !== false && toast.error(err.message),
  }),
});
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const AppProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          style: { background: "#0075ff", color: "#fff" },
        }}
      />
      {children}
    </QueryClientProvider>
  );
};

export default AppProviders;
