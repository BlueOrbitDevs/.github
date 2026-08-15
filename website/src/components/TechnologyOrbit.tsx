import React, { useState } from 'react';
import { ORBIT_NODES, TECH_CATEGORIES } from '../data/techData';
import { TechNode } from '../types';
import { BlueOrbitLogo } from './CustomIllustrations';
import { WaveDivider } from './WaveDivider';
import { FloatingObject } from './FloatingDecorations';
import { Sparkles, Info, Check, ArrowRight } from 'lucide-react';

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
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00C2FF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4 text-[#FFD84D]" /> THE STACK WE TRUST
          </div>
          <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6">
            The magic <br className="hidden sm:inline" />
            behind the <br />
            <span className="text-[#00C2FF]">code.</span>
          </h2>
          <p className="text-base sm:text-xl text-white/80 leading-relaxed font-medium">
            We don’t chase fleeting hype. We select resilient, battle-tested tools that provide rock-solid type safety, ultra-fast render pipelines, and zero-downtime scalability.
          </p>
        </div>

        {/* Central Orbital System Visual Container */}
        <div className="relative w-full max-w-[700px] mx-auto aspect-square flex items-center justify-center mb-16 select-none">
          
          {/* Orbital Orbit Lines (SVG rings) */}
          <svg
            viewBox="0 0 700 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {/* Inner Ring (Radius: 130px) */}
            <circle cx="350" cy="350" r="130" stroke="#5B4BFF" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
            {/* Middle Ring (Radius: 210px) */}
            <circle cx="350" cy="350" r="210" stroke="#00C2FF" strokeWidth="2" strokeDasharray="8 8" opacity="0.35" />
            {/* Outer Ring (Radius: 290px) */}
            <circle cx="350" cy="350" r="290" stroke="#FF4FA3" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
          </svg>

          {/* Central BlueOrbit Engineering Planet */}
          <div
            className="z-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#5B4BFF] via-[#7C5CFF] to-[#151326] border-4 border-white shadow-[0_0_40px_rgba(91,75,255,0.6)] flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:scale-105 transition-transform touch-manipulation select-none active:brightness-100"
            onClick={() => setIsPaused(!isPaused)}
            title="Click to toggle orbit animation"
          >
            <BlueOrbitLogo size={42} variant="white" className="mb-1 animate-pulse-glow" />
            <span className="font-extrabold text-[11px] sm:text-xs tracking-wider uppercase text-white font-mono">
              BLUEORBIT
            </span>
            <span className="text-[9px] font-bold text-[#FFD84D]">ENGINEERING</span>
          </div>

          {/* Orbiting Rotating Container Ring 1 */}
          <div
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-cw"
          >
            {ORBIT_NODES.filter((n) => n.ring === 1).map((node, index, arr) => {
              const angle = (index * (360 / arr.length)) * (Math.PI / 180);
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={node.name}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  className="absolute pointer-events-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-black border-2 transition-all duration-300 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white touch-manipulation active:brightness-100 ${
                      selectedNode.name === node.name
                        ? 'bg-[#FFD84D] text-[#151326] border-white scale-110'
                        : 'bg-[#1E1B38] text-white border-[#5B4BFF]/50 hover:border-white hover:scale-105'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                    <span>{node.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Orbiting Rotating Container Ring 2 */}
          <div
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-ccw"
          >
            {ORBIT_NODES.filter((n) => n.ring === 2).map((node, index, arr) => {
              const angle = (index * (360 / arr.length)) * (Math.PI / 180);
              const radius = 210;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={node.name}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  className="absolute pointer-events-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-black border-2 transition-all duration-300 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white touch-manipulation active:brightness-100 ${
                      selectedNode.name === node.name
                        ? 'bg-[#00C2FF] text-[#151326] border-white scale-110'
                        : 'bg-[#1E1B38] text-white border-[#00C2FF]/50 hover:border-white hover:scale-105'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                    />
                    <span>{node.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Orbiting Rotating Container Ring 3 */}
          <div
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-cw"
          >
            {ORBIT_NODES.filter((n) => n.ring === 3).map((node, index, arr) => {
              const angle = (index * (360 / arr.length)) * (Math.PI / 180);
              const radius = 290;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={node.name}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  className="absolute pointer-events-auto hidden sm:block"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-black border-2 transition-all duration-300 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white touch-manipulation active:brightness-100 ${
                      selectedNode.name === node.name
                        ? 'bg-[#FF4FA3] text-white border-white scale-110'
                        : 'bg-[#1E1B38] text-white border-[#FF4FA3]/50 hover:border-white hover:scale-105'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
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
          <div className="max-w-xl mx-auto rounded-3xl bg-[#1E1B38] border-2 border-white/20 p-6 shadow-2xl mb-16 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase mb-3 bg-black/40 border border-white/10 text-white">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedNode.color }} />
              Category: {selectedNode.category}
            </div>
            <h3 className="text-2xl font-black text-white mb-2">{selectedNode.name}</h3>
            <p className="text-sm text-white/80 font-medium leading-relaxed mb-4">
              {selectedNode.description}
            </p>
            <span className="text-[11px] text-white/50 font-mono">
              Hover any node in the orbit to inspect architectural superpowers
            </span>
          </div>
        )}

        {/* Technology Categorized Grid Below Orbit */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-[#1E1B38] border-2 border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
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
                      className="px-2.5 py-1 rounded-lg bg-black/40 text-white/90 text-xs font-bold border border-white/10"
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
