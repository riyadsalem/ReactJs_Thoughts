import ThemeContext from "../../Context/ThemeContext";

export default function Two() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(theme) => (
          <h3 style={{ color: theme === "dark" ? "white" : "blue" }}>
            Hi From Two - {theme}
          </h3>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
