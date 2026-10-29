import React from 'react';
import { Layers, Eye, Cpu, Compass, BookOpen, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const cards = [
    {
      index: '01',
      title: 'BUILD',
      subtitle: 'Software Applications & Web Experiences',
      icon: Layers,
      color: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      description:
        'Architecting structured full-stack web applications and backend services with modern frameworks like React, Node.js, Express, and FastAPI. Focused on reliable API design, robust database schemas, and clean frontend UX.',
      areas: ['Full-Stack Web (React, Node, Express)', 'FastAPI & Flask REST APIs', 'Relational & Document Databases (MySQL, MongoDB)'],
    },
    {
      index: '02',
      title: 'EXPLORE',
      subtitle: 'Artificial Intelligence & Computer Vision',
      icon: Eye,
      color: 'from-violet-500/20 to-violet-500/5',
      borderColor: 'border-violet-500/30',
      iconColor: 'text-violet-400',
      description:
        'Applying machine learning and computer vision to tangible challenges. From YOLO-driven road damage detection with geographic coordinates in RoadWise to Python AST static code evaluation and lexical NLP analysis in SentimentScope.',
      areas: ['YOLOv8 Hazard Detection', 'Python AST Static Code Parsing', 'NLP Sentiment & Text Processing'],
    },
    {
      index: '03',
      title: 'IMPROVE',
      subtitle: 'Problem-Solving & Continuous Learning',
      icon: Cpu,
      color: 'from-sky-500/20 to-sky-500/5',
      borderColor: 'border-sky-500/30',
      iconColor: 'text-sky-400',
      description:
        'Tackling core computer science fundamentals through hands-on code. Embracing agile software lifecycle practices, prototyping IoT sensors with Arduino, and iteratively refining algorithms through experimentation.',
      areas: ['Data Structures & Algorithmic Logic', 'Agile Engineering Practices (OnWingspan)', 'Hardware Sensors & Physical Computing'],
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Philosophy & Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Beyond the Code.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            I am a Computer Science Engineering student at{' '}
            <span className="text-cyan-300 font-medium">CMR University, Bengaluru</span>. For me, software
            engineering is not just about memorizing syntax—it is about turning computational concepts into
            practical, measurable solutions that solve real-world problems.
          </p>
        </div>

        {/* 3 Visual Pillars (01 BUILD, 02 EXPLORE, 03 IMPROVE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.index}
                className={`relative group p-8 rounded-2xl bg-slate-900/60 border ${card.borderColor} hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar: Editorial Index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {card.index}. Pillar
                    </span>
                    <div className={`p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 ${card.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white tracking-wide mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400/90 mb-4">{card.subtitle}</p>

                  {/* Narrative Body */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Practical Domains list */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-2">Applied Areas</div>
                  <ul className="space-y-1.5">
                    {card.areas.map((area, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/70" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote & Academic Context Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-slate-200 font-medium">Academic Context · Full Stack Development</p>
              <p className="text-xs text-slate-400">Assignment Profile for Semester Evaluation & Professional Practice</p>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            CMR University · Bengaluru
          </div>
        </div>
      </div>
    </section>
  );
};
