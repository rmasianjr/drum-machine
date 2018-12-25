import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Keys from './components/Keys';

class App extends Component {
  state = {
    display: 'Click or Press a Key'
  };

  handleDisplayName = name => {
    this.setState({
      display: name
    });
  };

  render() {
    return (
      <div id="drum-machine">
        <Display display={this.state.display} />
        <Keys onDisplayName={this.handleDisplayName} />
      </div>
    );
  }
}

export default App;
