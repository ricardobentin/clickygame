import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="text-center">
        <h1>Clicky Game!</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once! Click on any image to start the game!
        </h2>
      </header>
    );
  }
}
export default Header;
