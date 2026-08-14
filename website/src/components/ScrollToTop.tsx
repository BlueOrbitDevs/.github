import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_SECTION_MAP: Record<string, string> = {
  '/work': 'work',
  '/products': 'products',
  '/services': 'services',
  '/engineering': 'engineering',
  '/process': 'process',
  '/about': 'about',
  '/team': 'team',
  '/contact': 'contact',
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      return;
    }

    const sectionId = ROUTE_SECTION_MAP[pathname];
    if (sectionId) {
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarOffset = 76;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };

      // Try immediately
      const found = scrollToSection();
      if (!found) {
        // Retry shortly in case DOM is still mounting (e.g. direct URL entry)
        const timer1 = setTimeout(scrollToSection, 60);
        const timer2 = setTimeout(scrollToSection, 180);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    } else {
      // For 404 or other unmatched pages
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname]);

  return null;
};
