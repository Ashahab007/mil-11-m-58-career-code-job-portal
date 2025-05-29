import React from "react";

import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../pages/routes/PrivateRoutes";
import JobsApply from "../pages/JobsApply/JobsApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        // 19.1 created a route with component
        path: "/jobs/:id",
        Component: JobDetails,
        // 19.3 fetch the data from server and send the data by id to the component using loader
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      // 7.2 create the router under privater route that's why took element instead of component
      {
        path: "/jobsapply/:id",
        element: (
          <PrivateRoutes>
            <JobsApply></JobsApply>
          </PrivateRoutes>
        ),
      },
      {
        // 24.1 created myApplication route
        path: "/myApplications",
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },

      // 29.3 created a View applications route
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoutes>
            <ViewApplications></ViewApplications>
          </PrivateRoutes>
        ),
        // 29.5 fetch the data dynamically
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`),
      },
      // 27.1 create a route for recruiter to add jobs
      {
        path: "/addjobs",
        element: (
          <PrivateRoutes>
            <AddJobs></AddJobs>
          </PrivateRoutes>
        ),
      },
      // 28.2 define a route
      {
        path: "/mypostedjobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },

      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);
