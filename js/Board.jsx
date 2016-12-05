import React, { Component, PropTypes } from 'react';

// convert to pure function
export class Board extends Component {
  render() {
    const Level = this.props.levelList[this.props.activeComponent];
    return (
      <div id="board">
        <Level />
      </div>
    );
  }
}

Board.propTypes = {
  activeComponent: PropTypes.node,
  levelList: PropTypes.object,
};
