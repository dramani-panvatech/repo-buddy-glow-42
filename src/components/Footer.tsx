
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ExternalLink, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://www.panvatech.com/wp-content/uploads/2018/08/Panva_final.svg" 
                  alt="Panva Technology" 
                  className="h-10 mb-4 filter brightness-0 invert"
                  loading="lazy"
                />
                <p className="text-secondary-300 leading-relaxed mb-6">
                  Driving innovation forward with cutting-edge technology solutions and exceptional service.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Phone size={16} className="text-primary-400" />
                  <a 
                    href="tel:1-800-916-2459" 
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    1-800-916-2459
                  </a>
                </div>
              </div>
            </div>

            {/* IT Solutions */}
            <div>
              <h6 className="font-semibold text-lg mb-6 text-white">IT Solutions</h6>
              <nav className="space-y-3">
                <a 
                  href="/it-solutions" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  All IT Solutions
                </a>
                <a 
                  href="/it-solutions#healthcare" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Healthcare IT
                </a>
                <a 
                  href="/it-solutions#fintech" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Fintech Solutions
                </a>
                <a 
                  href="/it-solutions#ai-ml" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  AI & Machine Learning
                </a>
                <a 
                  href="/it-solutions#legal" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Legal Service Platform
                </a>
              </nav>
            </div>

            {/* UI IT Solutions */}
            <div>
              <h6 className="font-semibold text-lg mb-6 text-white">UI IT Solutions</h6>
              <nav className="space-y-3">
                <a 
                  href="/ui-services" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  UI/UX Services
                </a>
                <a 
                  href="/ui-services#web-design" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Web Design & Development
                </a>
                <a 
                  href="/ui-services#mobile-apps" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Mobile App Development
                </a>
                <a 
                  href="/ui-services#ui-ux-design" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  UI/UX Design
                </a>
                <a 
                  href="/ui-services#frontend-development" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Frontend Development
                </a>
                <a 
                  href="/ui-services#responsive-design" 
                  className="block text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Responsive Design
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h6 className="font-semibold text-lg mb-6 text-white">Contact Info</h6>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white mb-1">USA Office</div>
                    <address className="text-secondary-300 text-sm not-italic">
                      14269 Danielson St, Suite 400<br />
                      Poway, CA 92064
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white mb-1">India Office</div>
                    <address className="text-secondary-300 text-sm not-italic">
                      21/SF, Sitaram Super Market<br />
                      Chhani Road, Vadodara-391740
                    </address>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-primary-400" />
                  <a 
                    href="mailto:support@panvatech.com" 
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    support@panvatech.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-secondary-700 my-12"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-300 text-sm">
              &copy; {new Date().getFullYear()} Panva Technology. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="flex space-x-6 text-sm">
                <a 
                  href="#privacy" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#terms" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a 
                  href="#careers" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
