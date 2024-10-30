import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
