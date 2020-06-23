import React, { Component } from "react";
import propTypes from "prop-types";
import Player from "./Player";

class Players extends Component {
  static propTypes = {
    playersData: propTypes.arrayOf(propTypes.object),
    removePlayer: propTypes.func,
    handleScoreChange: propTypes.func,
    highScore: propTypes.number
  };
  render() {
    const {
      playersData,
      removePlayer,
      handleScoreChange,
      highScore
    } = this.props;
    return (
      <>
        {playersData.map((playerData, index) => (
          <Player
            key={playerData.id}
            name={playerData.name}
            id={playerData.id}
            removePlayer={removePlayer}
            score={playerData.score}
            index={index}
            handleScoreChange={handleScoreChange}
            isHighScore={highScore === playerData.score}
          />
        ))}
      </>
    );
  }
}

export default Players;
