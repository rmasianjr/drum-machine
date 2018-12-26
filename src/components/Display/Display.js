import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ display }) => (
  <div id="display" className="Display">
    {display}
  </div>
);

Display.propTypes = {
  display: PropTypes.string.isRequired
};

export default Display;
