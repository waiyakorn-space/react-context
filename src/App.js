import React from "react";
import ThemeContext from "./ThemeContext";
import ComponentE from "./ComponentE";

const App = () => (
  <ThemeContext.Provider value="green">
    <ComponentE />
  </ThemeContext.Provider>
)

export default App;
