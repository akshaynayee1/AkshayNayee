import React, { useMemo, useEffect } from 'react';
import Style from './DarkModeBackground.module.scss';

const PLANET = { x: 14, y: 74 };
const SHIP_COUNT = 5;

export default function DarkModeBackground() {

  // Stars — deterministic so they don't shift on re-render
  const stars = useMemo(() => {
    const h = (n) => { const x = Math.sin(n) * 43758.5453123; return x - Math.floor(x); };
    return Array.from({ length: 160 }, (_, i) => ({
      id: i,
      top:      h(i * 1.6180) * 100,
      left:     h(i * 2.7182) * 100,
      size:     h(i * 3.1415) * 1.4 + 0.4,
      delay:    h(i * 6.2831) * 8,
      duration: h(i * 4.6692) * 4 + 1.5,
    }));
  }, []);

  // Ships — intentionally random each mount (different every time dark mode turns on)
  const ships = useMemo(() => {
    return Array.from({ length: SHIP_COUNT }, (_, i) => {
      // Pick a random screen edge to enter from
      const edge = Math.floor(Math.random() * 4);
      let sx, sy;
      if      (edge === 0) { sx = Math.random() * 100; sy = -10; }   // top
      else if (edge === 1) { sx = 110;  sy = Math.random() * 100; }  // right
      else if (edge === 2) { sx = Math.random() * 100; sy = 110; }   // bottom
      else                 { sx = -10;  sy = Math.random() * 100; }  // left

      // ~40% of ships land on the planet
      const willLand = Math.random() > 0.58;
      const ex = willLand ? PLANET.x + (Math.random() - 0.5) * 3 : Math.random() * 100;
      const ey = willLand ? PLANET.y + (Math.random() - 0.5) * 3 : Math.random() * 100;

      // Mid-waypoint: offset from straight line to create a curved path
      const mx = (sx + ex) / 2 + (Math.random() - 0.5) * 55;
      const my = (sy + ey) / 2 + (Math.random() - 0.5) * 55;

      // Rotation angle so ship faces its direction of travel
      const angle = Math.atan2(ey - my, ex - mx) * 180 / Math.PI + 90;

      return {
        id: i, sx, sy, mx, my, ex, ey,
        angle, willLand,
        duration: 16 + Math.random() * 16,   // 16 – 32 s
        delay:    Math.random() * -20,         // negative = already in-flight on load
        size:     14 + Math.random() * 10,    // 14 – 24 px
      };
    });
  }, []);

  // Inject unique @keyframes per ship into <head>
  useEffect(() => {
    const ID = 'spaceship-keyframes';
    document.getElementById(ID)?.remove();

    const el = document.createElement('style');
    el.id = ID;
    el.textContent = ships.map(s => `
      @keyframes ship${s.id} {
        0%   { left:${s.sx}%; top:${s.sy}%; opacity:0;   transform:rotate(${s.angle}deg) scale(0.5); }
        8%   { opacity:1; }
        50%  { left:${s.mx}%; top:${s.my}%; opacity:1;   transform:rotate(${s.angle}deg) scale(1);   }
        ${s.willLand ? `
        85%  { left:${s.ex}%; top:${s.ey}%; opacity:0.7; transform:rotate(${s.angle}deg) scale(0.35);}
        100% { left:${s.ex}%; top:${s.ey}%; opacity:0;   transform:rotate(${s.angle}deg) scale(0);   }
        ` : `
        90%  { opacity:0.8; }
        100% { left:${s.ex}%; top:${s.ey}%; opacity:0;   transform:rotate(${s.angle}deg) scale(0.5); }
        `}
      }
    `).join('\n');

    document.head.appendChild(el);
    return () => document.getElementById(ID)?.remove();
  }, [ships]);

  return (
    <div className={Style.overlay} aria-hidden="true">

      {/* Stars */}
      {stars.map(s => (
        <span key={s.id} className={Style.star} style={{
          top: `${s.top}%`, left: `${s.left}%`,
          width: `${s.size}px`, height: `${s.size}px`,
          animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s`,
        }} />
      ))}

      {/* Planet — ring wraps behind and in front */}
      <div className={Style.planetWrap} style={{ left: `${PLANET.x}%`, top: `${PLANET.y}%` }}>
        <div className={Style.planetRingBack} />
        <div className={Style.planet}>
          <div className={Style.planetSurface} />
          <div className={Style.crater} style={{ width:'16px', height:'11px', top:'36%', left:'50%' }} />
          <div className={Style.crater} style={{ width:'10px', height:'7px',  top:'18%', left:'28%' }} />
          <div className={Style.crater} style={{ width:'7px',  height:'5px',  top:'62%', left:'20%' }} />
          <div className={Style.crater} style={{ width:'5px',  height:'4px',  top:'25%', left:'60%' }} />
          <div className={Style.lightBand} />
        </div>
        <div className={Style.planetRingFront} />
        <div className={Style.planetAtmosphere} />
      </div>

      {/* Spaceships */}
      {ships.map(s => (
        <div
          key={s.id}
          className={Style.ship}
          style={{
            width:  `${s.size}px`,
            height: `${s.size * 1.7}px`,
            animationName:            `ship${s.id}`,
            animationDuration:        `${s.duration}s`,
            animationDelay:           `${s.delay}s`,
            animationTimingFunction:  'ease-in-out',
            animationIterationCount:  'infinite',
            animationFillMode:        'both',
          }}
        >
          <svg viewBox="0 0 16 27" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main body */}
            <path d="M8 1 L13 17 L8 13.5 L3 17 Z" fill="#c4b5fd"/>
            {/* Cockpit window */}
            <ellipse cx="8" cy="9" rx="2" ry="2.6" fill="#7c3aed"/>
            <ellipse cx="7.2" cy="8" rx="0.7" ry="0.9" fill="#a78bfa" opacity="0.6"/>
            {/* Left wing */}
            <path d="M3 17 L0 21 L4.5 18.5 Z" fill="#a78bfa" opacity="0.85"/>
            {/* Right wing */}
            <path d="M13 17 L16 21 L11.5 18.5 Z" fill="#a78bfa" opacity="0.85"/>
            {/* Engine flame outer */}
            <path d="M6 13.5 L8 22 L10 13.5 Z" fill="#f97316" opacity="0.8"/>
            {/* Engine flame inner */}
            <path d="M7 15.5 L8 25 L9 15.5 Z" fill="#fbbf24" opacity="0.55"/>
          </svg>
        </div>
      ))}

    </div>
  );
}
