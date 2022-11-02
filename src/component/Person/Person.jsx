import "./Person.css";
import { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="App">
          This is Class Component & Name: {this.props.name} & Age:{" "}
          {this.props.age}
        </h1>
      </div>
    );
  }
}
