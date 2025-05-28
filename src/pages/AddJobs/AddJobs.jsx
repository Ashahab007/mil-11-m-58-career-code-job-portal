import React from "react";
// 27.2 created component with form
const AddJobs = () => {
  return (
    <div className="mt-10 mb-10">
      <h3 className="text-center font-bold text-4xl">Add Your Jobs</h3>
      <form className="flex justify-center ">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            placeholder="Job Title"
            name="title"
          />

          <label className="label">Company Name</label>
          <input
            type="text"
            className="input"
            placeholder="Company Name"
            name="company"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            placeholder="Location"
            name="location"
          />
          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input"
            placeholder="URL"
            name="company_logo"
          />

          {/* Job Type */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Job Type</label>
            <div className="filter">
              <input
                className="btn filter-reset"
                type="radio"
                name="jobType"
                aria-label="All"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="On-Site"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Remote"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Hybrid"
              />
            </div>
          </fieldset>

          {/* Job Category */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Job Category</label>

            <select
              defaultValue="Pick a font"
              className="select select-ghost"
              name="category"
            >
              <option disabled={true}>Pick a Category</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Engineering</option>
              <option>Finance</option>
            </select>
          </fieldset>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJobs;
