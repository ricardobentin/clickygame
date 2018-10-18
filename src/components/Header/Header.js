import React, { Component } from "react";
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <header className="text-center">
        <h1>Clicky Game!</h1>
        <h2>
          Click on an image to earn points, but don't click on any image more than
          once or your score will reset!!
        </h2>
      </header>
    );
  }
}
export default Header;
