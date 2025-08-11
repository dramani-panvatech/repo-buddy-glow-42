
import React from 'react';
import { 
  Heart, 
  DollarSign, 
  Brain, 
  Scale, 
  Server, 
  HeadphonesIcon, 
  Users, 
  Cloud, 
  Shield, 
  Code,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';

const itSolutions = [
  {
    id: 1,
    title: "Healthcare",
    description: "Comprehensive EHR systems, RCM solutions, and advanced healthcare analytics to streamline patient care and operations.",
    icon: <Heart size={48} aria-hidden="true" />,
    features: ["EHR Systems", "RCM Solutions", "Healthcare Analytics", "Telehealth Platforms"],
    color: "red",
    bgColor: "red-50",
    iconColor: "red-600"
  },
  {
    id: 2,
    title: "Fintech",
    description: "Secure, scalable financial technology solutions including payment systems, digital banking, and compliance tools.",
    icon: <DollarSign size={48} aria-hidden="true" />,
    features: ["Payment Systems", "Digital Banking", "Compliance Tools", "Trading Platforms"],
    color: "green",
    bgColor: "green-50",
    iconColor: "green-600"
  },
  {
    id: 3,
    title: "AI/ML",
    description: "Intelligent automation, predictive analytics, and machine learning solutions to drive business innovation.",
    icon: <Brain size={48} aria-hidden="true" />,
    features: ["Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision"],
    color: "purple",
    bgColor: "purple-50",
    iconColor: "purple-600"
  },
  {
    id: 4,
    title: "Legal Service Platform",
    description: "Comprehensive legal management systems, case tracking, and document automation for law firms.",
    icon: <Scale size={48} aria-hidden="true" />,
    features: ["Case Management", "Document Automation", "Billing Systems", "Client Portals"],
    color: "yellow",
    bgColor: "yellow-50",
    iconColor: "yellow-600"
  }
];

const itServices = [
  {
    id: 1,
    title: "Managed IT",
    description: "Complete IT infrastructure management and monitoring for seamless business operations.",
    icon: <Server size={48} aria-hidden="true" />,
    color: "blue",
    bgColor: "blue-50",
    iconColor: "blue-600"
  },
  {
    id: 2,
    title: "IT Support",
    description: "24/7 technical support and helpdesk services to keep your systems running smoothly.",
    icon: <HeadphonesIcon size={48} aria-hidden="true" />,
    color: "green",
    bgColor: "green-50",
    iconColor: "green-600"
  },
  {
    id: 3,
    title: "IT Consultancy",
    description: "Strategic IT consulting to optimize your technology investments and digital transformation.",
    icon: <Users size={48} aria-hidden="true" />,
    color: "purple",
    bgColor: "purple-50",
    iconColor: "purple-600"
  },
  {
    id: 4,
    title: "Cloud Computing",
    description: "Scalable cloud solutions, migration services, and cloud infrastructure management.",
    icon: <Cloud size={48} aria-hidden="true" />,
    color: "blue",
    bgColor: "blue-50",
    iconColor: "blue-600"
  },
  {
    id: 5,
    title: "Cyber Security",
    description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
    icon: <Shield size={48} aria-hidden="true" />,
    color: "red",
    bgColor: "red-50",
    iconColor: "red-600"
  },
  {
    id: 6,
    title: "Custom Software",
    description: "Tailored software development solutions designed specifically for your business needs.",
    icon: <Code size={48} aria-hidden="true" />,
    color: "orange",
    bgColor: "orange-50",
    iconColor: "orange-600"
  }
];

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-aos="fade-up">
            IT Services & Solutions
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Comprehensive technology services and industry-specific solutions to drive innovation, 
            efficiency, and growth across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="#solutions" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              Explore Solutions
              <ArrowRight size={24} aria-hidden="true" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Industry-specific solutions tailored to drive innovation and efficiency across diverse sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {itSolutions.map((solution, index) => (
              <div key={solution.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-blue-500 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center bg-${solution.bgColor} rounded-2xl w-16 h-16 mr-4`}>
                      <span className={`text-${solution.iconColor}`}>
                        {solution.icon}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">{solution.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    aria-label={`Learn more about ${solution.title} solutions`}
                  >
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services to support, secure, and scale your business technology infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-1 h-full">
                  <div className={`flex items-center justify-center bg-${service.bgColor} rounded-2xl w-20 h-20 mx-auto mb-6`}>
                    <span className={`text-${service.iconColor}`}>
                      {service.icon}
                    </span>
                  </div>
                  <h5 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h5>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    aria-label={`Learn more about ${service.title} services`}
                  >
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to support, secure, and scale your business technology infrastructure.
            </p>
          </div>

          {/* Managed IT Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="managed-it" data-aos="fade-up">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Managed IT Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete IT infrastructure management and monitoring for seamless business operations. Our managed IT services provide proactive monitoring, maintenance, and support to ensure your systems run optimally 24/7.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">24/7 Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Proactive Maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Performance Optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Disaster Recovery</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-blue-50 rounded-2xl w-16 h-16 mr-4">
                  <Server size={32} className="text-blue-600" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Infrastructure Management</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Comprehensive management of your IT infrastructure including servers, networks, and cloud resources.</p>
            </div>
          </div>

          {/* IT Support Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="it-support" data-aos="fade-up">
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">IT Support Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                24/7 technical support and helpdesk services to keep your systems running smoothly. Our expert support team is always ready to resolve issues quickly and efficiently.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">24/7 Helpdesk</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Remote Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">On-site Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Training & Documentation</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-green-500">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-green-50 rounded-2xl w-16 h-16 mr-4">
                  <HeadphonesIcon size={32} className="text-green-600" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Technical Support</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Comprehensive technical support for all your IT systems and applications with rapid response times.</p>
            </div>
          </div>

          {/* IT Consultancy Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="it-consultancy" data-aos="fade-up">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">IT Consultancy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic IT consulting to optimize your technology investments and digital transformation. Our expert consultants help you make informed decisions about your IT strategy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Technology Assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Digital Transformation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">IT Strategy Planning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Vendor Selection</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-purple-500">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-purple-50 rounded-2xl w-16 h-16 mr-4">
                  <Users size={32} className="text-purple-600" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Strategic Consulting</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Expert guidance on IT strategy, technology selection, and digital transformation initiatives.</p>
            </div>
          </div>

          {/* Cloud Computing Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="cloud-computing" data-aos="fade-up">
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Cloud Computing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Scalable cloud solutions, migration services, and cloud infrastructure management. We help you leverage the power of cloud computing to drive innovation and reduce costs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Cloud Migration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Multi-cloud Strategy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">DevOps Implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Cost Optimization</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-blue-50 rounded-2xl w-16 h-16 mr-4">
                  <Cloud size={32} className="text-blue-600" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Cloud Solutions</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">End-to-end cloud services including migration, optimization, and ongoing management of your cloud infrastructure.</p>
            </div>
          </div>

          {/* Cyber Security Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="cyber-security" data-aos="fade-up">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Cyber Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive security solutions to protect your business from cyber threats and data breaches. Our security experts implement robust protection measures to safeguard your digital assets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Threat Detection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Vulnerability Assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Security Audits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Compliance Management</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-red-500">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-red-50 rounded-2xl w-16 h-16 mr-4">
                  <Shield size={32} className="text-red-600" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Security Solutions</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Advanced security measures including threat detection, vulnerability assessment, and compliance management.</p>
            </div>
          </div>

          {/* Custom Software Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="custom-software" data-aos="fade-up">
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Custom Software</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tailored software development solutions designed specifically for your business needs. We create custom applications that streamline your operations and drive growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Custom Applications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Web Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Mobile Apps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">API Development</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-orange-500">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-orange-50 rounded-2xl w-16 h-16 mr-4">
                  <Code size={32} className="text-orange-600" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Software Development</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Custom software solutions built with modern technologies to meet your specific business requirements.</p>
            </div>
          </div>

          {/* Legal Services Platform Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="legal-services" data-aos="fade-up">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Legal Services Platform</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive legal technology solutions designed to streamline law firm operations, enhance client services, and improve case management efficiency. Our platform integrates cutting-edge technology with legal industry best practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Case Management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Document Automation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Billing Systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Client Portals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Time Tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Legal Research</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Compliance Tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">E-Discovery</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-yellow-500">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-yellow-50 rounded-2xl w-16 h-16 mr-4">
                  <Scale size={32} className="text-yellow-600" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Legal Technology</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">Advanced legal technology platform that transforms how law firms manage cases, documents, and client relationships.</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Secure document management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Automated workflow processes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Real-time collaboration tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Advanced reporting & analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our solutions can drive your business forward and create lasting value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
              aria-label="Get started with our services"
            >
              Get Started Today
              <ArrowRight size={24} aria-hidden="true" />
            </button>
            <button 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              aria-label="Schedule a consultation with our team"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Our Services?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <CheckCircle size={24} className="text-green-500 mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h6 className="text-lg font-bold mb-2 text-gray-900">Scalable Solutions</h6>
                  <p className="text-gray-600 leading-relaxed">
                    Our solutions grow with your business, ensuring long-term success and adaptability.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={24} className="text-green-500 mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h6 className="text-lg font-bold mb-2 text-gray-900">Industry Expertise</h6>
                  <p className="text-gray-600 leading-relaxed">
                    Deep understanding of industry challenges and regulatory requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={24} className="text-green-500 mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h6 className="text-lg font-bold mb-2 text-gray-900">Proven Methodologies</h6>
                  <p className="text-gray-600 leading-relaxed">
                    Agile development and proven project management methodologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={24} className="text-green-500 mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h6 className="text-lg font-bold mb-2 text-gray-900">Continuous Support</h6>
                  <p className="text-gray-600 leading-relaxed">
                    Ongoing maintenance, updates, and support to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
