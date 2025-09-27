import { useState } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Folder } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Enterprise Cloud Migration',
      category: 'Cloud Infrastructure',
      thumbnail: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      images: [
        'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      ],
      description: 'Successfully migrated a large enterprise infrastructure to Microsoft Azure, reducing operational costs by 40% and improving system reliability. The project involved migrating 200+ virtual machines, implementing disaster recovery solutions, and establishing automated backup systems.',
      technologies: ['Microsoft Azure', 'PowerShell', 'ARM Templates', 'Azure DevOps'],
      url: '#'
    },
    {
      id: 2,
      title: 'Multi-Cloud Security Implementation',
      category: 'Cybersecurity',
      thumbnail: 'https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      images: [
        'https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1614064548237-096537d54648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80'
      ],
      description: 'Designed and implemented comprehensive security solutions across AWS and Azure environments. Established identity management, network security, and compliance frameworks that achieved 99.9% security incident prevention rate.',
      technologies: ['AWS IAM', 'Azure AD', 'Network Security Groups', 'SIEM Tools'],
      url: '#'
    },
    {
      id: 3,
      title: 'Automated DevOps Pipeline',
      category: 'DevOps & Automation',
      thumbnail: 'https://images.unsplash.com/photo-1573495627361-ab2b3c616c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      images: [
        'https://images.unsplash.com/photo-1573495627361-ab2b3c616c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
      ],
      description: 'Built end-to-end CI/CD pipelines using Azure DevOps and GitHub Actions, reducing deployment time from hours to minutes. Implemented infrastructure as code and automated testing procedures.',
      technologies: ['Azure DevOps', 'Docker', 'Kubernetes', 'Terraform'],
      url: '#'
    },
    {
      id: 4,
      title: 'Hybrid Network Infrastructure',
      category: 'Network Administration',
      thumbnail: 'https://images.unsplash.com/photo-1593042235542-289416875a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      images: [
        'https://images.unsplash.com/photo-1593042235542-289416875a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1598257006624-6861635534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1598257006624-6861635534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      ],
      description: 'Designed and deployed a hybrid network infrastructure connecting on-premises data centers with cloud environments. Implemented SD-WAN solutions and optimized network performance across multiple locations.',
      technologies: ['Cisco Networking', 'SD-WAN', 'VPN Solutions', 'Network Monitoring'],
      url: '#'
    },
    {
      id: 5,
      title: 'Linux Server Optimization',
      category: 'System Administration',
      thumbnail: 'https://images.unsplash.com/photo-1592424002053-21f36927fdb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      images: [
        'https://images.unsplash.com/photo-1592424002053-21f36927fdb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1593042235542-289416875a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1598257006624-6861635534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      ],
      description: 'Optimized Red Hat Enterprise Linux servers for high-performance computing environments. Implemented automated monitoring, performance tuning, and security hardening procedures.',
      technologies: ['Red Hat Linux', 'Shell Scripting', 'Performance Monitoring', 'Security Hardening'],
      url: '#'
    },
    {
      id: 6,
      title: 'Microsoft Intune Deployment',
      category: 'Mobile Device Management',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
      images: [
        'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
        'https://images.unsplash.com/photo-1580974928064-7cb38a72b2a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
      ],
      description: 'Implemented Microsoft Intune for enterprise mobile device management, securing 500+ devices across multiple platforms. Established compliance policies and automated app deployment procedures.',
      technologies: ['Microsoft Intune', 'Azure AD', 'Conditional Access', 'Mobile Security'],
      url: '#'
    }
  ];

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful IT infrastructure projects and implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-600 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Folder className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {project.description.substring(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>

                {/* Image Slider */}
                <div className="relative">
                  <img
                    src={selectedProjectData.images[currentImageIndex]}
                    alt={selectedProjectData.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  
                  {selectedProjectData.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProjectData.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {selectedProjectData.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedProjectData.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedProjectData.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProjectData.url !== '#' && (
                    <a
                      href={selectedProjectData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;