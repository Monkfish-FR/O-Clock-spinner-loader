import React from 'react';
import PropTypes from 'prop-types';

import OclockSVGLogo from './OclockSVGLogo';

const OclockSVG = ({
  duration,
  baseColor,
  accentColor,
  width,
}) => {
  const styles = {
    animationDuration: duration,
    height: width,
    width,
  };

  return (
    <div className="oclock-svg" style={styles}>
      <OclockSVGLogo baseColor={baseColor} accentColor={accentColor} />
    </div>
  );
};

OclockSVG.propTypes = {
  duration: PropTypes.string,
  baseColor: PropTypes.string,
  accentColor: PropTypes.string,
  width: PropTypes.string,
};

OclockSVG.defaultProps = {
  duration: '3s',
  baseColor: '#101010',
  accentColor: '#e52354',
  width: '9rem',
};

export default OclockSVG;
