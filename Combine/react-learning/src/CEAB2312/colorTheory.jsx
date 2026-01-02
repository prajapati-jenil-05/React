import React, { Component } from "react";

class ColorTheory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "white",
      foreGroundColor: "black",
    };
  }
  changeToGreenBackgroundColor = () => {
    this.setState({ backgroundColor: "green" });
  };
  changeToBlueBackgroundColor = () => {
    this.setState({ backgroundColor: "blue" });
  };
  changeToYellowBackgroundColor = () => {
    this.setState({ backgroundColor: "yellow" });
  };
  changeToRedBackgroundColor = () => {
    this.setState({ backgroundColor: "red" });
  };
  changeToGreenForegroundColor = () => {
    this.setState({ foreGroundColor: "green" });
  };
  changeToBlueForegroundColor = () => {
    this.setState({ foreGroundColor: "blue" });
  };
  changeToYellowForegroundColor = () => {
    this.setState({ foreGroundColor: "yellow" });
  };
  changeToRedForegroundColor = () => {
    this.setState({ foreGroundColor: "red" });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.changeToGreenBackgroundColor}>Green</button>
          <button onClick={this.changeToBlueBackgroundColor}>Blue</button>
          <button onClick={this.changeToYellowBackgroundColor}>Yellow</button>
          <button onClick={this.changeToRedBackgroundColor}>Red</button>
          <br />
          <button onClick={this.changeToGreenForeGroundColor}>Green</button>
          <button onClick={this.changeToBlueForegroundColor}>Blue</button>
          <button onClick={this.changeToYellowForegroundColor}>Yellow</button>
          <button onClick={this.changeToRedForegroundColor}>Red</button>
        </div>
        <div
          style={{
            color: this.state.foreGroundColor,
            backgroundColor: this.state.backgroundColor,
          }}
        >
          Sample Text
        </div>
      </>
    );
  }
}

export default ColorTheory;
