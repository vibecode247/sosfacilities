
import React from 'react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import OptimizedImage from '@/components/ui/OptimizedImage';

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/lovable-uploads/9f9da267-3504-4ee4-b63c-21c74cb21f7a.png" 
          alt="SOS Facilities professional cleaning team"
          size="hero"
          priority={true}
          lazy={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/80 via-secondary-500/60 to-primary-500/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in font-outfit">
          #1 Housekeeping Manpower Suppliers in Coimbatore
          <span className="block text-primary-300">Solutions in Coimbatore</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          ISO 9001:2015 certified cleaning services with 13+ years of excellence. 
        </p>
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={openQuoteModal}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg"
          >
            Get Free Quote
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-secondary-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
