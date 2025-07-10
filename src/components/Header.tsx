
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'product', 'about', 'therapy', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'kenetics-primary shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            KENETICS
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? (isActive('home') ? 'text-black font-bold' : 'text-black hover:text-gray-700') 
                  : (isActive('home') ? 'text-[hsl(var(--kenetics-primary))] font-bold' : 'text-white hover:text-gray-300')
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('product')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? (isActive('product') ? 'text-black font-bold' : 'text-black hover:text-gray-700') 
                  : (isActive('product') ? 'text-[hsl(var(--kenetics-primary))] font-bold' : 'text-white hover:text-gray-300')
              }`}
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? (isActive('about') ? 'text-black font-bold' : 'text-black hover:text-gray-700') 
                  : (isActive('about') ? 'text-[hsl(var(--kenetics-primary))] font-bold' : 'text-white hover:text-gray-300')
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('therapy')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? (isActive('therapy') ? 'text-black font-bold' : 'text-black hover:text-gray-700') 
                  : (isActive('therapy') ? 'text-[hsl(var(--kenetics-primary))] font-bold' : 'text-white hover:text-gray-300')
              }`}
            >
              Therapy Options
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? (isActive('contact') ? 'text-black font-bold' : 'text-black hover:text-gray-700') 
                  : (isActive('contact') ? 'text-[hsl(var(--kenetics-primary))] font-bold' : 'text-white hover:text-gray-300')
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 kenetics-primary shadow-lg">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`px-4 py-2 text-left font-medium transition-colors ${
                  isActive('home') ? 'text-black font-bold bg-black/10' : 'text-black hover:bg-black/10'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('product')}
                className={`px-4 py-2 text-left font-medium transition-colors ${
                  isActive('product') ? 'text-black font-bold bg-black/10' : 'text-black hover:bg-black/10'
                }`}
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`px-4 py-2 text-left font-medium transition-colors ${
                  isActive('about') ? 'text-black font-bold bg-black/10' : 'text-black hover:bg-black/10'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('therapy')}
                className={`px-4 py-2 text-left font-medium transition-colors ${
                  isActive('therapy') ? 'text-black font-bold bg-black/10' : 'text-black hover:bg-black/10'
                }`}
              >
                Therapy Options
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-4 py-2 text-left font-medium transition-colors ${
                  isActive('contact') ? 'text-black font-bold bg-black/10' : 'text-black hover:bg-black/10'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
