import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface SectionItem {
  id: string;
  path: string;
  name: string;
}

export const SECTIONS: SectionItem[] = [
  { id: 'hero', path: '/', name: 'Home' },
  { id: 'products', path: '/products', name: 'Products' },
  { id: 'work', path: '/work', name: 'Work' },
  { id: 'engineering', path: '/engineering', name: 'Engineering' },
  { id: 'services', path: '/services', name: 'Services' },
  { id: 'process', path: '/process', name: 'Process' },
  { id: 'about', path: '/about', name: 'About' },
  { id: 'team', path: '/team', name: 'Team' },
  { id: 'contact', path: '/contact', name: 'Contact' },
];

export const NAV_LINKS = [
  { name: 'Products', path: '/products', sectionId: 'products' },
  { name: 'Work', path: '/work', sectionId: 'work' },
  { name: 'Engineering', path: '/engineering', sectionId: 'engineering' },
  { name: 'Services', path: '/services', sectionId: 'services' },
  { name: 'Process', path: '/process', sectionId: 'process' },
  { name: 'About', path: '/about', sectionId: 'about' },
  { name: 'Team', path: '/team', sectionId: 'team' },
];

interface SectionNavContextType {
  activePath: string;
  scrollToSection: (pathOrId: string, pushToHistory?: boolean) => void;
  isScrolled: boolean;
}

const SectionNavContext = createContext<SectionNavContextType | undefined>(undefined);

export const SectionNavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState<string>(() => {
    return location.pathname || '/';
  });
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  const isProgrammaticScrollRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activePathRef = useRef<string>(activePath);

  useEffect(() => {
    activePathRef.current = activePath;
  }, [activePath]);

  // Smooth scroll helper
  const scrollToSection = useCallback((pathOrId: string, pushToHistory = true) => {
    // Handle standalone pages
    if (pathOrId === '/privacy-policy' || pathOrId === '/data-security-practices') {
      setActivePath(pathOrId);
      navigate(pathOrId);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    let targetSection = SECTIONS.find((s) => s.path === pathOrId || s.id === pathOrId);
    
    if (!targetSection) {
      if (pathOrId === '/' || pathOrId === 'top' || pathOrId === 'hero') {
        targetSection = SECTIONS[0];
      } else {
        targetSection = { id: pathOrId.replace('/', ''), path: pathOrId, name: pathOrId };
      }
    }

    // Check if the current route is one of the home section routes
    const isCurrentOnHome = SECTIONS.some((s) => s.path === location.pathname);

    // If currently NOT on a home section route (e.g. 404 NotFound page, privacy policy, data security practices),
    // navigate to the target home route so React Router switches to HomePage
    if (!isCurrentOnHome) {
      setActivePath(targetSection.path);
      navigate(targetSection.path);
      if (targetSection.path === '/' || targetSection.id === 'hero') {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return;
    }

    // Set programmatic scroll lock to prevent scroll spy jitter
    isProgrammaticScrollRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 850);

    // Update active path state
    setActivePath(targetSection.path);

    // Update browser URL without reloading
    if (pushToHistory) {
      if (window.location.pathname !== targetSection.path) {
        window.history.pushState(null, '', targetSection.path);
      }
    } else {
      if (window.location.pathname !== targetSection.path) {
        window.history.replaceState(null, '', targetSection.path);
      }
    }

    if (targetSection.id === 'hero' || targetSection.path === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(targetSection.id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  }, [location.pathname, navigate]);

  // Handle deep-linking on initial load / location change from router
  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath === '/privacy-policy' || currentPath === '/data-security-practices') {
      setActivePath(currentPath);
      window.scrollTo(0, 0);
      return;
    }

    const matchedSection = SECTIONS.find((s) => s.path === currentPath);
    if (!matchedSection) {
      // 404 Route
      setActivePath('');
      window.scrollTo(0, 0);
      return;
    }

    if (currentPath === '/') {
      setActivePath('/');
      if (window.scrollY > 100 && !isProgrammaticScrollRef.current) {
        // user scrolled down, keep position
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return;
    }

    setActivePath(matchedSection.path);
    const executeScroll = () => {
      const element = document.getElementById(matchedSection.id);
      if (element) {
        const navbarOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
        return true;
      }
      return false;
    };

    if (!executeScroll()) {
      const timer1 = setTimeout(executeScroll, 60);
      const timer2 = setTimeout(executeScroll, 180);
      const timer3 = setTimeout(executeScroll, 350);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [location.pathname]);

  // Handle browser back / forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      if (currentPath === '/privacy-policy' || currentPath === '/data-security-practices') {
        setActivePath(currentPath);
        return;
      }
      const matched = SECTIONS.find((s) => s.path === currentPath);
      if (matched) {
        scrollToSection(matched.path, false);
      } else if (currentPath === '/') {
        scrollToSection('/', false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [scrollToSection]);

  // Scroll Spy logic for automatic section detection and URL replacement
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Navbar scroll elevation
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Do not run scroll spy on non-home pages (such as 404, privacy policy, data security practices)
      const isHome = SECTIONS.some((s) => s.path === window.location.pathname);
      if (!isHome) return;

      if (isProgrammaticScrollRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;

          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Top of page (Hero)
          if (scrollY < 160) {
            if (activePathRef.current !== '/') {
              setActivePath('/');
              if (window.location.pathname !== '/') {
                window.history.replaceState(null, '', '/');
              }
            }
            return;
          }

          // Bottom of page (Contact)
          if (windowHeight + scrollY >= documentHeight - 60) {
            const contactSection = SECTIONS.find((s) => s.id === 'contact');
            if (contactSection && activePathRef.current !== contactSection.path) {
              setActivePath(contactSection.path);
              if (window.location.pathname !== contactSection.path) {
                window.history.replaceState(null, '', contactSection.path);
              }
            }
            return;
          }

          // Find the section that occupies the primary viewing zone
          const navbarHeight = 84;
          const detectionPoint = navbarHeight + 80;

          // Scan all configured sections in order
          let currentDetected: SectionItem = SECTIONS[0];
          let bestScore = -Infinity;

          for (const section of SECTIONS) {
            const el = document.getElementById(section.id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            
            // If the element crosses the detection threshold
            if (rect.top <= detectionPoint && rect.bottom > detectionPoint) {
              currentDetected = section;
              break;
            }

            // Fallback: check closest element near top of viewport
            if (rect.top <= windowHeight * 0.4 && rect.bottom > 0) {
              const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
              if (visibleHeight > bestScore) {
                bestScore = visibleHeight;
                currentDetected = section;
              }
            }
          }

          if (currentDetected && currentDetected.path !== activePathRef.current) {
            setActivePath(currentDetected.path);
            if (window.location.pathname !== currentDetected.path) {
              window.history.replaceState(null, '', currentDetected.path);
            }
          }
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to establish baseline state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionNavContext.Provider value={{ activePath, scrollToSection, isScrolled }}>
      {children}
    </SectionNavContext.Provider>
  );
};

export const useSectionNav = () => {
  const context = useContext(SectionNavContext);
  if (!context) {
    throw new Error('useSectionNav must be used within a SectionNavProvider');
  }
  return context;
};
