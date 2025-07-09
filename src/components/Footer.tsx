
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="kenetics-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold text-[hsl(var(--kenetics-primary))] mb-2">
              KENETICS
            </div>
            <p className="text-gray-300">
              © 2024 KENETICS. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-300 hover:text-[hsl(var(--kenetics-primary))] transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-[hsl(var(--kenetics-primary))] transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-[hsl(var(--kenetics-primary))] transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
