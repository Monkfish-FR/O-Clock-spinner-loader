import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Oclock = ({
  duration,
  baseColor,
  accentColor,
  scale,
}) => {
  const circleStyles = {
    borderColor: baseColor,
    transform: `scale(${scale})`,
  };
  const innerStyles = {
    animatioDuration: duration,
    backgroundColor: accentColor,
    borderColor: baseColor,
  };

  return (
    <div className="o-clock">
      <div
        className="o-clock__circle"
        style={circleStyles}
      >
        <div
          className="o-clock__inner"
          style={innerStyles}
        />
      </div>
    </div>
  );
};

Oclock.propTypes = {
  duration: PropTypes.string,
  baseColor: PropTypes.string,
  accentColor: PropTypes.string,
  scale: PropTypes.number,
};

Oclock.defaultProps = {
  duration: '3s',
  baseColor: '#101010',
  accentColor: '#e52354',
  scale: 1,
};

export default Oclock;
