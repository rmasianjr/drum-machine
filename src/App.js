import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Keys from './components/Keys';

class App extends Component {
  state = {
    display: 'Click or Press a Key'
  };

  render() {
    return (
      <div id="drum-machine">
        <Display display={this.state.display} />
        <Keys />
      </div>
    );
  }
}

export default App;
