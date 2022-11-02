import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Test, Person } from "./component/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> <Test />
    <Person />
  </React.StrictMode>
);
