import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { MapPin, Navigation, AlertTriangle, CheckCircle, Code, FileText, BarChart3, Calendar, Activity, Volume2, Droplets, Car } from 'lucide-react';

interface ProjectVisualProps {
  type: ProjectItem['visualType'];
  title: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, title }) => {
  // RoadWise Visual: Road Damage Detection & GPS Mapping
  if (type === 'roadwise') {
    return (
      <div className="relative w-full h-56 sm:h-72 rounded-xl bg-slate-950 border border-cyan-500/30 overflow-hidden flex flex-col justify-between p-4 group">
        {/* Subtle asphalt grid simulation with road markings */}
        <div className="absolute inset-0 bg-[#070b14] opacity-90" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Road lane divider lines */}
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 border-r-2 border-dashed border-cyan-500/40" />

        {/* Top Telemetry Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>YOLOv8 Active · 30 FPS</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>12.9716° N, 77.5946° E</span>
          </div>
        </div>

        {/* Simulated Road Damage Bounding Boxes */}
        <div className="relative z-10 my-auto flex items-center justify-around px-4">
          {/* Pothole bounding box */}
          <div className="relative p-2.5 rounded border-2 border-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/10 backdrop-blur-xs">
            <div className="absolute -top-4 left-0 px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[9px] font-bold">
              POTHOLE 94.6%
            </div>
            <div className="w-20 h-10 rounded-full border border-dashed border-emerald-400/80 bg-slate-900/60 flex items-center justify-center">
              <span className="text-[9px] font-mono text-emerald-300">Hazard #01</span>
            </div>
          </div>

          {/* Crack bounding box */}
          <div className="relative p-2.5 rounded border-2 border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10 backdrop-blur-xs">
            <div className="absolute -top-4 left-0 px-1.5 py-0.5 rounded bg-cyan-400 text-slate-950 font-mono text-[9px] font-bold">
              LONGITUDINAL CRACK 88.2%
            </div>
            <div className="w-28 h-8 rounded border border-dashed border-cyan-400/80 bg-slate-900/60 flex items-center justify-center">
              <span className="text-[9px] font-mono text-cyan-300">Hazard #02</span>
            </div>
          </div>
        </div>

        {/* Bottom Status & Mapping Navigation Layer */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
          <div className="flex items-center gap-1 text-cyan-400">
            <Navigation className="w-3.5 h-3.5" />
            <span>Spatial Geo-Tag Layer</span>
          </div>
          <span className="text-amber-400 font-medium">Route Avoidance: In Research</span>
        </div>
      </div>
    );
  }

  // Smart Code Quality Analyzer Visual
  if (type === 'code_analyzer') {
    return (
      <div className="relative w-full h-52 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden p-3.5 font-mono text-xs flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px]">analyzer_engine.py</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-[10px] text-emerald-300 font-bold">
            Grade: A (89/100)
          </div>
        </div>

        <div className="my-2 space-y-1 text-slate-400 text-[11px]">
          <div className="text-purple-400">class <span className="text-yellow-300">ASTAnalyzer</span>(ast.NodeVisitor):</div>
          <div className="pl-4 text-slate-300">def <span className="text-blue-400">visit_FunctionDef</span>(self, node):</div>
          <div className="pl-8 text-slate-400"># Detect unused variables & branch complexity</div>
          <div className="pl-8 text-cyan-300">self.calculate_maintainability(node)</div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <span>Unused Variables: <strong className="text-emerald-400">0</strong></span>
          <span>Cyclomatic Complexity: <strong className="text-cyan-400">Low (3.2)</strong></span>
          <span>FastAPI Service</span>
        </div>
      </div>
    );
  }

  // AI Resume Analyzer Visual
  if (type === 'resume_ai') {
    return (
      <div className="relative w-full h-52 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden p-3.5 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
            <FileText className="w-3.5 h-3.5 text-violet-400" />
            <span>candidate_resume.pdf</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">PyPDF2 Parser</span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono">
            <div className="text-slate-400 mb-1">Extracted Languages</div>
            <div className="text-cyan-300 font-semibold">Python · Java · C++</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono">
            <div className="text-slate-400 mb-1">Frameworks & Tools</div>
            <div className="text-violet-300 font-semibold">React · FastAPI · Git</div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Keywords Matched: <strong className="text-emerald-400">28</strong></span>
          <span className="text-violet-400">Streamlit UI</span>
        </div>
      </div>
    );
  }

  // SentimentScope Visual
  if (type === 'sentimentscope') {
    return (
      <div className="relative w-full h-52 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden p-3.5 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>SentimentScope</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
            Positive (0.74)
          </span>
        </div>

        <div className="my-2 space-y-2">
          <div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
              <span>Polarity Score</span>
              <span className="text-cyan-300">+0.74 / +1.0</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full" style={{ width: '87%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
              <span>Subjectivity</span>
              <span className="text-violet-300">0.32 (Factual)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-violet-400 rounded-full" style={{ width: '32%' }} />
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Pandas DataFrame Log</span>
          <span className="text-cyan-400">CSV Export Ready</span>
        </div>
      </div>
    );
  }

  // EventHub Visual
  if (type === 'eventhub') {
    return (
      <div className="relative w-full h-44 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden p-3 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>Event Registration System</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">MySQL Linked</span>
        </div>
        <div className="my-auto p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
          <div className="font-semibold text-slate-200">Tech Symposium 2025</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Attendee Check-in & Pass Generation</div>
        </div>
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>React + Vite</span>
          <span>Express Backend</span>
        </div>
      </div>
    );
  }

  // BeingFit Visual
  if (type === 'beingfit') {
    return (
      <div className="relative w-full h-44 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden p-3 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>BeingFit Platform</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Responsive UI</span>
        </div>
        <div className="my-auto grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <div className="text-slate-400 text-[10px]">Workout Hub</div>
            <div className="text-emerald-400 font-bold">12 Plans</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <div className="text-slate-400 text-[10px]">BMI Calculator</div>
            <div className="text-cyan-400 font-bold">Real-Time</div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 text-right">
          Tailwind CSS Design
        </div>
      </div>
    );
  }

  // Fallback for compact projects
  return (
    <div className="w-full h-36 rounded-xl bg-slate-950 border border-slate-800 p-3 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
        <span className="text-xs font-mono text-cyan-400">{title}</span>
        {type === 'plant_water' ? <Droplets className="w-3.5 h-3.5 text-cyan-400" /> : type === 'vehicle_rental' ? <Car className="w-3.5 h-3.5 text-blue-400" /> : <Volume2 className="w-3.5 h-3.5 text-purple-400" />}
      </div>
      <div className="my-auto text-[11px] text-slate-400 font-mono">
        {type === 'plant_water' && 'Arduino Microcontroller · Soil Sensor · 5V Relay Actuator'}
        {type === 'vehicle_rental' && 'Java OOP Hierarchy · Polymorphic Billing Engine'}
        {type === 'language_voice' && 'LangDetect Model · Google Text-to-Speech Playback'}
      </div>
      <div className="text-[10px] font-mono text-slate-500 text-right">Verified Academic Source</div>
    </div>
  );
};
