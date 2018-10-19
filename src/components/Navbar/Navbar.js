import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li className="brand">
        <img src="/img/tcats.jpg" alt="thundercats" href="/" />
      </li>
      <li id="rw">{props.userMessage}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;
