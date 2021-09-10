import React from "react";
import ThemeContext from "./ThemeContext";

const ComponentE = () => (
  <ThemeContext.Consumer>
    {(value) => <p style={{ color: value }}>Hello React Context</p>}
  </ThemeContext.Consumer>
);

export default ComponentE;
