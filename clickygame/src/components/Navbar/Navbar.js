import React from "react";

const Navbar = props => (
  <nav>
    <ul>
      <li className="brand">
        <a href="/">{props.title}</a>
      </li>

      <li id="rw">{props.userMessage}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;
