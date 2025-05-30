import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";

// 25.1 as we need to fetch the data from the applications server here we will do it a different way to fetch using function. When call that function it will take the email and set to the url and fetch the data of that email.

//  Note: If u need the data of user.email in other section of website u can export it from here or u can make a folder name api under src folder and create another file applicationsPromise.js then export it from there. this is for large application.
const applicationsPromise = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`).then(
    (res) => res.json()
  );
};
// 24.0 Now my requirement is show the specific users application in ui when user is logged in. That's why created MyApplication component and wrap with a <PrivateRoute></PrivateRoute>.

const MyApplications = () => {
  // 25.0 My requirement is show my application data in ui

  //   25.2 as we need the user information from custom hook useAuth
  const { user } = useAuth();
  return (
    <Suspense fallback={"Your Application is loading . . ."}>
      {/* 25.3 pass the applicationsPromise as props and also call the applicationsPromise function here with sending the user email from useAuth() via parameter */}
      <ApplicationList
        applicationsPromise={applicationsPromise(user.email)}
      ></ApplicationList>
      ;
    </Suspense>
  );
};

export default MyApplications;
