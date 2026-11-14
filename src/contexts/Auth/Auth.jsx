/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @stylistic/padding-line-between-statements */
/* eslint-disable @eslint-react/no-unstable-context-value */

import { createContext, use } from "react";

import useCookie from "@/hooks/storage/useCookie";

const AuthContext = createContext(null);
AuthContext.displayName = "AuthContext";

const AuthContextProvider = ({ children }) => {
  const [adminId, setAdminId] = useCookie({
    key: "admin",
    defaultValue: null,
  });

  return <AuthContext value={{ adminId, setAdminId }}>{children}</AuthContext>;
};
const useAuth = () => {
  const context = use(AuthContext);

  if (!context) {
    throw new Error("This hook(context) must be used within its provider!");
  }

  return context;
};

export { AuthContextProvider, useAuth };
