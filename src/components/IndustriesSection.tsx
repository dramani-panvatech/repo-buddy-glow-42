import React from 'react';
import { Heart, DollarSign, TrendingUp, GraduationCap, Smartphone } from 'lucide-react';

const industries = [
  {
    title: "Healthcare",
    description: "Let us show you how our experience.",
    icon: <Heart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Banking",
    description: "Let us show you how our experience.",
    icon: <DollarSign className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Capital markets",
    description: "Let us show you how our experience.",
    icon: <TrendingUp className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Higher education",
    description: "Let us show you how our experience.",
    icon: <GraduationCap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fintech",
    description: "Let us show you how our experience.",
    icon: <Smartphone className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const caseStudies = [
  {
    title: "Cloud migration saves money for health insurer",
    description: "Streamlined operations and reduced costs by 40% through strategic cloud adoption.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Healthcare"
  },
  {
    title: "Remote support center for semiconductor provider",
    description: "Enhanced global support capabilities with 24/7 remote assistance infrastructure.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology"
  },
  {
    title: "Subscription licensing unlocks spike in IT orders",
    description: "Flexible licensing model resulted in 300% increase in software adoption.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Software"
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/90 backdrop-blur-sm">
              🏭 INDUSTRIES WE SERVE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Managed IT services customized <br />
            <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              for your industry
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our vertical solutions expertise allows your business to streamline workflow, and increase productivity. No matter the business, Panva Technology has you covered with industry compliant solutions, customized to your company's specific needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20" data-aos="fade-up" data-aos-delay="200">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center h-64 flex flex-col justify-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 backdrop-blur-sm border border-white/20 text-accent-400 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent-400/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium border border-accent-500/30">
              📊 CASE STUDIES
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
              We work with global brands
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-500/20"
              >
                {/* Background Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-medium border border-accent-500/30">
                      {study.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-accent-300 transition-colors leading-tight">
                    {study.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <button className="text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors group-hover:underline">
                    Read Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;