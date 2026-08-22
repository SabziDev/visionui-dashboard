import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import queryClient from "./services/queryClient";

const AppProviders = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme
        baseColor="#4B5563"
        highlightColor="#6B7280"
        borderRadius={16}
        direction={i18n.dir()}
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
