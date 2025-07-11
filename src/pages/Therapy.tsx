
import React from 'react';
import Header from '../components/Header';
import TherapySection from '../components/TherapySection';
import Footer from '../components/Footer';

const Therapy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E7FF6E' }}>
      <Header />
      <div className="pt-16">
        <TherapySection />
      </div>
      <Footer />
    </div>
  );
};

export default Therapy;
