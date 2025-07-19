
import React from 'react';

const PostConstructionBenefits = () => {
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
            The Critical Importance of Post-Construction Cleaning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where construction completion meets occupancy readiness through professional cleaning
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Story Content */}
          <div className="text-xl text-gray-600 space-y-8 leading-relaxed">
            <p>
              Every construction project reaches a critical juncture: <strong className="text-secondary-500">the transition from construction site to usable space</strong>. Behind every successful project handover lies a comprehensive cleaning process that transforms dusty construction areas into pristine, move-in ready environments that meet health and safety standards.
            </p>

            <p>
              When contractors and developers choose professional post-construction cleaning services, they're not just purchasing cleanup—they're investing in <strong className="text-primary-500">project completion assurance, safety compliance, and client satisfaction</strong>. Our specialized cleaning protocols ensure that every surface, every corner, and every detail meets the exacting standards that modern construction projects demand.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border-l-4 border-primary-500 my-12">
              <h3 className="text-2xl font-bold text-secondary-500 mb-4">From the Developer's Perspective</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Professional post-construction cleaning transforms our project handover process completely. <strong>Systematic debris removal and deep cleaning ensure compliance</strong> with safety standards, while thorough sanitization provides confidence for immediate occupancy. Most importantly, move-in ready spaces enhance client satisfaction and protect our reputation for quality delivery."
              </p>
            </div>

            <p>
              But the true value of post-construction cleaning extends beyond project completion—it's experienced by the first occupants who enter these professionally prepared spaces. Every person walking into a freshly cleaned building immediately notices the difference between amateur cleanup and professional post-construction cleaning.
            </p>

            <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl border-l-4 border-secondary-500 my-12">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">The Occupancy Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "When we moved into our newly constructed office, the difference was immediately apparent. <strong>Dust-free surfaces and spotless fixtures provided immediate comfort</strong>, while sanitized washrooms and clean air systems ensured a healthy environment from day one. Professional post-construction cleaning meant we could focus on our business instead of dealing with construction residue."
              </p>
            </div>

            <p>
              This is where the strategic importance of post-construction cleaning becomes evident—<strong className="text-secondary-500">creating the essential bridge between construction completion and successful occupancy</strong>. When projects invest in comprehensive cleaning services, they ensure smooth handovers, satisfied clients, and spaces that are truly ready for their intended use.
            </p>

            <p>
              The specialized equipment, safety protocols, and systematic cleaning processes we employ ensure that <strong className="text-primary-500">every construction project concludes with spaces that exceed occupancy expectations</strong>. It's a service that speaks for itself through pristine environments, healthy air quality, and the peace of mind that comes with professional project completion.
            </p>

            <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">Project Success Partnership</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Post-construction cleaning creates the perfect partnership where <strong>developers achieve successful project handovers</strong> while <strong>occupants experience spaces that are immediately livable and healthy</strong>. It's not just about cleaning up—it's about ensuring every construction project reaches its full potential through professional completion services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostConstructionBenefits;
