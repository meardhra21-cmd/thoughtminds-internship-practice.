import React from "react";
import { Terminal } from "lucide-react";

// Section Component Imports
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 scroll-smooth">
      
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Global Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F19]/70 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r content-box from-cyan-400 to-purple-400">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>ARDHRA T S</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Structured Portfolio Modules Grid */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/40 text-xs text-slate-500 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Ardhra T S. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/ardhra-ts-095a07380" className="hover:text-slate-300">LinkedIn</a>
            <a href="https://github.com/meardhra21-cmd" className="hover:text-slate-300">GitHub</a>
            <a href="mailto:ardhrats.007@gmail.com" className="hover:text-slate-300">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
