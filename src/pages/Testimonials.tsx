
import React from 'react';
import Header from '../components/Header';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E7FF6E' }}>
      <Header />
      <div className="pt-16">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
