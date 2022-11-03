import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* 
    <Test name="Riyad" age="24" />
    <Test name="MS" age="99">
      This is Children Data
    </Test>
    <Person name="RMS" age="121" />
    */}
  </React.StrictMode>
);
