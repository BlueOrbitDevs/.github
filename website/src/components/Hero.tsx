import React from 'react';
import { HeroDeveloperIllustration } from './CustomIllustrations';
import { FloatingObject } from './FloatingDecorations';
import { WaveDivider } from './WaveDivider';
import { ArrowRight, ArrowUpRight, Code2, Zap, Terminal, Layers } from 'lucide-react';
import { useSectionNav } from '../context/SectionNavContext';

interface HeroProps {
  onExploreWork?: () => void;
  onStartProject?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const { scrollToSection } = useSectionNav();

  const handleExplore = () => {
    if (onExploreWork) onExploreWork();
    else scrollToSection('/work');
  };

  const handleTalk = () => {
    if (onStartProject) onStartProject();
    else scrollToSection('/contact');
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative bg-[#5B4BFF] text-white pt-24 xs:pt-26 sm:pt-36 lg:pt-40 pb-0 overflow-hidden"
    >
      {/* Background Subtle Watermarks and Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Subtle BO Watermark */}
        <div className="absolute top-12 sm:top-20 right-2 sm:right-12 text-white/[0.04] font-black text-8xl xs:text-9xl sm:text-[11rem] md:text-[14rem] tracking-tighter leading-none pointer-events-none select-none">
          BO
        </div>

        {/* Ambient Ring Accents with Reduced Subtle Opacity */}
        <div className="absolute top-16 left-6 sm:left-20 w-36 h-36 border-2 sm:border-4 border-[#00C2FF]/15 rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 sm:right-36 w-52 h-52 border border-[#FF4FA3]/15 rounded-full pointer-events-none" />
      </div>

      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#7C5CFF]/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#00C2FF]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-4 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#FF4FA3]/15 blur-3xl pointer-events-none" />

      {/* Floating Decorative Objects (Desktop and Tablet) */}
      <FloatingObject type="code-tag" top="18%" left="3%" color="#00C2FF" animation="slow" />
      <FloatingObject type="curly" top="35%" left="8%" color="#FFD84D" animation="medium" />
      <FloatingObject type="sparkle" top="14%" right="8%" color="#FFD84D" animation="slow" />
      <FloatingObject type="cursor" top="28%" right="4%" color="#00C2FF" animation="reverse" />
      <FloatingObject type="binary" bottom="28%" left="4%" animation="slow" />
      <FloatingObject type="plus" top="48%" right="10%" color="#FF4FA3" animation="medium" />
      <FloatingObject type="orbit" top="16%" left="48%" color="#FFFFFF" animation="slow" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Studio Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 sm:px-4 py-1 rounded-full text-white text-[10px] sm:text-xs font-extrabold tracking-wider sm:tracking-widest mb-4 sm:mb-6 backdrop-blur-sm border border-white/20 shadow-sm uppercase">
              <span>CREATIVE TECHNOLOGY STUDIO</span>
            </div>

            {/* Headline with Mobile-Optimized Typography */}
            <h1 className="font-extrabold text-[2.15rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] tracking-tight leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
              We build <br className="hidden sm:inline" />
              ideas into <br />
              <span className="text-[#00C2FF] font-black">
                digital reality.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-white/90 text-base xs:text-lg sm:text-xl md:text-2xl font-medium max-w-xl leading-relaxed mb-6 sm:mb-10">
              BlueOrbit Devs designs and builds modern software, digital products, and technology experiences for ambitious ideas.
            </p>

            {/* Action Buttons: Stacked on Mobile, Inline on Tablet/Desktop */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button
                type="button"
                id="hero-primary-cta"
                onClick={handleExplore}
                className="w-full sm:w-auto justify-center min-h-[48px] bg-[#00C2FF] text-[#17152B] font-extrabold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:bg-white hover:scale-105 active:scale-100 transition-all cursor-pointer flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD84D]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#17152B]" />
              </button>

              <button
                type="button"
                id="hero-secondary-cta"
                onClick={handleTalk}
                className="w-full sm:w-auto justify-center min-h-[48px] bg-[#FF7043] text-white font-extrabold text-sm sm:text-base lg:text-lg px-6 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-md hover:scale-105 hover:bg-[#FF855D] active:scale-100 transition-all cursor-pointer flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>

            {/* Quick Capability Chips - Fully Responsive with No Horizontal Overflow */}
            <div className="w-full pt-3 sm:pt-4 border-t border-white/20">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/70 mr-1 shrink-0">
                  Specialties:
                </span>
                <button
                  type="button"
                  onClick={() => scrollToSection('/products')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00C2FF]" />
                  <span>Web Apps</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('/products')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF4FA3]" />
                  <span>SaaS Products</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('/engineering')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D]" />
                  <span>Real-Time</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('/engineering')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] sm:text-xs font-bold text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#55D88A]" />
                  <span>APIs & Systems</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Master Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-2 sm:mt-0">
            <HeroDeveloperIllustration />
          </div>

        </div>
      </div>

      {/* Subtle animated dots at bottom right on larger screens */}
      <div className="absolute bottom-16 right-8 hidden sm:flex gap-3 pointer-events-none z-20">
        <div className="w-3 h-3 bg-[#FF4FA3] rounded-full animate-bounce [animation-delay:0.1s]" />
        <div className="w-3 h-3 bg-[#00C2FF] rounded-full animate-bounce [animation-delay:0.3s]" />
        <div className="w-3 h-3 bg-[#FFD84D] rounded-full animate-bounce [animation-delay:0.5s]" />
      </div>

      {/* Organic Wave Transition into White Intro Section */}
      <WaveDivider toColor="#FFFFFF" variant="organic-1" />
    </section>
  );
};
