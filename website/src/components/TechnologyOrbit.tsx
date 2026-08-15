import React, { useState } from 'react';
import { ORBIT_NODES, TECH_CATEGORIES } from '../data/techData';
import { TechNode } from '../types';
import { BlueOrbitLogo } from './CustomIllustrations';
import { WaveDivider } from './WaveDivider';
import { FloatingObject } from './FloatingDecorations';
import { Sparkles } from 'lucide-react';

export const TechnologyOrbit: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<TechNode>(ORBIT_NODES[0]);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <section
      id="tech-orbit"
      aria-label="Technology Stack and Orbit Section"
      className="relative bg-[#151326] text-white pt-20 sm:pt-28 pb-0 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#5B4BFF]/20 blur-[120px] pointer-events-none" />

      <FloatingObject type="sparkle" top="10%" left="8%" color="#00C2FF" animation="slow" />
      <FloatingObject type="code-tag" top="22%" right="6%" color="#FF4FA3" animation="medium" />
      <FloatingObject type="star" bottom="30%" left="6%" color="#FFD84D" animation="reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00C2FF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD84D]" /> THE STACK WE TRUST
          </div>
          <h2 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-4 sm:mb-6">
            The magic <br className="hidden sm:inline" />
            behind the <br />
            <span className="text-[#00C2FF]">code.</span>
          </h2>
          <p className="text-base sm:text-xl text-white/80 leading-relaxed font-medium">
            We don’t chase fleeting hype. We select resilient, battle-tested tools that provide rock-solid type safety, ultra-fast render pipelines, and zero-downtime scalability.
          </p>
        </div>

        {/* Central Orbital System Visual Container (Fluid, 100% responsive percentage coordinates) */}
        <div className="relative w-full max-w-[340px] min-[420px]:max-w-[400px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[720px] mx-auto aspect-square flex items-center justify-center mb-12 sm:mb-16 select-none">
          
          {/* Orbital Orbit Lines (SVG rings scaling 1:1 with coordinate system) */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {/* Inner Ring (Radius: 20%) */}
            <circle cx="50" cy="50" r="20" stroke="#5B4BFF" strokeWidth="0.4" strokeDasharray="1.2 1.2" opacity="0.45" />
            {/* Middle Ring (Radius: 32%) */}
            <circle cx="50" cy="50" r="32" stroke="#00C2FF" strokeWidth="0.4" strokeDasharray="1.6 1.6" opacity="0.4" />
            {/* Outer Ring (Radius: 43%) */}
            <circle cx="50" cy="50" r="43" stroke="#FF4FA3" strokeWidth="0.4" strokeDasharray="2 2" opacity="0.35" />
          </svg>

          {/* Central BlueOrbit Engineering Planet */}
          <div
            className="z-20 w-20 h-20 min-[400px]:w-24 min-[400px]:h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#5B4BFF] via-[#7C5CFF] to-[#151326] border-2 sm:border-4 border-white shadow-[0_0_30px_rgba(91,75,255,0.6)] sm:shadow-[0_0_40px_rgba(91,75,255,0.6)] flex flex-col items-center justify-center p-1.5 min-[400px]:p-2 sm:p-3 text-center cursor-pointer hover:scale-105 transition-transform shrink-0"
            onClick={() => setIsPaused(!isPaused)}
            title="Click to toggle orbit animation"
          >
            <BlueOrbitLogo size={32} variant="white" className="mb-0.5 sm:mb-1 animate-pulse-glow w-6 h-6 min-[400px]:w-7 min-[400px]:h-7 sm:w-10 sm:h-10" />
            <span className="font-extrabold text-[8px] min-[400px]:text-[9px] sm:text-[11px] md:text-xs tracking-wider uppercase text-white font-mono leading-none">
              BLUEORBIT
            </span>
            <span className="text-[7px] min-[400px]:text-[8px] sm:text-[9px] font-bold text-[#FFD84D] mt-0.5">ENGINEERING</span>
          </div>

          {/* Orbiting Rotating Container Ring 1 (Radius: 20%) */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
              isPaused ? '' : 'animate-orbit-cw'
            }`}
          >
            {ORBIT_NODES.filter((n) => n.ring === 1).map((node, index, arr) => {
              const angle = (index * (360 / arr.length)) * (Math.PI / 180);
              const radiusPercent = 20;
              const x = Math.cos(angle) * radiusPercent;
              const y = Math.sin(angle) * radiusPercent;

              return (
                <div
                  key={node.name}
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute pointer-events-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    className={`px-2 py-0.5 min-[400px]:px-2.5 min-[400px]:py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] min-[400px]:text-[11px] sm:text-xs font-black border-2 transition-all duration-300 shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000] flex items-center gap-1 sm:gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      selectedNode.name === node.name
                        ? 'bg-[#FFD84D] text-[#151326] border-white scale-110'
                        : 'bg-[#1E1B38] text-white border-[#5B4BFF]/50 hover:border-white hover:scale-105'
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                    <span>{node.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Orbiting Rotating Container Ring 2 (Radius: 32%) */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
              isPaused ? '' : 'animate-orbit-ccw'
            }`}
          >
            {ORBIT_NODES.filter((n) => n.ring === 2).map((node, index, arr) => {
              const angle = (index * (360 / arr.length)) * (Math.PI / 180);
              const radiusPercent = 32;
              const x = Math.cos(angle) * radiusPercent;
              const y = Math.sin(angle) * radiusPercent;

              return (
                <div
                  key={node.name}
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute pointer-events-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    className={`px-2 py-0.5 min-[400px]:px-2.5 min-[400px]:py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] min-[400px]:text-[11px] sm:text-xs font-black border-2 transition-all duration-300 shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000] flex items-center gap-1 sm:gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      selectedNode.name === node.name
                        ? 'bg-[#00C2FF] text-[#151326] border-white scale-110'
                        : 'bg-[#1E1B38] text-white border-[#00C2FF]/50 hover:border-white hover:scale-105'
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                    <span>{node.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Orbiting Rotating Container Ring 3 (Radius: 43%) */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
              isPaused ? '' : 'animate-orbit-cw'
            }`}
          >
            {ORBIT_NODES.filter((n) => n.ring === 3).map((node, index, arr) => {
              const angle = (index * (360 / arr.length)) * (Math.PI / 180);
              const radiusPercent = 43;
              const x = Math.cos(angle) * radiusPercent;
              const y = Math.sin(angle) * radiusPercent;

              return (
                <div
                  key={node.name}
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute pointer-events-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    className={`px-2 py-0.5 min-[400px]:px-2.5 min-[400px]:py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] min-[400px]:text-[11px] sm:text-xs font-black border-2 transition-all duration-300 shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000] flex items-center gap-1 sm:gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      selectedNode.name === node.name
                        ? 'bg-[#FF4FA3] text-white border-white scale-110'
                        : 'bg-[#1E1B38] text-white border-[#FF4FA3]/50 hover:border-white hover:scale-105'
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                    <span>{node.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>

        {/* Selected Technology Info Box */}
        {selectedNode && (
          <div className="max-w-xl mx-auto rounded-3xl bg-[#1E1B38] border-2 border-white/20 p-5 sm:p-6 shadow-2xl mb-12 sm:mb-16 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase mb-3 bg-black/40 border border-white/10 text-white">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedNode.color }} />
              Category: {selectedNode.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{selectedNode.name}</h3>
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed mb-4">
              {selectedNode.description}
            </p>
            <span className="text-[11px] text-white/50 font-mono">
              Tap or hover any node in the orbit to inspect architectural superpowers
            </span>
          </div>
        )}

        {/* Technology Categorized Grid Below Orbit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-4 sm:p-5 rounded-2xl bg-[#1E1B38] border-2 border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span
                    className="text-xs font-black tracking-wider uppercase"
                    style={{ color: cat.accent }}
                  >
                    {cat.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-black/40 text-white/90 text-[11px] sm:text-xs font-bold border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Wave Transition into White Services/Process Section */}
      <WaveDivider toColor="#5B4BFF" variant="organic-3" />
    </section>
  );
};

