import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TEAM_MEMBERS } from '../data/teamData';
import { FloatingObject } from './FloatingDecorations';
import {
  Users,
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
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
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

  const socialLinks = [
    member.github && {
      key: 'github',
      url: member.github,
      label: `${member.name} on GitHub`,
      icon: Github,
      hoverClass: 'hover:bg-[#151326] hover:text-white',
    },
    member.linkedin && {
      key: 'linkedin',
      url: member.linkedin,
      label: `${member.name} on LinkedIn`,
      icon: Linkedin,
      hoverClass: 'hover:bg-[#0077B5] hover:text-white',
    },
    (member.x || member.twitter) && {
      key: 'x',
      url: member.x || member.twitter,
      label: `${member.name} on X`,
      icon: Twitter,
      hoverClass: 'hover:bg-[#151326] hover:text-white',
    },
    member.instagram && {
      key: 'instagram',
      url: member.instagram,
      label: `${member.name} on Instagram`,
      icon: Instagram,
      hoverClass: 'hover:bg-[#E1306C] hover:text-white',
    },
    member.facebook && {
      key: 'facebook',
      url: member.facebook,
      label: `${member.name} on Facebook`,
      icon: Facebook,
      hoverClass: 'hover:bg-[#1877F2] hover:text-white',
    },
    member.youtube && {
      key: 'youtube',
      url: member.youtube,
      label: `${member.name} on YouTube`,
      icon: Youtube,
      hoverClass: 'hover:bg-[#FF0000] hover:text-white',
    },
    (member.website || member.portfolio) && {
      key: 'website',
      url: member.website || member.portfolio,
      label: `${member.name}'s Website`,
      icon: Globe,
      hoverClass: 'hover:bg-[#5B4BFF] hover:text-white',
    },
    member.email && {
      key: 'email',
      url: member.email.startsWith('mailto:') ? member.email : `mailto:${member.email}`,
      label: `Email ${member.name}`,
      icon: Mail,
      hoverClass: 'hover:bg-[#5B4BFF] hover:text-white',
    },
    member.dribbble && {
      key: 'dribbble',
      url: member.dribbble,
      label: `${member.name} on Dribbble`,
      icon: Dribbble,
      hoverClass: 'hover:bg-[#EA4C89] hover:text-white',
    },
    member.discord && {
      key: 'discord',
      url: member.discord,
      label: `${member.name} on Discord`,
      icon: MessageSquare,
      hoverClass: 'hover:bg-[#5865F2] hover:text-white',
    },
    member.telegram && {
      key: 'telegram',
      url: member.telegram,
      label: `${member.name} on Telegram`,
      icon: Send,
      hoverClass: 'hover:bg-[#229ED9] hover:text-white',
    },
    member.threads && {
      key: 'threads',
      url: member.threads,
      label: `${member.name} on Threads`,
      icon: AtSign,
      hoverClass: 'hover:bg-[#151326] hover:text-white',
    },
    member.gitlab && {
      key: 'gitlab',
      url: member.gitlab,
      label: `${member.name} on GitLab`,
      icon: Gitlab,
      hoverClass: 'hover:bg-[#FC6D26] hover:text-white',
    },
    member.twitch && {
      key: 'twitch',
      url: member.twitch,
      label: `${member.name} on Twitch`,
      icon: Twitch,
      hoverClass: 'hover:bg-[#9146FF] hover:text-white',
    },
  ].filter(Boolean) as {
    key: string;
    url: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    hoverClass: string;
  }[];

  return (
    <div className="group rounded-[28px] bg-white text-[#17152B] border-3 border-[#151326] p-5 sm:p-7 shadow-[6px_6px_0px_#151326] hover:translate-y-[-4px] sm:hover:translate-y-[-6px] hover:shadow-[10px_10px_0px_#151326] transition-all duration-300 flex flex-col justify-between h-full w-full select-none">
      <div>
        {/* Prominent Organic Portrait Container */}
        <div className="relative mb-4 sm:mb-6 rounded-[22px] overflow-hidden border-2 border-[#151326] shadow-[3px_3px_0px_#151326] aspect-[4/4.6] bg-[#F0EEFF] flex items-center justify-center select-none pointer-events-none">
          {!imgError && member.image ? (
            <img
              src={member.image}
              alt={member.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out select-none pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
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
      {socialLinks.length > 0 && (
        <div className="pt-3.5 sm:pt-4 border-t border-[#151326]/10 flex items-center gap-2 flex-wrap mt-auto">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.key}
                href={item.url}
                target={item.key === 'email' ? undefined : '_blank'}
                rel={item.key === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={item.label}
                className={`w-9 h-9 rounded-full bg-[#F7F7FF] border border-[#151326]/15 hover:border-[#151326] ${item.hoverClass} text-[#17152B] flex items-center justify-center transition-all shadow-sm hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_#151326] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]`}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const Team: React.FC = () => {
  const totalMembers = TEAM_MEMBERS.length;
  const bufferSize = 4;

  // Cloned list for seamless infinite loop: [last bufferSize, ...all, ...first bufferSize]
  const extendedTeamMembers = [
    ...TEAM_MEMBERS.slice(-bufferSize),
    ...TEAM_MEMBERS,
    ...TEAM_MEMBERS.slice(0, bufferSize)
  ];

  const [cardsPerView, setCardsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(bufferSize);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  // Responsive items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // Desktop: 4
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
    if (currentIndex >= totalMembers + bufferSize) {
      setWithTransition(false);
      setCurrentIndex(bufferSize + (currentIndex - (totalMembers + bufferSize)));
    }
    // If went before real start into cloned prefix, jump invisibly to real end
    else if (currentIndex < bufferSize) {
      setWithTransition(false);
      setCurrentIndex(totalMembers + currentIndex);
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

  // Calculate active member index (0 to totalMembers - 1)
  const activeDotIndex = ((currentIndex - bufferSize) % totalMembers + totalMembers) % totalMembers;

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

    if (Math.abs(diffX) > Math.abs(diffY)) {
      setIsInteracting(true);
    }
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
    setIsInteracting(false);
    startAutoPlay();
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

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-start sm:self-end shrink-0 pt-2 sm:pt-0">
            <button
              type="button"
              id="team-prev-btn"
              onClick={handlePrev}
              aria-label="Previous team member"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0 active:shadow-[2px_2px_0px_#151326] transition-all flex items-center justify-center text-[#17152B] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="text-xs sm:text-sm font-mono font-bold text-[#626078] px-1 sm:px-2 select-none min-w-[70px] text-center">
              {cardsPerView === 1
                ? `${activeDotIndex + 1} of ${totalMembers}`
                : `${activeDotIndex + 1}-${Math.min(activeDotIndex + cardsPerView, totalMembers)} of ${totalMembers}`}
            </div>

            <button
              type="button"
              id="team-next-btn"
              onClick={handleNext}
              aria-label="Next team member"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0 active:shadow-[2px_2px_0px_#151326] transition-all flex items-center justify-center text-[#17152B] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container with Smooth Sliding Track */}
        <div
          ref={containerRef}
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing focus:outline-none -mx-2.5 sm:-mx-3.5 px-0.5 py-2 select-none"
          aria-roledescription="carousel"
          aria-label="Team Members Carousel"
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
            {extendedTeamMembers.map((member, index) => (
              <div
                key={`${member.id || member.name}-${index}`}
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

        {/* Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {TEAM_MEMBERS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to team member ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === idx
                  ? 'w-8 bg-[#5B4BFF] shadow-sm'
                  : 'w-2.5 bg-[#151326]/20 hover:bg-[#151326]/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

