import React, { useState, useEffect } from 'react';
import { BlueOrbitLogo } from './CustomIllustrations';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useSectionNav, NAV_LINKS } from '../context/SectionNavContext';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { activePath, scrollToSection, isScrolled } = useSectionNav();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    scrollToSection(path, true);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2.5 sm:px-6 lg:px-8 pt-2 sm:pt-3.5 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Nav Capsule Container */}
        <nav
          id="main-navigation"
          aria-label="Main Navigation"
          className={`w-full flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 rounded-full border-2 border-[#17152B]/10 bg-white/95 backdrop-blur-md transition-all duration-300 ${
            isScrolled
              ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[#17152B]/15 scale-[0.98]'
              : 'shadow-[0_4px_20px_rgb(0,0,0,0.06)]'
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            id="brand-logo"
            onClick={(e) => handleLinkClick(e, '/')}
            aria-label="BlueOrbit Devs Home"
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF] rounded-full shrink-0 cursor-pointer"
          >
            <BlueOrbitLogo size={32} variant="color" className="group-hover:scale-105 transition-transform duration-300 shadow-sm" />
            <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-[#17152B] flex items-center">
              BlueOrbit<span className="text-[#5B4BFF] ml-0.5">Devs</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activePath === link.path;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`px-3.5 py-1.5 rounded-full text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF] cursor-pointer ${
                    isActive
                      ? 'bg-[#5B4BFF] text-white font-extrabold shadow-[2px_2px_0px_#151326] border-2 border-[#151326]'
                      : 'font-bold text-[#626078] hover:text-[#17152B] hover:bg-[#F0EEFF]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href="/contact"
              id="nav-cta-btn"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FF7043] text-white font-extrabold text-xs sm:text-sm border-2 border-[#151326] shadow-[2px_2px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_#151326] active:translate-y-[0px] active:shadow-[1px_1px_0px_#151326] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF] min-h-[38px] sm:min-h-[42px] cursor-pointer"
            >
              <span className="hidden sm:inline">Start a Project</span>
              <span className="sm:hidden">Start</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#17152B]/20 hover:bg-[#F0EEFF] text-[#17152B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF] shrink-0 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Full Screen Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#151326]/60 backdrop-blur-md z-50 flex flex-col p-4 pointer-events-auto lg:hidden animate-fade-in"
        >
          <div className="bg-white rounded-3xl border-2 border-[#151326] shadow-[6px_6px_0px_#151326] p-6 max-w-md w-full mx-auto my-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#F0EEFF]">
              <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center gap-2 cursor-pointer">
                <BlueOrbitLogo size={32} />
                <span className="font-extrabold text-lg text-[#17152B]">
                  BlueOrbit<span className="text-[#5B4BFF]">Devs</span>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Navigation"
                className="p-2 rounded-full bg-[#F0EEFF] border border-[#151326]/20 text-[#17152B] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-2 py-6">
              {NAV_LINKS.map((link) => {
                const isActive = activePath === link.path;
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`px-4 py-3 rounded-2xl text-base flex items-center justify-between border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#5B4BFF] text-white font-extrabold border-[#151326] shadow-[2px_2px_0px_#151326]'
                        : 'text-[#17152B] font-bold hover:bg-[#F0EEFF] hover:text-[#5B4BFF] border-transparent'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#626078]'}`} />
                  </a>
                );
              })}
            </div>

            {/* Drawer CTA */}
            <div className="pt-2 border-t-2 border-[#F0EEFF] flex flex-col gap-3">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="w-full text-center py-3.5 px-6 rounded-full bg-[#FF7043] text-white font-extrabold text-base border-2 border-[#151326] shadow-[3px_3px_0px_#151326] active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-[#626078] font-medium flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD84D]" />
                Creative engineering for ambitious ideas.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
