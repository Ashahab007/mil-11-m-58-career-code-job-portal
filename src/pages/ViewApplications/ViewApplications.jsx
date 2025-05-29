import React from "react";
import { useLoaderData, useParams } from "react-router";

// 29.2 Created a view applications component
const ViewApplications = () => {
  const { job_id } = useParams();
  //   29.6 get the data
  const applications = useLoaderData();
  return (
    <div>
      <h3>
        {applications.length} Application for: {job_id}
      </h3>
    </div>
  );
};

export default ViewApplications;
