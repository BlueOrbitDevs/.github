import React from 'react';
import { Link } from 'react-router-dom';
import { BlueOrbitLogo } from './CustomIllustrations';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  Mail,
  Dribbble,
  Send,
  MessageSquare,
  AtSign,
  Twitch,
  Gitlab,
  ArrowUp,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { useSectionNav } from '../context/SectionNavContext';

export const Footer: React.FC = () => {
  const { scrollToSection } = useSectionNav();

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
    /*{ name: 'PhantomGram Ephemeral Engine', path: '/work' },
    { name: 'NoteNDo CRDT Canvas', path: '/work' },
    { name: 'TextSnap Snippet Engine', path: '/work' }*/
  ];

  // Active and easily extensible social media links
  const socialLinks: {
    name: string;
    href: string;
    icon: React.ReactNode;
    hoverBg?: string;
  }[] = [
    { name: 'GitHub', href: 'https://github.com/blueorbitdevs', icon: <Github className="w-5 h-5" />, hoverBg: 'hover:bg-[#151326] hover:text-white' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/blueorbitdevs', icon: <Linkedin className="w-5 h-5" />, hoverBg: 'hover:bg-[#0077B5] hover:text-white' },
    { name: 'X / Twitter', href: 'https://x.com', icon: <Twitter className="w-5 h-5" />, hoverBg: 'hover:bg-[#151326] hover:text-white' },
    // Uncomment or add any of the following whenever needed:
    // { name: 'Instagram', href: 'https://instagram.com/blueorbitdevs', icon: <Instagram className="w-5 h-5" />, hoverBg: 'hover:bg-[#E1306C] hover:text-white' },
    // { name: 'Facebook', href: 'https://facebook.com/blueorbitdevs', icon: <Facebook className="w-5 h-5" />, hoverBg: 'hover:bg-[#1877F2] hover:text-white' },
    // { name: 'YouTube', href: 'https://youtube.com/@blueorbitdevs', icon: <Youtube className="w-5 h-5" />, hoverBg: 'hover:bg-[#FF0000] hover:text-white' },
    // { name: 'Discord', href: 'https://discord.gg/yourserver', icon: <MessageSquare className="w-5 h-5" />, hoverBg: 'hover:bg-[#5865F2] hover:text-white' },
    // { name: 'Telegram', href: 'https://t.me/blueorbitdevs', icon: <Send className="w-5 h-5" />, hoverBg: 'hover:bg-[#229ED9] hover:text-white' },
    // { name: 'Dribbble', href: 'https://dribbble.com/blueorbitdevs', icon: <Dribbble className="w-5 h-5" />, hoverBg: 'hover:bg-[#EA4C89] hover:text-white' },
    // { name: 'Threads', href: 'https://threads.net/@blueorbitdevs', icon: <AtSign className="w-5 h-5" />, hoverBg: 'hover:bg-[#151326] hover:text-white' },
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

            {/* Badges row under logo */}
            <div className="flex items-center gap-3 pt-1">
              <div className="bg-white/15 hover:bg-white/25 p-2 sm:p-2.5 rounded-xl border border-white/30 shadow-sm transition-all duration-200 hover:scale-105 flex items-center justify-center">
                <img
                  src="./assets/badge/SOS.svg"
                  alt="AICPA SOC"
                  className="h-10 sm:h-12 w-auto object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-white/15 hover:bg-white/25 p-2 sm:p-2.5 rounded-xl border border-white/30 shadow-sm transition-all duration-200 hover:scale-105 flex items-center justify-center">
                <img
                  src="./assets/badge/CYBERSECURITY.webp"
                  alt="Cybersecurity Excellence Awards 2024"
                  className="h-10 sm:h-12 w-auto object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-white/15 hover:bg-white/25 p-2 sm:p-2.5 rounded-xl border border-white/30 shadow-sm transition-all duration-200 hover:scale-105 flex items-center justify-center">
                <img
                  src="./assets/badge/AWS.webp"
                  alt="AWS Partner"
                  className="h-10 sm:h-12 w-auto object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

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
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit BlueOrbit Devs on ${s.name}`}
                  className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-[#17152B] border-2 border-white/30 flex items-center justify-center transition-all hover:scale-105 shadow-[2px_2px_0px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
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

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-white/75">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} BlueOrbit Devs. Built with curiosity.</span>
          </p>

          <div className="flex items-center gap-2.5 text-xs font-bold text-white/80">
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <span className="text-white/40">|</span>
            <Link
              to="/data-security-practices"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Data Security Practices
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
