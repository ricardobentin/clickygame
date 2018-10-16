import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Clicky Game!
        </a>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link">Score: 0 | Top Score: 0</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
