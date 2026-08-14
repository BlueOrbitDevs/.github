import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad) and hover support
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    
    const checkSupport = () => {
      setEnabled(mediaQuery.matches);
    };

    checkSupport();
    mediaQuery.addEventListener('change', checkSupport);

    return () => {
      mediaQuery.removeEventListener('change', checkSupport);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Smooth position interpolation loop
    const updatePosition = () => {
      // 0.6 interpolation factor for snappy yet buttery smooth movement
      const ease = 0.6;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    animationFrameId.current = requestAnimationFrame(updatePosition);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, input, select, textarea, [role="button"], [role="link"], [data-cursor-hover], .cursor-pointer'
          )
        );
        setIsHovering(isInteractive);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [enabled, visible]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      id="blueorbit-custom-cursor"
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        willChange: 'transform',
        transform: `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`,
      }}
    >
      {/* Outer scale & interaction wrapper */}
      <div
        className={`relative transition-all duration-200 ease-out origin-top-left ${
          isMouseDown
            ? 'scale-90'
            : isHovering
            ? 'scale-115'
            : 'scale-100'
        }`}
      >
        {/* Modern Sharp Pointer Arrow SVG */}
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-200 ${
            isHovering
              ? 'drop-shadow-[0_2px_10px_rgba(0,194,255,0.6)]'
              : 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]'
          }`}
        >
          {/* Main Arrow Body */}
          <path
            d="M1 1L7.5 19.5L11.5 12.5L18.5 9.5L1 1Z"
            fill="#151326"
            stroke={isHovering ? '#00C2FF' : '#5B4BFF'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Subtle Inner Accent Shading */}
          <path
            d="M4 5L7 14L9.5 10L14 8L4 5Z"
            fill={isHovering ? '#00C2FF' : '#5B4BFF'}
            fillOpacity="0.5"
          />
        </svg>

        {/* Small Black Rounded Attached Badge */}
        <div
          className={`absolute left-3.5 top-2.5 flex items-center gap-1 px-1.5 py-0.5 rounded-[5px] bg-[#151326] border transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.5)] select-none ${
            isHovering
              ? 'border-[#00C2FF] bg-[#151326] shadow-[0_0_10px_rgba(0,194,255,0.4)]'
              : 'border-[#5B4BFF]/50 bg-[#151326]'
          }`}
        >
          {/* Cyan/Indigo status indicator dot */}
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
              isHovering ? 'bg-[#00C2FF] animate-pulse' : 'bg-[#5B4BFF]'
            }`}
          />
          {/* White "dev" text */}
          <span className="font-mono text-[9px] font-black tracking-wider text-white uppercase leading-none">
            dev
          </span>
        </div>
      </div>
    </div>
  );
};
