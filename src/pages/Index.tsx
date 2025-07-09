
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/AboutSection';
import TherapySection from '../components/TherapySection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <TherapySection />
      <TestimonialsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
