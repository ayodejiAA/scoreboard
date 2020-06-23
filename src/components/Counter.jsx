import React, { Component } from "react";
import propTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    index: propTypes.number,
    handleScoreChange: propTypes.func,
    score: propTypes.number
  };
  render() {
    const { index, handleScoreChange, score } = this.props;
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={() => handleScoreChange(-1, index)}
        >
          -
        </button>
        <span className="counter-score">{score}</span>
        <button
          className="counter-action increment"
          onClick={() => handleScoreChange(1, index)}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
