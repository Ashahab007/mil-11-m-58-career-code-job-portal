import React from "react";

import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

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
        // 6.1 created a route with component
        path: "/jobs/:id",
        Component: JobDetails,
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
