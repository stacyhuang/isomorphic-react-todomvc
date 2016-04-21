import React, { Component } from "react";
import TodoItemsLeft from "../containers/TodoItemsLeft";
import FilterLink from "../containers/FilterLink";
import ClearCompleted from "../containers/ClearCompleted";

class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="col-xs-3">
          <TodoItemsLeft />
        </div>
        <div className="col-xs-6 row filterLinks">
          <FilterLink
            filter="SHOW_ALL"
          >
            All
          </FilterLink>
          <FilterLink
            filter="SHOW_ACTIVE"
          >
            Active
          </FilterLink>
          <FilterLink
            filter="SHOW_COMPLETED"
          >
            Completed
          </FilterLink>
        </div>
        <div className="col-xs-3">
          <ClearCompleted />
        </div>
      </div>
    );
  }
}

export default Footer;
