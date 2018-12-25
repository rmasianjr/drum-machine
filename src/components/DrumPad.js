import React from 'react';
import PropTypes from 'prop-types';

const DrumPad = ({ sound }) => (
  <div className="drum-pad" id={sound.id}>
    <audio className="clip" src={sound.url} id={sound.key} />
    {sound.key}
  </div>
);

DrumPad.propTypes = {
  sound: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    keyCode: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired
  })
};

export default DrumPad;
