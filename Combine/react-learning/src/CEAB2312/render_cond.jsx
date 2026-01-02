import React, { Component } from "react";
class RenderCond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }
  toggleSwitch = () => {
    console.log(this.state.isOn);
    this.setState({ isOn: !this.state.isOn });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.toggleSwitch}>
            {this.state.isOn ? "ON" : "OFF"}
          </button>
          <p>Status: {this.state.isOn ? "Active" : "InActive"}</p>
        </div>
      </>
    );
  }
}

export default RenderCond;
