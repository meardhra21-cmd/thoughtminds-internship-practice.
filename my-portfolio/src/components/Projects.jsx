import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-900/60">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-cyan-400 font-mono">04.</span> Featured Innovation
      </h2>
      
      <div className="grid gap-8">
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 tracking-tight">Echeo</h3>
                <p className="text-xs font-mono text-cyan-400 italic mt-0.5">"When students don't ask, Echeo listens."</p>
              </div>
              <div className="flex gap-3 text-xs font-mono text-slate-500">
                <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">GitHub: Coming Soon</span>
                <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">Demo: N/A</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              An AI-powered academic support platform designed to identify hidden learning gaps among students. It utilizes OCR, AI-driven analysis, and personalized learning support to help students overcome language barriers, missed classes, and hesitation to ask questions.
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-500 tracking-wider">Key Architecture Attributes</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">⚡ OCR-based note digitization</li>
                <li className="flex items-center gap-2">🧠 AI learning gap detection</li>
                <li className="flex items-center gap-2">🎯 Targeted micro-explanations</li>
                <li className="flex items-center gap-2">🔒 Anonymous doubt support mechanisms</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {["Python", "FastAPI", "Tesseract OCR", "NLP", "HTML", "CSS", "MySQL", "PostgreSQL"].map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}