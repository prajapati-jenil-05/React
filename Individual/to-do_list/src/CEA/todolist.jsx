import React, { Component } from "react";
class ToDolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  addTodo = () => {
    if (this.state.inputValue.trim() == "") return;
    const newtodo = {
      id: Date.now(),
      text: this.state.inputValue,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newtodo],
      inputValue: "",
    }));
    console.log(this.state.todos);
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((x) => x.id !== id),
    }));
  };

  render() {
    const { todos, inputValue } = this.state;
    return (
      <>
        <input type="text" value={inputValue} onChange={this.handleInput} />
        <br />
        <button onClick={this.addTodo}>Add</button>
        <br />
        <ul>
          {todos.map((x) => (
            <li key={x.id}>
              <input type="checkbox" value={x.completed} />
              {x.text}
              <button onClick={() => this.deleteTodo(x.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default ToDolist;
