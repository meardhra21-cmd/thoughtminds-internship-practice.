import React from 'react';
import { Terminal } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={styles.appWrapper}>
      {/* Global Navbar */}
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div style={styles.logoGroup}>
            <Terminal size={20} color="#64ffda" />
            <span style={styles.logoText}>ARDHRA T S</span>
          </div>
          <nav style={styles.navLinks}>
            <a href="#about" style={styles.link}>About</a>
            <a href="#skills" style={styles.link}>Skills</a>
            <a href="#experience" style={styles.link}>Experience</a>
            <a href="#projects" style={styles.link}>Projects</a>
            <a href="#contact" style={styles.link}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content Blueprint */}
      <main style={styles.mainContent}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}