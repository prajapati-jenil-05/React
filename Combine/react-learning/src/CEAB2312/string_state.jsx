import React, { Component } from "react";

class StringState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
    };
  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };
  consolgeLog = () => {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.age);
  };
  render() {
    const { name, email, age } = this.state;
    return (
      <>
        <div>
          <h2>String State Example</h2>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={this.handleNameChange}
          ></input>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={this.handleEmailChange}
          ></input>
          <input
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={this.handleAgeChange}
          ></input>
          <br />
          <br />
          <button
            style={{ width: "300px", height: "100px" }}
            onClick={this.consolgeLog}
          >
            Show in Console
          </button>
          <h2>Name: {name}</h2>
          <h2>Email: {email}</h2>
          <h2>Age: {age}</h2>
        </div>
      </>
    );
  }
}
export default StringState;
