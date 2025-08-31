import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ahmed Sayed"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm Ahmed Sayed, an IT professional with extensive experience in cloud technologies, 
                infrastructure management, and system administration. My journey spans across multiple 
                domains including Azure, AWS, Windows Server environments, and Linux systems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond technical implementation, I'm passionate about education and mentoring. 
                As a freelancing instructor, I help students and professionals navigate the 
                ever-evolving IT landscape and build successful careers in technology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <User className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Experience</h3>
                  <p className="text-sm text-gray-600">10+ Years</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Focus</h3>
                  <p className="text-sm text-gray-600">Cloud & Infrastructure</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Passion</h3>
                  <p className="text-sm text-gray-600">Teaching & Mentoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;