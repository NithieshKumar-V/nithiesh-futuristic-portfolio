import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle, AlertCircle, Cpu, Layers } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-3xl my-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status & Category */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
          <span
            className={`px-2.5 py-1 rounded-full border ${
              project.status === 'Completed'
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40'
                : 'bg-amber-950/60 text-amber-300 border-amber-500/40'
            }`}
          >
            {project.status}
          </span>
          <span className="text-slate-400">·</span>
          <span className="text-cyan-400 uppercase tracking-wider">{project.category.replace('_', ' ')}</span>
        </div>

        {/* Title & Subtitle */}
        <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="text-sm font-medium text-slate-300 mb-6">{project.subtitle}</p>

        {/* Visual Inspection Panel */}
        <div className="mb-6">
          <ProjectVisual type={project.visualType} title={project.title} />
        </div>

        {/* Narrative Overview */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase text-slate-400 mb-2">Architectural Overview</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase text-slate-400 mb-3">Implemented Capabilities</h3>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Status Note */}
        {project.verificationNotes && (
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 mb-6 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-300">Implementation Verification: </strong>
              {project.verificationNotes}
            </div>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase text-slate-400 mb-2.5">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Github className="w-4 h-4" />
                <span>Source Code Profile</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Showcase</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-transparent rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
