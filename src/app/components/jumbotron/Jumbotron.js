import React, { PropTypes } from 'react';

const Jumbotron = ({ children }) => {
  return (
    <div className="jumbotron">
      { children }
    </div>
  );
};

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default Jumbotron;
