import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Board } from './Board.jsx';
import { Sidebar } from './Sidebar.jsx';
import levels from './levels.js';
import styles from '../css/App.css';

const mountPoint = document.getElementById('root');

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLevel: props.activeLevel,
    };
  }

  handleClick(comp) {
    this.setState({ activeLevel: comp });
  }

  render() {
    return (
      <div className={styles.app} >
        <Sidebar
          levelList={this.props.levelList}
          onClick={this.handleClick.bind(this)}
          activeLevel={this.state.activeLevel}
        />
        <Board
          activeLevel={this.state.activeLevel}
          levelList={this.props.levelList}
        />
      </div>
    );
  }
}

App.propTypes = {
  activeLevel: PropTypes.node,
  levelList: PropTypes.object.isRequired,
};

render(
  <App
    activeLevel="Level One"
    levelList={levels}
  />, mountPoint
);
