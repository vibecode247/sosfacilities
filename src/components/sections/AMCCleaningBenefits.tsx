
import React from 'react';

const AMCCleaningBenefits = () => {
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
            The Value of Corporate Cleaning AMC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why smart businesses choose Annual Maintenance Contracts for predictable excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Story Content */}
          <div className="text-xl text-gray-600 space-y-8 leading-relaxed">
            <p>
              Every successful corporation faces the same challenge: <strong className="text-secondary-500">maintaining consistent cleanliness standards</strong> while managing operational costs effectively. Behind every productive workplace lies a story of strategic facility management that transforms cleaning from an expense into an investment in business success.
            </p>

            <p>
              When companies choose Annual Maintenance Contracts for cleaning services, they're not just purchasing scheduled cleaning—they're investing in <strong className="text-primary-500">operational predictability, cost optimization, and brand reputation</strong>. Our comprehensive AMC solutions ensure that every office space, every workspace, and every customer touchpoint reflects the professional standards that modern businesses demand.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border-l-4 border-primary-500 my-12">
              <h3 className="text-2xl font-bold text-secondary-500 mb-4">From the Corporate Perspective</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "AMC contracts transform our facility management from reactive to proactive. <strong>Predictable budgeting means better financial planning</strong>, while consistent service quality ensures our workplace always meets professional standards. Most importantly, dedicated account management and priority service response give us peace of mind, knowing our facility needs are professionally handled."
              </p>
            </div>

            <p>
              But the true value of cleaning AMC contracts extends beyond operational efficiency—it's reflected in the daily experiences of employees, clients, and visitors who interact with these professionally maintained spaces. Every person entering a well-maintained office environment immediately experiences the difference that systematic care makes.
            </p>

            <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl border-l-4 border-secondary-500 my-12">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">The Workplace Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "When I walk into our office each morning, I immediately notice the consistent cleanliness. <strong>Sanitized workstations provide confidence</strong>, spotless common areas enhance productivity, and well-maintained washrooms reflect corporate professionalism. The reliability of AMC services means our workplace consistently supports our best work."
              </p>
            </div>

            <p>
              This is where the strategic advantage of cleaning AMC contracts becomes clear—<strong className="text-secondary-500">creating a seamless connection between cost management and quality assurance</strong>. When businesses invest in structured maintenance contracts, they gain predictable costs, guaranteed service levels, and the professional consistency that supports their corporate image.
            </p>

            <p>
              The dedicated account management, regular quality audits, and service level agreements we provide ensure that <strong className="text-primary-500">every corporate space becomes a testament to professional excellence</strong>. It's a partnership that writes itself through consistent quality, reliable service, and the confidence that comes with knowing your facility management is in expert hands.
            </p>

            <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">Strategic Partnership</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Corporate cleaning AMC contracts create a win-win partnership where <strong>businesses achieve cost predictability and quality assurance</strong> while <strong>employees and clients experience consistently professional environments</strong>. It's not just about cleaning contracts—it's about building the foundation for business success through professional facility management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMCCleaningBenefits;
