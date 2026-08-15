import React, { useState } from 'react';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { LiveDemoViewer } from './LiveDemoViewer';
import { WaveDivider } from './WaveDivider';
import { FloatingObject } from './FloatingDecorations';
import {
  ArrowUpRight,
  Sparkles,
  Play,
  Check,
  Copy,
  ExternalLink,
  Rocket,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [liveDemoProject, setLiveDemoProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'entertainment', label: 'Real-Time / Media' },
    { id: 'security', label: 'Security & Auth' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'developer', label: 'Developer Tools' }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, Math.max(1, totalPages));

  const displayedProjects = filteredProjects.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const workSection = document.getElementById('work');
      if (workSection) {
        const navbarOffset = 80;
        const elementPosition = workSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  const handleCopyLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCopiedId(id);
    navigator.clipboard.writeText(`${window.location.origin}/work?project=${id}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleOpenDemo = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiveDemoProject(project);
  };

  return (
    <section
      id="work"
      aria-label="Selected Work Section"
      className="relative bg-[#5B4BFF] text-white pt-20 sm:pt-28 pb-0 overflow-hidden"
    >
      {/* Floating Sparkles & Objects */}
      <FloatingObject type="sparkle" top="10%" left="6%" color="#FFD84D" animation="slow" />
      <FloatingObject type="code-tag" top="20%" right="4%" color="#00C2FF" animation="medium" />
      <FloatingObject type="curly" bottom="24%" left="3%" color="#FF4FA3" animation="reverse" />
      <FloatingObject type="planet" top="45%" right="3%" color="#FF7043" animation="slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-[#FFD84D] font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD84D]" />
              <span>SELECTED WORK & LIVE DEMOS</span>
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08]">
              Things we&apos;ve <br />
              <span className="text-[#00C2FF]">built & shipped.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleFilterChange(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all border-2 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#FFD84D] text-[#17152B] border-[#151326] shadow-[2px_2px_0px_#151326] translate-y-[-2px]'
                    : 'bg-white/10 hover:bg-white/20 text-white border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid - Max 6 Projects per page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              id={`work-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-[24px] border-3 border-[#151326] shadow-[6px_6px_0px_#151326] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#151326] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group text-[#17152B]"
            >
              {/* Card Visual Hero Area (Aspect Ratio 16/10) */}
              <div
                className="relative aspect-[16/10] w-full border-b-3 border-[#151326] overflow-hidden select-none bg-[#151326]"
              >
                {/* Project Photo / Screen Preview */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: project.bgColor }}
                  >
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                )}

                {/* Subtle Gradient Overlay & Top Badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151326]/90 via-[#151326]/40 to-[#151326]/30 flex flex-col justify-between p-4 sm:p-5">
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#151326]/80 backdrop-blur-md text-white text-[11px] font-extrabold border border-white/20 tracking-wider">
                      {project.title} Preview
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#55D88A] text-[#151326] text-[10px] font-black tracking-wider uppercase border border-white/20 shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#151326] animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Center Floating Action Buttons on Hover */}
                  <div className="flex flex-wrap items-center justify-center gap-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 my-auto">
                    <button
                      type="button"
                      onClick={(e) => handleOpenDemo(project, e)}
                      className="px-5 py-2.5 rounded-full bg-[#00C2FF] text-[#151326] font-black text-xs sm:text-sm border-2 border-[#151326] shadow-[3px_3px_0px_#151326] hover:bg-white hover:scale-105 active:scale-100 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm border-2 border-white/40 hover:scale-105 active:scale-100 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Stats Preview Bar over image */}
                  <div className="flex items-center justify-between text-white text-xs">
                    <span className="font-mono text-[11px] text-[#FFD84D] font-bold">
                      {project.stats ? `${project.stats[0].label}: ${project.stats[0].value}` : 'Interactive Platform'}
                    </span>
                    <span className="text-white/80 text-[11px] font-medium hidden sm:inline">
                      Click to explore live demo or architecture
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Meta Area */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-0.5 rounded-full bg-[#F0EEFF] text-[#5B4BFF] font-black text-[10px] tracking-wider uppercase border border-[#5B4BFF]/20"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#17152B] tracking-tight mb-2 group-hover:text-[#5B4BFF] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-6 h-6 text-[#626078] group-hover:text-[#5B4BFF] group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-all" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#626078] leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Bottom Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-[#F0EEFF]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-[#F7F7FF] text-[#17152B] font-bold text-xs border border-[#151326]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions: Live Demo Button + Share Button */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      id={`btn-demo-${project.id}`}
                      onClick={(e) => handleOpenDemo(project, e)}
                      className="px-3.5 py-1.5 rounded-full bg-[#00C2FF] text-[#151326] font-black text-xs border border-[#151326] shadow-[2px_2px_0px_#151326] hover:bg-[#151326] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleCopyLink(project.id, e)}
                      title="Copy Share Link"
                      className="p-1.5 rounded-lg border border-[#151326]/20 text-[#626078] hover:text-[#17152B] hover:bg-[#F0EEFF] transition-colors text-xs flex items-center gap-1 font-bold cursor-pointer"
                    >
                      {copiedId === project.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#55D88A]" />
                          <span className="text-[11px] text-[#55D88A]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Share</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Pagination Controls - ONLY rendered when more than 6 projects */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t-2 border-white/20">
            <div className="text-xs sm:text-sm font-extrabold text-white/90 font-mono tracking-wider">
              Showing {(safeCurrentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} Projects
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Previous Button */}
              <button
                type="button"
                id="projects-prev-btn"
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                aria-label="Previous projects"
                className={`px-4 py-2.5 rounded-full font-black text-xs sm:text-sm border-2 transition-all flex items-center gap-2 ${
                  safeCurrentPage === 1
                    ? 'opacity-40 cursor-not-allowed bg-white/15 text-white/60 border-white/20 shadow-none'
                    : 'bg-white text-[#151326] border-[#151326] shadow-[3px_3px_0px_#151326] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0.5 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Numbered Page Buttons */}
              <div className="flex items-center gap-1.5">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = pageNum === safeCurrentPage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      aria-label={`Go to page ${pageNum}`}
                      className={`w-9 h-9 rounded-full font-black text-xs sm:text-sm border-2 transition-all flex items-center justify-center cursor-pointer ${
                        isActive
                          ? 'bg-[#FFD84D] text-[#151326] border-[#151326] shadow-[2px_2px_0px_#151326] scale-105'
                          : 'bg-white/15 text-white border-white/30 hover:bg-white hover:text-[#151326] hover:border-[#151326]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                type="button"
                id="projects-next-btn"
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                aria-label="Next projects"
                className={`px-4 py-2.5 rounded-full font-black text-xs sm:text-sm border-2 transition-all flex items-center gap-2 ${
                  safeCurrentPage === totalPages
                    ? 'opacity-40 cursor-not-allowed bg-white/15 text-white/60 border-white/20 shadow-none'
                    : 'bg-[#00C2FF] text-[#151326] border-[#151326] shadow-[3px_3px_0px_#151326] hover:bg-white hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#151326] active:translate-y-0.5 cursor-pointer'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Interactive Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLiveDemo={(p) => setLiveDemoProject(p)}
      />

      {/* CodeCanyon-style Fullscreen Live Demo Viewer */}
      <LiveDemoViewer
        project={liveDemoProject}
        onClose={() => setLiveDemoProject(null)}
        allProjects={PROJECTS}
        onSelectProject={(p) => setLiveDemoProject(p)}
      />

      {/* Wave Transition into White Engineering Section */}
      <WaveDivider toColor="#FFFFFF" variant="organic-2" />
    </section>
  );
};
