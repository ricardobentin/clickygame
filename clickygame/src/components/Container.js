import React, { Component } from "react";

class Container extends Component {
  // Setting the initial state of the Counter component
  state = {
    clicked: false,
    score: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Lion-o.jpg" alt="Lion-O" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Panthro.jpg" alt="Panthro" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Tygra.jpg" alt="Tygra" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Cheetara.jpg" alt="Cheetara" />
          </div>
        </div>
        <div className="row">
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Wilykat.jpg" alt="Wilykat" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Wilykit.jpg" alt="Wilykit" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Snarf.jpg" alt="Snarf" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Jaga.jpg" alt="Jaga" />
          </div>
        </div>
        <div className="row">
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Jackalman.jpg" alt="Jackalman" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Monkian.jpg" alt="Monkian" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Mumm-ra.jpg" alt="Mumm-ra" />
          </div>
          <div
            className="col-3"
            onClick={this.handleIncrement}
            isClicked={this.state.clicked}
            role="img"
            aria-label="click item"
          >
            <img src="/img/Slithe.jpg" alt="Slithe" />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
