import React, { useState, useMemo } from 'react';
import { FolderGit2, Search, ExternalLink, Github, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import { filterProjects, getCategoryLabel } from '../utils/portfolioLogic';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS_DATA, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai_ml', label: 'AI & Computer Vision' },
    { key: 'fullstack', label: 'Full-Stack Web' },
    { key: 'python_systems', label: 'Python & Systems' },
    { key: 'iot_hardware', label: 'IoT & Hardware' },
  ];

  return (
    <section id="projects" className="py-24 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Applied Software Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Things I've Built.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              A curated collection of practical applications, machine learning experiments, and full-stack systems.
              All specifications and statuses reflect actual verified project capabilities.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/80 transition-colors"
              aria-label="Search projects by technology or title"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl mb-12 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                selectedCategory === cat.key
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isRoadwise = project.id === 'roadwise';

            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group cursor-pointer rounded-2xl bg-slate-900/50 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between overflow-hidden ${
                  isRoadwise
                    ? 'md:col-span-2 lg:col-span-2 border-cyan-500/40 hover:border-cyan-400 bg-gradient-to-b from-slate-900/90 to-slate-900/40 shadow-cyan-500/5'
                    : 'border-slate-800/80 hover:border-slate-700 bg-slate-900/40'
                }`}
              >
                <div className="p-6 sm:p-8">
                  {/* Top Header metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="text-cyan-400 font-semibold">{getCategoryLabel(project.category)}</span>
                      <span aria-hidden="true">·</span>
                      <span
                        className={
                          project.status === 'Completed' ? 'text-emerald-400' : 'text-amber-400 font-medium'
                        }
                      >
                        {project.status}
                      </span>
                    </div>

                    {isRoadwise && (
                      <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full shrink-0">
                        Flagship Project
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6">{project.subtitle}</p>

                  {/* Interactive Domain Visual Mockup */}
                  <div className="mb-6 rounded-xl overflow-hidden shadow-inner">
                    <ProjectVisual type={project.visualType} title={project.title} />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyFeatures.slice(0, isRoadwise ? 3 : 2).map((feature, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-slate-500">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span>Inspect Technical Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">View Specs →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">No projects match the search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 rounded-lg hover:bg-cyan-950/80 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
};
