import React, { Component, createRef } from "react";
import propTypes from "prop-types";

class AddPlayerForm extends Component {
  static propTypes = {
    addPlayer: propTypes.func
  };
  playerInput = createRef();
  render() {
    return (
      <form onSubmit={this.hanldleSubmit}>
        <input
          type="text"
          placeholder="Enter a Player's Name"
          ref={this.playerInput}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }

  hanldleSubmit = e => {
    e.preventDefault();
    this.playerInput.current.value.length > 0 &&
      this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };
}

export default AddPlayerForm;
