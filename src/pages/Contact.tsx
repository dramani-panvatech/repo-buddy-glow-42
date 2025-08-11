import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Bootstrap JS removed - using Tailwind CSS

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="position-relative">
      <Header />
      <main style={{ marginTop: '76px' }}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
