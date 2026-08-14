import React from 'react';
import { PROCESS_STEPS } from '../data/processData';
import { FloatingObject } from './FloatingDecorations';
import { Search, PenTool, Sparkles, Code2, Rocket, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (type: string) => {
    switch (type) {
      case 'search':
        return <Search className="w-6 h-6 text-[#5B4BFF]" />;
      case 'pen-tool':
        return <PenTool className="w-6 h-6 text-[#FF4FA3]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#00C2FF]" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-[#FFD84D]" />;
      case 'rocket':
        return <Rocket className="w-6 h-6 text-[#55D88A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#5B4BFF]" />;
    }
  };

  return (
    <section
      id="process"
      aria-label="How We Build Process Section"
      className="relative bg-white text-[#17152B] py-20 sm:py-28 overflow-hidden"
    >
      <FloatingObject type="code-tag" top="10%" right="8%" color="#00C2FF" animation="slow" />
      <FloatingObject type="sparkle" bottom="18%" left="6%" color="#FF4FA3" animation="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0EEFF] border border-[#5B4BFF]/20 text-[#5B4BFF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4">
            <Rocket className="w-3.5 h-3.5 text-[#5B4BFF]" />
            <span>OUR METHODOLOGY</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6 text-[#17152B]">
            How we <br />
            <span className="text-[#5B4BFF]">build.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#626078] leading-relaxed font-medium">
            A battle-hardened, 5-stage iterative engine that takes concepts from hazy napkins to battle-ready software without endless meeting bloat.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="rounded-[24px] bg-[#F7F7FF] border-3 border-[#151326] p-6 sm:p-7 shadow-[5px_5px_0px_#151326] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#151326] transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Step Number Top Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="w-12 h-12 rounded-2xl border-2 border-[#151326] shadow-[2px_2px_0px_#151326] flex items-center justify-center bg-white group-hover:scale-110 transition-transform"
                  >
                    {getStepIcon(step.iconType)}
                  </span>
                  <span className="font-mono text-sm font-black text-white px-2.5 py-1 rounded-lg bg-[#151326]">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-[#17152B] tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#626078] leading-relaxed font-medium mb-6">
                  {step.description}
                </p>
              </div>

              {/* Key Action Pill */}
              <div className="pt-4 border-t border-[#151326]/10">
                <span className="text-[11px] font-extrabold text-[#5B4BFF] uppercase tracking-wider block mb-1">
                  Key Output:
                </span>
                <span className="text-xs font-bold text-[#17152B] leading-snug block">
                  {step.keyAction}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
