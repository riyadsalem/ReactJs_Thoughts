import { Component } from "react";
import ThemeContext from "../../Context/ThemeContext";

/*
export default class ToggleThemeBt extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <button onClick={toggleTheme}>
              Toggle Theme to {theme === "dark" ? "light" : "dark"}
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
*/

export default class ToggleThemeBt extends Component {
  componentDidUpdate() {
    console.log("ToggleThemeBtn Component " + this.context.theme);
  }
  render() {
    return (
      <div>
        <button onClick={this.context.toggleTheme}>
          Toggle Theme to {this.context.theme === "dark" ? "light" : "dark"}
        </button>
      </div>
    );
  }
}

ToggleThemeBt.contextType = ThemeContext;
