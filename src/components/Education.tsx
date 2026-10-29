import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#050814] relative overflow-hidden border-t border-slate-900">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Academic Journey.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Foundational computer science education and academic milestones. Structured timeline with verified performance records.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 space-y-12">
          {EDUCATION_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  item.current
                    ? 'border-cyan-400 bg-slate-950 shadow-md shadow-cyan-500/50'
                    : 'border-slate-600 bg-slate-950'
                }`}
              />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-lg shadow-black/30">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {item.institution}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Score Pill / Badge */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-block px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-500/30">
                      <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300 tabular-nums">
                        {item.score}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">{item.scoreLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="pt-4 border-t border-slate-800/60">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-2">Key Highlights</div>
                  <ul className="space-y-2">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
