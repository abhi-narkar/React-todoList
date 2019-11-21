import React, { Component } from "react";
// import "./App.css";
import Todos from "./Todo";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todo: [
      { id: 1, content: "Get a job" },
      { id: 2, content: "Loose some fats" }
    ]
  };

  deleteTodoHandler = id => {
    // console.log(id);
    const todos = this.state.todo.filter(todo => {
      // if they are not equal, if will return false,
      // which means it will be removed from the array
      return todo.id !== id;
    });
    this.setState({
      todo: todos
    });
  };

  addNewTodo = todo => {
    todo.id = Math.random();
    let newToDos = [...this.state.todo, todo];
    this.setState({
      todo: newToDos
    });
  };

  render() {
    return (
      <div className="App">
        <header>Todo App</header>
        <Todos todos={this.state.todo} deleteTodo={this.deleteTodoHandler} />
        <AddTodo addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default App;
