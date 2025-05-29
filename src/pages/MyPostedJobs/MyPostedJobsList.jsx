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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
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
