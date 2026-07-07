import { use } from "react";
import { Navigate, useOutlet } from "react-router";

import AuthContext from "@/contexts/Auth";

const PrivateRoute = () => {
  const outlet = useOutlet();
  const { admin, isAdminLoading } = use(AuthContext);

  if (isAdminLoading) return;

  return admin ? outlet : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
