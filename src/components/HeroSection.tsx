
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Briefcase, Building, Home } from 'lucide-react';

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('Agencies');

  const words = ['Thrive', 'Grow', 'Innovate', 'Succeed', 'Excel'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  const tabData = {
    Startups: {
      title: "Startups",
      description: "Empowering startups with scalable technology solutions to accelerate growth and market success.",
      services: [
        "MVP Development",
        "Product Strategy",
        "Technical Consulting",
        "Growth Hacking"
      ],
      mainImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    Enterprises: {
      title: "Enterprises",
      description: "Transforming enterprise operations with cutting-edge digital solutions and strategic technology implementation.",
      services: [
        "Digital Transformation",
        "Legacy System Modernization",
        "Enterprise Integration",
        "Cloud Migration"
      ],
      mainImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    Agencies: {
      title: "Agencies",
      description: "Partnering with agencies to expand their services, attract bigger clients, and deliver high-quality work in less time.",
      services: [
        "White-label Development",
        "Dedicated Software Teams",
        "Outsourced Software Development",
        "Offshore Development Center"
      ],
      mainImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  };

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      // Deleting effect
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deletingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Typing effect
      if (currentText === currentWord) {
        // Word is complete, pause then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        
        return () => clearTimeout(timeout);
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <>
      <section 
        id="home" 
        className="hero-section relative h-screen flex items-center overflow-hidden"
        aria-label="Hero section with video background"
      >
        {/* Video Background */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/src/video/home-video.mp4" type="video/mp4" />
            <source src="/src/video/home-video.webm" type="video/webm" />
            <source src="/src/video/home-video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text readability */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-content text-white" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Next-gen digital services
              </h1>
              <h2 className="text-2xl lg:text-3xl mb-6 text-gray-200 opacity-90">
                Let's together <span className="text-yellow-400">{currentText}</span>
                <span className="text-yellow-400 animate-pulse">|</span> in digital age.
              </h2>
              <p className="text-xl mb-8 opacity-75 max-w-2xl">
                Transform your business with cutting-edge technology solutions that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                  aria-label="Explore Solutions - Opens in new window"
                >
                  Explore Solutions
                  <ArrowRight size={24} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Growth Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Driving Growth for Businesses of All-sizes
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Led by experts and backed by tech, we are helping businesses hit their revenue goals in ever-evolving digital landscape.
              </p>

              {/* Interactive Tabs */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { id: 'Startups', icon: <Briefcase size={20} /> },
                  { id: 'Enterprises', icon: <Building size={20} /> },
                  { id: 'Agencies', icon: <Home size={20} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`btn inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'btn-primary' 
                        : 'btn-outline-secondary'
                    }`}
                  >
                    {tab.icon}
                    {tab.id}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="hero-card" data-aos="fade-up">
                <h4 className="text-2xl font-bold mb-4 text-gray-900">{tabData[activeTab].title}</h4>
                <p className="text-gray-600 mb-6">{tabData[activeTab].description}</p>
                
                <div className="mb-6">
                  {tabData[activeTab].services.map((service, index) => (
                    <div key={index} className="flex items-center mb-3">
                      <CheckCircle className="text-primary-500 mr-3" size={20} />
                      <span className="text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>

                <a href="#" className="text-primary-500 font-bold inline-flex items-center gap-2 hover:text-primary-600 transition-colors">
                  Get Details <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="relative">
                {/* Main Image */}
                <div className="relative">
                  <img 
                    src={tabData[activeTab].mainImage} 
                    alt="Professional with laptop" 
                    className="w-full rounded-2xl shadow-large"
                  />
                  
                  {/* Background Graphics */}
                  <div className="absolute inset-0 bg-primary-500/10 rounded-2xl -translate-x-2 -translate-y-2 -z-10"></div>
                </div>

                {/* Overlay Images */}
                <div className="absolute top-0 left-0 -translate-x-5 -translate-y-5">
                  <img 
                    src={tabData[activeTab].overlayImage} 
                    alt="Developer" 
                    className="w-32 h-32 rounded-xl shadow-large object-cover"
                  />
                </div>

                <div className="absolute top-0 right-0 translate-x-5 -translate-y-5">
                  <div className="bg-white rounded-full shadow-large p-3 w-20 h-20">
                    <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                  </div>
                </div>

                {/* Text Bubble */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white rounded-full shadow-large px-6 py-3 flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-900 font-bold">Scale With Advanced Tech</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
