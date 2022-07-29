// packages
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/home/Home";
import NotFoundPage from "./pages/NotFoundPage";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "404", element: <NotFoundPage /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default Router;
