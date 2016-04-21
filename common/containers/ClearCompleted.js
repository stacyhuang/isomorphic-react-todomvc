import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ClearCompleted extends Component {
  constructor(props) {
    super(props);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  handleClearCompleted() {
    this.props.dispatch(actions.clearCompleted());
  }

  render() {
    return (
      <button className="btn btn-clear-completed" onClick={this.handleClearCompleted}>Clear completed</button>
    );
  }
};

export default connect()(ClearCompleted);
