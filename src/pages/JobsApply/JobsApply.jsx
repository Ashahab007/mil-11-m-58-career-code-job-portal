import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobsApply = () => {
  // 23.0 as the logged in user is going to apply for the specific job so we need to get the specific job id using useParams() and also we need the user to know who is applying. so we create a custom hook to get the user data.
  const { id } = useParams();
  console.log(id); // get the job id

  // 23.3 call the useAuth to get the user info
  const { user } = useAuth();
  console.log(user);

  // 23.5 create a handleApplyJob function to get the data from the form
  const handleApplyJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);

    // 23.6 create object to send it to db
    const applications = {
      applicant: user.email,
      jobId: id, //এখানে jobId তে specific job এর id টা পাঠানো হইসে।
      linkedin,
      github,
      resume,
    };

    console.log(applications);

    // 23.9 apply the axios post method to send the data to the db using sweetalert2
    axios
      .post("http://localhost:3000/applications", applications)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your application has been submitted.",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-10">
      {/* 23.4 created a form for applying jobs by input url */}
      <h3>Apply For Jobs</h3>
      <form onSubmit={handleApplyJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">URL</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="Linkedin"
          />

          <label className="label">URL</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="github"
          />

          <label className="label">URL</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="resume"
          />
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobsApply;
