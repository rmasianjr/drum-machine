import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DrumPad extends Component {
  static propTypes = {
    sound: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      keyCode: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired
    })
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
    const sound = document.getElementById(this.props.sound.key);
    if (!sound) {
      return;
    }
    sound.currentTime = 0;
    sound.play();
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
