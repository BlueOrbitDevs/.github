import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

interface FloatingObjectProps {
  type: 'code-tag' | 'curly' | 'sparkle' | 'rocket' | 'orbit' | 'cursor' | 'plus' | 'binary' | 'star' | 'planet';
  className?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: string;
  animation?: 'slow' | 'medium' | 'reverse';
  size?: 'sm' | 'md' | 'lg';
}

export const FloatingObject: React.FC<FloatingObjectProps> = ({
  type,
  className = '',
  top,
  left,
  right,
  bottom,
  color = '#FFD84D',
  animation = 'slow',
  size = 'md'
}) => {
  const animClass =
    animation === 'slow'
      ? 'animate-float-slow'
      : animation === 'medium'
      ? 'animate-float-medium'
      : 'animate-float-reverse';

  const positionStyle: React.CSSProperties = {
    top,
    left,
    right,
    bottom,
    position: 'absolute'
  };

  return (
    <div
      style={positionStyle}
      className={`hidden md:flex pointer-events-none select-none z-10 ${animClass} ${className}`}
      aria-hidden="true"
    >
      {type === 'code-tag' && (
        <span
          className="font-mono font-black text-xs sm:text-sm px-2.5 py-1 rounded-full border-2 border-[#151326] shadow-[2px_2px_0px_#151326]"
          style={{ backgroundColor: color, color: '#17152B' }}
        >
          &lt;/&gt;
        </span>
      )}

      {type === 'curly' && (
        <span
          className="font-mono font-black text-xs sm:text-sm px-2 py-0.5 rounded-lg border-2 border-[#151326] shadow-[2px_2px_0px_#151326]"
          style={{ backgroundColor: color, color: '#17152B' }}
        >
          &#123; &#125;
        </span>
      )}

      {type === 'binary' && (
        <span
          className="font-mono font-black text-[11px] px-2 py-0.5 rounded-md border border-[#151326] bg-[#151326] text-[#00C2FF] shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
        >
          10101
        </span>
      )}

      {type === 'sparkle' && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
          <path
            d="M12 2 Q 12 12 22 12 Q 12 12 12 22 Q 12 12 2 12 Q 12 12 12 2 Z"
            fill={color}
            stroke="#151326"
            strokeWidth="1.5"
          />
        </svg>
      )}

      {type === 'star' && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4" fill={color} stroke="#151326" strokeWidth="1.5" />
          <path d="M 10 2 V 6 M 10 14 V 18 M 2 10 H 6 M 14 10 H 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {type === 'plus' && (
        <div className="p-1 rounded-full" style={{ color }}>
          <Sparkles className="w-4 h-4" />
        </div>
      )}

      {type === 'cursor' && (
        <div className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 2 L 18 10 L 11 12 L 8 19 Z"
              fill={color}
              stroke="#151326"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute -top-3 left-4 text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#151326] text-white whitespace-nowrap">
            dev
          </span>
        </div>
      )}

      {type === 'orbit' && (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="18" cy="18" r="5" fill="#5B4BFF" stroke="#151326" strokeWidth="1.5" />
          <circle cx="30" cy="14" r="2.5" fill="#FF4FA3" stroke="#151326" strokeWidth="1" />
        </svg>
      )}

      {type === 'planet' && (
        <div className="w-8 h-8 rounded-full border-2 border-[#151326] shadow-[2px_2px_0px_#151326] flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: color }}>
          <div className="absolute w-12 h-2 rounded-full border border-[#151326] -rotate-12 bg-white/40" />
        </div>
      )}

      {type === 'rocket' && (
        <div className="p-2 rounded-xl bg-white border-2 border-[#151326] shadow-[2px_2px_0px_#151326] flex items-center justify-center">
          <Rocket className="w-4 h-4 text-[#5B4BFF]" />
        </div>
      )}
    </div>
  );
};
