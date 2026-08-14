import React from 'react';
import { BlueOrbitLogo } from './CustomIllustrations';
import { FloatingObject } from './FloatingDecorations';
import { Code2, Github, Terminal, Cloud, Database, Rocket, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    { title: 'Strict Type-Safety', desc: '100% TypeScript across client, server, and data schemas.' },
    { title: 'Zero Bloat Policy', desc: 'Every dependency is audited for performance and security.' },
    { title: 'Bespoke Art Direction', desc: 'Custom illustration systems and micro-interactions.' },
    { title: 'Real-Time Masters', desc: 'Deep expertise in WebRTC, WebSockets, and CRDT sync.' }
  ];

  return (
    <section
      id="about"
      aria-label="About BlueOrbit Devs Section"
      className="relative bg-white text-[#17152B] py-20 sm:py-28 overflow-hidden"
    >
      <FloatingObject type="code-tag" top="12%" left="4%" color="#5B4BFF" animation="slow" />
      <FloatingObject type="sparkle" bottom="18%" right="5%" color="#FF7043" animation="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Studio Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0EEFF] border border-[#5B4BFF]/20 text-[#5B4BFF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#5B4BFF]" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6 text-[#17152B]">
              Small team. <br />
              <span className="text-[#5B4BFF]">Big ideas.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#626078] leading-relaxed font-medium mb-6">
              BlueOrbit Devs is a creative technology brand focused on building software that combines thoughtful design with strong engineering.
            </p>

            <p className="text-base sm:text-lg text-[#626078] leading-relaxed font-medium mb-8">
              We operate as a high-velocity product laboratory where code meets imagination. Instead of layers of corporate hierarchy, you collaborate directly with the engineers and designers shaping your software.
            </p>

            {/* Studio Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-[#151326]/10">
              {highlights.map((h) => (
                <div key={h.title} className="p-4 rounded-2xl bg-[#F7F7FF] border-2 border-[#151326]/10">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#17152B] mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#55D88A] shrink-0" />
                    <span>{h.title}</span>
                  </div>
                  <p className="text-xs text-[#626078] font-medium leading-normal">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Orbit Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-[32px] bg-[#5B4BFF] border-4 border-[#151326] p-8 sm:p-12 shadow-[10px_10px_0px_#151326] text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
              
              {/* Background Orbit Ring */}
              <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-white/20 -top-20 -right-20 pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-[#00C2FF]/30 -bottom-10 -left-10 pointer-events-none" />

              {/* Central Glowing Planet */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-white border-3 border-[#151326] shadow-[4px_4px_0px_#151326] flex items-center justify-center mx-auto">
                  <BlueOrbitLogo size={56} variant="color" />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FFD84D] text-[#17152B] font-black text-xs border border-[#151326] shadow-[2px_2px_0px_#151326] whitespace-nowrap">
                  EST. 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                Crafted for the Modern Web
              </h3>

              <p className="text-sm sm:text-base text-white/90 max-w-md font-medium leading-relaxed mb-8">
                We believe software should feel alive, intuitive, and performant. Every line of TypeScript is written with care.
              </p>

              {/* Floating Floating Chips around box */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold text-white flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-white" /> Open Source
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold text-white flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#55D88A]" /> Clean APIs
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold text-white flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-[#FFD84D]" /> Rapid Shipping
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
