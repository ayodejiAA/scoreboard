import React, { Component } from "react";
import propTypes from "prop-types";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

class Header extends Component {
  static propTypes = {
    totalPlayer: propTypes.arrayOf(propTypes.object),
    title: propTypes.string
  };

  static defaultProps = {
    title: "Scoreboard"
  };

  render() {
    const { totalPlayer, title } = this.props;
    return (
      <header>
        <Stats players={totalPlayer} />
        <h1>{title}</h1>
        <StopWatch />
      </header>
    );
  }
}

export default Header;
