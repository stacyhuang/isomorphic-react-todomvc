import { connect } from "react-redux";
import ItemsLeft from "../components/ItemsLeft";

function getItemsLeftCount(todos) {
  const itemsLeft = todos.filter((todo) => {
    return todo.completed === false;
  });
  return itemsLeft.length;
};

function mapStateToProps(state) {
  return {
    count: getItemsLeftCount(state.todos)
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsLeft);
