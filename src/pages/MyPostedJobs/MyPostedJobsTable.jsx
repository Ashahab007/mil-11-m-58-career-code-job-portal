import React from "react";

const MyPostedJobsTable = ({ job, index }) => {
  console.log(job);
  const { title } = job;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
  );
};

export default MyPostedJobsTable;
