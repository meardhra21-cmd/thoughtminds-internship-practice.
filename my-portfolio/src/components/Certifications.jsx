import React from "react";
import { Award } from "lucide-react";

export default function Certifications() {
  const certs = [
    { title: "Unlock the Power of Data Science with AI!", issuer: "EduBerg India", year: "2025" },
    { title: "Digital Edge 101", issuer: "FutureSkills Prime / NASSCOM", year: "2026" },
    { title: "Web Development Workshop", issuer: "InovMedia", year: "2025" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-900/60">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
        <Award className="text-purple-400 w-7 h-7" /> Credentials & Micro-Degrees
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <div key={i} className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/60 flex flex-col justify-between hover:border-slate-700/40 transition-colors">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-slate-200 line-clamp-2 text-sm sm:text-base">{cert.title}</h3>
              <p className="text-xs text-slate-400">{cert.issuer}</p>
            </div>
            <span className="text-[11px] font-mono text-slate-500 mt-4 inline-block">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}