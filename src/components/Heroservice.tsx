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
    <section className="container mx-auto px-4 bg-white py-16 px-6 text-center">
      <h4 className="text-sm tracking-widest text-gray-500 font-semibold uppercase">Our Services</h4>
      <h2 className="text-3xl font-bold text-blue-900 mb-12">Stay Up, Stay Running, Stay Protected</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="text-4xl mb-4">{service.icon}</div>
            <a
              href="#"
              className="text-sky-500 font-semibold inline-flex items-center hover:underline"
            >
              {service.linkText} →
            </a>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-600">
        IT services built specifically for your business.{' '}
        <a href="#" className="text-blue-900 font-semibold underline">Find your solution</a>
      </p>
    </section>
  );
}
