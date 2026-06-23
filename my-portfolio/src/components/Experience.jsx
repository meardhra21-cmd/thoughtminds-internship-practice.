import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-900/60">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-cyan-400 font-mono">03.</span> Professional Footprint
      </h2>
      <div className="max-w-3xl p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-900/40 border border-slate-800/80 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <Briefcase className="w-24 h-24 text-cyan-400" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Industry Experience</span>
            <h3 className="text-xl font-bold text-slate-100">Student Intern</h3>
            <p className="text-sm text-purple-400 font-medium">ThoughtMinds</p>
          </div>
          <span className="self-start sm:self-center text-xs font-mono px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
            2026 – Present
          </span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Actively engaged in collaborative training modules exploring machine learning paradigms, data workflow configurations, and transitioning academic programming methodologies into practical, industrial applications.
        </p>
      </div>
    </section>
  );
}