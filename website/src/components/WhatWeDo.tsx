import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WebAppIllustration,
  SaaSIllustration,
  APISystemsIllustration,
  RealTimeIllustration
} from './CustomIllustrations';
import { FloatingObject } from './FloatingDecorations';
import { ArrowRight, CheckCircle2, Globe, Cloud, Database, Zap, Sparkles } from 'lucide-react';

interface WhatWeDoProps {
  onSelectCategory?: (category: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSelectCategory }) => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 'web-apps',
      title: 'Web Apps',
      pill: 'FRONTEND & SPA',
      description: 'Fast, responsive and scalable modern web experiences.',
      icon: <Globe className="w-6 h-6 text-[#5B4BFF]" />,
      illustration: <WebAppIllustration />,
      bgColor: 'bg-[#F7F7FF]',
      hoverBorder: 'hover:border-[#5B4BFF]/30',
      accentColor: '#5B4BFF',
      bullets: ['React & Next.js Ecosystem', 'Responsive & Mobile-First', 'Sub-second Page Speeds']
    },
    {
      id: 'saas-products',
      title: 'SaaS Products',
      pill: 'PRODUCT & PLATFORMS',
      description: 'Product experiences designed to grow with your users.',
      icon: <Cloud className="w-6 h-6 text-[#FF4FA3]" />,
      illustration: <SaaSIllustration />,
      bgColor: 'bg-[#FFF0F7]',
      hoverBorder: 'hover:border-[#FF4FA3]/30',
      accentColor: '#FF4FA3',
      bullets: ['End-to-End Product Architecture', 'Multi-tenant DB & RBAC', 'Subscription & Stripe Flow']
    },
    {
      id: 'apis-systems',
      title: 'APIs & Systems',
      pill: 'BACKEND & CLOUD',
      description: 'Reliable backend systems and developer infrastructure.',
      icon: <Database className="w-6 h-6 text-[#00C2FF]" />,
      illustration: <APISystemsIllustration />,
      bgColor: 'bg-[#E6F9FF]',
      hoverBorder: 'hover:border-[#00C2FF]/30',
      accentColor: '#00C2FF',
      bullets: ['REST, GraphQL & Webhooks', 'Distributed Job Queues', 'PostgreSQL, MySQL & Redis']
    },
    {
      id: 'realtime-experiences',
      title: 'Real-Time',
      pill: 'WEBRTC & SOCKETS',
      description: 'Collaboration and streaming systems built for speed.',
      icon: <Zap className="w-6 h-6 text-[#FF7043]" />,
      illustration: <RealTimeIllustration />,
      bgColor: 'bg-[#FFF8E1]',
      hoverBorder: 'hover:border-[#FFD84D]/30',
      accentColor: '#FF7043',
      bullets: ['WebRTC Audio/Video Mesh', 'Socket.IO State Streaming', 'Conflict-free CRDT Sync']
    }
  ];

  return (
    <section
      id="products"
      aria-label="What We Do Section"
      className="relative bg-white text-[#17152B] py-20 sm:py-28 overflow-hidden"
    >
      {/* Floating Subtle Accents */}
      <FloatingObject type="sparkle" top="8%" right="6%" color="#5B4BFF" animation="slow" />
      <FloatingObject type="code-tag" top="40%" left="3%" color="#FF4FA3" animation="medium" />
      <FloatingObject type="curly" bottom="12%" right="4%" color="#55D88A" animation="reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F0EEFF] text-[#5B4BFF] px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#5B4BFF]" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17152B] leading-tight">
              We turn complex ideas <br />
              into <span className="italic text-[#7C5CFF]">simple products.</span>
            </h2>
          </div>
          <p className="text-[#626078] max-w-sm text-base sm:text-lg leading-relaxed font-medium">
            From the first prototype to production infrastructure, we design, engineer and ship.
          </p>
        </div>

        {/* 4 Pastel Rounded Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`card-${card.id}`}
              className={`rounded-[24px] p-6 sm:p-7 ${card.bgColor} border-2 border-[#17152B]/10 ${card.hoverBorder} shadow-[4px_4px_0px_#151326] hover:translate-y-[-4px] hover:shadow-[7px_7px_0px_#151326] transition-all flex flex-col justify-between group`}
            >
              <div>
                {/* Card Top Row: Clean Lucide Icon Badge & Category Pill */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-[#151326]/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[10px] font-extrabold tracking-wider text-[#17152B] border border-[#151326]/10 uppercase">
                    {card.pill}
                  </span>
                </div>

                {/* Card Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#17152B] tracking-tight mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#626078] leading-relaxed mb-5 font-medium">
                  {card.description}
                </p>

                {/* Deliverables bullet list */}
                <div className="space-y-2 mb-6 border-t border-[#151326]/10 pt-4">
                  {card.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs font-bold text-[#17152B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#55D88A] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory(card.id);
                    navigate('/work');
                  }}
                  className="inline-flex items-center gap-1.5 font-extrabold text-xs sm:text-sm text-[#17152B] group-hover:text-[#5B4BFF] transition-colors focus:outline-none focus-visible:underline cursor-pointer"
                >
                  <span>Explore projects</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

