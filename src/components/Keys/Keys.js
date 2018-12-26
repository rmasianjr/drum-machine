import React from 'react';
import { soundList } from '../../sound-data';
import DrumPad from '../DrumPad/DrumPad';
import PropTypes from 'prop-types';
import './Keys.css';

const Keys = ({ onDisplayName }) => (
  <div className="Keys-container">
    {soundList.map(sound => (
      <DrumPad key={sound.id} sound={sound} onDisplayName={onDisplayName} />
    ))}
  </div>
);

Keys.propTypes = {
  onDisplayName: PropTypes.func
};

export default Keys;
