
import React from 'react';

const ATMMaintenanceBenefits = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            The Story of Professional ATM Maintenance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where institutional excellence meets customer satisfaction through meticulous care
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
            <h3 className="text-2xl font-bold gradient-text mb-4">The Perfect Partnership</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Professional ATM maintenance creates a win-win ecosystem where <strong>banks achieve operational excellence</strong> while <strong>customers enjoy superior banking experiences</strong>. It's not just about cleaning machines—it's about building trust, ensuring reliability, and maintaining the standards that modern banking demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMMaintenanceBenefits;
