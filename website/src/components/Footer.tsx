import React, { useState, useEffect } from 'react';
import { BlueOrbitLogo } from './CustomIllustrations';
import { Github, Linkedin, Twitter, ArrowUp, ArrowRight, ArrowUpRight, Mail, Users } from 'lucide-react';
import { useSectionNav } from '../context/SectionNavContext';

export const Footer: React.FC = () => {
  const { scrollToSection } = useSectionNav();
  const [visitorCount, setVisitorCount] = useState<number>(24180);

  useEffect(() => {
    try {
      const BASE_COUNT = 24180;
      const storedCount = localStorage.getItem('blueorbit_total_visitors');
      let current = storedCount ? parseInt(storedCount, 10) : BASE_COUNT;
      if (isNaN(current) || current < BASE_COUNT) {
        current = BASE_COUNT;
      }

      // Increment if new session
      const isNewSession = !sessionStorage.getItem('blueorbit_session_tracked');
      if (isNewSession) {
        current += 1;
        localStorage.setItem('blueorbit_total_visitors', current.toString());
        sessionStorage.setItem('blueorbit_session_tracked', 'true');
      }

      setVisitorCount(current);
    } catch {
      // Fallback if localStorage is restricted
      setVisitorCount(24181);
    }
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    scrollToSection(path, true);
  };

  const navLinks = [
    { name: 'Products & Platforms', path: '/products' },
    { name: 'Selected Work', path: '/work' },
    { name: 'Engineering & Stack', path: '/engineering' },
    { name: 'Services', path: '/services' },
    { name: 'Our Process', path: '/process' },
    { name: 'About Studio', path: '/about' },
    { name: 'Meet the Team', path: '/team' },
    { name: 'Start Project', path: '/contact' }
  ];

  const caseStudyLinks = [
    { name: 'CoupleFlix Media Mesh', path: '/work' },
    { name: 'SecureAuth MFA Protocol', path: '/work' },
    { name: 'PhantomGram Ephemeral Engine', path: '/work' },
    { name: 'NoteNDo CRDT Canvas', path: '/work' },
    { name: 'TextSnap Snippet Engine', path: '/work' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/blueorbitdevs', icon: <Github className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'X / Twitter', href: 'https://x.com', icon: <Twitter className="w-5 h-5" /> }
  ];

  return (
    <footer
      id="footer"
      aria-label="BlueOrbit Devs Footer"
      className="bg-[#5B4BFF] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#7C5CFF]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/20">
          
          {/* Col 1: Brand Info & Mission Statement (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full pr-3 cursor-pointer"
            >
              <BlueOrbitLogo size={44} variant="white" className="group-hover:scale-105 transition-transform duration-300 shadow-md" />
              <span className="font-extrabold text-2xl tracking-tight text-white flex items-center">
                BlueOrbit<span className="text-[#FFD84D] ml-1">Devs</span>
              </span>
            </a>

            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed max-w-md">
              Creative technology studio and product laboratory. We design, engineer, and ship digital products that move ambitious ideas forward.
            </p>

            {/* Direct contact badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/10 border border-white/25 text-xs font-mono font-bold text-white">
              <Mail className="w-4 h-4 text-[#00C2FF]" />
              <a href="mailto:support@blueorbitdevs.org" className="hover:underline text-[#FFD84D]">
                support@blueorbitdevs.org
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit BlueOrbit Devs on ${s.name}`}
                  className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-[#17152B] border-2 border-white/30 flex items-center justify-center transition-all hover:scale-105 shadow-[2px_2px_0px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-black uppercase text-[#FFD84D] tracking-wider">
              STUDIO NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-sm sm:text-base font-bold text-white/80 hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD84D]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Selected Case Studies & Inquiries (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-black uppercase text-[#00C2FF] tracking-wider">
              FEATURED CASE STUDIES
            </h4>
            <ul className="space-y-2.5">
              {caseStudyLinks.map((res) => (
                <li key={res.name}>
                  <a
                    href={res.path}
                    onClick={(e) => handleLinkClick(e, res.path)}
                    className="text-sm sm:text-base font-bold text-white/80 hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline cursor-pointer"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#00C2FF]" />
                    <span>{res.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/30 transition-all cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Total Visitor Counter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-white/75">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} BlueOrbit Devs. Built with curiosity.</span>
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-mono font-bold text-white shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D88A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55D88A]"></span>
            </span>
            <Users className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span>Total Visitors:</span>
            <span className="text-[#FFD84D] font-extrabold tracking-wider">{visitorCount.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
