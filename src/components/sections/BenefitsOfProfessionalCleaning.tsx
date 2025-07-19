import React from 'react';
const BenefitsOfProfessionalCleaning = () => {
  return <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-3">
        
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
          {/* Main Story Content */}
          <div className="text-xl text-gray-600 space-y-8 leading-relaxed">
            

            

            

            

            

            

            

            <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">The Perfect Partnership</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Professional cleaning creates a harmonious ecosystem where <strong>businesses achieve operational excellence</strong> while <strong>families reclaim their most valuable resource—time</strong>. It's not just about cleaning spaces—it's about creating environments where success and happiness naturally flourish, supported by the reliability that modern life demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsOfProfessionalCleaning;