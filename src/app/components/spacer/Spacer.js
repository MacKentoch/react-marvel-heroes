import React, { PropTypes } from 'react';

const Spacer = ({ height }) => {
  return (
    <div style={{ height: `${height}px` }}/>
  );
};

Spacer.propTypes = {
  height: PropTypes.number
};

Spacer.defaultProps = {
  height: 20
};

export default Spacer;
