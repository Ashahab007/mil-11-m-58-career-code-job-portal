import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

// 29.2 Created a view applications component
const ViewApplications = () => {
  const { job_id } = useParams();
  //   29.6 get the data
  const applications = useLoaderData();

  //   30.2 now get the value of status and id from on change
  const handleStatusChange = (e, id) => {
    const status = e.target.value;
    const application_id = id;
    console.log(status, application_id);

    // 30.3 set the updated data i.e status to backend with help of id
    axios
      .patch(`http://localhost:3000/applications/${application_id}`, {
        status: status,
      })
      .then((res) => {
        console.log(res);
        // 30.5 update with alert
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Status has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3>
        {applications.length} Application for: {job_id}
      </h3>
      {/* 29.7 show the applicant's application data in the table*/}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                {/* 30.0 my requirement is recruiter can update the status of applicant by selecting a dropdown menu. So created a dropdown  */}
                <td>
                  <select
                    defaultValue={application.status} // that is if application contains any status then it will be set to defaultValue otherwise it will set Update Status
                    className="select"
                    // 30.1 created handle onChange to get the value from the dropdown menu also we need the application id to send the status to backend

                    onChange={(e) => handleStatusChange(e, application._id)}
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
