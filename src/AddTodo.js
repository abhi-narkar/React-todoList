import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  textChangehandler = event => {
    this.setState({
      content: event.target.value
    });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <label>Add new todo:</label>
          <input
            type="text"
            onChange={this.textChangehandler}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
