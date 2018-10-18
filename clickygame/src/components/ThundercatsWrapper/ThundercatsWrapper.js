import React from "react";
import "./ThundercatsWrapper.css";

const ThundercatsWrapper = props => (
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

export default ThundercatsWrapper;
