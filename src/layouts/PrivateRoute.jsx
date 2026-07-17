import { use } from "react";
import { Navigate } from "react-router";

import Preloader from "@/components/Preloader/Preloader";
import AuthContext from "@/contexts/Auth";
import AppLoadError from "@/services/components/AppLoadError/AppLoadError";
import { useAdminsQuery } from "@/services/hooks/useAdmins/useAdmins";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { admin, isPending, isError } = useAdminsQuery();
  const { adminId } = use(AuthContext);

  if (isPending) return <Preloader />;
  if (isError) return <AppLoadError />;

  return adminId === admin.id ? (
    <MainLayout />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default PrivateRoute;
