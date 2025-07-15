
import React from 'react';
import ClientLogoRow from '@/components/ui/ClientLogoRow';
import { deepCleaningLogos1, deepCleaningLogos2, deepCleaningLogos3 } from '@/data/deepCleaningLogos';

const DeepCleaningClientShowcase = () => {
  return (
    <section className="pt-16 pb-8 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We proudly serve diverse clients across industries, delivering reliable deep cleaning solutions
          </p>
        </div>

        {/* First Row of Logos - Fast Speed */}
        <ClientLogoRow 
          logos={deepCleaningLogos1} 
          animationClass="animate-marquee-left-fast" 
        />

        {/* Second Row of Logos - Slow Speed, Right Direction */}
        <ClientLogoRow 
          logos={deepCleaningLogos2} 
          animationClass="animate-marquee-right-slow" 
        />

        {/* Third Row of Logos - Slow Speed */}
        <ClientLogoRow 
          logos={deepCleaningLogos3} 
          animationClass="animate-marquee-left-slow" 
          marginClass=""
        />
      </div>
    </section>
  );
};

export default DeepCleaningClientShowcase;
