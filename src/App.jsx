import React, { Component } from "react";
import Header from "./components/Header";
import Players from "./components/Players";
import AddPlayerForm from "./components/AddPlayerForm";

class App extends Component {
  state = {
    playersData: [
      { name: "Ayodeji", id: 1, score: 0 },
      { name: "Adeythfu", id: 2, score: 0 },
      { name: "Biodun", id: 3, score: 0 },
      { name: "Nana", id: 4, score: 0 }
    ]
  };

  render() {
    const getHighScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header totalPlayer={this.state.playersData} />
        <Players
          playersData={this.state.playersData}
          removePlayer={this.removePlayer}
          handleScoreChange={this.handleScoreChange}
          highScore={getHighScore}
        />
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }

  removePlayer = id => {
    this.setState(prevstate => ({
      playersData: prevstate.playersData.filter(p => p.id !== id)
    }));
  };

  handleScoreChange = (delta, index) => {
    this.setState(prevState => ({
      score: (prevState.playersData[index].score += delta)
    }));
  };

  // Player Id
  prevPlayerId = 4;

  handleAddPlayer = name => {
    this.setState(prevState => ({
      playersData: [
        ...prevState.playersData,
        {
          name,
          id: (this.prevPlayerId += 1),
          score: 0
        }
      ]
    }));
  };

  getHighScore = () => {
    const score = this.state.playersData.map(player => player.score);
    const highScore = Math.max(...score);
    return highScore ? highScore : null;
  };
}

export default App;
