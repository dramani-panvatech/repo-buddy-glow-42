
import React from 'react';
import { 
  Calendar, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Globe, 
  Shield, 
  Zap, 
  Heart,
  Target,
  Lightbulb,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';

const AboutSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative bg-gradient-primary text-white py-20" style={{ marginTop: '76px' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
            <div data-aos="fade-right">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-primary-500 mb-4">About Us</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforming Businesses Through 
                <span className="text-yellow-400"> Innovation</span>
              </h1>
              <p className="text-xl mb-6 opacity-90 max-w-2xl">
                We are a forward-thinking technology company dedicated to transforming businesses through innovative IT solutions. 
                Our journey from startup to industry leader reflects our commitment to excellence and client success.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="btn btn-secondary inline-flex items-center gap-2 px-6 py-3 font-bold">
                  <Play size={20} aria-hidden="true" />
                  Watch Our Story
                </button>
                
              </div>
              <div className="flex items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>7+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>200+ Projects</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl -translate-x-2 -translate-y-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Panva Technology Team" 
                  className="w-full rounded-2xl shadow-large relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl translate-x-2 translate-y-2 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-20">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-xl text-gray-600 mb-6">
                Founded in 2016, Panva Technology began with a simple yet powerful vision: to transform how businesses leverage technology 
                to achieve their goals. What started as a small team of passionate developers has grown into a comprehensive technology 
                solutions provider.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we serve clients across healthcare, fintech, and enterprise sectors, delivering cutting-edge solutions that drive 
                innovation and operational excellence. Our commitment to quality, innovation, and client success has earned us recognition 
                as a leading IT solutions provider.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">7+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">200+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="grid grid-cols-2 gap-6">
                <div className="hero-card text-center p-6">
                  <Globe className="text-primary-500 mb-4 mx-auto" size={48} aria-hidden="true" />
                  <h5 className="font-bold mb-2">Global Reach</h5>
                  <p className="text-gray-600 text-sm">Serving clients worldwide with remote development expertise</p>
                </div>
                <div className="hero-card text-center p-6">
                  <Shield className="text-primary-500 mb-4 mx-auto" size={48} aria-hidden="true" />
                  <h5 className="font-bold mb-2">Secure Solutions</h5>
                  <p className="text-gray-600 text-sm">Enterprise-grade security for all our applications</p>
                </div>
                <div className="hero-card text-center p-6">
                  <Zap className="text-primary-500 mb-4 mx-auto" size={48} aria-hidden="true" />
                  <h5 className="font-bold mb-2">Fast Delivery</h5>
                  <p className="text-gray-600 text-sm">Agile methodologies for rapid development cycles</p>
                </div>
                <div className="hero-card text-center p-6">
                  <Heart className="text-primary-500 mb-4 mx-auto" size={48} aria-hidden="true" />
                  <h5 className="font-bold mb-2">Client Focus</h5>
                  <p className="text-gray-600 text-sm">Dedicated support and long-term partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-aos="fade-up">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              From humble beginnings to industry recognition - our growth story
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div 
                className="absolute bg-primary-500 hidden lg:block"
                style={{
                  left: '50%',
                  top: '0',
                  bottom: '0',
                  width: '3px',
                  transform: 'translateX(-50%)'
                }}
                aria-hidden="true"
              ></div>

              {[
                {
                  year: "2016-2018",
                  title: "Foundation & Vision",
                  description: "Started with the vision to improve productivity and efficiency, scaling ideas to enterprise level applications.",
                  icon: <Calendar className="text-primary-500" size={24} aria-hidden="true" />
                },
                {
                  year: "2018-2019",
                  title: "Global Expansion",
                  description: "Began providing remote developer services to US clients, improving development speed and go-to-market time.",
                  icon: <Users className="text-primary-500" size={24} aria-hidden="true" />
                },
                {
                  year: "2019-2021",
                  title: "Healthcare IT Dominance",
                  description: "Established leadership in healthcare IT with projects in telehealth, remote care management, and patient apps.",
                  icon: <TrendingUp className="text-primary-500" size={24} aria-hidden="true" />
                },
                {
                  year: "2021-Present",
                  title: "Industry Recognition",
                  description: "Reached finals of SDI Best Small Managed Service Desk Provider awards, gaining external recognition.",
                  icon: <Award className="text-primary-500" size={24} aria-hidden="true" />
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="grid lg:grid-cols-2 gap-8 mb-16 items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                    <div className="hero-card h-full p-6">
                      <div className="flex items-center mb-4">
                        <div 
                          className="mr-4 p-2 bg-primary-500/10 rounded-full flex items-center justify-center w-12 h-12"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </div>
                        <h4 className="text-primary-500 font-bold text-xl">{item.year}</h4>
                      </div>
                      <h5 className="font-bold mb-4 text-xl">{item.title}</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Point */}
                  <div className="hidden lg:block">
                    <div 
                      className={`relative ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                    >
                      <div 
                        className="bg-primary-500 rounded-full border-4 border-white absolute shadow-large"
                        style={{
                          width: '20px',
                          height: '20px',
                          top: '50%',
                          [index % 2 === 0 ? 'left' : 'right']: 'calc(50% - 10px)',
                          transform: 'translateY(-50%)',
                          zIndex: 10
                        }}
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-aos="fade-up">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="text-primary-500" size={48} aria-hidden="true" />,
                title: "Excellence",
                description: "We strive for excellence in every project, delivering solutions that exceed expectations."
              },
              {
                icon: <Lightbulb className="text-primary-500" size={48} aria-hidden="true" />,
                title: "Innovation",
                description: "Constantly exploring new technologies and methodologies to stay ahead of the curve."
              },
              {
                icon: <Heart className="text-primary-500" size={48} aria-hidden="true" />,
                title: "Integrity",
                description: "Building trust through transparent communication and ethical business practices."
              },
              {
                icon: <Users className="text-primary-500" size={48} aria-hidden="true" />,
                title: "Collaboration",
                description: "Working closely with clients to understand their needs and deliver tailored solutions."
              },
              {
                icon: <Shield className="text-primary-500" size={48} aria-hidden="true" />,
                title: "Quality",
                description: "Maintaining the highest standards of quality in all our deliverables and processes."
              },
              {
                icon: <Star className="text-primary-500" size={48} aria-hidden="true" />,
                title: "Growth",
                description: "Fostering continuous learning and development for our team and clients."
              }
            ].map((value, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="hero-card h-full text-center p-6">
                  <div className="mb-4">{value.icon}</div>
                  <h5 className="font-bold mb-4 text-xl">{value.title}</h5>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-aos="fade-up">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Development Team",
                role: "Full-Stack Developers",
                description: "Expert developers specializing in modern technologies and frameworks.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              },
              {
                name: "Design Team",
                role: "UI/UX Designers",
                description: "Creative designers focused on user experience and visual excellence.",
                image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              },
              {
                name: "Project Management",
                role: "Scrum Masters",
                description: "Experienced project managers ensuring timely delivery and quality.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((member, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="hero-card h-full text-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h5 className="font-bold mb-2 text-xl">{member.name}</h5>
                    <p className="text-primary-500 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-xl mb-8 max-w-2xl">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
            </div>
            <div className="text-center lg:text-right" data-aos="fade-left">
              <button className="btn btn-secondary inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
