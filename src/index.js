import React from "react";
import ReactDOM from "react-dom/client";
import App, { route } from "./App";
import "./index.css";
import { RouterProvider } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);
