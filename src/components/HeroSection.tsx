
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
            <source src="/video/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-secondary-900/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-content text-white" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/90 backdrop-blur-sm">
                  🚀 Next-Generation Technology
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Next-gen digital <br />
                <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                  services
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-white/80">
                Let's together{' '}
                <span className="relative">
                  <span className="text-accent-400 font-semibold">{currentText}</span>
                  <span className="text-accent-400 animate-pulse ml-1">|</span>
                </span>{' '}
                in digital age.
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/70 max-w-2xl leading-relaxed">
                Transform your business with cutting-edge technology solutions that drive innovation, boost productivity, and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-accent-500 to-accent-400 text-white rounded-2xl shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 hover:-translate-y-1 transform">
                  Explore Solutions
                  <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white/10 text-white border border-white/20 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Growth Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  ⭐ Growth Solutions
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary-900 leading-tight">
                Driving Growth for Businesses of{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  All-sizes
                </span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed">
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
                    className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-500/25' 
                        : 'bg-white border border-secondary-200 text-secondary-700 hover:border-primary-300 hover:text-primary-600 hover:shadow-md'
                    }`}
                  >
                    <span className={`transition-colors ${activeTab === tab.id ? 'text-white' : 'text-secondary-500 group-hover:text-primary-500'}`}>
                      {tab.icon}
                    </span>
                    {tab.id}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-secondary-100" data-aos="fade-up">
                <h4 className="text-2xl font-bold mb-4 text-secondary-900">{tabData[activeTab].title}</h4>
                <p className="text-secondary-600 mb-6 leading-relaxed">{tabData[activeTab].description}</p>
                
                <div className="mb-8">
                  {tabData[activeTab].services.map((service, index) => (
                    <div key={index} className="flex items-center mb-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <CheckCircle className="text-primary-500" size={16} />
                      </div>
                      <span className="text-secondary-800 font-medium group-hover:text-primary-600 transition-colors">{service}</span>
                    </div>
                  ))}
                </div>

                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  Get Details 
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="relative">
                {/* Main Image */}
                <div className="relative">
                  <img 
                    src={tabData[activeTab].mainImage} 
                    alt="Professional with laptop" 
                    className="w-full rounded-3xl shadow-2xl object-cover h-96"
                  />
                  
                  {/* Background Graphics */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/10 rounded-3xl -translate-x-4 -translate-y-4 -z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 to-primary-500/20 rounded-3xl translate-x-4 translate-y-4 -z-20"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6">
                  <div className="bg-white rounded-2xl shadow-xl p-4 w-24 h-24 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">💡</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 translate-x-6 -translate-y-6">
                  <div className="bg-white rounded-2xl shadow-xl p-4 w-20 h-20">
                    <div className="w-full h-full bg-gradient-to-br from-accent-500 to-accent-400 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⚡</span>
                    </div>
                  </div>
                </div>

                {/* Stats Bubble */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-white rounded-2xl shadow-xl px-8 py-4 flex items-center gap-4 border border-secondary-100">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
                    <div>
                      <span className="text-secondary-900 font-bold text-lg">Scale With Advanced Tech</span>
                      <div className="text-secondary-500 text-sm">500+ Projects Delivered</div>
                    </div>
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
