import React, { use } from "react";
import MyPostedJobsTable from "./MyPostedJobsTable";
// 28.10 receive as props myPostedJobsPromise and make a table
const MyPostedJobsList = ({ myPostedJobsPromise }) => {
  const jobs = use(myPostedJobsPromise);
  console.log(jobs);

  return (
    <div>
      <h1>Total Job Posted:{jobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* 28.11 make table row as component and pass the job as props */}
            {jobs.map((job, index) => (
              <MyPostedJobsTable
                key={job._id}
                job={job}
                index={index}
              ></MyPostedJobsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
