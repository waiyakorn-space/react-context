import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ComponentE = () => {
  const color = useContext(ThemeContext);
return (<p style={{color}}>Helloooo</p>)
 
};

export default ComponentE;
