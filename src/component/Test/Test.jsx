import "./Test.css";
import React from "react";

const Test = (props) => {
  return (
    <>
      <div className="App">
        <h1>
          My Name: {props.name} |&| Age:{props.age} |&| Id:
          {Math.random().toFixed(3)} |&| New Data: {props.children}
        </h1>
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
