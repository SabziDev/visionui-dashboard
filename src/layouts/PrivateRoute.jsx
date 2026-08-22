import { use } from "react";
import { Navigate } from "react-router";

import AuthContext from "@/contexts/Auth";
import { useAdminQuery } from "@/services/features/admin/hooks/useAdmin/useAdmin";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { admin } = useAdminQuery();
  const { adminId } = use(AuthContext);

  return adminId === admin.id ? (
    <MainLayout />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default PrivateRoute;
