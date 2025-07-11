
import React from 'react';
import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

const Product = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ProductSection />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
