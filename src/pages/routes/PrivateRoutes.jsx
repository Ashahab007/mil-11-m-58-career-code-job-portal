import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

// 20.0 my requirement is create a private route and conditionally show the data if user is present or not
const PrivateRoutes = ({ children }) => {
  // 21.0 now my requirement is if signed out user is going to apply for the jobs it will redirect to sign in page after sign in it will redirect to the applied jobs page
  const { user, loading } = use(AuthContext);

  // 21.1 take location
  const location = useLocation();
  console.log(location); //in console u will find (pathname: /jobsapply/6834a62b328bd6a7f870489a)
  console.log(location.pathname);

  //   22.0 as we reload after logged in it will redirect to the login page to solve this we use loading spinner to persist that page
  if (loading) {
    return <span className="loading loading-spinner text-warning"></span>;
  }
  // 20.1 if user not present navigate to sign in page
  if (!user) {
    // 21.2 now set the location.pathname in a state
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }
  // 20.2 if present return the children
  return children;
};

export default PrivateRoutes;
