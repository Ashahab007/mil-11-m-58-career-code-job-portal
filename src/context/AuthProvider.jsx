import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../public/firebase/firebase.init";

// 5.0.1 then created Authprovider

const AuthProvider = ({ children }) => {
  // 13.1 import GoogleAuthProvider
  const provider = new GoogleAuthProvider();

  // 6.0.0 my requirement is enable user registration using loading state
  const [loading, setLoading] = useState(true);

  //   9.0.0 my requirement is show the logged in user in navbar
  const [user, setUser] = useState(null);
  // 6.0.1
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   7.0.0 my requirement is enable user sign in method

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 10.0.0 my requirement is implement sign out feature
  const userSignOut = () => {
    return signOut(auth);
  };

  // 13.0 my requirement is implementing google sign in feature
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  //  8.0.0 My requirement is persist the user using onAuthStateChange

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      // 9.0.1 set the current user
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 6.0.2 pass the createUser and loading
  //   7.0.2, 8.2, 9.1, 13.1
  const authInfo = {
    createUser,
    loading,
    signInUser,
    user,
    // 10.0.1
    userSignOut,
    googleSignIn,
  };
  // 5.0.2
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
