import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ahmed Sayed</h3>
            <p className="text-gray-400 leading-relaxed">
              IT Professional specializing in cloud technologies and passionate about 
              empowering others through education and mentoring.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cloud Architecture (Azure & AWS)</li>
              <li>Infrastructure Management</li>
              <li>Virtualization & Containers</li>
              <li>Technical Training</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> by Ahmed Sayed
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Ahmed Sayed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;