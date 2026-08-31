/* eslint-disable custom/add-blank-line-before-jump-statement */

import { use } from "react";
import { Navigate } from "react-router";

import AuthContext from "@/contexts/Auth/Auth";
import { useGetAdmin } from "@/services/features/admin/hooks/useAdmin/useAdmin";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { admin } = useGetAdmin();
  const { adminId } = use(AuthContext);

  if (adminId === admin.id) return <MainLayout />;
  return <Navigate to="/signin" replace />;
};

export default PrivateRoute;
