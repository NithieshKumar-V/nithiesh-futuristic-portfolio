import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Brain, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Programming')) return Code2;
    if (categoryName.includes('Frontend')) return Layout;
    if (categoryName.includes('Backend')) return Server;
    if (categoryName.includes('Databases')) return Database;
    if (categoryName.includes('AI')) return Brain;
    if (categoryName.includes('Tools')) return Wrench;
    return Cpu;
  };

  return (
    <section id="skills" className="py-24 bg-[#050814] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technologies & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Technical Arsenal.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Technologies and tools I work with across software engineering, full-stack web architectures,
            machine learning workflows, and embedded prototyping. Honest representations focused on practical implementation.
          </p>
        </div>

        {/* Categorized Technical Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);
            const isHovered = activeCategoryIndex === idx;

            return (
              <div
                key={cat.category}
                onMouseEnter={() => setActiveCategoryIndex(idx)}
                onMouseLeave={() => setActiveCategoryIndex(null)}
                className={`p-6 rounded-2xl bg-slate-900/60 border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-cyan-400/50 bg-slate-900/90 shadow-xl shadow-cyan-500/5 -translate-y-0.5'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/60 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {cat.skills.length} core tools
                      </span>
                    </div>
                  </div>

                  {/* Category Scope Description */}
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List with unboxed metadata discipline */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between p-2 rounded-lg bg-slate-950/40 hover:bg-slate-800/50 border border-slate-800/40 hover:border-slate-700/70 transition-colors"
                      >
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Production & Academic Labs</span>
                  <span className="text-cyan-400/80">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competency Note */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          Focusing on conceptual depth and continuous practical application rather than static arbitrary percentage bars.
        </div>
      </div>
    </section>
  );
};
