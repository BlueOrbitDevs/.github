import React from 'react';
import { WaveDivider } from './WaveDivider';
import { FloatingObject } from './FloatingDecorations';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { useSectionNav } from '../context/SectionNavContext';

interface CTAProps {
  onStartProject?: () => void;
  onSeeWork?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartProject, onSeeWork }) => {
  const { scrollToSection } = useSectionNav();

  const handleStart = () => {
    if (onStartProject) onStartProject();
    else scrollToSection('/contact');
  };

  const handleWork = () => {
    if (onSeeWork) onSeeWork();
    else scrollToSection('/work');
  };

  return (
    <section
      id="cta"
      aria-label="Call to Action Section"
      className="relative bg-[#5B4BFF] text-white pt-24 sm:pt-32 pb-0 overflow-hidden text-center"
    >
      {/* Background Orbital Rings and Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-2 border-white/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00C2FF]/20 blur-3xl pointer-events-none" />

      <FloatingObject type="sparkle" top="15%" left="10%" color="#FFD84D" animation="slow" />
      <FloatingObject type="sparkle" top="20%" right="12%" color="#00C2FF" animation="medium" />
      <FloatingObject type="code-tag" bottom="28%" left="15%" color="#FF4FA3" animation="reverse" />
      <FloatingObject type="planet" bottom="22%" right="16%" color="#FFD84D" animation="slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20 sm:pb-28">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-[#FFD84D] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-6 shadow-sm">
          <Sparkles className="w-4 h-4" /> GOT AN AMBITIOUS VISION?
        </div>

        {/* Heading */}
        <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight leading-[1.08] mb-6">
          Have an idea? <br />
          <span className="text-[#00C2FF]">Let&apos;s build something</span> <br />
          awesome.
        </h2>

        {/* Supporting */}
        <p className="text-lg sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
          BlueOrbit Devs is ready to partner with you from day one. Let’s turn your vision into production-ready reality.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={handleStart}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:py-5 rounded-full bg-[#FF7043] text-white font-black text-lg sm:text-xl border-2 border-[#151326] shadow-[4px_4px_0px_#151326] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_#151326] active:translate-y-[0px] transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD84D]"
          >
            <span>Start a Project</span>
            <Rocket className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleWork}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-5 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-lg sm:text-xl border-2 border-white/40 backdrop-blur-sm hover:translate-y-[-2px] transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            <span>See Our Work</span>
            <ArrowRight className="w-5 h-5 text-[#FFD84D]" />
          </button>
        </div>

      </div>

      {/* Wave Transition into Soft Lavender Contact Section */}
      <WaveDivider toColor="#F0EEFF" variant="organic-1" />
    </section>
  );
};
