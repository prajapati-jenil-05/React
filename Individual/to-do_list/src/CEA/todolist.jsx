import React, { Component } from "react";
class ToDolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputValue: "",
    };
  }

  render() {
    const { todos, inputValue } = this.state;
    return (
      <>
        <input type="text" value={inputValue} />
        <button>Add</button>
        <br />
        <ul>{}</ul>
      </>
    );
  }
}
export default ToDolist;
