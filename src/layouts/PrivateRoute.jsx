import { use } from "react";
import { Navigate } from "react-router";

import AuthContext from "@/contexts/Auth";
import { useGetAdmin } from "@/services/features/admin/hooks/useAdmin/useAdmin";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { admin } = useGetAdmin();
  const { adminId } = use(AuthContext);

  return adminId === admin.id ? (
    <MainLayout />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default PrivateRoute;
