import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Heroservice from '../components/Heroservice';

// Bootstrap JS removed - using Tailwind CSS

const Home = () => {
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
      <main>
        <HeroSection />
        <Heroservice />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
