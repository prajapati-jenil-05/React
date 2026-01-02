import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      counter: 10,
    };
  }
  increamentCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreamentCounter = () => {
    this.setState((prevState) => ({ count: prevState.counter - 1 }));
  };
  clear = () => {
    this.state({ count: 0 });
  };
  render() {
    return (
      <>
        <h2>Count: {this.state.count}</h2>
        <button
          style={{ backgroundColor: "red", padding: "10px", color: "white" }}
          onClick={this.increamentCount}
        >
          Increament Count
        </button>
        <h2>Counter: {this.state.counter}</h2>
        <button
          style={{ backgroundColor: "red", padding: "10px", color: "white" }}
          onClick={this.decreamentCounter}
        >
          Decreament Counter
        </button>
      </>
    );
  }
}
export default StateExample;
