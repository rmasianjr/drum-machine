import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Keys from './components/Keys/Keys';

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
      <div className="container">
        <header className="header">
          <h1>Drum Machine</h1>
        </header>
        <div id="drum-machine">
          <Display display={this.state.display} />
          <Keys onDisplayName={this.handleDisplayName} />
        </div>
        <footer className="footer">
          <span>
            Created by:{' '}
            <a
              className="footer-link"
              href="https://twitter.com/rmasianjr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ricardo Masian Jr.
            </a>
          </span>
          <span> | </span>
          <span>
            <a
              className="footer-link"
              href="https://github.com/rmasianjr/drum-machine"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source code
            </a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
