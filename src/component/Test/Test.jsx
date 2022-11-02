import "./Test.css";
import React from "react";

const Test = () => {
  return (
    <>
      <div className="App">
        <h1>Tis is Test File</h1>
      </div>
    </>
  );

  // JSX
  /*
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "This is test file")
  );
  */
};

export default Test;
