import React, { Component } from "react";
class StateCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreament = () => {
    this.setState({ count: this.state.count - 1 });
  };
  clear = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.increament}>Increament</button>
          <button onClick={this.decreament}>Decreament</button>
          <button onClick={this.clear}>Clear</button>
        </div>
      </>
    );
  }
}

export default StateCounter;
