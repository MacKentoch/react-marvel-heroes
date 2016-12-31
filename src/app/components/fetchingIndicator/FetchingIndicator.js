import React from 'react';
import { DoubleBounce }     from 'better-react-spinkit';

const FetchingIndicator = () => {
  return (
    <div
      className="center-block fetchIndicator_Container">
      <DoubleBounce
        size={50}
        color={'#ea51a3'}
      />
    </div>
  );
};

export default FetchingIndicator;
