
import React from 'react';

const DeepCleaningBenefits = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-24 h-24 border border-primary-200 rounded-full animate-float"></div>
        <div className="absolute top-32 right-24 w-16 h-16 border border-secondary-200 transform rotate-45 animate-float" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border border-primary-300 rounded-full animate-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 border border-secondary-300 transform rotate-12 animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-5xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
            <h3 className="text-2xl font-bold gradient-text mb-4">The Complete Transformation</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Professional deep cleaning creates a dramatic reset where <strong>properties achieve their full potential</strong> while <strong>occupants experience the profound impact of truly clean environments</strong>. It's not just about removing dirt—it's about creating spaces where health, productivity, and peace of mind naturally thrive, supported by the thoroughness that only professional expertise can deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepCleaningBenefits;
