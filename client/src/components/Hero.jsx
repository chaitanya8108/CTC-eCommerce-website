import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'from-yellow-400 via-amber-500 to-orange-500',
    'from-amber-400 via-yellow-500 to-amber-600',
    'from-yellow-500 via-amber-400 to-yellow-600'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Star, text: 'Premium Quality' },
    { icon: Award, text: 'Since 1950' },
    { icon: Clock, text: 'Fresh Daily' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-yellow-200"
              style={{ animation: 'slideDown 0.6s ease-out' }}
            >
              <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-amber-700">Trusted Since 75+ Years</span>
            </div>

            {/* Main Heading */}
            <div 
              className="space-y-4"
              style={{ animation: 'slideUp 0.8s ease-out 0.2s both' }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Welcome to
                </span>
                <span className="block mt-2 bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-800 bg-clip-text text-transparent">
                  Choudhary Tara Chand
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0">
                Experience the authentic taste of tradition with our handcrafted sweets and premium snacks
              </p>
            </div>

            {/* Feature Pills */}
            <div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              style={{ animation: 'slideUp 1s ease-out 0.4s both' }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-xl hover:shadow-yellow-200/50 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <feature.icon className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              style={{ animation: 'slideUp 1.2s ease-out 0.6s both' }}
            >
              <Link to='/menu' className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Menu
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link className="px-8 py-4 bg-white text-amber-700 font-bold rounded-full border-3 border-amber-500 hover:bg-amber-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Our Story
              </Link>
            </div>

            {/* Social Proof */}
            <div 
              className="flex items-center gap-6 justify-center lg:justify-start pt-4"
              style={{ animation: 'fadeIn 1.4s ease-out 0.8s both' }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-3 border-white bg-gradient-to-br from-yellow-400 to-amber-500"
                  ></div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  <span className="font-bold text-amber-700">10,000+</span> Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Showcase */}
          <div 
            className="relative h-full min-h-[500px] lg:min-h-[600px]"
            style={{ animation: 'scaleIn 1s ease-out 0.4s both' }}
          >
            {/* Main Image Card */}
            <div className="relative z-10 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                {/* Image Placeholder with Gradient */}
                <div className={`w-full h-full min-h-[500px] lg:min-h-[600px] bg-gradient-to-br ${images[currentImage]} flex items-center justify-center transition-all duration-1000`}>
                  <div className="text-center text-white space-y-4 p-8">
                    <div className="text-7xl md:text-8xl mb-4">🍬</div>
                    <p className="text-3xl md:text-4xl font-bold drop-shadow-lg">Premium Sweets</p>
                    <p className="text-lg md:text-xl opacity-90">Handcrafted with Love</p>
                  </div>
                </div>
                
                {/* Image Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`transition-all duration-300 ${
                        currentImage === index 
                          ? 'w-8 h-2 bg-white rounded-full' 
                          : 'w-2 h-2 bg-white/50 hover:bg-white/75 rounded-full'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-4 left-4 lg:-top-6 lg:-left-6 bg-white rounded-2xl shadow-2xl p-4 animate-float z-20 border-2 border-yellow-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎂</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">50+ Varieties</p>
                  <p className="text-xs text-gray-500">Fresh Daily</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-2xl shadow-2xl p-4 animate-float animation-delay-2000 z-20 border-2 border-amber-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">4.9 Rating</p>
                  <p className="text-xs text-gray-500">10k+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;