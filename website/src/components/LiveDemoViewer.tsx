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
  X,
  ShieldCheck,
  Zap,
  Info,
  Sparkles,
  ChevronDown,
  AlertCircle
} from 'lucide-react';
import { Project } from '../types';

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
  allProjects = [],
  onSelectProject
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [orientation, setOrientation] = useState<Orientation>('portrait');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showProjectPicker, setShowProjectPicker] = useState<boolean>(false);
  const [loadTimeoutTriggered, setLoadTimeoutTriggered] = useState<boolean>(false);

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

  // Loading safety timeout: if iframe takes > 8 seconds or is blocked by CSP, provide seamless fallback info
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

  const activeUrl = project.demoUrl || project.url ;

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
      className="fixed inset-0 z-[100] bg-[#080A12] text-[#F8FAFC] flex flex-col overflow-hidden font-sans select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Live Interactive Demo`}
    >
      {/* ========================================================================= */}
      {/* 1. TOP CONTROL BAR (Vercel/Linear style dark header) */}
      {/* ========================================================================= */}
      <header className="h-16 sm:h-18 bg-[#14182B] border-b border-[rgba(148,163,184,0.16)] px-3 sm:px-6 flex items-center justify-between shrink-0 z-30 shadow-lg relative">
        
        {/* LEFT: Back Button + Project Name + LIVE Badge */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {/* Back to Projects Button */}
          <button
            type="button"
            id="live-demo-back-btn"
            onClick={onClose}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#191E35] hover:bg-[#202640] text-[#F8FAFC] font-bold text-xs sm:text-sm border border-[rgba(148,163,184,0.16)] hover:border-[rgba(148,163,184,0.3)] transition-all cursor-pointer shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#38BDF8]" />
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-[rgba(148,163,184,0.16)] hidden md:block" />

          {/* Brand Logo & Project Title Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProjectPicker(!showProjectPicker)}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl hover:bg-[#191E35] border border-transparent hover:border-[rgba(148,163,184,0.16)] transition-all text-left"
            >
              <div className="w-7 h-7 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/50 p-0.5 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="./assets/brand-logo.png"
                  alt="BlueOrbit Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base tracking-tight truncate text-[#F8FAFC]">
                    {project.title}
                  </span>
                  <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-mono font-bold border border-[#22C55E]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    LIVE
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
                </div>
              </div>
            </button>

            {/* Quick Switch Dropdown */}
            {showProjectPicker && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#191E35] border border-[rgba(148,163,184,0.2)] rounded-2xl p-2 shadow-2xl z-50 animate-fadeIn">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] px-3 py-1.5">
                  Switch Live Demo
                </div>
                <div className="space-y-1">
                  {allProjects.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        if (onSelectProject) onSelectProject(p);
                        setShowProjectPicker(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                        p.id === project.id
                          ? 'bg-[#6366F1] text-white shadow-md'
                          : 'text-[#CBD5E1] hover:bg-[#202640] hover:text-[#F8FAFC]'
                      }`}
                    >
                      <span className="truncate">{p.title}</span>
                      <span className="text-[10px] opacity-70 font-mono">{p.category[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTER: RESPONSIVE VIEWPORT CONTROLS (Desktop / Tablet / Mobile) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center gap-2">
          {/* Segmented Device Switcher */}
          <div className="flex items-center bg-[#0D1020] p-1 rounded-full border border-[rgba(148,163,184,0.16)] shadow-inner">
            {/* Desktop Option */}
            <button
              type="button"
              id="live-demo-desktop-btn"
              onClick={() => setDeviceMode('desktop')}
              title="Desktop View (100% Width) - Press 1"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                deviceMode === 'desktop'
                  ? 'bg-[#6366F1] hover:bg-[#818CF8] text-white shadow-sm'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#202640]'
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
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                deviceMode === 'tablet'
                  ? 'bg-[#6366F1] hover:bg-[#818CF8] text-white shadow-sm'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#202640]'
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
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                deviceMode === 'mobile'
                  ? 'bg-[#6366F1] hover:bg-[#818CF8] text-white shadow-sm'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#202640]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Orientation Toggle (for Tablet and Mobile) */}
          {deviceMode !== 'desktop' && (
            <button
              type="button"
              id="live-demo-rotate-btn"
              onClick={toggleOrientation}
              title={`Rotate to ${orientation === 'portrait' ? 'Landscape' : 'Portrait'}`}
              className="p-2 rounded-full bg-[#191E35] hover:bg-[#202640] text-[#CBD5E1] border border-[rgba(148,163,184,0.16)] hover:border-[rgba(148,163,184,0.3)] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#38BDF8]" />
            </button>
          )}

          {/* Reload Iframe Button */}
          <button
            type="button"
            id="live-demo-refresh-btn"
            onClick={handleRefresh}
            title="Reload Demo Preview"
            className="p-2 rounded-full bg-[#191E35] hover:bg-[#202640] text-[#CBD5E1] border border-[rgba(148,163,184,0.16)] hover:border-[rgba(148,163,184,0.3)] transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#38BDF8]' : 'text-[#94A3B8]'}`} />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT: Fullscreen + Open Live Site + Close */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile responsive selector button (visible only on small mobile screens) */}
          <div className="flex md:hidden items-center bg-[#0D1020] p-0.5 rounded-lg border border-[rgba(148,163,184,0.16)]">
            <button
              type="button"
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-md ${deviceMode === 'desktop' ? 'bg-[#6366F1] text-white' : 'text-[#94A3B8]'}`}
              title="Desktop"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-md ${deviceMode === 'mobile' ? 'bg-[#6366F1] text-white' : 'text-[#94A3B8]'}`}
              title="Mobile"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            type="button"
            id="live-demo-fullscreen-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen (F)'}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#191E35] hover:bg-[#202640] text-[#CBD5E1] hover:text-[#F8FAFC] font-bold text-xs border border-[rgba(148,163,184,0.16)] transition-all cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden lg:inline">{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
          </button>

          {/* Open Live Site Button (Refined Compact Cyan/Blue CTA) */}
          <a
            href={activeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="live-demo-open-external-btn"
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#06111F] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-100 transition-all cursor-pointer"
          >
            <span>Open Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Close Button */}
          <button
            type="button"
            id="live-demo-close-btn"
            onClick={onClose}
            title="Close Preview (Esc)"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#191E35] hover:bg-rose-500/20 hover:text-rose-400 hover:border-rose-500/30 text-[#94A3B8] border border-[rgba(148,163,184,0.16)] flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. SUB-INFO BAR / URL BROWSER SIMULATOR */}
      {/* ========================================================================= */}
      <div className="h-8 bg-[#11152A] border-b border-[rgba(148,163,184,0.16)] px-4 flex items-center justify-between text-[11px] text-[#94A3B8] shrink-0 font-mono">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span className="text-[#64748B]">URL:</span>
          <span className="text-[#38BDF8] truncate font-bold">{activeUrl}</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[#94A3B8]">
          <span>Viewport: <strong className="text-[#F8FAFC]">{dims.label}</strong></span>
          <span className="hidden md:inline text-[#64748B]">Shortcuts: [1] Desktop [2] Tablet [3] Mobile [Esc] Exit</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN CANVAS / IFRAME DISPLAY AREA */}
      {/* ========================================================================= */}
      <div className="flex-grow overflow-auto flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#0D1020] relative [background-image:radial-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:24px_24px]">
        
        {/* Loading Indicator Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-[#080A12]/90 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
            {/* Animated Orbit Spinner */}
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-[#6366F1]/25 border-t-[#38BDF8] animate-spin" />
              <div className="absolute inset-2 rounded-full border-4 border-[#6366F1]/20 border-b-[#6366F1] animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
              <div className="w-8 h-8 rounded-full bg-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center text-white">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-2 tracking-tight">
              Loading Live Environment
            </h4>
            <p className="text-[#94A3B8] text-sm max-w-md font-normal mb-4">
              Initializing {project.title} live runtime sandbox. Please wait a moment...
            </p>

            {/* Quick Progress Bar */}
            <div className="w-56 h-1.5 bg-[#191E35] rounded-full overflow-hidden mb-4 border border-[rgba(148,163,184,0.16)]">
              <div className="w-full h-full bg-gradient-to-r from-[#6366F1] via-[#38BDF8] to-[#22C55E] animate-pulse" />
            </div>

            {/* Fallback option if site takes time */}
            {loadTimeoutTriggered && (
              <div className="mt-4 p-4 rounded-2xl bg-[#14182B] border border-[rgba(148,163,184,0.16)] max-w-sm animate-fadeIn shadow-xl">
                <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold mb-2">
                  <Info className="w-4 h-4" />
                  <span>Taking longer than expected?</span>
                </div>
                <p className="text-xs text-[#94A3B8] mb-3 leading-relaxed">
                  Some production domains restrict iframe embedding for security reasons. You can launch it directly in a dedicated tab.
                </p>
                <a
                  href={activeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#06111F] text-xs font-bold transition-all shadow-md"
                >
                  <span>Launch in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* DEVICE FRAME WRAPPER */}
        {/* ========================================================================= */}
        <div
          className={`relative transition-all duration-300 flex flex-col items-center justify-center ${
            deviceMode === 'desktop'
              ? 'w-full h-full max-w-full rounded-2xl border border-[rgba(148,163,184,0.16)] shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(99,102,241,0.06)] overflow-hidden bg-[#14182B]'
              : deviceMode === 'tablet'
              ? 'border-8 sm:border-[12px] border-[#14182B] rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(148,163,184,0.16),0_0_30px_rgba(56,189,248,0.06)] bg-[#14182B] overflow-hidden my-auto'
              : 'border-[10px] sm:border-[14px] border-[#14182B] rounded-[44px] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_0_1px_rgba(148,163,184,0.16),0_0_30px_rgba(56,189,248,0.06)] bg-[#14182B] overflow-hidden my-auto'
          }`}
          style={{
            width: deviceMode === 'desktop' ? '100%' : dims.width,
            height: deviceMode === 'desktop' ? '100%' : dims.height,
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        >
          {/* Top Notch / Camera Bar for Tablet and Mobile */}
          {deviceMode === 'mobile' && orientation === 'portrait' && (
            <div className="w-full h-6 bg-[#14182B] flex items-center justify-between px-6 shrink-0 relative z-10 border-b border-[rgba(148,163,184,0.16)]">
              <span className="text-[10px] font-mono text-[#94A3B8] font-bold">9:41</span>
              {/* Dynamic Island pill */}
              <div className="w-20 h-3.5 bg-[#080A12] rounded-full border border-[rgba(148,163,184,0.16)] mx-auto" />
              <div className="flex items-center gap-1 text-[10px] text-[#94A3B8]">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          {deviceMode === 'tablet' && (
            <div className="w-full h-4 bg-[#14182B] flex items-center justify-center shrink-0 border-b border-[rgba(148,163,184,0.16)]">
              <div className="w-2 h-2 rounded-full bg-[#080A12] border border-[rgba(148,163,184,0.16)]" />
            </div>
          )}

          {/* Desktop Simulated Browser Chrome header */}
          {deviceMode === 'desktop' && (
            <div className="w-full h-9 bg-[#14182B] border-b border-[rgba(148,163,184,0.16)] px-4 flex items-center gap-3 shrink-0">
              {/* Fake window buttons */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              </div>

              {/* Fake address bar */}
              <div className="flex-grow max-w-md mx-auto bg-[#0D1020] h-6 rounded-md border border-[rgba(148,163,184,0.16)] px-3 flex items-center gap-2 text-[11px] font-mono text-[#CBD5E1]">
                <ShieldCheck className="w-3 h-3 text-[#22C55E]" />
                <span className="truncate">{activeUrl}</span>
              </div>

              <div className="text-[10px] font-mono text-[#64748B] hidden sm:block">
                Secure Sandbox 60fps
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* THE IFRAME ELEMENT */}
          {/* ========================================================================= */}
          <div className="w-full h-full relative flex-grow overflow-hidden bg-white">
            <iframe
              key={iframeKey}
              ref={iframeRef}
              src={activeUrl}
              title={`${project.title} Live Demo`}
              className="w-full h-full border-0 bg-white"
              allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads"
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
              <div className="absolute inset-0 bg-[#14182B] flex flex-col items-center justify-center p-8 text-center text-[#F8FAFC]">
                <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-rose-400" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Browser Security Notice</h4>
                <p className="text-[#94A3B8] text-sm max-w-md mb-6 leading-relaxed">
                  This production host has enabled <code className="bg-[#191E35] px-2 py-0.5 rounded text-[#38BDF8]">X-Frame-Options: SAMEORIGIN</code> to protect user authentication.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={activeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#06111F] font-bold text-sm shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>Launch in Separate Tab</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleRefresh}
                    className="px-5 py-3 rounded-full bg-[#191E35] hover:bg-[#202640] text-[#F8FAFC] font-bold text-sm border border-[rgba(148,163,184,0.16)] transition-all cursor-pointer"
                  >
                    Retry Connection
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Phone Home Indicator Bar */}
          {deviceMode === 'mobile' && orientation === 'portrait' && (
            <div className="w-full h-5 bg-[#14182B] flex items-center justify-center shrink-0 border-t border-[rgba(148,163,184,0.16)]">
              <div className="w-28 h-1 bg-[rgba(148,163,184,0.3)] rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
