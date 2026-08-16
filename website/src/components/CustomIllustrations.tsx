import React from 'react';

// BlueOrbit Devs Official Brand Logo
export const BlueOrbitLogo: React.FC<{ className?: string; size?: number; variant?: 'color' | 'white' }> = ({
  className = '',
  size = 36,
  variant = 'color'
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 ${
        variant === 'white'
          ? 'bg-white/20 border border-white/40 shadow-sm'
          : 'bg-[#F0EEFF] border border-[#17152B]/10 shadow-sm'
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="./assets/brand-logo.png"
        alt="BlueOrbit Devs Logo"
        referrerPolicy="no-referrer"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="w-full h-full object-contain p-0.5 select-none pointer-events-none"
      />
    </div>
  );
};

// Hero Developer Master Illustration
export const HeroDeveloperIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[580px] mx-auto aspect-square flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl overflow-visible"
      >
        <defs>
          {/* Background Glows */}
          <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#FF4FA3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#5B4BFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="laptop-screen-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#151326" />
            <stop offset="100%" stopColor="#252140" />
          </linearGradient>
          <linearGradient id="code-grad-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C2FF" />
            <stop offset="100%" stopColor="#55D88A" />
          </linearGradient>
          <linearGradient id="accent-box-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF4FA3" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>
          <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0d0a24" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Ambient Orbit Glow Backing */}
        <circle cx="300" cy="300" r="240" fill="url(#hero-glow)" />

        {/* Giant Outer Orbital Rings */}
        <ellipse
          cx="300"
          cy="300"
          rx="250"
          ry="110"
          transform="rotate(-24 300 300)"
          stroke="#00C2FF"
          strokeWidth="3.5"
          strokeDasharray="14 10"
          opacity="0.75"
        />
        <ellipse
          cx="300"
          cy="300"
          rx="220"
          ry="90"
          transform="rotate(35 300 300)"
          stroke="#FF4FA3"
          strokeWidth="2.5"
          opacity="0.6"
        />

        {/* Floating Geometric Stars and Particles in Orbit */}
        {/* Star 1 */}
        <path
          d="M 120 140 Q 120 155 135 155 Q 120 155 120 170 Q 120 155 105 155 Q 120 155 120 140 Z"
          fill="#FFD84D"
          stroke="#151326"
          strokeWidth="2"
        />
        {/* Star 2 */}
        <path
          d="M 480 160 Q 480 172 492 172 Q 480 172 480 184 Q 480 172 468 172 Q 480 172 480 160 Z"
          fill="#00C2FF"
          stroke="#151326"
          strokeWidth="2"
        />
        {/* Star 3 */}
        <path
          d="M 460 440 Q 460 452 472 452 Q 460 452 460 464 Q 460 452 448 452 Q 460 452 460 440 Z"
          fill="#FF7043"
          stroke="#151326"
          strokeWidth="2"
        />

        {/* Floating Floating Cloud Node */}
        <g transform="translate(70, 260)" className="animate-float-slow">
          <rect x="0" y="0" width="130" height="68" rx="20" fill="#FFFFFF" stroke="#151326" strokeWidth="3.5" filter="url(#card-shadow)" />
          <path d="M 24 38 Q 24 24 38 24 Q 45 16 58 18 Q 70 12 82 22 Q 94 22 96 34 Q 102 36 102 44 Q 102 52 92 52 L 28 52 Q 20 52 24 38 Z" fill="#00C2FF" opacity="0.2" />
          <circle cx="34" cy="34" r="8" fill="#00C2FF" stroke="#151326" strokeWidth="2.5" />
          <path d="M 52 30 H 106 M 52 40 H 88" stroke="#17152B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="112" cy="18" r="7" fill="#55D88A" stroke="#151326" strokeWidth="2" />
        </g>

        {/* Floating Database Cylinder Card */}
        <g transform="translate(430, 270)" className="animate-float-medium">
          <rect x="0" y="0" width="135" height="85" rx="22" fill="#FFFFFF" stroke="#151326" strokeWidth="3.5" filter="url(#card-shadow)" />
          {/* Cylinder SVGs */}
          <ellipse cx="38" cy="30" rx="18" ry="7" fill="#FF4FA3" stroke="#151326" strokeWidth="2.5" />
          <path d="M 20 30 V 44 C 20 48 38 48 38 48 C 38 48 56 48 56 44 V 30" fill="#FF4FA3" opacity="0.75" stroke="#151326" strokeWidth="2.5" />
          <path d="M 20 44 V 58 C 20 62 38 62 38 62 C 38 62 56 62 56 58 V 44" fill="#FF4FA3" opacity="0.4" stroke="#151326" strokeWidth="2.5" />
          <rect x="68" y="26" width="50" height="8" rx="4" fill="#151326" />
          <rect x="68" y="40" width="40" height="6" rx="3" fill="#626078" />
          <rect x="68" y="52" width="30" height="6" rx="3" fill="#55D88A" />
        </g>

        {/* Floating Code Snippet Card */}
        <g transform="translate(90, 80)" className="animate-float-reverse">
          <rect x="0" y="0" width="165" height="90" rx="18" fill="#151326" stroke="#00C2FF" strokeWidth="3" filter="url(#card-shadow)" />
          <circle cx="16" cy="16" r="4" fill="#FF4FA3" />
          <circle cx="28" cy="16" r="4" fill="#FFD84D" />
          <circle cx="40" cy="16" r="4" fill="#55D88A" />
          <path d="M 16 36 L 24 44 L 16 52 M 32 52 H 44" stroke="#00C2FF" strokeWidth="3" strokeLinecap="round" />
          <rect x="52" y="38" width="80" height="7" rx="3.5" fill="#FFFFFF" opacity="0.9" />
          <rect x="20" y="66" width="105" height="7" rx="3.5" fill="#FF7043" opacity="0.9" />
        </g>

        {/* Floating Rocket in Top Right */}
        <g transform="translate(420, 70)" className="animate-float-slow">
          <rect x="0" y="0" width="115" height="70" rx="20" fill="#FFF0F7" stroke="#151326" strokeWidth="3" filter="url(#card-shadow)" />
          {/* Rocket Mini */}
          <g transform="translate(18, 14) scale(0.9)">
            <path d="M 28 6 Q 40 18 36 38 L 16 38 Q 12 18 24 6 Z" fill="#FF4FA3" stroke="#151326" strokeWidth="2.5" />
            <circle cx="26" cy="20" r="5" fill="#FFFFFF" stroke="#151326" strokeWidth="2" />
            <path d="M 12 34 L 6 42 L 16 40 Z" fill="#7C5CFF" stroke="#151326" strokeWidth="2" />
            <path d="M 40 34 L 46 42 L 36 40 Z" fill="#7C5CFF" stroke="#151326" strokeWidth="2" />
            <path d="M 20 40 Q 26 52 26 54 Q 26 52 32 40 Z" fill="#FFD84D" stroke="#151326" strokeWidth="2" />
          </g>
          <text x="64" y="36" fontFamily="sans-serif" fontWeight="800" fontSize="13" fill="#17152B">SHIP FAST</text>
          <text x="64" y="52" fontFamily="sans-serif" fontWeight="600" fontSize="10" fill="#626078">100% CI/CD</text>
        </g>

        {/* Central Character & Laptop Composition */}
        {/* Soft Shadow Base */}
        <ellipse cx="300" cy="520" rx="170" ry="30" fill="#0E0C1C" opacity="0.35" />

        {/* Developer Torso / Hoodie */}
        <path
          d="M 200 520 C 200 420 230 380 300 380 C 370 380 400 420 400 520 Z"
          fill="#5B4BFF"
          stroke="#151326"
          strokeWidth="4"
        />
        {/* Hoodie Strings & Accent */}
        <path d="M 285 390 V 435 M 315 390 V 435" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="285" cy="437" r="3.5" fill="#FFD84D" stroke="#151326" strokeWidth="1.5" />
        <circle cx="315" cy="437" r="3.5" fill="#FFD84D" stroke="#151326" strokeWidth="1.5" />

        {/* Developer Head & Face */}
        <circle cx="300" cy="310" r="54" fill="#FFDFBA" stroke="#151326" strokeWidth="4" />
        {/* Stylized Modern Hair (Indigo / Dark Violet with playful curls) */}
        <path
          d="M 246 300 C 246 240 270 230 310 230 C 354 230 364 260 362 290 C 350 280 338 274 320 274 C 290 274 270 290 246 300 Z"
          fill="#17152B"
          stroke="#151326"
          strokeWidth="4"
        />
        {/* Glasses (Modern Round Cyan Frames) */}
        <circle cx="280" cy="308" r="14" fill="rgba(0,194,255,0.25)" stroke="#00C2FF" strokeWidth="3.5" />
        <circle cx="320" cy="308" r="14" fill="rgba(0,194,255,0.25)" stroke="#00C2FF" strokeWidth="3.5" />
        <path d="M 294 308 H 306" stroke="#00C2FF" strokeWidth="3.5" />
        {/* Cheerful Eyes & Smile */}
        <circle cx="280" cy="308" r="4" fill="#17152B" />
        <circle cx="320" cy="308" r="4" fill="#17152B" />
        <path d="M 294 330 Q 300 338 306 330" stroke="#17152B" strokeWidth="3" strokeLinecap="round" />
        {/* Blush */}
        <circle cx="264" cy="324" r="5" fill="#FF4FA3" opacity="0.6" />
        <circle cx="336" cy="324" r="5" fill="#FF4FA3" opacity="0.6" />

        {/* Giant Open Laptop Screen in Front */}
        <g transform="translate(190, 360)">
          {/* Laptop Screen Body */}
          <rect
            x="0"
            y="0"
            width="220"
            height="136"
            rx="16"
            fill="url(#laptop-screen-grad)"
            stroke="#151326"
            strokeWidth="4"
            filter="url(#card-shadow)"
          />
          {/* Top Bar of Editor */}
          <rect x="0" y="0" width="220" height="24" rx="16" fill="#1D1A33" />
          <circle cx="16" cy="12" r="3.5" fill="#FF4FA3" />
          <circle cx="28" cy="12" r="3.5" fill="#FFD84D" />
          <circle cx="40" cy="12" r="3.5" fill="#55D88A" />
          <rect x="65" y="6" width="90" height="12" rx="4" fill="#151326" />
          <text x="110" y="15" textAnchor="middle" fill="#A09EC0" fontSize="8" fontFamily="monospace">blueorbit.ts</text>

          {/* IDE Content Lines */}
          <rect x="16" y="36" width="70" height="7" rx="3" fill="#00C2FF" />
          <rect x="94" y="36" width="60" height="7" rx="3" fill="#FF4FA3" />
          <rect x="28" y="50" width="95" height="7" rx="3" fill="#FFD84D" />
          <rect x="28" y="64" width="130" height="7" rx="3" fill="#55D88A" />
          <rect x="42" y="78" width="80" height="7" rx="3" fill="#00C2FF" />
          <rect x="28" y="92" width="110" height="7" rx="3" fill="#FFFFFF" opacity="0.8" />
          <rect x="16" y="106" width="40" height="7" rx="3" fill="#7C5CFF" />

          {/* Glowing Cursor Blink */}
          <rect x="62" y="105" width="5" height="9" rx="1" fill="#00C2FF" />

          {/* Glowing Orbit Node inside Editor */}
          <circle cx="180" cy="80" r="20" fill="url(#accent-box-grad)" stroke="#FFFFFF" strokeWidth="2" />
          <ellipse cx="180" cy="80" rx="28" ry="9" transform="rotate(-20 180 80)" stroke="#00C2FF" strokeWidth="1.5" />
        </g>

        {/* Laptop Keyboard Base */}
        <path
          d="M 150 496 L 450 496 L 430 528 L 170 528 Z"
          fill="#E2E0FC"
          stroke="#151326"
          strokeWidth="4"
        />
        {/* Trackpad */}
        <rect x="270" y="504" width="60" height="18" rx="4" fill="#CAC6F2" stroke="#151326" strokeWidth="2" />

        {/* Developer Hands on Keyboard */}
        <circle cx="240" cy="494" r="14" fill="#FFDFBA" stroke="#151326" strokeWidth="3.5" />
        <circle cx="360" cy="494" r="14" fill="#FFDFBA" stroke="#151326" strokeWidth="3.5" />

        {/* Floating Badge at Bottom Center: "WE BUILD REAL PRODUCTS" */}
        <g transform="translate(185, 545)" className="animate-float-slow">
          <rect
            x="0"
            y="0"
            width="230"
            height="44"
            rx="22"
            fill="#FFD84D"
            stroke="#151326"
            strokeWidth="3.5"
            filter="url(#card-shadow)"
          />
          <circle cx="26" cy="22" r="10" fill="#151326" />
          <path d="M 22 22 L 25 25 L 30 19" stroke="#55D88A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="44" y="27" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="#17152B" letterSpacing="1">
            IDEAS → PRODUCTION
          </text>
        </g>
      </svg>
    </div>
  );
};

// Custom Illustrated Card Icons
export const WebAppIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-16 h-16 rounded-2xl bg-[#E6F9FF] border-2 border-[#151326] flex items-center justify-center p-2.5 shadow-[3px_3px_0px_#151326] ${className}`}>
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="4" y="8" width="56" height="48" rx="10" fill="#FFFFFF" stroke="#151326" strokeWidth="3.5" />
      <rect x="4" y="8" width="56" height="14" rx="10" fill="#00C2FF" stroke="#151326" strokeWidth="3.5" />
      <circle cx="14" cy="15" r="2.5" fill="#FF4FA3" />
      <circle cx="22" cy="15" r="2.5" fill="#FFD84D" />
      <circle cx="30" cy="15" r="2.5" fill="#55D88A" />
      <path d="M 14 32 L 22 40 L 14 48 M 28 48 H 40" stroke="#5B4BFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="48" cy="38" r="7" fill="#FFD84D" stroke="#151326" strokeWidth="2.5" />
    </svg>
  </div>
);

export const SaaSIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-16 h-16 rounded-2xl bg-[#FFF0F7] border-2 border-[#151326] flex items-center justify-center p-2.5 shadow-[3px_3px_0px_#151326] ${className}`}>
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="14" y="6" width="42" height="34" rx="8" fill="#F0EEFF" stroke="#151326" strokeWidth="3" />
      <rect x="8" y="16" width="44" height="36" rx="8" fill="#FFFFFF" stroke="#151326" strokeWidth="3.5" />
      <path d="M 16 36 L 24 28 L 32 34 L 44 22" stroke="#FF4FA3" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44" cy="22" r="3.5" fill="#FFD84D" stroke="#151326" strokeWidth="2" />
      <rect x="14" y="44" width="16" height="4" rx="2" fill="#5B4BFF" />
    </svg>
  </div>
);

export const APISystemsIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-16 h-16 rounded-2xl bg-[#F0EEFF] border-2 border-[#151326] flex items-center justify-center p-2.5 shadow-[3px_3px_0px_#151326] ${className}`}>
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <circle cx="32" cy="32" r="14" fill="#5B4BFF" stroke="#151326" strokeWidth="3.5" />
      <circle cx="12" cy="16" r="8" fill="#00C2FF" stroke="#151326" strokeWidth="3" />
      <circle cx="52" cy="16" r="8" fill="#FFD84D" stroke="#151326" strokeWidth="3" />
      <circle cx="32" cy="54" r="8" fill="#55D88A" stroke="#151326" strokeWidth="3" />
      <path d="M 18 20 L 25 26 M 46 20 L 39 26 M 32 46 V 38" stroke="#151326" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
    </svg>
  </div>
);

export const RealTimeIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-16 h-16 rounded-2xl bg-[#FFF3EE] border-2 border-[#151326] flex items-center justify-center p-2.5 shadow-[3px_3px_0px_#151326] ${className}`}>
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="6" y="10" width="52" height="44" rx="12" fill="#FFFFFF" stroke="#151326" strokeWidth="3.5" />
      {/* Lightning Bolt */}
      <path d="M 35 16 L 21 34 H 32 L 27 48 L 45 28 H 33 L 35 16 Z" fill="#FF7043" stroke="#151326" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="14" cy="20" r="3" fill="#00C2FF" />
      <circle cx="50" cy="44" r="3" fill="#55D88A" />
    </svg>
  </div>
);
