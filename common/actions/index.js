let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text: text,
    id: nextTodoId++
  };
};

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id: id
  };
};

export function updateTodo(id, text) {
  return {
    type: 'UPDATE_TODO',
    id: id,
    text: text
  };
};

export function setDisplayFilter(filter) {
  return {
    type: 'SET_DISPLAY_FILTER',
    filter: filter
  };
};

export function clearCompleted(){
  return {
    type: 'CLEAR_COMPLETED'
  };
};
