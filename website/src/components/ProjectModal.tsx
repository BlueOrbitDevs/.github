import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Cpu, Shield, Sparkles, ExternalLink, Activity, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry?: () => void;
  onOpenLiveDemo?: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
  onOpenLiveDemo
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#151326]/75 backdrop-blur-md overflow-y-auto w-full max-w-[100vw]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-[20px] sm:rounded-[28px] border-2 sm:border-3 border-[#151326] shadow-[4px_4px_0px_#151326] sm:shadow-[8px_8px_0px_#151326] overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div
          className="px-4 sm:px-8 py-3.5 sm:py-5 border-b-2 border-[#151326] flex items-center justify-between gap-3"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white text-[11px] sm:text-xs font-black text-[#17152B] border border-[#151326] shadow-[2px_2px_0px_#151326]">
              {project.status}
            </span>
            <div className="flex flex-wrap gap-1">
              {project.category.map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-black uppercase text-white bg-[#151326]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onOpenLiveDemo && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLiveDemo(project);
                }}
                className="px-3 sm:px-4 py-2 min-h-[44px] rounded-full bg-[#00C2FF] text-[#17152B] font-black text-xs border-2 border-[#151326] shadow-[2px_2px_0px_#151326] hover:bg-white hover:scale-105 active:scale-100 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close Project Modal"
              className="p-2 min-w-[44px] min-h-[44px] rounded-full bg-white border-2 border-[#151326] shadow-[2px_2px_0px_#151326] hover:translate-y-[-1px] active:translate-y-[1px] text-[#17152B] transition-transform flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-6 sm:space-y-8">
          {/* Project Preview Banner */}
          {project.image && (
            <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#151326] shadow-[3px_3px_0px_#151326] sm:shadow-[4px_4px_0px_#151326] relative select-none pointer-events-none">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          )}

          {/* Title & Subtitle */}
          <div>
            <h3 id="modal-project-title" className="text-2xl sm:text-4xl md:text-5xl font-black text-[#17152B] tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-base sm:text-xl font-bold text-[#5B4BFF]">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics / Stats Row */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {project.stats.map((st) => (
                <div
                  key={st.label}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F7F7FF] border-2 border-[#151326] shadow-[3px_3px_0px_#151326]"
                >
                  <p className="text-[11px] sm:text-xs font-black text-[#626078] uppercase tracking-wider mb-1">
                    {st.label}
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-[#17152B]">
                    {st.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Deep Architectural Breakdown */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-extrabold text-[#17152B] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#5B4BFF] shrink-0" />
              <span>Architecture & Problem Solved</span>
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-[#626078] leading-relaxed font-medium">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineered Features */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-extrabold text-[#17152B] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF7043] shrink-0" />
              <span>Core Capabilities & Highlights</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border-2 border-[#151326]/15 flex items-start gap-2.5 sm:gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#55D88A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-[#17152B] leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2.5 sm:space-y-3 pt-2">
            <h4 className="text-xs sm:text-sm font-black uppercase text-[#626078] tracking-wider">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-extrabold bg-[#F0EEFF] text-[#5B4BFF] border border-[#5B4BFF]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Drawer */}
          <div className="pt-6 border-t-2 border-[#F0EEFF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#55D88A] shrink-0" />
              <span className="text-xs font-bold text-[#626078]">Production Architecture Engineered by BlueOrbit Devs</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {onOpenLiveDemo && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenLiveDemo(project);
                  }}
                  className="px-5 sm:px-6 py-3 min-h-[44px] rounded-full bg-[#00C2FF] text-[#17152B] font-black text-sm border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:bg-white hover:translate-y-[-2px] active:translate-y-[0px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenInquiry) onOpenInquiry();
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 sm:px-6 py-3 min-h-[44px] rounded-full bg-[#FF7043] text-white font-black text-sm border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] active:translate-y-[0px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Build Similar Product</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
