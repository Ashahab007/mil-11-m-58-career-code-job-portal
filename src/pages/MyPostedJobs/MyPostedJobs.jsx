import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";

// 28.7
const myPostedJobsPromise = (email) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`).then((res) =>
    res.json()
  );
};
// 28.1 create a MyPostedJobs component
const MyPostedJobs = () => {
  // 28.8 get the user from custom hook
  const { user } = useAuth();
  return (
    <Suspense fallback={"Your Application is loading . . ."}>
      {/* 28.9 pass the myPostedJobsPromise as props and also call the myPostedJobsPromise function here with sending the user.email from useAuth() via parameter */}
      <MyPostedJobsList
        myPostedJobsPromise={myPostedJobsPromise(user.email)}
      ></MyPostedJobsList>
    </Suspense>
  );
};

export default MyPostedJobs;
