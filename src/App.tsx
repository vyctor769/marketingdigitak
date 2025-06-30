import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HackExamples from './components/HackExamples';
import Testimonials from './components/Testimonials';
import ProductImage from './components/ProductImage';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Benefits />
      <HackExamples />
      <Testimonials />
      <ProductImage />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;