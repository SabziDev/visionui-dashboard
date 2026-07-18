/* eslint-disable unicorn/no-global-object-property-assignment */

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { i18n } from "./i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },

  queryCache: new QueryCache({
    onError: (err) =>
      err.isShowToast !== false && toast.error(i18n.t(err.message)),
  }),
  mutationCache: new MutationCache({
    onError: (err) =>
      err.isShowToast !== false && toast.error(i18n.t(err.message)),
  }),
});
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const AppProviders = ({ children }) => {
  const { i18n: i18next } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme
        baseColor="#4B5563"
        highlightColor="#6B7280"
        borderRadius={16}
        direction={i18next.dir()}
        duration={2.2}
      >
        <Toaster
          toastOptions={{
            style: { background: "#0075ff", color: "#fff" },
          }}
        />
        {children}
      </SkeletonTheme>
    </QueryClientProvider>
  );
};

export default AppProviders;
