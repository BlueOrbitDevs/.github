import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TEAM_MEMBERS } from '../data/teamData';
import { FloatingObject } from './FloatingDecorations';
import { Users, Github, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  const getInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const initials = getInitials(member.name);
  const accentColor = member.avatarColor || '#5B4BFF';

  return (
    <div className="group rounded-[28px] bg-white text-[#17152B] border-3 border-[#151326] p-5 sm:p-7 shadow-[6px_6px_0px_#151326] hover:translate-y-[-4px] sm:hover:translate-y-[-6px] hover:shadow-[10px_10px_0px_#151326] transition-all duration-300 flex flex-col justify-between h-full w-full select-none">
      <div>
        {/* Prominent Organic Portrait Container */}
        <div className="relative mb-4 sm:mb-6 rounded-[22px] overflow-hidden border-2 border-[#151326] shadow-[3px_3px_0px_#151326] aspect-[4/4.6] bg-[#F0EEFF] flex items-center justify-center">
          {!imgError && member.image ? (
            <img
              src={member.image}
              alt={member.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out select-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center text-white font-black text-3xl tracking-wider select-none p-4 text-center"
              style={{ backgroundColor: accentColor }}
            >
              <span>{initials}</span>
              <span className="text-xs font-bold opacity-80 mt-1 uppercase tracking-widest">
                BlueOrbit
              </span>
            </div>
          )}

          {/* Decorative Corner Accent Tag */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#151326]/20 text-[10px] font-extrabold uppercase tracking-wider text-[#17152B] shadow-sm pointer-events-none flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span>CORE</span>
          </div>
        </div>

        {/* Name & Role */}
        <div className="mb-2.5 sm:mb-3">
          <h3 className="font-extrabold text-xl sm:text-2xl text-[#17152B] tracking-tight group-hover:text-[#5B4BFF] transition-colors leading-tight">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#5B4BFF] mt-1 leading-snug">
            {member.role}
          </p>
        </div>

        {/* Short Bio Description */}
        <p className="text-xs sm:text-sm text-[#626078] font-medium leading-relaxed mb-4 sm:mb-6">
          {member.bio}
        </p>
      </div>

      {/* Social Links Footer */}
      {(member.github || member.linkedin || member.x) && (
        <div className="pt-3.5 sm:pt-4 border-t border-[#151326]/10 flex items-center gap-2 mt-auto">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on GitHub`}
              className="w-9 h-9 rounded-full bg-[#F7F7FF] border border-[#151326]/15 hover:border-[#151326] hover:bg-[#151326] hover:text-white text-[#17152B] flex items-center justify-center transition-all shadow-sm hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_#151326] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="w-9 h-9 rounded-full bg-[#F7F7FF] border border-[#151326]/15 hover:border-[#151326] hover:bg-[#0077B5] hover:text-white text-[#17152B] flex items-center justify-center transition-all shadow-sm hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_#151326] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}

          {member.x && (
            <a
              href={member.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on X`}
              className="w-9 h-9 rounded-full bg-[#F7F7FF] border border-[#151326]/15 hover:border-[#151326] hover:bg-[#151326] hover:text-white text-[#17152B] flex items-center justify-center transition-all shadow-sm hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_#151326] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export const Team: React.FC = () => {
  const totalMembers = TEAM_MEMBERS.length;
  const [cardsPerView, setCardsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(Math.min(4, totalMembers));
      } else if (window.innerWidth >= 640) {
        setCardsPerView(Math.min(2, totalMembers));
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalMembers]);

  const maxIndex = Math.max(0, totalMembers - cardsPerView);
  const canSlide = totalMembers > cardsPerView;

  // Keep currentIndex clamped if cardsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = useCallback(() => {
    if (!canSlide) return;
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, [canSlide]);

  const handleNext = useCallback(() => {
    if (!canSlide) return;
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [canSlide, maxIndex]);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  }, [maxIndex]);

  // Touch / Swipe Navigation support on Mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const endX = e.changedTouches[0].clientX;
      const distance = touchStartX.current - endX;
      const minSwipeDistance = 35; // Minimum px for swipe trigger

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
  };

  // Keyboard navigation when container focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section
      id="team"
      aria-label="Meet the Team Behind BlueOrbit Devs"
      className="relative bg-[#F7F7FF] text-[#17152B] py-16 sm:py-24 md:py-28 overflow-hidden border-t-3 border-[#151326]/10"
    >
      <FloatingObject type="sparkle" top="10%" right="6%" color="#5B4BFF" animation="slow" />
      <FloatingObject type="code-tag" bottom="15%" left="4%" color="#00C2FF" animation="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#151326]/15 text-[#5B4BFF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 shadow-sm">
              <Users className="w-3.5 h-3.5 text-[#5B4BFF]" />
              <span>MEET THE PEOPLE</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-3 sm:mb-4 text-[#17152B]">
              Behind <br />
              <span className="text-[#5B4BFF]">BlueOrbit Devs.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#626078] leading-relaxed font-medium">
              Designers, engineers, and builders creating products that matter.
            </p>
          </div>

          {/* Navigation Controls (Shown when sliding is available for screen size) */}
          {canSlide && (
            <div className="flex items-center gap-2.5 sm:gap-3 self-start sm:self-end shrink-0 pt-2 sm:pt-0">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous team member"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0 active:shadow-[2px_2px_0px_#151326] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_#151326] transition-all flex items-center justify-center text-[#17152B] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="text-xs sm:text-sm font-mono font-bold text-[#626078] px-1 sm:px-2 select-none min-w-[70px] text-center">
                {cardsPerView === 1
                  ? `${currentIndex + 1} of ${totalMembers}`
                  : `${currentIndex + 1}-${Math.min(currentIndex + cardsPerView, totalMembers)} of ${totalMembers}`}
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next team member"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0 active:shadow-[2px_2px_0px_#151326] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_#151326] transition-all flex items-center justify-center text-[#17152B] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel Viewport Container with Smooth Sliding Track */}
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing focus:outline-none -mx-2.5 sm:-mx-3.5 px-0.5 py-2 select-none"
          aria-roledescription="carousel"
          aria-label="Team Members Carousel"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              willChange: 'transform'
            }}
          >
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.id || index}
                className="shrink-0 px-2.5 sm:px-3.5 flex flex-col"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="w-full h-full max-w-sm sm:max-w-none mx-auto">
                  <TeamMemberCard member={member} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator Dots on Mobile & Tablet */}
        {canSlide && (
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to team member ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#5B4BFF] shadow-sm'
                    : 'w-2.5 bg-[#151326]/20 hover:bg-[#151326]/40'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

