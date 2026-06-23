import React from "react";
import { Code, Globe, Database, Layers } from "lucide-react";

export default function Skills() {
  const skills = {
    languages: ["Python", "C"],
    frontend: ["HTML5 (Basics)", "CSS3 (Basics)", "React (Basics)"],
    backend: ["Node.js (Learning)"],
    tools: ["VS Code", "Git", "GitHub", "Tesseract OCR"],
    soft: ["Problem Solving", "Quick Learner", "Adaptable", "Self-Driven", "Team Collaboration", "Communication"]
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-900/60">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-cyan-400 font-mono">02.</span> Technical Arsenal
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <div className="flex items-center gap-3 text-cyan-400">
            <Code className="w-5 h-5" />
            <h3 className="font-semibold text-slate-200">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map(s => <span key={s} className="px-2 py-1 text-xs font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">{s}</span>)}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <div className="flex items-center gap-3 text-purple-400">
            <Globe className="w-5 h-5" />
            <h3 className="font-semibold text-slate-200">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map(s => <span key={s} className="px-2 py-1 text-xs font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">{s}</span>)}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <div className="flex items-center gap-3 text-indigo-400">
            <Database className="w-5 h-5" />
            <h3 className="font-semibold text-slate-200">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map(s => <span key={s} className="px-2 py-1 text-xs font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">{s}</span>)}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <div className="flex items-center gap-3 text-emerald-400">
            <Layers className="w-5 h-5" />
            <h3 className="font-semibold text-slate-200">Tools & Core</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map(s => <span key={s} className="px-2 py-1 text-xs font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">{s}</span>)}
          </div>
        </div>
      </div>

      <div className="mt-8 p-5 rounded-xl bg-slate-900/20 border border-slate-800/50">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Soft Skills & Competencies</h4>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map(s => <span key={s} className="px-3 py-1 text-xs rounded-full bg-slate-800/40 text-slate-300 border border-slate-700/40">{s}</span>)}
        </div>
      </div>
    </section>
  );
}