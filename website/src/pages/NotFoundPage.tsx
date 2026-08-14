import React from 'react';
import { Link } from 'react-router-dom';
import { FloatingObject } from '../components/FloatingDecorations';
import { WaveDivider } from '../components/WaveDivider';
import { Sparkles, ArrowLeft, Home, Compass, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="animate-fade-in pt-28 sm:pt-36 pb-20 bg-[#5B4BFF] text-white min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background Floating Objects */}
      <FloatingObject type="sparkle" top="15%" left="8%" color="#FFD84D" animation="slow" />
      <FloatingObject type="code-tag" top="25%" right="10%" color="#00C2FF" animation="medium" />
      <FloatingObject type="planet" bottom="30%" left="12%" color="#FF4FA3" animation="slow" />
      <FloatingObject type="curly" bottom="20%" right="15%" color="#55D88A" animation="reverse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 my-auto py-12">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-[#FFD84D] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-6 shadow-sm">
          <Terminal className="w-4 h-4 text-[#FFD84D]" />
          <span>HTTP 404 — ROUTE NOT FOUND</span>
        </div>

        {/* Big Neo-Brutalist 404 Graphic */}
        <div className="relative inline-block mb-8">
          <div className="text-[7rem] sm:text-[11rem] md:text-[13rem] font-black leading-none text-white tracking-tighter select-none drop-shadow-[8px_8px_0px_#151326]">
            4<span className="text-[#00C2FF]">0</span>4
          </div>
          <div className="absolute -top-4 -right-4 px-3 py-1 bg-[#FF4FA3] text-white font-extrabold text-xs sm:text-sm rounded-full border-2 border-[#151326] rotate-12 shadow-[2px_2px_0px_#151326]">
            Lost in Space
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          This orbit doesn&apos;t seem to exist.
        </h2>
        <p className="text-base sm:text-lg text-white/85 max-w-md mx-auto font-medium leading-relaxed mb-10">
          The page or route you are looking for might have been moved, renamed, or never engineered in the first place.
        </p>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#00C2FF] text-[#151326] font-extrabold text-base border-2 border-[#151326] shadow-[4px_4px_0px_#151326] hover:bg-white hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#151326] active:translate-y-0 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-base border-2 border-white/40 backdrop-blur-sm hover:translate-y-[-2px] transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#FFD84D]" />
            <span>Explore Work</span>
          </Link>
        </div>
      </div>

      {/* Wave bottom decoration */}
      <WaveDivider toColor="#FFFFFF" variant="organic-2" />
    </div>
  );
};
