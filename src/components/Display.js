import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ display }) => <div id="display">{display}</div>;

Display.propTypes = {
  display: PropTypes.string.isRequired
};

export default Display;
