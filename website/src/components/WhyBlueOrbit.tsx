import React from 'react';
import { VALUE_PILLARS } from '../data/processData';
import { FloatingObject } from './FloatingDecorations';
import { WaveDivider } from './WaveDivider';
import { Brain, ShieldCheck, Zap, Compass, Sparkles } from 'lucide-react';

export const WhyBlueOrbit: React.FC = () => {
  const getPillarIcon = (tag: string) => {
    switch (tag) {
      case 'STRATEGY':
        return <Brain className="w-8 h-8 text-[#5B4BFF]" />;
      case 'ENGINEERING':
        return <ShieldCheck className="w-8 h-8 text-[#00C2FF]" />;
      case 'VELOCITY':
        return <Zap className="w-8 h-8 text-[#FF7043]" />;
      case 'EXPLORATION':
        return <Compass className="w-8 h-8 text-[#FF4FA3]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#5B4BFF]" />;
    }
  };

  return (
    <section
      id="why-blueorbit"
      aria-label="Why BlueOrbit Section"
      className="relative bg-[#F0EEFF] text-[#17152B] pt-20 sm:pt-28 pb-0 overflow-hidden"
    >
      <FloatingObject type="sparkle" top="10%" right="8%" color="#5B4BFF" animation="slow" />
      <FloatingObject type="curly" bottom="24%" left="5%" color="#FF7043" animation="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#151326]/15 text-[#5B4BFF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#5B4BFF]" />
            <span>CORE BELIEFS</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6 text-[#17152B]">
            Why BlueOrbit <br />
            <span className="text-[#5B4BFF]">matters.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#626078] leading-relaxed font-medium">
            We don’t build cookie-cutter clones. We combine engineering discipline with playful human curiosity to make software that users genuinely love to open.
          </p>
        </div>

        {/* 4 Large Rounded Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[28px] bg-white border-3 border-[#151326] p-8 sm:p-10 shadow-[6px_6px_0px_#151326] hover:translate-y-[-4px] hover:shadow-[9px_9px_0px_#151326] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl border-2 border-[#151326] shadow-[3px_3px_0px_#151326] flex items-center justify-center p-3 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: pillar.bgLight }}
                  >
                    {getPillarIcon(pillar.tag)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase text-[#17152B] bg-[#F7F7FF] border border-[#151326]/20 tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#17152B] tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base font-extrabold text-[#5B4BFF] mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-base sm:text-lg text-[#626078] leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Wave Transition into Purple Testimonials Section */}
      <WaveDivider toColor="#5B4BFF" variant="organic-2" />
    </section>
  );
};
