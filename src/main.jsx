import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  // 5.0.3 apply the AuthProvider over RouterProvider
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
