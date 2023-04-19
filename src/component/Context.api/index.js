import React from "react";
import One from "./One";
import ToggleThemeBtn from "./ToggleThemeBtn";
import ThemeContext from "../../Context/ThemeContext";

export default class ContextAPI extends React.Component {
  state = {
    theme: "dark",
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <div
          style={{ background: this.state.theme === "dark" ? "blue" : "white" }}
        >
          <h1>Hi From App</h1>
          <One />
          <ToggleThemeBtn />
        </div>
      </ThemeContext.Provider>
    );
  }
}
