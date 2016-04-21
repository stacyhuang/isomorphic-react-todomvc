import objectAssign from "object-assign";

export default function todos(state, action) {
  state = state || [];

  switch (action.type) {
    case "ADD_TODO":
      return [{
        id: action.id,
        text: action.text,
        completed: false
      }].concat(state);

    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return objectAssign({}, todo, {completed: !todo.completed});
      });

    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return objectAssign({}, todo, {text: action.text});
      });

    case "DELETE_TODO":
      return state.filter((todo) => {
        return todo.id !== action.id;
      });

    case "CLEAR_COMPLETED":
      return state.filter((todo) => {
        return todo.completed === false;
      });

    default:
      return state;
  }
};
