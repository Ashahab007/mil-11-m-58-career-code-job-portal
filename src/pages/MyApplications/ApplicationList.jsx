import React, { use } from "react";
import ApplicationTable from "./ApplicationTable";
// 25.4 received as props
const ApplicationList = ({ applicationsPromise }) => {
  const applications = use(applicationsPromise);
  console.log(applications);

  //   25.5 show in table
  return (
    <div className="overflow-x-auto">
      <h1>Total Application Applied: {applications.length}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* 25.6 created a table row component and pass as props */}
          {applications.map((application, index) => (
            <ApplicationTable
              key={application._id}
              application={application}
              index={index}
            ></ApplicationTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
