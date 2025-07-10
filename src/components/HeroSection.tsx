
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToProduct = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            TRANSFORMING THE DELIVERY OF{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--kenetics-primary))] to-blue-400">
              AT HOME PHYSICAL THERAPY
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Revolutionary AI-powered physical therapy solutions that bring personalized care directly to your home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToProduct}
              className="group bg-[hsl(var(--kenetics-primary))] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[hsl(var(--kenetics-primary-dark))] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-3 text-white hover:text-[hsl(var(--kenetics-primary))] transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[hsl(var(--kenetics-primary))]/20 transition-all duration-300">
                <Play size={16} className="ml-1" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
