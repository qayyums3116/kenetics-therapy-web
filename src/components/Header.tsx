
import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

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
          <div className="text-2xl font-bold text-black">
            KENETICS
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-black hover:text-gray-700 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('product')}
              className="text-black hover:text-gray-700 transition-colors font-medium"
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-black hover:text-gray-700 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('therapy')}
              className="text-black hover:text-gray-700 transition-colors font-medium"
            >
              Therapy Options
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black hover:text-gray-700 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#" 
              className="text-black hover:text-gray-700 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-700 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-700 transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
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
                className="px-4 py-2 text-black hover:bg-black/10 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('product')}
                className="px-4 py-2 text-black hover:bg-black/10 transition-colors font-medium text-left"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 text-black hover:bg-black/10 transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('therapy')}
                className="px-4 py-2 text-black hover:bg-black/10 transition-colors font-medium text-left"
              >
                Therapy Options
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 text-black hover:bg-black/10 transition-colors font-medium text-left"
              >
                Contact
              </button>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <a 
                  href="#" 
                  className="text-black hover:text-gray-700 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-black hover:text-gray-700 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-black hover:text-gray-700 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
