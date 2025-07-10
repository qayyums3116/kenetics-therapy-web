
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-gradient-x"
      style={{
        background: 'linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite'
      }}
    >
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            TRANSFORMING THE DELIVERY
            <br />
            OF AT HOME
            <br />
            <span className="text-[hsl(var(--kenetics-primary))]">PHYSICAL THERAPY</span>
          </h1>
          
          <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Empowering individuals with cutting-edge AI and machine learning to provide 
            effective, personalized at-home therapy solutions.
          </p>
          
          <div className={`${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <button className="kenetics-primary kenetics-primary-hover px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 kenetics-glow inline-flex items-center space-x-2 group">
              <span>Start Your Journey</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[hsl(var(--kenetics-primary))] rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-[hsl(var(--kenetics-primary))] rounded-full animate-float delay-1000 opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-[hsl(var(--kenetics-primary))] rounded-full animate-float delay-500 opacity-50"></div>
    </section>
  );
};

export default HeroSection;
