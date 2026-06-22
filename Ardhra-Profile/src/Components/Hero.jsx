import React from "react";
import { Cpu, Terminal } from "lucide-react";
import profile from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 pt-20 pb-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-wider">
          <Cpu className="w-3.5 h-3.5 animate-pulse" /> NEXT-GEN AI & DATA SCIENCE
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Ardhra T S</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-slate-400">
          Aspiring Data Scientist & B.Tech CSE Student
        </p>
        <p className="text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed border-l-2 border-cyan-500/30 pl-4 italic bg-slate-900/30 py-2 rounded-r-lg">
          "I am a first-year B.Tech Computer Science student with a growing passion for Data Science and Artificial Intelligence. I enjoy exploring data, discovering meaningful patterns, and building projects that solve real-world problems through technology."
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800/80 transition-all text-sm font-semibold">
            Contact Me
          </a>
        </div>
      </div>
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 animate-pulse" />
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900">
          <img src={profile} alt="Ardhra T S" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}