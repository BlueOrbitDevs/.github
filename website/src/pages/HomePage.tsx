import React from 'react';
import { Hero } from '../components/Hero';
import { WhatWeDo } from '../components/WhatWeDo';
import { Projects } from '../components/Projects';
import { Engineering } from '../components/Engineering';
import { TechnologyOrbit } from '../components/TechnologyOrbit';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { WhyBlueOrbit } from '../components/WhyBlueOrbit';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { Team } from '../components/Team';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* 01: Hero Section */}
      <Hero />

      {/* 02: Intro / What We Do (4 Pastel Cards) */}
      <WhatWeDo />

      {/* 03: Selected Work Showcase (Purple background) */}
      <Projects />

      {/* 04: Engineering Deep-Dive (White background) */}
      <Engineering />

      {/* 05: Technology Orbit & Stack (Purple / Deep Dark background) */}
      <TechnologyOrbit />

      {/* 06: Services Rows (Purple background) */}
      <Services />

      {/* 07: Process Steps (White background) */}
      <Process />

      {/* 08: Why BlueOrbit (Pastel Lavender background) */}
      <WhyBlueOrbit />

      {/* 09: Testimonials / Built with People (Purple background) */}
      <Testimonials />

      {/* 10: About Studio (White background) */}
      <About />

      {/* 11: Meet the Team (Behind BlueOrbit Devs) */}
      <Team />

      {/* 12: Call to Action (Purple background) */}
      <CTA />

      {/* 13: Project Inquiry & Contact (Soft Lavender background) */}
      <Contact />
    </div>
  );
};
