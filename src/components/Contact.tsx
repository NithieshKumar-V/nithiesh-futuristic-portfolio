import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, FileText, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { validateContactForm } from '../utils/portfolioLogic';
import { ContactFormData } from '../types/portfolio';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Honest submission handling: generate a real pre-filled mailto trigger
    // and record the local state confirmation
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    setIsSubmitted(true);

    // Trigger user mail client
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Copy & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Let's Build Something Meaningful.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
                Have an idea, an internship opportunity, or a collaborative software project?
                I am actively exploring opportunities and would love to connect.
              </p>

              {/* Direct Channels */}
              <div className="mt-8 space-y-4">
                {/* Email card */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Primary Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">LinkedIn Profile</div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        nithiesh-kumar-v
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </a>

                {/* GitHub Card */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">GitHub Profile</div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        NithieshKumar-V
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </a>
              </div>
            </div>

            {/* Resume Callout in Contact Section (as requested) */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Looking for the formal resume?</div>
                <div className="text-[11px] text-slate-400">Download formatted academic & technical profile</div>
              </div>
              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/50 hover:bg-cyan-950/80 border border-cyan-500/30 hover:border-cyan-400 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                All inquiries generate a formatted correspondence directly to{' '}
                <span className="text-cyan-300 font-mono">{PERSONAL_INFO.email}</span>.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Prepared & Launched</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your default mail program was triggered with your pre-filled inquiry. If your email client did
                    not open automatically, you can write directly to{' '}
                    <strong className="text-cyan-300">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Alex Johnson"
                        className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Software Internship Inquiry / RoadWise Discussion"
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.subject && <p className="mt-1 text-[11px] text-red-400">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.99] flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Nithiesh</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
