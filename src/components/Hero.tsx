import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThreeHeroCore } from './ThreeHeroCore';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-[#030712] bg-tech-grid"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Identity Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Software Developer · CSE Student @ CMR University</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase mb-3">
              <span className="text-slate-100">Nithiesh</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Kumar V
              </span>
            </h1>

            {/* Professional Subheading */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-4 flex items-center gap-2">
              <span>{PERSONAL_INFO.title}</span>
            </p>

            {/* Hero Headline */}
            <blockquote className="text-xl sm:text-2xl font-semibold text-cyan-100/95 italic border-l-2 border-cyan-400/80 pl-4 py-1 mb-5">
              "{PERSONAL_INFO.heroHeadline}"
            </blockquote>

            {/* Supporting Bio Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Explore Projects
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-semibold text-cyan-300 bg-slate-900 hover:bg-slate-800/80 border border-cyan-500/30 hover:border-cyan-400/70 rounded-xl transition-all flex items-center gap-2 shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Contact Me
              </a>
            </div>

            {/* Verified Social Links */}
            <div className="flex items-center gap-4 text-slate-400 pt-2 border-t border-slate-800/60 w-full max-w-lg">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Nithiesh Kumar V GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Nithiesh Kumar V LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Send direct email to Nithiesh Kumar V"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="hidden sm:inline text-xs font-mono text-slate-500 truncate">{PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Right Column: 3D Visual Experience & Initials Geometric Avatar (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Geometric Avatar Badge with Cyan Lighting Frame */}
            <div className="relative mb-2">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-sky-400 to-violet-500 shadow-xl shadow-cyan-500/20">
                <div className="w-full h-full bg-[#030712] rounded-[14px] flex flex-col items-center justify-center border border-cyan-400/30">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                    NK
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest mt-0.5">
                    CSE · CMRU
                  </span>
                </div>
              </div>
              {/* Clean status badge */}
              <div
                className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-slate-900 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 shadow-md"
                title="Active Developer"
              >
                <span>Active</span>
              </div>
            </div>

            {/* Interactive 3D Technological Core */}
            <div className="w-full h-[380px] sm:h-[440px] flex items-center justify-center relative">
              <ThreeHeroCore className="w-full h-full" />
            </div>

            <p className="text-[11px] font-mono text-slate-500 text-center mt-3">
              Interactive 3D Technological Core · Drag or hover to rotate
            </p>
          </div>
        </div>

        {/* Full-Width Verified Credentials & Focus Strip (Below the split as per guidelines) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-slate-500 uppercase">Degree & University</span>
            <span className="text-base sm:text-lg font-bold text-white mt-0.5">B.Tech in CSE</span>
            <span className="text-xs text-slate-400">CMR University, Bengaluru</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono text-slate-500 uppercase">Current Performance</span>
            <span className="text-base sm:text-lg font-bold text-cyan-400 mt-0.5">8.21 CGPA</span>
            <span className="text-xs text-slate-400">Current Academic Record</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono text-slate-500 uppercase">Core Discipline</span>
            <span className="text-base sm:text-lg font-bold text-white mt-0.5">AI & Full-Stack</span>
            <span className="text-xs text-slate-400">Computer Vision & Systems</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono text-slate-500 uppercase">Featured Research</span>
            <span className="text-base sm:text-lg font-bold text-violet-400 mt-0.5">RoadWise</span>
            <span className="text-xs text-slate-400">YOLO Damage Mapping</span>
          </div>
        </div>
      </div>

      {/* Down scroll hint */}
      <div className="flex justify-center mt-8">
        <a
          href="#about"
          className="text-slate-500 hover:text-cyan-400 transition-colors p-2"
          aria-label="Scroll to About Me section"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
