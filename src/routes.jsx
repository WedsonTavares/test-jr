import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Login2 from "./pages/Login2/Login2";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login2",  
    element: <Login2 />,
  },
]);
