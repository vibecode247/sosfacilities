
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in font-outfit leading-tight">
          Trusted Partner for<br />
          <span className="text-yellow-400 drop-shadow-lg animate-pulse">Housekeeping Workforce</span><br />
          Management
        </h1>
        
        {/* Decorative Separator */}
        <div className="flex items-center justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-32"></div>
          <div className="mx-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-32"></div>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
         We recruit, employ, and manage housekeeping staffs.
        </p>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-secondary-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
