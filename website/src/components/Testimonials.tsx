import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { FloatingObject } from './FloatingDecorations';
import { WaveDivider } from './WaveDivider';
import { Star, ChevronLeft, ChevronRight, Sparkles, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface ReviewerAvatarProps {
  testimonial: Testimonial;
}

const ReviewerAvatar: React.FC<ReviewerAvatarProps> = ({ testimonial }) => {
  const [hasError, setHasError] = useState(false);

  const getInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const showImage = testimonial.image && !hasError;
  const initials = getInitials(testimonial.name);
  const bgColor = testimonial.avatarColor || '#5B4BFF';

  if (showImage) {
    return (
      <div className="w-12 h-12 rounded-full border-2 border-[#151326] overflow-hidden shadow-[2px_2px_0px_#151326] shrink-0 bg-[#F0EEFF] select-none pointer-events-none">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover select-none pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-full border-2 border-[#151326] text-white flex items-center justify-center font-extrabold text-sm tracking-wider shadow-[2px_2px_0px_#151326] shrink-0 select-none"
      style={{ backgroundColor: bgColor }}
      aria-label={`Initials for ${testimonial.name}: ${initials}`}
    >
      <span>{initials}</span>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const bufferSize = 3;
  const totalItems = TESTIMONIALS.length;

  // Cloned list for seamless infinite loop: [last bufferSize, ...all, ...first bufferSize]
  const extendedTestimonials = [
    ...TESTIMONIALS.slice(-bufferSize),
    ...TESTIMONIALS,
    ...TESTIMONIALS.slice(0, bufferSize)
  ];

  const [currentIndex, setCurrentIndex] = useState(bufferSize);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // Desktop: 3
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2); // Tablet: 2
      } else {
        setCardsPerView(1); // Mobile: 1
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    resetAutoPlay();
    if (!isPaused && !isInteracting) {
      autoPlayTimerRef.current = setInterval(() => {
        setWithTransition(true);
        setCurrentIndex((prev) => prev + 1);
      }, 3500); // Smooth automatic slide every 3.5 seconds
    }
  }, [isPaused, isInteracting, resetAutoPlay]);

  // Set up auto-play lifecycle
  useEffect(() => {
    startAutoPlay();
    return () => resetAutoPlay();
  }, [startAutoPlay, resetAutoPlay]);

  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
    startAutoPlay();
  }, [startAutoPlay]);

  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
    startAutoPlay();
  }, [startAutoPlay]);

  const handleDotClick = useCallback((index: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex(bufferSize + index);
    startAutoPlay();
  }, [startAutoPlay, bufferSize]);

  // Handle transition end for seamless infinite looping
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;

    // If reached or went past the cloned end, jump invisibly to real start
    if (currentIndex >= totalItems + bufferSize) {
      setWithTransition(false);
      setCurrentIndex(bufferSize + (currentIndex - (totalItems + bufferSize)));
    }
    // If went before real start into cloned prefix, jump invisibly to real end
    else if (currentIndex < bufferSize) {
      setWithTransition(false);
      setCurrentIndex(totalItems + currentIndex);
    }
  };

  // Re-enable transitions on next frame after seamless reset
  useEffect(() => {
    if (!withTransition) {
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [withTransition]);

  // Calculate the active dot index (0 to totalItems - 1)
  const activeDotIndex = ((currentIndex - bufferSize) % totalItems + totalItems) % totalItems;

  // Touch / Swipe Navigation support on Mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsInteracting(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;
    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    // If horizontal scroll is intentional, prevent unwanted behavior
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setIsInteracting(true);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const endX = e.changedTouches[0].clientX;
      const distance = touchStartX.current - endX;
      const minSwipeDistance = 40; // Minimum px for swipe trigger

      if (distance > minSwipeDistance) {
        // Swiped Left -> go Next
        handleNext();
      } else if (distance < -minSwipeDistance) {
        // Swiped Right -> go Prev
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    setIsInteracting(false);
    startAutoPlay();
  };

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section
      id="people"
      aria-label="Built with People and Community Testimonials"
      className="relative bg-[#5B4BFF] text-white pt-20 sm:pt-28 pb-0 overflow-hidden"
    >
      <FloatingObject type="sparkle" top="12%" left="6%" color="#FFD84D" animation="slow" />
      <FloatingObject type="code-tag" top="28%" right="4%" color="#00C2FF" animation="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-[#FFD84D] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD84D]" />
              <span>COLLABORATION & TRUST</span>
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-4">
              Built with <br />
              <span className="text-[#00C2FF]">people.</span>
            </h2>
            <p className="text-base sm:text-xl text-white/90 leading-relaxed font-medium">
              Great products are collaborative. We partner closely with founders, engineering leads, and fast-moving product teams to deliver exceptional software.
            </p>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              id="testimonial-prev-btn"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full bg-white text-[#151326] border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0.5 active:shadow-[1px_1px_0px_#151326] transition-all flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00C2FF]"
            >
              <ChevronLeft className="w-6 h-6 text-[#151326]" />
            </button>

            <button
              type="button"
              id="testimonial-next-btn"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full bg-white text-[#151326] border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0.5 active:shadow-[1px_1px_0px_#151326] transition-all flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00C2FF]"
            >
              <ChevronRight className="w-6 h-6 text-[#151326]" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel Track */}
        <div
          ref={containerRef}
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing focus:outline-none -mx-3 px-1 py-3 select-none"
          aria-roledescription="carousel"
          aria-label="Customer Reviews Slider"
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              transition: withTransition ? 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              willChange: 'transform'
            }}
          >
            {extendedTestimonials.map((t, idx) => {
              const reviewText = t.review || t.quote || '';
              return (
                <div
                  key={`${t.id}-${idx}`}
                  className="shrink-0 px-3 flex flex-col"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div
                    className="rounded-[28px] bg-white text-[#17152B] border-3 border-[#151326] p-7 sm:p-9 shadow-[6px_6px_0px_#151326] hover:translate-y-[-4px] hover:shadow-[9px_9px_0px_#151326] transition-all flex flex-col justify-between h-full group"
                  >
                    <div>
                      {/* Highlight Tag & Star Rating */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#151326]/10 gap-2">
                        {t.highlight ? (
                          <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#5B4BFF] font-black text-[11px] uppercase tracking-wider truncate">
                            {t.highlight}
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#5B4BFF] font-black text-[11px] uppercase tracking-wider flex items-center gap-1">
                            <Quote className="w-3 h-3 text-[#5B4BFF]" />
                            <span>VERIFIED REVIEW</span>
                          </span>
                        )}
                        <div className="flex gap-0.5 shrink-0" aria-label={`${t.rating} out of 5 stars`}>
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                          ))}
                        </div>
                      </div>

                      {/* Review Content */}
                      <p className="text-base sm:text-lg text-[#17152B] font-medium leading-relaxed mb-8">
                        &ldquo;{reviewText}&rdquo;
                      </p>
                    </div>

                    {/* Reviewer Profile Section (Image or Initials) */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-[#151326]/10 mt-auto">
                      <ReviewerAvatar testimonial={t} />
                      <div className="min-w-0">
                        <h4 className="font-extrabold text-sm sm:text-base text-[#17152B] truncate">
                          {t.name}
                        </h4>
                        <p className="text-xs text-[#626078] font-bold truncate">
                          {t.role} • <span className="text-[#5B4BFF]">{t.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === idx
                  ? 'w-8 bg-[#FFD84D] shadow-sm'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Wave Transition into White About Section */}
      <WaveDivider toColor="#FFFFFF" variant="organic-3" />
    </section>
  );
};
