import React from 'react';
import { soundList } from '../sound-data';
import DrumPad from './DrumPad';

const Keys = () => (
  <div className="Keys-container">
    {soundList.map(sound => (
      <DrumPad key={sound.id} sound={sound} />
    ))}
  </div>
);

export default Keys;
