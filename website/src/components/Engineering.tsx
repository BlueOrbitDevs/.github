import React, { useState } from 'react';
import { FloatingObject } from './FloatingDecorations';
import { Cpu, Zap, Shield, Activity, Database, Server, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export const Engineering: React.FC = () => {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(1);

  const pillars = [
    {
      id: 'performance',
      title: 'PERFORMANCE',
      highlight: 'Sub-50ms P99 Latency',
      description: 'Zero bloat, fine-grained reactivity, tree-shaken bundles, and edge asset distribution.',
      progress: 98,
      color: '#00C2FF'
    },
    {
      id: 'scalability',
      title: 'SCALABILITY',
      highlight: 'Stateless Node Mesh',
      description: 'Distributed background queues, Redis pub/sub brokers, and horizontally partitioned stores.',
      progress: 95,
      color: '#5B4BFF'
    },
    {
      id: 'security',
      title: 'SECURITY',
      highlight: 'Zero-Trust Architecture',
      description: 'WebAuthn Passkeys, Argon2id hashing, encrypted session tokens, and automated rotation.',
      progress: 99,
      color: '#FF4FA3'
    },
    {
      id: 'reliability',
      title: 'RELIABILITY',
      highlight: '99.99% Fault Tolerance',
      description: 'Exponential retry backoff, graceful state degradation, and continuous health telemetry.',
      progress: 96,
      color: '#55D88A'
    }
  ];

  const pipelineStages = [
    { id: 1, title: 'Client Interaction', icon: <Globe className="w-5 h-5" />, latency: '< 5ms', detail: 'Instant optimistic UI feedback & local caching' },
    { id: 2, title: 'Edge Routing', icon: <Zap className="w-5 h-5" />, latency: '12ms', detail: 'Global Cloudflare Worker TLS termination & DDoS shield' },
    { id: 3, title: 'Service Runtime', icon: <Server className="w-5 h-5" />, latency: '24ms', detail: 'Node.js Express microservices & BullMQ worker concurrency' },
    { id: 4, title: 'Data Persistence', icon: <Database className="w-5 h-5" />, latency: '18ms', detail: 'PostgreSQL ACID transactions + Redis in-memory cache' }
  ];

  return (
    <section
      id="engineering"
      aria-label="Engineering Architecture Section"
      className="relative bg-white text-[#17152B] py-20 sm:py-28 overflow-hidden"
    >
      {/* Floating Sparkles & Objects */}
      <FloatingObject type="sparkle" top="12%" right="5%" color="#5B4BFF" animation="slow" />
      <FloatingObject type="binary" bottom="15%" left="4%" animation="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Live Architecture Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-[28px] bg-[#151326] border-3 border-[#151326] p-6 sm:p-8 shadow-[8px_8px_0px_#151326] text-white">
              
              {/* Architecture Terminal Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF4FA3]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFD84D]" />
                    <span className="w-3 h-3 rounded-full bg-[#55D88A]" />
                  </div>
                  <span className="font-mono text-xs text-white/70 font-bold ml-2">architecture-flow.sys</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#55D88A]/20 text-[#55D88A] text-[11px] font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#55D88A] animate-pulse" /> ACTIVE PIPELINE
                </span>
              </div>

              {/* Interactive Pipeline Steps */}
              <div className="py-6 space-y-3">
                {pipelineStages.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => setActivePipelineStep(st.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      activePipelineStep === st.id
                        ? 'bg-[#5B4BFF]/25 border-[#00C2FF] shadow-[0_0_15px_rgba(0,194,255,0.2)]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border"
                        style={{
                          backgroundColor: activePipelineStep === st.id ? '#00C2FF' : 'rgba(255,255,255,0.1)',
                          borderColor: activePipelineStep === st.id ? '#151326' : 'rgba(255,255,255,0.2)',
                          color: activePipelineStep === st.id ? '#151326' : '#FFFFFF'
                        }}
                      >
                        {st.icon}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm sm:text-base text-white">{st.title}</h4>
                        <p className="text-xs text-white/70 font-medium">{st.detail}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#FFD84D] px-2 py-1 rounded bg-black/40">
                      {st.latency}
                    </span>
                  </div>
                ))}
              </div>

              {/* Active Pipeline Inspector Details */}
              <div className="p-4 rounded-2xl bg-[#1E1B38] border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#FF7043]" />
                  <span className="font-mono text-white/80">
                    Stage {activePipelineStep}/4: Verified Zero-Loss Packet Buffer
                  </span>
                </div>
                <span className="font-mono text-[#55D88A] font-bold">100% OK</span>
              </div>

            </div>
          </div>

          {/* Right Column: Engineering Philosophy & Honest Progress Visuals */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0EEFF] border border-[#5B4BFF]/20 text-[#5B4BFF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4">
              <Zap className="w-3.5 h-3.5 text-[#5B4BFF]" />
              <span>ENGINEERING</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] mb-6 text-[#17152B]">
              Good software <br />
              should feel <br />
              <span className="text-[#5B4BFF]">effortless.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#626078] leading-relaxed mb-8 font-medium">
              Behind every polished interface is architecture designed for performance, reliability, and scale. We don’t just write code that passes tests — we build systems that endure real-world traffic spikes and messy networks.
            </p>

            {/* Horizontal Progress Metric Rows */}
            <div className="w-full space-y-5">
              {pillars.map((pil) => (
                <div key={pil.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#17152B] tracking-wider uppercase">
                      {pil.title}
                    </span>
                    <span className="text-xs font-extrabold text-[#5B4BFF]">
                      {pil.highlight}
                    </span>
                  </div>

                  {/* Horizontal Bar */}
                  <div className="w-full h-3.5 bg-[#F0EEFF] rounded-full border border-[#151326]/15 overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${pil.progress}%`,
                        backgroundColor: pil.color
                      }}
                    />
                  </div>

                  <p className="text-xs text-[#626078] font-medium">
                    {pil.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
