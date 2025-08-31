import React from 'react';
import { Cloud, Server, Shield, Monitor, Container, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: ['Microsoft Azure', 'Amazon AWS', 'Cloud Architecture', 'Migration Strategies', 'Cost Optimization'],
      color: 'bg-blue-500'
    },
    {
      icon: Server,
      title: 'Windows Server',
      skills: ['Active Directory', 'DNS Management', 'DHCP Configuration', 'File Services', 'Group Policy'],
      color: 'bg-green-500'
    },
    {
      icon: Terminal,
      title: 'Linux Systems',
      skills: ['Red Hat Enterprise', 'Ubuntu Server', 'Kali Linux', 'Shell Scripting', 'System Administration'],
      color: 'bg-orange-500'
    },
    {
      icon: Monitor,
      title: 'Virtualization',
      skills: ['VMware vSphere', 'Microsoft Hyper-V', 'Proxmox VE', 'Virtual Networking', 'Resource Management'],
      color: 'bg-purple-500'
    },
    {
      icon: Container,
      title: 'Containerization',
      skills: ['Docker', 'Container Orchestration', 'Microservices', 'DevOps Practices', 'CI/CD Pipelines'],
      color: 'bg-cyan-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      skills: ['Network Security', 'Identity Management', 'Compliance Frameworks', 'Risk Assessment', 'Security Auditing'],
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skills across cloud platforms, infrastructure management, and modern IT practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      {skill}
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

export default Skills;