/* eslint-disable @eslint-react/no-unstable-context-value */

import { createContext } from "react";

import useCookie from "@/hooks/useCookie";

const AuthContext = createContext(null);
AuthContext.displayName = "AuthContext";

const AuthContextProvider = ({ children }) => {
  const [adminId, setAdminId] = useCookie({
    key: "admin",
    defaultValue: null,
  });

  return <AuthContext value={{ adminId, setAdminId }}>{children}</AuthContext>;
};

export { AuthContextProvider };
export default AuthContext;
