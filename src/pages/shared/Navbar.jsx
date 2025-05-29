import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  // 9.0.2, 10.0.2
  const { user, userSignOut } = use(AuthContext);
  // 10.0.3
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        console.log("sign out successfu lly");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* 24.2 created conditionally to show the user's applications if user is present */}
      {user && (
        <>
          {/*for applicant  */}
          <li>
            <NavLink to="/myApplications">My Application</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          {/* 27.0 created also recruiter link to add jobs form */}
          {/*for recruiter  */}
          <li>
            <NavLink to="/addjobs">Add Jobs</NavLink>
          </li>
          {/* 28.0 Now my requirement is show the job that i posted  */}
          <li>
            <NavLink to="/mypostedjobs">My Posted Jobs</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* 9.0.3 conditionally show the user info */}
        {user ? (
          // 10.0.4
          <button to="/register" onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
            <NavLink to="/signin" className="btn">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
