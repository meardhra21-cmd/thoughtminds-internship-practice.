import React from 'react';
import { Cpu, Terminal, Database, ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section style={styles.heroContainer}>
      {/* Navigation Links inside Hero for layout support */}
      <nav style={styles.navLinks}>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#skills" style={styles.navLink}>Skills</a>
        <a href="#experience" style={styles.navLink}>Experience</a>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>

      <div style={styles.contentWrapper}>
        {/* Left Side: Text Content */}
        <div style={styles.leftColumn}>
          <div style={styles.badge}>
            <Cpu size={16} color="#64ffda" />
            <span style={styles.badgeText}>NEXT-GEN AI & DATA SCIENCE</span>
          </div>
          
          <h1 style={styles.mainHeading}>
            Hi, I'm <span style={styles.highlightText}>Ardhra T S</span>
          </h1>
          
          <p style={styles.subHeading}>Aspiring Data Scientist & B.Tech CSE Student</p>
          
          <p style={styles.description}>
            "I am a first-year B.Tech Computer Science student with a growing passion for Data Science and Artificial Intelligence. 
            I enjoy exploring data, discovering meaningful patterns, and building projects that solve real-world problems through technology."
          </p>

          <div style={styles.buttonContainer}>
            <a href="#projects" style={styles.primaryButton}>
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" style={styles.secondaryButton}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Image with custom styled borders */}
        <div style={styles.rightColumn}>
          <div style={styles.imageFrame}>
            <img 
              src="/src/assets/hero.png" 
              alt="Ardhra T S" 
              style={styles.profileImage}
              onError={(e) => {
                // Fallback in case path varies
                e.target.src = "assets/hero.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline styles for easy styling without needing extra configuration files
const styles = {
  heroContainer: {
    backgroundColor: '#0a192f', // Dark cyber-blue background
    color: '#ccd6f6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
  },
  navLinks: {
    display: 'flex',
    gap: '25px',
    marginBottom: '60px',
  },
  navLink: {
    color: '#8892b0',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'color 0.3s ease',
    fontWeight: '500',
  },
  contentWrapper: {
    display: 'flex',
    maxWidth: '1100px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap', // Responsive behavior for smaller screens
  },
  leftColumn: {
    flex: '1',
    minWidth: '300px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    padding: '6px 16px',
    borderRadius: '20px',
    border: '1px solid rgba(100, 255, 218, 0.2)',
    marginBottom: '20px',
  },
  badgeText: {
    color: '#64ffda',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1px',
  },
  mainHeading: {
    fontSize: '3.5rem',
    margin: '0 0 10px 0',
    color: '#e6f1ff',
    fontWeight: '700',
  },
  highlightText: {
    color: '#64ffda', // Electric cyan highlight
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#8892b0',
    margin: '0 0 25px 0',
    fontWeight: '500',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#8892b0',
    maxWidth: '540px',
    marginBottom: '35px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '12px 24px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'transform 0.2s',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#64ffda',
    border: '1px solid #64ffda',
    padding: '12px 24px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background 0.3s',
  },
  rightColumn: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    minWidth: '300px',
  },
  imageFrame: {
    position: 'relative',
    borderRadius: '12px',
    padding: '10px',
    border: '2px solid rgba(100, 255, 218, 0.3)',
  },
  profileImage: {
    width: '320px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
    display: 'block',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
};

export default Hero;