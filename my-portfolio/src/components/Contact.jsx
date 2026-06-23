import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>
        <span>04.</span> Get In Touch
      </h2>
      
      <p>
        I am currently looking for new opportunities, internships, or other roles.
        Feel free to drop a message!
      </p>

      {/* This renders your icons on the screen so you can see they work! */}
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <Mail size={24} />
        <Phone size={24} />
        <MapPin size={24} />
        <Linkedin size={24} />
        <Globe size={24} />
      </div>
    </section>
  );
}