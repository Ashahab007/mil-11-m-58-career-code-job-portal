import React from "react";
import { AuthContext } from "./AuthContext";
// 5.1 then created Authprovider

const AuthProvider = ({ children }) => {
  const authInfo = {};
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
