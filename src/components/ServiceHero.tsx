
import React from 'react';
import { Button } from '@/components/ui/button';

interface ServiceHeroProps {
  title: string;
  buttonText: string;
}

const ServiceHero = ({ title, buttonText }: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500">
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-white/5 rounded-lg rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-0 w-full h-px bg-white transform -rotate-12"></div>
          <div className="absolute top-32 left-0 w-full h-px bg-white transform rotate-12"></div>
          <div className="absolute bottom-20 left-0 w-full h-px bg-white transform -rotate-6"></div>
        </div>
        
        {/* Corner Decorations */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/10 to-transparent rounded-full transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-16 translate-y-16"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in font-outfit drop-shadow-lg">
          {title}
        </h1>
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-12 py-4 text-lg font-semibold shadow-2xl">
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default ServiceHero;
