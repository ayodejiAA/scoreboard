import React, { PureComponent } from "react";
import propTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    removePlayer: propTypes.func,
    id: propTypes.number,
    name: propTypes.string.isRequired,
    score: propTypes.number.isRequired,
    handleScoreChange: propTypes.func,
    index: propTypes.number,
    isHighScore: propTypes.bool
  };
  render() {
    const {
      removePlayer,
      id,
      name,
      score,
      handleScoreChange,
      index,
      isHighScore
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            x
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        <Counter
          score={score}
          handleScoreChange={handleScoreChange}
          index={index}
        />
      </div>
    );
  }
}

export default Player;
