import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  // 23.1 creating a custom hook to get the user data. but we can also use like we previously used const {user}=use(AuthContext). But we have to the application of custom hook
  const authInfo = use(AuthContext);
  // 23.2 return it now to get the user data we just call the custom hook useAuth
  return authInfo;
};

export default useAuth;
