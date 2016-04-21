import React, { Component, PropTypes } from "react";

class ItemsLeft extends Component {
  render() {
    const { count } = this.props;
    const itemsLeftText = count === 1 ? '1 item left' : count + " items left";
    return (
      <span>{itemsLeftText}</span>
    );
  }
};

ItemsLeft.propTypes = {
  count: PropTypes.number.isRequired
}

export default ItemsLeft;
