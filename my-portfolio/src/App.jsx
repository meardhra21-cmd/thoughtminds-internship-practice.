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

const styles = {
  appWrapper: {
    backgroundColor: '#0a192f',
    minHeight: '100vh',
    color: '#8892b0',
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(10, 25, 47, 0.85)',
    borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px 20px',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoText: {
    color: '#64ffda',
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#8892b0',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s',
  },
  mainContent: {
    paddingTop: '20px',
  }
};