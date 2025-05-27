import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  // 19.4 get the data and show in ui
  const job = useLoaderData();
  console.log(job?.title);

  //   7.0 my requirement is if user is present, on clicking the apply jobs the user will redirect to the apply jobs route, if user is not present it will render to the sign in page.
  return (
    <div className="mb-8">
      <h1 className="text-2xl">{job.title}</h1>
      <p>{job.company}</p>
      {/* 7.1 create dynamic route */}
      <Link to={`/jobsapply/${job._id}`}>
        <button className="btn btn-primary">Apply Jobs</button>
      </Link>
    </div>
  );
};

export default JobDetails;
