import React from 'react';

interface WaveDividerProps {
  fromColor?: string; // e.g. '#5B4BFF', '#FFFFFF', '#F0EEFF', '#F7F7FF'
  toColor?: string;
  variant?: 'organic-1' | 'organic-2' | 'organic-3' | 'organic-4';
  flip?: boolean;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  toColor = '#FFFFFF',
  variant = 'organic-1',
  flip = false,
  className = ''
}) => {
  // Return tailored organic waves with smooth SVG curves
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${flip ? 'rotate-180 -mb-1' : '-mt-1'} ${className}`}
      aria-hidden="true"
    >
      {variant === 'organic-1' && (
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-24 lg:h-28 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 C 320 90 480 20 820 80 C 1120 130 1320 40 1440 70 V 120 H 0 Z"
            fill={toColor}
          />
        </svg>
      )}

      {variant === 'organic-2' && (
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-24 lg:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 40 C 240 110 520 10 780 75 C 1040 135 1280 25 1440 60 V 120 H 0 Z"
            fill={toColor}
          />
        </svg>
      )}

      {variant === 'organic-3' && (
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-24 lg:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 20 C 360 115 620 5 940 90 C 1180 140 1360 40 1440 65 V 120 H 0 Z"
            fill={toColor}
          />
        </svg>
      )}

      {variant === 'organic-4' && (
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-24 lg:h-28 block"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 60 C 260 15 540 110 820 45 C 1100 -10 1320 85 1440 40 V 120 H 0 Z"
            fill={toColor}
          />
        </svg>
      )}
    </div>
  );
};
