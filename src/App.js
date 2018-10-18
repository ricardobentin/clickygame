import React, { Component } from "react";
import ThundercatsCard from "./components/ThundercatsCard";
import ThundercatsWrapper from "./components/ThundercatsWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Column from "./components/Column";
import Row from "./components/Row";
import thundercats from "./thundercats.json";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById("root")
);

function shuffleThunderCats(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
    if (this.state.thundercatsClicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({
        thundercatsClicked: this.state.thundercatsClicked.concat(id)
      });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      userMessage: "Awesome! Keep Clicking Unique Images!"
    });
    if (newScore > this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (this.state.currentScore > 11) {
      this.setState({
        userMessage: "You win! There are no more unique images to click!"
      });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      userMessage:
        "You clicked this one already. Let's try to beat your top score until you can reach 12!",
      thundercatsClicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledThundercats = shuffleThunderCats(thundercats);
    this.setState({ friends: shuffledThundercats });
  };

  // Map over this.state.thundercats and render a ThundercatsCard component for each thundercats object
  render() {
    return (
      <ThundercatsWrapper>
        <Route
          exact
          path={`/`}
          render={routerProps => <Home routerProps={routerProps} />}
        />
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
