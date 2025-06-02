import React from "react";

const ApplicationTable = ({ application, index }) => {
  // 26.1
  const { title, company_logo, company, location } = application;
  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              {/* 26.2 set the just only the logo dynamically to show in table. later we will apply a delete button */}
              <img src={company_logo} />
            </div>
          </div>
          <div>
            <div className="font-bold">{application.applicant}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {location}
        <br />
        <span className="badge badge-ghost badge-sm">{title}</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ApplicationTable;
