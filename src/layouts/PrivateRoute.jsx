/* eslint-disable @sabzidev/padding-before-jump-statement */

import { Navigate } from "react-router";

import { useAuth } from "@/contexts/Auth/Auth";
import { useGetAdmin } from "@/services/features/admin/hooks/useAdmin/useAdmin";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { admin } = useGetAdmin();
  const { adminId } = useAuth();

  if (adminId !== admin?.id) return <Navigate to="/signin" replace />;
  return <MainLayout />;
};

export default PrivateRoute;
