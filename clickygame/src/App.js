import React, { Component } from "react";
import ThundercatsCard from "./components/ThundercatsCard";
import ThundercatsWrapper from "./components/ThundercatsWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Column from "./components/Column";
import Row from "./components/Row";
import thundercats from "./thundercats.json";
import "./App.css";

class App extends Component {
  // Setting this.state.thundercatss to the thundercats json array
  state = {
    thundercats,
    currentScore: 0,
    topScore: 0,
    thundercatsClicked: [],
    userMessage: "Click on Any image to get started!"
  };

  //function to handle what happens on click
  handleClick = id => {
    // We always use the setState method to update a component's state
    this.setState({ clicked: this.state.thundercatsClicked.concat(id) });
    this.setState({ score: this.state.score + 1 });
  };

  // Map over this.state.thundercats and render a ThundercatsCard component for each thundercats object
  render() {
    return (
      <ThundercatsWrapper>
        <Navbar
          title="Thundercats, WHOOOA!"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          userMessage={this.state.userMessage}
        />
        <Header />
        <Row>
          {this.state.thundercats.map(thundercats => (
            <Column key={thundercats.id} size="md-3 sm-6">
              <ThundercatsCard
                id={thundercats.id}
                key={thundercats.id}
                name={thundercats.name}
                image={thundercats.image}
                handleClick={this.handleClick}
                isClicked={this.state.clicked}
              />
            </Column>
          ))}
        </Row>
        <Footer />
      </ThundercatsWrapper>
    );
  }
}

export default App;
