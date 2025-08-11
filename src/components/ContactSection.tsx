
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Award, HelpCircle, Send, CheckCircle, Building2, Globe, MessageSquare, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-aos="fade-up">
            Get in Touch
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Ready to transform your business? Let's discuss your technology needs and discover how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="tel:1-800-916-2459" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              <Phone size={24} aria-hidden="true" />
              Call Us Now
            </a>
            <a 
              href="mailto:support@panvatech.com" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              <Mail size={24} aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We have offices in the USA and India to serve our global clients with local expertise and 24/7 support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* USA Office */}
            <div data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-blue-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center bg-blue-50 rounded-2xl w-16 h-16 mr-4">
                    <Building2 size={32} className="text-blue-600" aria-hidden="true" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">USA Office</h4>
                </div>
                <div className="mb-6">
                  <h6 className="text-lg font-bold text-blue-600 mb-2">Panva Technology LLC</h6>
                  <p className="text-gray-600 leading-relaxed">
                    14269 Danielson St, Suite 400<br />
                    Poway, CA 92064
                  </p>
                </div>
                <div className="space-y-3">
                  <a 
                    href="tel:1-800-916-2459" 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="Call us at 1-800-916-2459"
                  >
                    <Phone size={20} className="text-blue-600 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">1-800-916-2459</span>
                  </a>
                  <a 
                    href="mailto:support@panvatech.com" 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="Email us at support@panvatech.com"
                  >
                    <Mail size={20} className="text-blue-600 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">support@panvatech.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* India Office */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-green-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center bg-green-50 rounded-2xl w-16 h-16 mr-4">
                    <Globe size={32} className="text-green-600" aria-hidden="true" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">India Office</h4>
                </div>
                <div className="mb-6">
                  <h6 className="text-lg font-bold text-green-600 mb-2">Panva Technology Solutions Pvt Ltd.</h6>
                  <p className="text-gray-600 leading-relaxed">
                    21/SF, Sitaram Super Market<br />
                    Chhani Road, Vadodara-391740
                  </p>
                </div>
                <div className="space-y-3">
                  <a 
                    href="tel:+91-265-2760531" 
                    className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                    aria-label="Call us at +91 265-2760531"
                  >
                    <Phone size={20} className="text-green-600 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">+91 265-2760531</span>
                  </a>
                  <a 
                    href="mailto:info@panvatech.com" 
                    className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                    aria-label="Email us at info@panvatech.com"
                  >
                    <Mail size={20} className="text-green-600 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">info@panvatech.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Why Choose Us */}
            <div data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-1 h-full">
                <div className="flex items-center justify-center bg-blue-50 rounded-2xl w-20 h-20 mx-auto mb-6">
                  <Award size={40} className="text-blue-600" aria-hidden="true" />
                </div>
                <h5 className="text-xl font-bold mb-4 text-gray-900">Why Choose Us</h5>
                <ul className="text-left space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm">Industry-recognized expertise</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm">Proven track record</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm">Scalable solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm">Global delivery model</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Careers */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-1 h-full">
                <div className="flex items-center justify-center bg-purple-50 rounded-2xl w-20 h-20 mx-auto mb-6">
                  <Users size={40} className="text-purple-600" aria-hidden="true" />
                </div>
                <h5 className="text-xl font-bold mb-4 text-gray-900">Careers</h5>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join our team of innovative professionals and help shape the future of technology.
                </p>
                <button 
                  className="inline-flex items-center gap-2 px-6 py-3 text-primary-600 font-semibold border-2 border-primary-600 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label="View career opportunities"
                >
                  View Opportunities
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-1 h-full">
                <div className="flex items-center justify-center bg-orange-50 rounded-2xl w-20 h-20 mx-auto mb-6">
                  <HelpCircle size={40} className="text-orange-600" aria-hidden="true" />
                </div>
                <h5 className="text-xl font-bold mb-4 text-gray-900">FAQ</h5>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find answers to commonly asked questions about our services and solutions.
                </p>
                <button 
                  className="inline-flex items-center gap-2 px-6 py-3 text-orange-600 font-semibold border-2 border-orange-600 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300"
                  aria-label="View frequently asked questions"
                >
                  View FAQ
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12" data-aos="fade-up">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="flex items-center justify-center bg-green-50 rounded-full w-20 h-20 mx-auto mb-6">
                  <CheckCircle size={48} className="text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-lg">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 transition-all duration-300"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 transition-all duration-300"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 transition-all duration-300"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 transition-all duration-300"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 transition-all duration-300"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select 
                      id="serviceInterest"
                      name="serviceInterest"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 transition-all duration-300"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="healthcare">Healthcare IT</option>
                      <option value="fintech">Fintech Solutions</option>
                      <option value="ai-ml">AI/ML</option>
                      <option value="legal">Legal Services Platform</option>
                      <option value="managed-it">Managed IT</option>
                      <option value="cyber-security">Cyber Security</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="ui-ux">UI/UX Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25 transition-all duration-300 resize-none"
                    rows={6} 
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                  ></textarea>
                </div>

                <div className="text-center pt-6">
                  <button 
                    type="submit" 
                    className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    aria-label="Send message"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our solutions can drive your business forward and create lasting value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1-800-916-2459" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              <Phone size={24} aria-hidden="true" />
              Call Us Now
            </a>
            <a 
              href="mailto:support@panvatech.com" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              <Mail size={24} aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
