import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.css';

class DrumPad extends Component {
  state = {
    press: false
  };

  static propTypes = {
    sound: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      keyCode: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired
    }),
    onDisplayName: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === this.props.sound.keyCode) {
      this.playSound();
    }
  };

  pressButton = () => {
    this.setState({ press: true });
  };

  playSound = () => {
    const { sound, onDisplayName } = this.props;
    const audio = document.getElementById(sound.key);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    this.pressButton();
    setTimeout(() => this.setState({ press: false }), 100);
    onDisplayName(sound.id);
  };

  render() {
    const { sound } = this.props;
    return (
      <div
        className={`drum-pad ${this.state.press ? 'active' : ''}`}
        id={sound.id}
        onClick={this.playSound}
      >
        <audio className="clip" src={sound.url} id={sound.key} />
        {sound.key}
      </div>
    );
  }
}

export default DrumPad;
