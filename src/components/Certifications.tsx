import React from 'react';
import { Award, CheckCircle, ShieldCheck, BookMarked } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Continuous Upskilling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learning & Certifications.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Verified coursework, industry certifications, and structured training completing my formal academic curriculum.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{cert.date}</span>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-1">{cert.issuer}</div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-4">
                  {cert.title}
                </h3>

                {cert.credentialNote && (
                  <div className="inline-block px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-emerald-300 mb-6">
                    {cert.credentialNote}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800/60">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-2">Covered Competencies</div>
                  <ul className="space-y-1.5">
                    {cert.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/50 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Verification State</span>
                <span className="text-cyan-400">Recorded</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
