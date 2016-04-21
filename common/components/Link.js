import React, { Component, PropTypes } from "react";
import classNames from 'classnames';

class Link extends Component {
  render() {
    const { active, onClick, children } = this.props;
    const btnDisplayFilter = classNames("btn",  "btn-default", {"active": active});
    return (
      <div className={btnDisplayFilter} onClick={onClick}>{children}</div>
    );
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
