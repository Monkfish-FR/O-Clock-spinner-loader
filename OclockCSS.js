import React from 'react';
import PropTypes from 'prop-types';

const OclockCSS = ({
  duration,
  baseColor,
  accentColor,
  scale,
}) => {
  const ringStyles = {
    borderColor: baseColor,
    transform: `scale(${scale})`,
  };
  const spotStyles = {
    animatioDuration: duration,
    backgroundColor: accentColor,
    borderColor: baseColor,
  };

  return (
    <div className="oclock-css">
      <div
        className="oclock-css__ring"
        style={ringStyles}
      >
        <div
          className="oclock-css__spot"
          style={spotStyles}
        />
      </div>
    </div>
  );
};

OclockCSS.propTypes = {
  duration: PropTypes.string,
  baseColor: PropTypes.string,
  accentColor: PropTypes.string,
  scale: PropTypes.number,
};

OclockCSS.defaultProps = {
  duration: '3s',
  baseColor: '#101010',
  accentColor: '#e52354',
  scale: 1,
};

export default OclockCSS;
