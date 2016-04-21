import React, { Component, PropTypes } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { onTodoUpdate, onTodoDelete, onTodoToggle } = this.props;
    const todoNodes = [];
    this.props.todos.map((todo) => {
      todoNodes.push(
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onUpdate={onTodoUpdate.bind(null, todo.id)}
          onDelete={onTodoDelete.bind(null, todo.id)}
          onToggle={onTodoToggle.bind(null, todo.id)}
        />
      )
    });
    return (
      <div className="todoList">
        {todoNodes}
      </div>
    );
  }
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoToggle: PropTypes.func.isRequired
};

export default TodoList;
