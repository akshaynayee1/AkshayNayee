import React from 'react';
import Style from './LightModeBackground.module.scss';

export default function LightModeBackground() {
  return (
    <div className={Style.overlay} aria-hidden="true">
      <div className={Style.blob1} />
      <div className={Style.blob2} />
      <div className={Style.blob3} />
      <div className={Style.blob4} />
      <div className={`${Style.ring} ${Style.ring1}`} />
      <div className={`${Style.ring} ${Style.ring2}`} />
      <div className={`${Style.ring} ${Style.ring3}`} />
      <div className={Style.dots} />
    </div>
  );
}
