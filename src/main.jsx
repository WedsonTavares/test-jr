import * as React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./routes.jsx";
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
