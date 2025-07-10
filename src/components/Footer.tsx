
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--kenetics-dark))] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold text-[hsl(var(--kenetics-primary))] mb-2">
              KENETICS
            </div>
            <p className="text-white">
              © 2024 KENETICS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
