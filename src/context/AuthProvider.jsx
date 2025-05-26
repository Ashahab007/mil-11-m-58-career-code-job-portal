import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../public/firebase/firebase.init";

// 5.1 then created Authprovider

const AuthProvider = ({ children }) => {
  // 6.0 my requirement is enable user registration using loading state
  const [loading, setLoading] = useState(true);
  // 6.1
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   7.0 my requirement is enable user sign in method

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // 6.2 pass the createUser and loading
  7.2;
  const authInfo = { createUser, loading, signInUser };
  // 5.2
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
