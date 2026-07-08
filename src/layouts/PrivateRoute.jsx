import { use } from "react";
import { Navigate } from "react-router";

import AuthContext from "@/contexts/Auth";

import MainLayout from "./MainLayout/MainLayout";

const PrivateRoute = () => {
  const { admin, isAdminLoading } = use(AuthContext);

  if (isAdminLoading) return;

  return admin ? <MainLayout /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
