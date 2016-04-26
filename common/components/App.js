import React, { Component } from "react";
import TodoForm from "../containers/TodoForm";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoForm />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
