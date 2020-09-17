import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import OclockCSS from './OclockCSS';
import OclockSVG from './OclockSVG';

const Oclock = ({
  svg,
  duration,
  baseColor,
  accentColor,
  scale,
  width,
}) => (
  <div className="oclock">
    { svg && (
      <OclockSVG
        duration={duration}
        baseColor={baseColor}
        accentColor={accentColor}
        width={width}
      />
    ) }

    { !svg && (
      <OclockCSS
        duration={duration}
        baseColor={baseColor}
        accentColor={accentColor}
        scale={scale}
      />
    ) }

  </div>
);

Oclock.propTypes = {
  svg: PropTypes.bool,
  duration: PropTypes.string,
  baseColor: PropTypes.string,
  accentColor: PropTypes.string,
  scale: PropTypes.number,
  width: PropTypes.string,
};

Oclock.defaultProps = {
  svg: true,
  duration: '3s',
  baseColor: '#101010',
  accentColor: '#e52354',
  scale: 1,
  width: '9rem',
};

export default Oclock;
