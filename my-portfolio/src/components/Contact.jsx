import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

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