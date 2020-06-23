import React, { Component } from "react";
import propTypes from "prop-types";

class Stats extends Component {
  static propTypes = {
    players: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string,
        id: propTypes.number,
        score: propTypes.number
      })
    )
  };
  render() {
    const players = this.props.players.length;
    const totalPlayerPoints = this.props.players.reduce((total, player) => {
      return total + player.score;
    }, 0);

    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{players}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPlayerPoints}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Stats;
