import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    isRunning: false,
    elaspedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmont() {
    clearInterval(this.intervalID);
  }

  render() {
    const time = Math.floor(this.state.elaspedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{time}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elaspedTime: prevState.elaspedTime + (now - prevState.previousTime)
      }));
    }
  };

  handleReset = () => {
    this.setState({ elaspedTime: 0 });
  };

  handleStopwatch = () => {
    this.setState(prevState => ({ isRunning: !prevState.isRunning }));
    !this.state.isRunning && this.setState({ previousTime: Date.now() });
  };
}

export default StopWatch;
