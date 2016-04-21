import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""}
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleTodoSubmit(event) {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.dispatch(actions.addTodo(this.state.text));
      this.setState({text: ""});
    }
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <form className="todoForm" onSubmit={this.handleTodoSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </form>
    );
  }
};

export default connect()(TodoForm);
