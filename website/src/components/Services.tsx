import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { WaveDivider } from './WaveDivider';
import { FloatingObject } from './FloatingDecorations';
import { ArrowRight, ChevronDown, CheckCircle2, Sparkles } from 'lucide-react';
import { useSectionNav } from '../context/SectionNavContext';

interface ServicesProps {
  onOpenInquiry?: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const { scrollToSection } = useSectionNav();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      aria-label="Services Section"
      className="relative bg-[#5B4BFF] text-white pt-20 sm:pt-28 pb-0 overflow-hidden"
    >
      <FloatingObject type="curly" top="12%" left="6%" color="#FFD84D" animation="slow" />
      <FloatingObject type="sparkle" top="24%" right="8%" color="#00C2FF" animation="medium" />
      <FloatingObject type="code-tag" bottom="28%" left="4%" color="#FF4FA3" animation="reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-[#FFD84D] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD84D]" />
            <span>END-TO-END CAPABILITIES</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6">
            From idea <br />
            to <span className="text-[#00C2FF]">production.</span>
          </h2>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed font-medium">
            Whether you need a prototype in two weeks, an overhaul of mission-critical systems, or a dedicated product squad, we engineer solutions with precision.
          </p>
        </div>

        {/* Services List Rows */}
        <div className="space-y-4">
          {SERVICES.map((srv) => {
            const isExpanded = expandedId === srv.id;

            return (
              <div
                key={srv.id}
                id={`service-row-${srv.id}`}
                onClick={() => toggleRow(srv.id)}
                className={`rounded-[24px] border-3 border-[#151326] transition-all duration-300 overflow-hidden cursor-pointer ${
                  isExpanded
                    ? 'bg-white text-[#17152B] shadow-[8px_8px_0px_#151326] translate-y-[-2px]'
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#17152B] shadow-[4px_4px_0px_#151326] hover:translate-y-[-2px]'
                }`}
              >
                {/* Main Row Header */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#FFD84D] px-3 py-1 rounded-xl bg-[#151326] shrink-0">
                      {srv.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
                      {srv.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="hidden lg:inline text-xs font-extrabold uppercase tracking-wider opacity-70">
                      {srv.deliverables.length} Deliverables
                    </span>
                    <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center transition-transform">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer Details */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t-2 border-[#151326]/10 animate-fade-in text-[#17152B]">
                    <p className="text-base sm:text-lg text-[#626078] font-medium leading-relaxed max-w-3xl mb-6">
                      {srv.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-black uppercase text-[#17152B] tracking-wider">
                        Included Deliverables:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {srv.deliverables.map((item) => (
                          <div
                            key={item}
                            className="p-3 rounded-xl bg-[#F0EEFF] border border-[#5B4BFF]/20 flex items-center gap-2 text-xs font-bold text-[#17152B]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#55D88A] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenInquiry) {
                            onOpenInquiry(srv.title);
                          } else {
                            scrollToSection('/contact');
                          }
                        }}
                        className="px-5 py-2.5 rounded-full bg-[#FF7043] text-white font-extrabold text-xs sm:text-sm border-2 border-[#151326] shadow-[2px_2px_0px_#151326] hover:translate-y-[-2px] transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>Inquire About {srv.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Wave Transition into White Process Section */}
      <WaveDivider toColor="#FFFFFF" variant="organic-1" />
    </section>
  );
};
