
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1); // Remove leading slash
  };

  const activeSection = getActiveSection();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'product', label: 'Product', path: '/product' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'therapy', label: 'Therapy', path: '/therapy' },
    { id: 'testimonials', label: 'Testimonials', path: '/testimonials' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d0586b0f-926d-4e97-aacd-c09808a2d113.png" 
              alt="Kenetics Solutions" 
              className="h-10 w-auto cursor-pointer"
              onClick={() => handleNavClick('/')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${
                  isScrolled 
                    ? activeSection === item.id 
                      ? 'text-black bg-[hsl(var(--kenetics-primary))]' 
                      : 'text-[hsl(var(--kenetics-dark))] hover:text-[hsl(var(--kenetics-primary))]'
                    : activeSection === item.id
                      ? 'text-black bg-[hsl(var(--kenetics-primary))]'
                      : 'text-white hover:text-[hsl(var(--kenetics-primary))]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-[hsl(var(--kenetics-dark))]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left px-4 py-3 font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-black bg-[hsl(var(--kenetics-primary))]' 
                      : 'text-[hsl(var(--kenetics-dark))] hover:text-white hover:bg-[hsl(var(--kenetics-primary))]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
