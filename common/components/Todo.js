import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, text: this.props.text };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
  }

  handleUpdate(event) {
    event.preventDefault();
    this.stopEditing();
    this.props.onUpdate(this.state.text);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  startEditing() {
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  render() {
    const { completed, onToggle, onDelete } = this.props;
    const todoClass = classNames("todo", "row", {"completed": completed});
    const ctnTodoTextClass = classNames("ctn-todo-text", {"editing": this.state.editing});
    return (
      <div className={todoClass}>
        <div className="checkbox col-xs-1">
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
          />
        </div>
        <form className="col-xs-10" onSubmit={this.handleUpdate}>
          <input
            type="text"
            className={ctnTodoTextClass}
            readOnly={!this.state.editing}
            value={this.state.text}
            onDoubleClick={this.startEditing}
            onBlur={this.stopEditing}
            onChange={this.handleChange}
          />
        </form>
        <button type="button" className="close col-xs-1" aria-label="Close" onClick={onDelete}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
    );
  }
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Todo;
