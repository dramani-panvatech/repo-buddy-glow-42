import React from 'react';

const services = [
  {
    title: "Managed IT services",
    description: "24/7 maintenance and monitoring that keeps your computers, servers, and systems up and running.",
    icon: "🧑‍💻⚙️", // Replace with SVG or image
    linkText: "Stay up and running",
  },
  {
    title: "Backup and recovery",
    description: "Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.",
    icon: "🔁", // Replace with SVG or image
    linkText: "Defend your data",
  },
  {
    title: "Cyber security",
    description: "Protect your business from malware, hackers, viruses and the most commonly security threats.",
    icon: "🔒", // Replace with SVG or image
    linkText: "Protect your business",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-secondary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              💼 OUR SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            Stay Up, Stay Running,{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Stay Protected
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border border-secondary-100 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  {service.linkText}
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-accent-500/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent-500/10 to-primary-500/5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white rounded-2xl shadow-xl border border-secondary-100">
            <div className="text-center sm:text-left">
              <p className="text-lg text-secondary-600 mb-2">
                IT services built specifically for your business.
              </p>
            </div>
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
              Find your solution
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
