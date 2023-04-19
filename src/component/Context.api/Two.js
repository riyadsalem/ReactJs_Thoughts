import { useContext, useEffect } from "react";
import ThemeContext from "../../Context/ThemeContext";

/*
export default function Two() {
  return (
    <div>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <h3 style={{ color: theme === "dark" ? "white" : "blue" }}>
            Hi From Two - {theme}
          </h3>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
*/

export default function Two() {
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    console.log("Two Component " + themeContext.theme);
  });
  return (
    <div>
      <h3 style={{ color: themeContext.theme === "dark" ? "white" : "blue" }}>
        Hi From Two - {themeContext.theme}
      </h3>
    </div>
  );
}
