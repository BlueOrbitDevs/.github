import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  
  // Auto-scroll state
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'idle' | 'up' | 'down'>('idle');
  const [originPos, setOriginPos] = useState<{ x: number; y: number } | null>(null);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);
  const autoScrollFrameId = useRef<number | null>(null);
  
  // Refs for tracking auto-scroll in event listeners without stale closures
  const isAutoScrollingRef = useRef(false);
  const originPosRef = useRef<{ x: number; y: number } | null>(null);
  const middleDownPos = useRef<{ x: number; y: number } | null>(null);
  const middleDragDistance = useRef(0);

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

  // Sync refs with state
  useEffect(() => {
    isAutoScrollingRef.current = isAutoScrolling;
    originPosRef.current = originPos;
  }, [isAutoScrolling, originPos]);

  // Main cursor motion loop
  useEffect(() => {
    if (!enabled) return;

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

      // Check if hovering over an iframe or element marked with data-hide-cursor
      const target = e.target as HTMLElement | null;
      const isIframe = target?.tagName === 'IFRAME' || Boolean(target?.closest('[data-hide-cursor="true"], iframe'));

      if (isIframe) {
        if (visible) setVisible(false);
        return;
      }

      if (!visible) setVisible(true);

      // Track drag distance if middle button is held
      if (middleDownPos.current) {
        const dx = e.clientX - middleDownPos.current.x;
        const dy = e.clientY - middleDownPos.current.y;
        middleDragDistance.current = Math.sqrt(dx * dx + dy * dy);
      }

      // If auto-scrolling, update scroll direction based on offset from origin
      if (isAutoScrollingRef.current && originPosRef.current) {
        const deltaY = e.clientY - originPosRef.current.y;
        const deadZone = 8;
        if (deltaY < -deadZone) {
          setScrollDirection('up');
        } else if (deltaY > deadZone) {
          setScrollDirection('down');
        } else {
          setScrollDirection('idle');
        }
      } else {
        // Check if hovering over interactive element
        if (target) {
          const isInteractive = Boolean(
            target.closest(
              'a, button, input, select, textarea, [role="button"], [role="link"], [data-cursor-hover], .cursor-pointer'
            )
          );
          setIsHovering(isInteractive);
        }
      }
    };

    const stopAutoScroll = () => {
      if (isAutoScrollingRef.current) {
        setIsAutoScrolling(false);
        setOriginPos(null);
        setScrollDirection('idle');
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      // Middle mouse button (wheel click)
      if (e.button === 1) {
        e.preventDefault();
        e.stopPropagation();

        if (isAutoScrollingRef.current) {
          stopAutoScroll();
        } else {
          const origin = { x: e.clientX, y: e.clientY };
          middleDownPos.current = origin;
          middleDragDistance.current = 0;
          setIsAutoScrolling(true);
          setOriginPos(origin);
          setScrollDirection('idle');
        }
        return;
      }

      // Left or right click cancels active auto-scroll
      if (isAutoScrollingRef.current) {
        stopAutoScroll();
        return;
      }

      setIsMouseDown(true);
    };

    const onMouseUp = (e: MouseEvent) => {
      if (e.button === 1) {
        // If the user held down the middle button and dragged away, release should stop autoscroll
        if (middleDragDistance.current > 15 && isAutoScrollingRef.current) {
          stopAutoScroll();
        }
        middleDownPos.current = null;
        return;
      }
      setIsMouseDown(false);
    };

    const onWheel = () => {
      if (isAutoScrollingRef.current) {
        stopAutoScroll();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Tab') {
        if (isAutoScrollingRef.current) {
          stopAutoScroll();
        }
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
      stopAutoScroll();
    };

    const onMouseEnter = () => setVisible(true);

    const onAuxClick = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const onIframeHide = () => {
      setVisible(false);
    };

    const onIframeShow = () => {
      setVisible(true);
    };

    const onWindowBlur = () => {
      stopAutoScroll();
      // If focus moves to an iframe or outside window, hide custom cursor
      setVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { capture: true });
    window.addEventListener('mouseup', onMouseUp, { capture: true });
    window.addEventListener('auxclick', onAuxClick, { capture: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('blur', onWindowBlur);
    window.addEventListener('iframe-cursor-hide', onIframeHide);
    window.addEventListener('iframe-cursor-show', onIframeShow);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown, { capture: true });
      window.removeEventListener('mouseup', onMouseUp, { capture: true });
      window.removeEventListener('auxclick', onAuxClick, { capture: true });
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('blur', onWindowBlur);
      window.removeEventListener('iframe-cursor-hide', onIframeHide);
      window.removeEventListener('iframe-cursor-show', onIframeShow);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [enabled, visible]);

  // Continuous auto-scroll loop when auto-scroll is active
  useEffect(() => {
    if (!isAutoScrolling || !originPos) {
      if (autoScrollFrameId.current) {
        cancelAnimationFrame(autoScrollFrameId.current);
        autoScrollFrameId.current = null;
      }
      return;
    }

    const performAutoScroll = () => {
      if (!isAutoScrollingRef.current || !originPosRef.current) return;

      const deltaY = mousePos.current.y - originPosRef.current.y;
      const deltaX = mousePos.current.x - originPosRef.current.x;
      const deadZone = 8;

      let speedY = 0;
      let speedX = 0;

      if (Math.abs(deltaY) > deadZone) {
        const offset = Math.abs(deltaY) - deadZone;
        // Non-linear acceleration curve for intuitive precision and fast long-distance scrolling
        const direction = Math.sign(deltaY);
        speedY = direction * Math.min(Math.pow(offset / 12, 1.35), 45);
      }

      if (Math.abs(deltaX) > deadZone) {
        const offset = Math.abs(deltaX) - deadZone;
        const direction = Math.sign(deltaX);
        speedX = direction * Math.min(Math.pow(offset / 14, 1.3), 35);
      }

      if (speedY !== 0 || speedX !== 0) {
        window.scrollBy({
          top: speedY,
          left: speedX,
          behavior: 'instant' as ScrollBehavior,
        });
      }

      autoScrollFrameId.current = requestAnimationFrame(performAutoScroll);
    };

    autoScrollFrameId.current = requestAnimationFrame(performAutoScroll);

    return () => {
      if (autoScrollFrameId.current) {
        cancelAnimationFrame(autoScrollFrameId.current);
        autoScrollFrameId.current = null;
      }
    };
  }, [isAutoScrolling, originPos]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* ============================================================
         1. FIXED SINGLE CLASSIC CIRCULAR AUTO-SCROLL ICON AT ORIGIN
         ============================================================ */}
      {isAutoScrolling && originPos && (
        <div
          id="blueorbit-autoscroll-origin"
          aria-hidden="true"
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${originPos.x}px`,
            top: `${originPos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Subtle Outer Glowing Halo */}
          <div className="absolute inset-[-6px] rounded-full bg-[#5B4BFF]/20 animate-ping opacity-60 pointer-events-none" />

          {/* Classic Circular Auto-Scroll Chassis */}
          <div className="relative w-9 h-9 rounded-full bg-[#151326] border-2 border-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.7),0_0_16px_rgba(91,75,255,0.7)] flex flex-col items-center justify-between p-1 select-none backdrop-blur-xs">
            {/* Top Arrow */}
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-150 ${
                scrollDirection === 'up'
                  ? 'text-[#00C2FF] scale-130 -translate-y-0.5 drop-shadow-[0_0_8px_#00C2FF]'
                  : 'text-white/80'
              }`}
            >
              <path
                d="M5 0.5L9.33013 7.25H0.669873L5 0.5Z"
                fill="currentColor"
              />
            </svg>

            {/* Center Core Dot / Orbit Circle */}
            <div
              className={`w-2 h-2 rounded-full border border-white transition-all duration-150 ${
                scrollDirection === 'idle'
                  ? 'bg-[#FFD84D] shadow-[0_0_6px_#FFD84D]'
                  : 'bg-[#00C2FF] shadow-[0_0_8px_#00C2FF]'
              }`}
            />

            {/* Bottom Arrow */}
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-150 ${
                scrollDirection === 'down'
                  ? 'text-[#00C2FF] scale-130 translate-y-0.5 drop-shadow-[0_0_8px_#00C2FF]'
                  : 'text-white/80'
              }`}
            >
              <path
                d="M5 7.5L0.669873 0.75L9.33013 0.75L5 7.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      )}

      {/* ============================================================
         2. MOVING CUSTOM CURSOR ELEMENT
         ============================================================ */}
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
        {isAutoScrolling ? null : (
          /* DEFAULT BLUEORBIT SHARP DEV ARROW CURSOR */
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
        )}
      </div>
    </>
  );
};
