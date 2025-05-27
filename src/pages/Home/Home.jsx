import React, { Suspense, useState } from "react";
import Banner from "./Banner/Banner";
import HotJobs from "./HotJobs";
import { h3 } from "motion/react-client";

// 5.3 fetch the data from backend in home component. এখানে url যাবে না। home page এর ভেতরে component টা যখন load হবে তখন data টা দরকার। এককথায় যে component এ data show করবো সেখানে এইভাবে promise পাঠায় অই component এ fetch করবো।
const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);
const Home = () => {
  console.log(jobsPromise);

  // 5.0 My requirement is data that are manually inserted in 2.0 will be show in Home page HotJobs section
  // console.log(jobsPromise);

  return (
    <div>
      <Banner></Banner>
      {/* 5.4 then pass the jobsPromise as props. এখানে url যাবে না। home page এর ভেতরে component টা যখন load হবে তখন data টা দরকার */}
      <Suspense fallback={<h3>Hot Job is Loading . . .</h3>}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
