import { BookOpen, Network, Shield, Cloud, Server, Monitor, Award } from 'lucide-react';

const Training = () => {
  const courses = [
    {
      icon: Network,
      title: 'Network Administration',
      description: 'Comprehensive networking fundamentals, protocols, and infrastructure management.',
      topics: ['TCP/IP & OSI Model', 'Routing & Switching', 'Network Security', 'Troubleshooting'],
      duration: '8 weeks',
      level: 'Beginner to Advanced',
      color: 'bg-blue-500'
    },
    {
      icon: Server,
      title: 'Red Hat Linux',
      description: 'Master Red Hat Enterprise Linux administration and certification preparation.',
      topics: ['System Administration', 'Shell Scripting', 'User Management', 'RHCSA/RHCE Prep'],
      duration: '10 weeks',
      level: 'Intermediate',
      color: 'bg-red-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Introduction to cloud concepts, deployment models, and service types.',
      topics: ['Cloud Fundamentals', 'Virtualization', 'Migration Strategies', 'Cost Optimization'],
      duration: '6 weeks',
      level: 'Beginner',
      color: 'bg-sky-500'
    },
    {
      icon: Cloud,
      title: 'Amazon AWS',
      description: 'Complete AWS cloud platform training with hands-on labs and certification prep.',
      topics: ['EC2 & VPC', 'S3 & Storage', 'IAM & Security', 'Solutions Architect Prep'],
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      color: 'bg-orange-500'
    },
    {
      icon: Cloud,
      title: 'Microsoft Azure',
      description: 'Comprehensive Azure cloud services training and certification preparation.',
      topics: ['Azure Fundamentals', 'Virtual Machines', 'Active Directory', 'Azure Administrator'],
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      color: 'bg-blue-600'
    },
    {
      icon: Monitor,
      title: 'Microsoft Intune',
      description: 'Modern device management and mobile application management with Intune.',
      topics: ['Device Enrollment', 'App Management', 'Compliance Policies', 'Conditional Access'],
      duration: '6 weeks',
      level: 'Intermediate',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Essential cybersecurity principles, threat detection, and incident response.',
      topics: ['Security Fundamentals', 'Risk Assessment', 'Incident Response', 'Security Tools'],
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      title: 'MCSE Certification',
      description: 'Microsoft Certified Solutions Expert preparation and advanced Windows Server.',
      topics: ['Windows Server', 'Active Directory', 'Exchange Server', 'System Center'],
      duration: '14 weeks',
      level: 'Advanced',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="training" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Training & Consultation Courses</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional training programs designed to advance your IT career with hands-on experience and industry certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</h4>
                    <ul className="space-y-1">
                      {course.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                      <span className="flex items-center">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {course.duration}
                      </span>
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Get personalized training programs tailored to your career goals and schedule
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="https://wa.link/s6bet5"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;