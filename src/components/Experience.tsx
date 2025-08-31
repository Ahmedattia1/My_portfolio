import React from 'react';
import { Calendar, Award, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Cloud Architect',
      company: 'Enterprise Solutions Inc.',
      period: '2020 - Present',
      description: 'Leading cloud transformation initiatives and designing scalable infrastructure solutions for enterprise clients.',
      achievements: [
        'Migrated 50+ applications to Azure cloud platform',
        'Reduced infrastructure costs by 40% through optimization',
        'Implemented zero-downtime deployment strategies'
      ]
    },
    {
      title: 'Systems Administrator',
      company: 'TechCorp Solutions',
      period: '2017 - 2020',
      description: 'Managed hybrid cloud environments and provided technical leadership for infrastructure projects.',
      achievements: [
        'Maintained 99.9% uptime across all systems',
        'Automated deployment processes reducing manual work by 60%',
        'Led team of 5 junior administrators'
      ]
    },
    {
      title: 'IT Infrastructure Specialist',
      company: 'Digital Innovations Ltd.',
      period: '2015 - 2017',
      description: 'Specialized in virtualization technologies and network infrastructure design.',
      achievements: [
        'Designed and implemented VMware vSphere environment',
        'Established disaster recovery procedures',
        'Reduced server hardware costs by 35%'
      ]
    }
  ];

  const certifications = [
    'Microsoft Azure Solutions Architect Expert',
    'AWS Certified Solutions Architect',
    'VMware Certified Professional',
    'Red Hat Certified System Administrator',
    'CompTIA Security+'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven track record of delivering innovative IT solutions and fostering professional growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-primary-600 mr-2" />
                      <span className="text-primary-600 font-medium">{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h4>
                    <p className="text-primary-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="text-gray-800 font-medium">{cert}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg text-white">
              <h4 className="text-lg font-semibold mb-2">Teaching Impact</h4>
              <div className="space-y-2 text-sm">
                <p>500+ Students Trained</p>
                <p>95% Certification Success Rate</p>
                <p>4.9/5 Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;