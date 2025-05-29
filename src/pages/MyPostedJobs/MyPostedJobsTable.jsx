import React from "react";

const MyPostedJobsTable = ({ job, index }) => {
  console.log(job);
  const { _id, title, deadline } = job;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{deadline}</td>
      <td></td>
    </tr>
  );
};

export default MyPostedJobsTable;
