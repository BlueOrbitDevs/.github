import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/teamData';
import { FloatingObject } from './FloatingDecorations';
import { Users, Github, Linkedin, Twitter, Sparkles, Code2 } from 'lucide-react';
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
    <div
      className="group rounded-[28px] bg-white text-[#17152B] border-3 border-[#151326] p-6 sm:p-7 shadow-[6px_6px_0px_#151326] hover:translate-y-[-6px] hover:shadow-[10px_10px_0px_#151326] transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Large Prominent Organic Portrait Container */}
        <div className="relative mb-6 rounded-[22px] overflow-hidden border-2 border-[#151326] shadow-[3px_3px_0px_#151326] aspect-[4/4.8] bg-[#F0EEFF] flex items-center justify-center">
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
        <div className="mb-3">
          <h3 className="font-extrabold text-xl sm:text-2xl text-[#17152B] tracking-tight group-hover:text-[#5B4BFF] transition-colors">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#5B4BFF] mt-1 leading-snug">
            {member.role}
          </p>
        </div>

        {/* Short Bio Description */}
        <p className="text-xs sm:text-sm text-[#626078] font-medium leading-relaxed mb-6">
          {member.bio}
        </p>
      </div>

      {/* Social Links Footer */}
      {(member.github || member.linkedin || member.x) && (
        <div className="pt-4 border-t border-[#151326]/10 flex items-center gap-2">
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
  return (
    <section
      id="team"
      aria-label="Meet the Team Behind BlueOrbit Devs"
      className="relative bg-[#F7F7FF] text-[#17152B] py-20 sm:py-28 overflow-hidden border-t-3 border-[#151326]/10"
    >
      <FloatingObject type="sparkle" top="10%" right="6%" color="#5B4BFF" animation="slow" />
      <FloatingObject type="code-tag" bottom="15%" left="4%" color="#00C2FF" animation="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#151326]/15 text-[#5B4BFF] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#5B4BFF]" />
            <span>MEET THE PEOPLE</span>
          </div>

          <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-6 text-[#17152B]">
            Behind <br />
            <span className="text-[#5B4BFF]">BlueOrbit Devs.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#626078] leading-relaxed font-medium">
            Designers, engineers, and builders creating products that matter.
          </p>
        </div>

        {/* Team Grid: 4 on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.id || index} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};
