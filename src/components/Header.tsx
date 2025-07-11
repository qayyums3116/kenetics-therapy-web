
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
  const isHomePage = location.pathname === '/';

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
      isHomePage 
        ? (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-[hsl(var(--kenetics-dark))]/90 backdrop-blur-md')
        : 'bg-white/95 backdrop-blur-md shadow-lg'
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
                  isHomePage
                    ? (isScrolled 
                        ? (activeSection === item.id 
                            ? 'text-black bg-[#E7FF6E]' 
                            : 'text-[hsl(var(--kenetics-dark))] hover:text-[#E7FF6E] hover:bg-[hsl(var(--kenetics-dark))]/10')
                        : (activeSection === item.id
                            ? 'text-black bg-[#E7FF6E]'
                            : 'text-white hover:text-[#E7FF6E]'))
                    : (activeSection === item.id 
                        ? 'text-black bg-[#E7FF6E]' 
                        : 'text-[hsl(var(--kenetics-dark))] hover:text-[#E7FF6E] hover:bg-[hsl(var(--kenetics-dark))]/10')
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isHomePage
                ? (isScrolled ? 'text-[hsl(var(--kenetics-dark))]' : 'text-white')
                : 'text-[hsl(var(--kenetics-dark))]'
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
                      ? 'text-black bg-[#E7FF6E]' 
                      : 'text-[hsl(var(--kenetics-dark))] hover:text-white hover:bg-[#E7FF6E]'
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
