// code used from class resources - 1 March, activity 7

import React from "react";
import "./wrapper.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
