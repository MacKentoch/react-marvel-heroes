import React, { PropTypes } from 'react';

const DetailsTitle = ({ name, description}) => {
  return (
    <div className="well well_char_detail">
      <h2>
        { name }
      </h2>
      <p>
        { description || 'no description at the moment...' }
      </p>
    </div>
  );
};

DetailsTitle.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string
};

export default DetailsTitle;
