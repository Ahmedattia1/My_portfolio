import { useState, useEffect } from 'react';
import { User, Target, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/src/assets/WhatsApp Image 2025-09-27 at 12.37.03_efdd4515.jpg',
    '/src/assets/WhatsApp Image 2025-09-27 at 12.37.03_7b729433.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={images[currentImageIndex]}
                  alt="Ahmed Sayed"
                  className="w-full h-96 object-cover transition-opacity duration-500"
                />
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
              </div>
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