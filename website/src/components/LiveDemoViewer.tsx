import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  Minimize2,
  ExternalLink,
  RotateCcw,
  RefreshCw,
  ShieldCheck,
  Zap,
  Info,
  AlertCircle
} from 'lucide-react';
import { Project } from '../types';
import { FloatingObject } from './FloatingDecorations';

interface LiveDemoViewerProps {
  project: Project | null;
  onClose: () => void;
  allProjects?: Project[];
  onSelectProject?: (p: Project) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';
type Orientation = 'portrait' | 'landscape';

export const LiveDemoViewer: React.FC<LiveDemoViewerProps> = ({
  project,
  onClose,
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [orientation, setOrientation] = useState<Orientation>('portrait');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [loadTimeoutTriggered, setLoadTimeoutTriggered] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  });

  // Real-time clock update for simulated mobile status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      setIsLoading(true);
      setHasError(false);
      setLoadTimeoutTriggered(false);
      setIframeKey((prev) => prev + 1);
      // Lock background scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Loading safety timeout
  useEffect(() => {
    if (!project) return;
    const timer = setTimeout(() => {
      if (isLoading) {
        setLoadTimeoutTriggered(true);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [isLoading, project, iframeKey]);

  // Keyboard accessibility shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '1') {
        setDeviceMode('desktop');
      } else if (e.key === '2') {
        setDeviceMode('tablet');
      } else if (e.key === '3') {
        setDeviceMode('mobile');
      } else if (e.key.toLowerCase() === 'f' && !e.metaKey && !e.ctrlKey) {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!project) return null;

  const activeUrl = project.demoUrl || project.url;

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {
        setIsFullscreen(!isFullscreen);
      });
    } else {
      document.exitFullscreen().catch(() => {
        setIsFullscreen(false);
      });
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setHasError(false);
    setLoadTimeoutTriggered(false);
    setIframeKey((prev) => prev + 1);
  };

  const toggleOrientation = () => {
    setOrientation((prev) => (prev === 'portrait' ? 'landscape' : 'portrait'));
  };

  // Dimensions based on device and orientation
  const getDeviceDimensions = () => {
    if (deviceMode === 'desktop') {
      return { width: '100%', height: '100%', label: '100% Fullscreen Responsive' };
    }
    if (deviceMode === 'tablet') {
      if (orientation === 'portrait') {
        return { width: '768px', height: '1000px', label: '768 × 1000 (iPad Portrait)' };
      }
      return { width: '1000px', height: '768px', label: '1000 × 768 (iPad Landscape)' };
    }
    // mobile
    if (orientation === 'portrait') {
      return { width: '390px', height: '820px', label: '390 × 820 (iPhone 15 Pro)' };
    }
    return { width: '820px', height: '390px', label: '820 × 390 (Mobile Landscape)' };
  };

  const dims = getDeviceDimensions();

  return (
    <div
      ref={containerRef}
      id="live-demo-fullscreen-viewer"
      className="fixed inset-0 z-[100] w-full max-w-[100vw] h-full bg-[#5B4BFF] text-[#17152B] flex flex-col overflow-hidden font-sans select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Live Interactive Demo`}
    >
      {/* Subtle Background Glows & Ambient Identity (matching Hero section) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#7C5CFF]/50 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#00C2FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#FF4FA3]/20 blur-3xl pointer-events-none" />
        
        {/* Subtle Brand Watermark */}
        <div className="absolute bottom-4 right-6 text-white/[0.04] font-black text-8xl md:text-9xl tracking-tighter leading-none pointer-events-none select-none">
          BO
        </div>

        {/* Ambient Ring Accents */}
        <div className="absolute top-24 left-12 w-32 h-32 border-2 border-[#00C2FF]/15 rounded-full pointer-events-none" />
        <div className="absolute bottom-16 right-24 w-44 h-44 border border-[#FF4FA3]/15 rounded-full pointer-events-none" />

        {/* Light Floating Studio Elements */}
        <FloatingObject type="code-tag" top="12%" left="2%" color="#00C2FF" animation="slow" />
        <FloatingObject type="sparkle" top="20%" right="4%" color="#FFD84D" animation="medium" />
        <FloatingObject type="curly" bottom="18%" left="3%" color="#FFD84D" animation="slow" />
        <FloatingObject type="plus" bottom="22%" right="3%" color="#FF4FA3" animation="medium" />
      </div>

      {/* ========================================================================= */}
      {/* 1. TOP CONTROL BAR (BlueOrbit Devs Signature Studio Header) */}
      {/* ========================================================================= */}
      <header className="h-14 sm:h-16 md:h-18 bg-[#17152B]/90 backdrop-blur-md border-b-2 border-[#151326] px-2.5 sm:px-4 md:px-6 flex items-center justify-between shrink-0 z-30 shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative w-full max-w-full overflow-hidden text-white">
        
        {/* LEFT: Back Button + Project Name */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 md:flex-initial pr-2 md:pr-0">
          {/* Back Button */}
          <button
            type="button"
            id="live-demo-back-btn"
            onClick={onClose}
            aria-label="Back to Projects"
            className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 min-h-[44px] min-w-[44px] rounded-full bg-white hover:bg-[#00C2FF] active:scale-95 text-[#17152B] hover:text-[#17152B] text-xs sm:text-sm font-extrabold border-2 border-[#151326] shadow-[2px_2px_0px_#151326] transition-all cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD84D] shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform text-[#17152B] shrink-0" />
            <span className="hidden min-[360px]:inline">Back</span>
          </button>

          {/* Vertical Divider (desktop only) */}
          <div className="h-6 w-px bg-white/20 hidden sm:block shrink-0" />

          {/* Project Title with Studio Styling */}
          <div className="min-w-0 flex-1 md:flex-initial flex items-center gap-2">
            <h3 className="font-black text-xs min-[360px]:text-sm sm:text-base tracking-tight truncate text-white leading-none">
              {project.title}
            </h3>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#00C2FF]/20 text-[#00C2FF] text-[10px] font-mono font-extrabold border border-[#00C2FF]/40 shrink-0">
              LIVE
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTER: DESKTOP RESPONSIVE VIEWPORT CONTROLS (Only visible on MD+) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center gap-2">
          {/* Segmented Device Switcher */}
          <div className="flex items-center bg-[#100E20] p-1 rounded-full border-2 border-[#151326] shadow-[2px_2px_0px_#151326]">
            {/* Desktop Option */}
            <button
              type="button"
              id="live-demo-desktop-btn"
              onClick={() => setDeviceMode('desktop')}
              title="Desktop View (100% Width) - Press 1"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                deviceMode === 'desktop'
                  ? 'bg-[#00C2FF] text-[#17152B] shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>

            {/* Tablet Option */}
            <button
              type="button"
              id="live-demo-tablet-btn"
              onClick={() => setDeviceMode('tablet')}
              title="Tablet View (768px iPad) - Press 2"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                deviceMode === 'tablet'
                  ? 'bg-[#00C2FF] text-[#17152B] shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>

            {/* Mobile Option */}
            <button
              type="button"
              id="live-demo-mobile-btn"
              onClick={() => setDeviceMode('mobile')}
              title="Mobile View (390px iPhone) - Press 3"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                deviceMode === 'mobile'
                  ? 'bg-[#00C2FF] text-[#17152B] shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Orientation Toggle / Phone Rotate Button */}
          {deviceMode !== 'desktop' && (
            <button
              type="button"
              id="live-demo-rotate-btn"
              onClick={toggleOrientation}
              title={`Rotate to ${orientation === 'portrait' ? 'Landscape' : 'Portrait'}`}
              aria-label="Rotate device orientation"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-[#151326] shadow-[2px_2px_0px_#151326] transition-all cursor-pointer group"
            >
              <div className="relative flex items-center justify-center">
                <Smartphone className={`w-4 h-4 text-[#00C2FF] transition-transform duration-300 ${orientation === 'landscape' ? 'rotate-90 text-[#FFD84D]' : ''}`} />
                <RotateCcw className="w-2.5 h-2.5 text-white absolute -top-1 -right-1 group-hover:-rotate-45 transition-transform" />
              </div>
              <span className="text-xs font-extrabold hidden lg:inline">Rotate</span>
            </button>
          )}

          {/* Reload Iframe Button */}
          <button
            type="button"
            id="live-demo-refresh-btn"
            onClick={handleRefresh}
            title="Reload Demo Preview"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-[#151326] shadow-[2px_2px_0px_#151326] transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#00C2FF]' : 'text-white/80'}`} />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT: Fullscreen + Coral Open Live Site CTA */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Fullscreen Button (hidden on mobile) */}
          <button
            type="button"
            id="live-demo-fullscreen-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen (F)'}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs border-2 border-[#151326] shadow-[2px_2px_0px_#151326] transition-all cursor-pointer shrink-0"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden lg:inline">{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
          </button>

          {/* Open Live Site Button (Vibrant Coral Studio CTA with 44px min touch target) */}
          <a
            href={activeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="live-demo-open-external-btn"
            className="flex items-center justify-center gap-1.5 px-3 min-[360px]:px-4 sm:px-5 py-2 min-h-[44px] rounded-full bg-[#FF7043] hover:bg-[#FF855D] hover:scale-105 active:scale-95 text-white font-extrabold text-xs sm:text-sm border-2 border-[#151326] shadow-[2px_2px_0px_#151326] transition-all cursor-pointer shrink-0"
          >
            <span className="whitespace-nowrap hidden min-[360px]:inline">Open Site</span>
            <span className="whitespace-nowrap min-[360px]:hidden">Open</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0 text-white" />
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN CANVAS / IFRAME DISPLAY AREA (Surrounded by BlueOrbit Studio atmosphere) */}
      {/* ========================================================================= */}
      <div className="flex-grow w-full max-w-full overflow-hidden flex items-center justify-center p-0 md:p-6 lg:p-8 relative z-10">
        
        {/* Loading Indicator Overlay (Vibrant Creative Studio theme) */}
        {isLoading && (
          <div className="absolute inset-0 bg-[#17152B]/85 backdrop-blur-md z-20 flex flex-col items-center justify-center p-4 sm:p-6 text-center animate-fadeIn w-full h-full text-white">
            {/* Animated Orbit Spinner */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-white/20 border-t-[#00C2FF] animate-spin" />
              <div className="absolute inset-2 rounded-full border-4 border-white/10 border-b-[#FF4FA3] animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00C2FF] shadow-[0_0_20px_rgba(0,194,255,0.5)] flex items-center justify-center text-[#17152B]">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </div>
            </div>

            <h4 className="text-lg sm:text-2xl font-black text-white mb-1.5 sm:mb-2 tracking-tight">
              Loading Live Preview
            </h4>
            <p className="text-white/80 text-xs sm:text-sm max-w-md font-medium mb-4 px-2">
              Connecting to {project.title} live environment...
            </p>

            {/* Quick Progress Bar */}
            <div className="w-48 sm:w-56 h-2 bg-white/20 rounded-full overflow-hidden mb-4 border border-white/30">
              <div className="w-full h-full bg-gradient-to-r from-[#00C2FF] via-[#FFD84D] to-[#FF7043] animate-pulse" />
            </div>

            {/* Fallback option if site takes time */}
            {loadTimeoutTriggered && (
              <div className="mt-2 p-4 rounded-2xl bg-[#151326] border-2 border-[#151326] shadow-[4px_4px_0px_#151326] max-w-xs sm:max-w-sm animate-fadeIn">
                <div className="flex items-center gap-2 text-xs text-[#00C2FF] font-extrabold mb-1.5">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>Taking a bit longer?</span>
                </div>
                <p className="text-[11px] sm:text-xs text-white/80 mb-3 leading-relaxed">
                  Some production sites restrict embedded iframes. You can open the project directly in a separate browser tab.
                </p>
                <a
                  href={activeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] rounded-full bg-[#FF7043] hover:bg-[#FF855D] text-white text-xs font-extrabold transition-all shadow-md w-full border border-white/20"
                >
                  <span>Launch in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* DEVICE FRAME WRAPPER (BlueOrbit Devs Browser Frame Design) */}
        {/* ========================================================================= */}
        <div
          className={`relative transition-all duration-300 flex flex-col items-center justify-center w-full h-full max-w-full ${
            deviceMode === 'desktop'
              ? 'md:rounded-3xl md:border-3 md:border-[#151326] md:shadow-[10px_10px_0px_#151326] overflow-hidden bg-[#17152B]'
              : deviceMode === 'tablet'
              ? 'md:border-[12px] md:border-[#151326] md:rounded-[36px] md:shadow-[10px_10px_0px_#151326] bg-[#17152B] overflow-hidden md:my-auto'
              : 'md:border-[14px] md:border-[#151326] md:rounded-[44px] md:shadow-[10px_10px_0px_#151326] bg-[#17152B] overflow-hidden md:my-auto'
          }`}
          style={{
            width: typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : (deviceMode === 'desktop' ? '100%' : dims.width),
            height: typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : (deviceMode === 'desktop' ? '100%' : dims.height),
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        >
          {/* Top Notch / Camera Bar for Tablet and Mobile (Rendered on MD+ desktop simulation only) */}
          {deviceMode === 'mobile' && orientation === 'portrait' && (
            <div className="hidden md:flex w-full h-6 bg-[#17152B] items-center justify-between px-6 shrink-0 relative z-10 border-b border-white/10">
              <span className="text-[10px] font-mono text-white/70 font-bold tracking-tight">{currentTime}</span>
              {/* Dynamic Island pill */}
              <div className="w-20 h-3.5 bg-[#0F0D1C] rounded-full border border-white/15 mx-auto" />
              <div className="flex items-center gap-1 text-[10px] text-white/70">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          {deviceMode === 'tablet' && (
            <div className="hidden md:flex w-full h-4 bg-[#17152B] items-center justify-center shrink-0 border-b border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#0F0D1C] border border-white/15" />
            </div>
          )}

          {/* Desktop Simulated Browser Chrome header (Rendered on MD+ desktop simulation only) */}
          {deviceMode === 'desktop' && (
            <div className="hidden md:flex w-full h-10 bg-[#17152B] border-b-2 border-[#151326] px-4 items-center gap-3 shrink-0">
              {/* Fake window colored dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF4FA3] border border-[#151326]/40" />
                <span className="w-3 h-3 rounded-full bg-[#FFD84D] border border-[#151326]/40" />
                <span className="w-3 h-3 rounded-full bg-[#55D88A] border border-[#151326]/40" />
              </div>

              {/* Fake URL bar styled with BlueOrbit design */}
              <div className="flex-grow max-w-md mx-auto bg-white/10 h-7 rounded-full border border-white/20 px-3.5 flex items-center gap-2 text-[11px] font-mono text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-[#55D88A] shrink-0" />
                <span className="truncate">{activeUrl}</span>
              </div>

              <div className="text-[10px] font-mono font-bold text-[#00C2FF] hidden sm:block">
                60fps Live Sandbox
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* THE IFRAME ELEMENT (Untouched) */}
          {/* ========================================================================= */}
          <div
            data-hide-cursor="true"
            className="w-full h-full relative flex-grow overflow-hidden bg-white"
            onMouseEnter={() => {
              window.dispatchEvent(new CustomEvent('iframe-cursor-hide'));
            }}
            onMouseLeave={() => {
              window.dispatchEvent(new CustomEvent('iframe-cursor-show'));
            }}
          >
            <iframe
              key={iframeKey}
              ref={iframeRef}
              src={activeUrl}
              title={`${project.title} Live Demo`}
              className="w-full h-full border-0 bg-white block"
              data-hide-cursor="true"
              allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads"
              onMouseEnter={() => {
                window.dispatchEvent(new CustomEvent('iframe-cursor-hide'));
              }}
              onMouseLeave={() => {
                window.dispatchEvent(new CustomEvent('iframe-cursor-show'));
              }}
              onLoad={() => {
                setIsLoading(false);
              }}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />

            {/* Fallback Banner if Embedding is Blocked */}
            {hasError && (
              <div className="absolute inset-0 bg-[#17152B] flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-[#FF4FA3]/20 border-2 border-[#FF4FA3] flex items-center justify-center mb-4 shadow-[4px_4px_0px_#151326]">
                  <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF4FA3]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black mb-2">Browser Security Notice</h4>
                <p className="text-white/80 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
                  This production host has enabled <code className="bg-white/10 px-2 py-0.5 rounded text-[#00C2FF]">X-Frame-Options: SAMEORIGIN</code> to protect authentication tokens.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={activeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-full bg-[#FF7043] hover:bg-[#FF855D] text-white font-extrabold text-xs sm:text-sm border-2 border-[#151326] shadow-[3px_3px_0px_#151326] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Launch in Separate Tab</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleRefresh}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm border-2 border-[#151326] shadow-[3px_3px_0px_#151326] transition-all cursor-pointer flex items-center justify-center"
                  >
                    Retry Connection
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Phone Home Indicator Bar (Rendered on MD+ desktop simulation only) */}
          {deviceMode === 'mobile' && orientation === 'portrait' && (
            <div className="hidden md:flex w-full h-5 bg-[#17152B] items-center justify-center shrink-0 border-t border-white/10">
              <div className="w-28 h-1 bg-white/30 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

