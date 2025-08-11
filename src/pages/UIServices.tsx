import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Code,
  Smartphone,
  Palette,
  Monitor,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Bootstrap JS removed - using Tailwind CSS

const UIServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const colorMap = {
    primary: "blue",
    success: "green",
    info: "cyan",
    warning: "yellow",
    danger: "red",
    secondary: "gray",
  };
  const uiServices = [
    {
      icon: <Palette size={48} aria-hidden="true" />,
      title: "UI Design",
      description: "Create stunning, intuitive user interfaces that captivate and engage your audience.",
      features: [
        "Modern design systems",
        "Interactive prototypes",
        "Brand consistency",
        "Accessibility compliance"
      ],
      color: "primary"
    },
    {
      icon: <Users size={48} aria-hidden="true" />,
      title: "UX Design",
      description: "Design seamless user experiences that drive engagement and conversion.",
      features: [
        "User research & testing",
        "Information architecture",
        "Wireframing & prototyping",
        "Usability optimization"
      ],
      color: "success"
    },
    {
      icon: <Code size={48} aria-hidden="true" />,
      title: "Web Development",
      description: "Build robust, scalable web applications with cutting-edge technologies.",
      features: [
        "React & Next.js",
        "TypeScript development",
        "API integration",
        "Performance optimization"
      ],
      color: "info"
    },
    {
      icon: <Smartphone size={48} aria-hidden="true" />,
      title: "Mobile Development",
      description: "Develop native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native",
        "Native iOS/Android",
        "App store optimization",
        "Push notifications"
      ],
      color: "warning"
    },
    {
      icon: <Monitor size={48} aria-hidden="true" />,
      title: "Responsive Design",
      description: "Ensure your applications work perfectly across all devices and screen sizes.",
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Touch-friendly interfaces",
        "Performance optimization"
      ],
      color: "danger"
    },
    {
      icon: <Globe size={48} aria-hidden="true" />,
      title: "Progressive Web Apps",
      description: "Create app-like experiences that work offline and install on any device.",
      features: [
        "Offline functionality",
        "App-like experience",
        "Push notifications",
        "Fast loading times"
      ],
      color: "secondary"
    }
  ];

  const benefits = [
    {
      icon: <Zap size={32} aria-hidden="true" />,
      title: "Lightning Fast",
      description: "Optimized performance for instant loading and smooth interactions."
    },
    {
      icon: <Shield size={32} aria-hidden="true" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee."
    },
    {
      icon: <TrendingUp size={32} aria-hidden="true" />,
      title: "Scalable Solutions",
      description: "Architected to grow with your business needs and user base."
    },
    {
      icon: <CheckCircle size={32} aria-hidden="true" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control for flawless delivery."
    }
  ];

  return (
    <div className="position-relative">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center min-h-[75vh] gap-12">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              UI/UX & Development Services
            </h1>
            <p className="text-lg mb-6">
              Transform your digital presence with cutting-edge UI/UX design and development solutions.
              We create intuitive, engaging experiences that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100">
                Explore Services <ArrowRight size={20} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-700">
                Get Started
              </a>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Palette size={48} className="text-blue-500 mb-3" />, label: 'UI Design' },
                { icon: <Users size={48} className="text-green-500 mb-3" />, label: 'UX Design' },
                { icon: <Code size={48} className="text-cyan-500 mb-3" />, label: 'Web Development' },
                { icon: <Smartphone size={48} className="text-yellow-500 mb-3" />, label: 'Mobile Apps' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-6 text-center">
                  {item.icon}
                  <h5 className="font-semibold text-white">{item.label}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Our UI/UX Services</h2>
            <p className="text-lg text-gray-500">
              Comprehensive design and development solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {uiServices.map((service, index) => (
              <div
                key={index}
                className="h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`h-full p-6 lg:p-8 border-l-4 rounded-lg shadow-sm hover:shadow-md transition bg-white border-${service.color}-500`}
                >
                  {/* Icon Wrapper */}
                  <div
                    className={`w-20 h-20 flex items-center justify-center mb-6 rounded-full bg-${service.color}-100`}
                  >
                    <span className={`text-${service.color}-500`}>
                      {service.icon}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Call to Action */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium mt-4 hover:underline"
                  >
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our UI Services?</h2>
            <p className="text-lg text-gray-500">
              We combine creativity with technical expertise to deliver exceptional results
            </p>
          </div>

          {/* Benefit Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600">{benefit.icon}</span>
                </div>

                {/* Title & Description */}
                <h5 className="text-lg font-semibold mb-2">{benefit.title}</h5>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-lg text-gray-500">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center p-6 bg-white rounded-lg shadow h-full" data-aos="fade-up" data-aos-delay="100">
              <div className="w-15 h-15 flex items-center justify-center mx-auto mb-4 rounded-full bg-blue-100">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h5 className="text-lg font-semibold mb-2">Discovery</h5>
              <p className="text-sm text-gray-600">
                Understanding your business goals, target audience, and project requirements
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 bg-white rounded-lg shadow h-full" data-aos="fade-up" data-aos-delay="200">
              <div className="w-15 h-15 flex items-center justify-center mx-auto mb-4 rounded-full bg-green-100">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h5 className="text-lg font-semibold mb-2">Research</h5>
              <p className="text-sm text-gray-600">
                Market analysis, competitor research, and user behavior studies
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 bg-white rounded-lg shadow h-full" data-aos="fade-up" data-aos-delay="300">
              <div className="w-15 h-15 flex items-center justify-center mx-auto mb-4 rounded-full bg-cyan-100">
                <span className="text-cyan-600 font-bold">3</span>
              </div>
              <h5 className="text-lg font-semibold mb-2">Design</h5>
              <p className="text-sm text-gray-600">
                Creating wireframes, prototypes, and visual designs with user feedback
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center p-6 bg-white rounded-lg shadow h-full" data-aos="fade-up" data-aos-delay="400">
              <div className="w-15 h-15 flex items-center justify-center mx-auto mb-4 rounded-full bg-yellow-100">
                <span className="text-yellow-500 font-bold">4</span>
              </div>
              <h5 className="text-lg font-semibold mb-2">Development</h5>
              <p className="text-sm text-gray-600">
                Building the final product with clean, maintainable code
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-center max-w-3xl" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg mb-6">
                Let's discuss your project and create something amazing together
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-lg px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  Start Your Project
                  <ArrowRight size={20} aria-hidden="true" />
                </a>
                <a
                  href="tel:1-800-916-2459"
                  className="inline-block border border-white text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default UIServices;
