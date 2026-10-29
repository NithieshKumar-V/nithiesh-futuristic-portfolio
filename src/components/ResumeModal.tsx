import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS_DATA, SKILL_CATEGORIES, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { generateResumeDocumentText } from '../utils/portfolioLogic';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadFile = () => {
    const resumeText = generateResumeDocumentText();
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Nithiesh_Kumar_V_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateResumeDocumentText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-4xl my-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto text-left flex flex-col justify-between">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white">
                Nithiesh Kumar V — Professional Resume
              </h2>
              <p className="text-xs text-slate-400">Computer Science Engineering · CMR University</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Copy resume text to clipboard"
              aria-label="Copy resume text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Print resume"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet (Styled like a modern clean CV) */}
        <div className="bg-[#050814] rounded-xl p-6 sm:p-10 border border-slate-800 text-slate-200 font-sans text-xs sm:text-sm leading-relaxed space-y-8 select-text shadow-inner">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                Nithiesh Kumar V
              </h1>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                Software Developer | Computer Science Engineering Student
              </p>
              <p className="text-xs text-slate-400 mt-0.5">CMR University, Bengaluru</p>
            </div>
            <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 hover:underline">{PERSONAL_INFO.email}</a></div>
              <div>GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">github.com/NithieshKumar-V</a></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">linkedin.com/in/nithiesh-kumar-v</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 pb-1 border-b border-slate-800">
              Professional Summary
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Passionate Computer Science Engineering student focused on full-stack web architectures, applied
              machine learning, and computer vision. Strong problem-solving background grounded in hands-on projects
              ranging from YOLO-based road damage mapping (RoadWise) to static code analyzers and relational database
              systems. Enthusiastic about engineering practical, intelligent software solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
              Education
            </h3>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
                  <div>
                    <div className="font-bold text-white text-sm">{edu.degree}</div>
                    <div className="text-slate-400 text-xs">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-right sm:text-right text-xs font-mono">
                    <span className="text-cyan-300 font-bold">{edu.score}</span> · <span className="text-slate-400">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-slate-300">Languages:</strong> Python, Java, C, C++, JavaScript (ES6+)
              </div>
              <div>
                <strong className="text-slate-300">Frontend:</strong> HTML5, CSS3, Tailwind CSS, React, Vite
              </div>
              <div>
                <strong className="text-slate-300">Backend & APIs:</strong> Node.js, Express.js, FastAPI, Flask
              </div>
              <div>
                <strong className="text-slate-300">Databases:</strong> MySQL, MongoDB
              </div>
              <div>
                <strong className="text-slate-300">AI & Computer Vision:</strong> YOLOv8, NLP, TextBlob, Pandas, Python AST
              </div>
              <div>
                <strong className="text-slate-300">Tools & IoT:</strong> Git, GitHub, npm, Vercel, Arduino, Sensors
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
              Key Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS_DATA.slice(0, 4).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="font-bold text-white text-xs sm:text-sm">
                      {proj.title}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400">
                      {proj.technologies.slice(0, 4).join(' · ')}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 pb-1 border-b border-slate-800">
              Certifications & Continuous Learning
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li>
                <strong className="text-white">Software Engineering and Agile Lifecycle Management</strong> — OnWingspan (Infosys Springboard), Sep 2025
              </li>
              <li>
                <strong className="text-white">Python Programming & Software Foundations</strong> — Udemy
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Resume (.txt)</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print to PDF</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
