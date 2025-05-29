import React from "react";
import { Link } from "react-router";

const MyPostedJobsTable = ({ job, index }) => {
  console.log(job);
  // const { _id, title, deadline } = job;
  // 29.0 My requirement is recruiter want to see the how many applicants apply for the specific jobs on clicking the View Application
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{job.title}</td>
      <td>{job.deadline}</td>
      {/* 29.1 Created a link for View Application  */}
      <td>
        <Link to={`/applications/${job._id}`}>View Application</Link>{" "}
      </td>
    </tr>
  );
};

export default MyPostedJobsTable;
