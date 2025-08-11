import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Activity, 
  Heart, 
  Shield, 
  Database, 
  CheckCircle, 
  ArrowRight,
  Users,
  Zap,
  TrendingUp,
  CreditCard,
  Brain,
  Scale,
  Globe,
  Lock,
  BarChart3,
  Cpu,
  Network,
  FileText,
  Search,
  Star,
  Clock,
  Award
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ITSolutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const healthcareServices = [
    {
      icon: <Activity size={48} aria-hidden="true" />,
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive digital patient records management system for healthcare providers.",
      features: [
        "Patient data management",
        "Clinical decision support",
        "Interoperability standards",
        "HIPAA compliance"
      ],
      color: "blue",
      bgColor: "blue-50",
      iconColor: "blue-600"
    },
    {
      icon: <Heart size={48} aria-hidden="true" />,
      title: "Telemedicine Platforms",
      description: "Secure video consultation and remote patient monitoring solutions.",
      features: [
        "Video consultations",
        "Remote monitoring",
        "Prescription management",
        "Patient portal"
      ],
      color: "red",
      bgColor: "red-50",
      iconColor: "red-600"
    },
    {
      icon: <Shield size={48} aria-hidden="true" />,
      title: "Healthcare Security",
      description: "Advanced cybersecurity solutions to protect patient data and systems.",
      features: [
        "Data encryption",
        "Access controls",
        "Audit trails",
        "Compliance monitoring"
      ],
      color: "green",
      bgColor: "green-50",
      iconColor: "green-600"
    },
    {
      icon: <Database size={48} aria-hidden="true" />,
      title: "Health Analytics",
      description: "Data-driven insights for improved patient outcomes and operational efficiency.",
      features: [
        "Predictive analytics",
        "Population health",
        "Performance metrics",
        "Real-time reporting"
      ],
      color: "purple",
      bgColor: "purple-50",
      iconColor: "purple-600"
    }
  ];

  const fintechServices = [
    {
      icon: <CreditCard size={48} aria-hidden="true" />,
      title: "Digital Banking Solutions",
      description: "Modern banking platforms for seamless financial transactions and account management.",
      features: [
        "Mobile banking apps",
        "Payment processing",
        "Account management",
        "Security protocols"
      ],
      color: "blue",
      bgColor: "blue-50",
      iconColor: "blue-600"
    },
    {
      icon: <BarChart3 size={48} aria-hidden="true" />,
      title: "Financial Analytics",
      description: "Advanced analytics and reporting for financial institutions and businesses.",
      features: [
        "Risk assessment",
        "Portfolio management",
        "Real-time reporting",
        "Predictive modeling"
      ],
      color: "green",
      bgColor: "green-50",
      iconColor: "green-600"
    },
    {
      icon: <Lock size={48} aria-hidden="true" />,
      title: "Fintech Security",
      description: "Enterprise-grade security solutions for financial technology platforms.",
      features: [
        "Fraud detection",
        "Identity verification",
        "Encryption protocols",
        "Compliance monitoring"
      ],
      color: "red",
      bgColor: "red-50",
      iconColor: "red-600"
    },
    {
      icon: <Globe size={48} aria-hidden="true" />,
      title: "Blockchain Solutions",
      description: "Innovative blockchain technology for secure and transparent financial transactions.",
      features: [
        "Smart contracts",
        "Cryptocurrency integration",
        "Distributed ledger",
        "Cross-border payments"
      ],
      color: "yellow",
      bgColor: "yellow-50",
      iconColor: "yellow-600"
    }
  ];

  const aiMlServices = [
    {
      icon: <Brain size={48} aria-hidden="true" />,
      title: "Machine Learning Models",
      description: "Custom ML models for predictive analytics and intelligent decision-making.",
      features: [
        "Predictive modeling",
        "Data analysis",
        "Pattern recognition",
        "Automated insights"
      ],
      color: "purple",
      bgColor: "purple-50",
      iconColor: "purple-600"
    },
    {
      icon: <Cpu size={48} aria-hidden="true" />,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions to streamline business processes.",
      features: [
        "Process automation",
        "Workflow optimization",
        "Intelligent routing",
        "Performance monitoring"
      ],
      color: "blue",
      bgColor: "blue-50",
      iconColor: "blue-600"
    },
    {
      icon: <Network size={48} aria-hidden="true" />,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis and language understanding.",
      features: [
        "Text analysis",
        "Sentiment analysis",
        "Language translation",
        "Chatbot development"
      ],
      color: "green",
      bgColor: "green-50",
      iconColor: "green-600"
    },
    {
      icon: <BarChart3 size={48} aria-hidden="true" />,
      title: "Computer Vision",
      description: "Image and video analysis solutions for visual data processing.",
      features: [
        "Image recognition",
        "Object detection",
        "Video analysis",
        "Quality control"
      ],
      color: "orange",
      bgColor: "orange-50",
      iconColor: "orange-600"
    }
  ];

  const legalServices = [
    {
      icon: <FileText size={48} aria-hidden="true" />,
      title: "Legal Document Management",
      description: "Comprehensive document management system for legal professionals.",
      features: [
        "Document automation",
        "Contract management",
        "Version control",
        "Secure storage"
      ],
      color: "blue",
      bgColor: "blue-50",
      iconColor: "blue-600"
    },
    {
      icon: <Scale size={48} aria-hidden="true" />,
      title: "Case Management System",
      description: "Integrated case management platform for law firms and legal departments.",
      features: [
        "Case tracking",
        "Client management",
        "Calendar integration",
        "Billing automation"
      ],
      color: "green",
      bgColor: "green-50",
      iconColor: "green-600"
    },
    {
      icon: <Search size={48} aria-hidden="true" />,
      title: "Legal Research Tools",
      description: "Advanced research and analysis tools for legal professionals.",
      features: [
        "Case law search",
        "Legal analytics",
        "Citation tracking",
        "Research automation"
      ],
      color: "purple",
      bgColor: "purple-50",
      iconColor: "purple-600"
    },
    {
      icon: <Users size={48} aria-hidden="true" />,
      title: "Client Portal",
      description: "Secure client portal for document sharing and communication.",
      features: [
        "Secure messaging",
        "Document sharing",
        "Status updates",
        "Payment processing"
      ],
      color: "yellow",
      bgColor: "yellow-50",
      iconColor: "yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32" style={{ marginTop: '76px' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                IT Solutions
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Comprehensive technology solutions tailored for specific industries. 
                We deliver innovative, scalable, and secure solutions that drive business transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#healthcare" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
                >
                  Explore Solutions
                  <ArrowRight size={24} aria-hidden="true" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  Get Consultation
                </a>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <Activity size={48} className="text-blue-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">Healthcare</h5>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <CreditCard size={48} className="text-green-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">Fintech</h5>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <Brain size={48} className="text-purple-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">AI/ML</h5>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <Scale size={48} className="text-yellow-300 mb-4 mx-auto" aria-hidden="true" />
                    <h5 className="font-bold text-lg">Legal</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section id="healthcare" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Healthcare IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming healthcare delivery with innovative technology solutions that improve patient care, 
              enhance operational efficiency, and ensure regulatory compliance.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {healthcareServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-blue-500 hover:-translate-y-1">
                  <div className={`flex items-center justify-center mb-6 bg-${service.bgColor} rounded-2xl w-20 h-20`}>
                    <span className={`text-${service.iconColor}`}>
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fintech Section */}
      <section id="fintech" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Fintech Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionary financial technology solutions that modernize banking, payments, and financial services 
              with cutting-edge security and user experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {fintechServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-green-500 hover:-translate-y-1">
                  <div className={`flex items-center justify-center mb-6 bg-${service.bgColor} rounded-2xl w-20 h-20`}>
                    <span className={`text-${service.iconColor}`}>
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI/ML Section */}
      <section id="ai-ml" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              AI & Machine Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Intelligent solutions that leverage artificial intelligence and machine learning to automate processes, 
              gain insights, and drive innovation across industries.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {aiMlServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-purple-500 hover:-translate-y-1">
                  <div className={`flex items-center justify-center mb-6 bg-${service.bgColor} rounded-2xl w-20 h-20`}>
                    <span className={`text-${service.iconColor}`}>
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Service Platform Section */}
      <section id="legal" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Legal Service Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal technology solutions that streamline legal processes, 
              enhance client communication, and improve case management efficiency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {legalServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-l-yellow-500 hover:-translate-y-1">
                  <div className={`flex items-center justify-center mb-6 bg-${service.bgColor} rounded-2xl w-20 h-20`}>
                    <span className={`text-${service.iconColor}`}>
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine industry expertise with cutting-edge technology to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay={100}>
              <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-2xl w-16 h-16 mx-auto">
                <Shield size={32} className="text-blue-600" aria-hidden="true" />
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">Industry Expertise</h5>
              <p className="text-gray-600 leading-relaxed">Deep understanding of industry-specific challenges and requirements</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={200}>
              <div className="flex items-center justify-center mb-6 bg-green-50 rounded-2xl w-16 h-16 mx-auto">
                <Zap size={32} className="text-green-600" aria-hidden="true" />
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">Scalable Solutions</h5>
              <p className="text-gray-600 leading-relaxed">Architected to grow with your business needs and user base</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={300}>
              <div className="flex items-center justify-center mb-6 bg-purple-50 rounded-2xl w-16 h-16 mx-auto">
                <Users size={32} className="text-purple-600" aria-hidden="true" />
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">User-Centric Design</h5>
              <p className="text-gray-600 leading-relaxed">Solutions designed with end-users in mind for optimal adoption</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={400}>
              <div className="flex items-center justify-center mb-6 bg-orange-50 rounded-2xl w-16 h-16 mx-auto">
                <TrendingUp size={32} className="text-orange-600" aria-hidden="true" />
              </div>
              <h5 className="text-xl font-bold mb-3 text-gray-900">ROI Focused</h5>
              <p className="text-gray-600 leading-relaxed">Measurable improvements in efficiency, productivity, and outcomes</p>
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
            Let's discuss how our IT solutions can drive innovation and growth for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-white text-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              Get Started
              <ArrowRight size={24} aria-hidden="true" />
            </a>
            <a 
              href="tel:1-800-916-2459" 
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITSolutions;
