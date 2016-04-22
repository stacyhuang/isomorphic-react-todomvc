import React, { Component, PropTypes } from "react";

class Main extends Component {
  render() {
    return (
      <div id="main">
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object
}

export default Main;
