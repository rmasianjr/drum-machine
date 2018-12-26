import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DrumPad.css';

class DrumPad extends Component {
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

  playSound = () => {
    const { sound, onDisplayName } = this.props;
    const audio = document.getElementById(sound.key);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    onDisplayName(sound.id);
  };

  render() {
    const { sound } = this.props;
    return (
      <div className="drum-pad" id={sound.id} onClick={this.playSound}>
        <audio className="clip" src={sound.url} id={sound.key} />
        {sound.key}
      </div>
    );
  }
}

export default DrumPad;
