import React from 'react';
import { Settings, Users, BookOpen, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Infrastructure Design & Implementation',
      description: 'Complete IT infrastructure solutions from planning to deployment, ensuring scalability, security, and optimal performance.',
      features: ['Cloud Architecture', 'Network Design', 'Security Implementation', 'Performance Optimization']
    },
    {
      icon: Wrench,
      title: 'System Administration & Support',
      description: 'Comprehensive system management services including maintenance, monitoring, and troubleshooting across multiple platforms.',
      features: ['24/7 Monitoring', 'Preventive Maintenance', 'Issue Resolution', 'Performance Tuning']
    },
    {
      icon: BookOpen,
      title: 'Technical Training & Certification',
      description: 'Personalized training programs designed to help professionals master cloud technologies and advance their careers.',
      features: ['Azure Certification Prep', 'AWS Training', 'Hands-on Labs', 'Career Guidance']
    },
    {
      icon: Users,
      title: 'Consulting & Mentoring',
      description: 'Strategic IT consulting and one-on-one mentoring to help individuals and organizations achieve their technology goals.',
      features: ['Technology Strategy', 'Career Development', 'Skill Assessment', 'Project Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions and educational services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;