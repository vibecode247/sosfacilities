
import React from 'react';

const BenefitsOfProfessionalCleaning = () => {
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
            The Story of Professional Cleaning Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where workplace productivity meets family well-being through exceptional cleaning services
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Story Content */}
          <div className="text-xl text-gray-600 space-y-8 leading-relaxed">
            <p>
              Every day across Tamil Nadu, <strong className="text-secondary-500">business owners and families</strong> face the same universal challenge: maintaining clean, healthy environments while focusing on what matters most—growing their business or spending quality time with loved ones. The humidity of Chennai, the dust from busy streets, and the demands of monsoon seasons create unique cleaning challenges that require more than occasional attention.
            </p>

            <p>
              When businesses choose professional cleaning services, they're not just outsourcing a task—they're investing in <strong className="text-primary-500">employee productivity, professional image, and operational efficiency</strong>. Our trained teams understand that every sparkling office space represents a company's commitment to excellence, while every sanitized workspace contributes to reduced sick days and improved staff morale.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border-l-4 border-primary-500 my-12">
              <h3 className="text-2xl font-bold text-secondary-500 mb-4">From the Business Owner's Perspective</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Professional cleaning transforms our workplace environment into a competitive advantage. <strong>Clean offices impress clients and boost employee satisfaction</strong>, while consistent maintenance protects our investment in furniture and equipment. Most importantly, compliance with health regulations and cost-effective solutions free us to focus on growing our business, knowing our workspace always reflects our professional standards."
              </p>
            </div>

            <p>
              But the true value of professional cleaning extends far beyond corporate environments—it reaches into the homes where Tamil Nadu families create their most precious memories. Every parent juggling work responsibilities understands the constant challenge of maintaining a clean, healthy home while finding time for what truly matters: family moments, personal growth, and rest.
            </p>

            <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl border-l-4 border-secondary-500 my-12">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">From the Family's Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "When professional cleaners maintain our home, the difference is immediately felt. <strong>Clean spaces become healthier environments for our children</strong>, while deep cleaning expertise tackles monsoon moisture and allergens that we simply couldn't handle ourselves. Most beautifully, weekends transform from cleaning marathons into precious family time, creating memories that last a lifetime."
              </p>
            </div>

            <p>
              This is where the magic of professional cleaning reveals itself—<strong className="text-secondary-500">creating a seamless bridge between business success and family happiness</strong>. When companies invest in quality cleaning, employees return to fresh, motivating workspaces. When families choose professional services, parents gain the gift of time while children grow up in consistently clean, healthy environments.
            </p>

            <p>
              Our specialized expertise in Chennai's unique climate challenges, combined with our understanding of local preferences and flexible scheduling, ensures that <strong className="text-primary-500">every space becomes a testament to care and professionalism</strong>. It's a story that writes itself through spotless offices that win clients, healthy homes that nurture families, and the peace of mind that comes from knowing your environment is in expert hands.
            </p>

            <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">The Perfect Partnership</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Professional cleaning creates a harmonious ecosystem where <strong>businesses achieve operational excellence</strong> while <strong>families reclaim their most valuable resource—time</strong>. It's not just about cleaning spaces—it's about creating environments where success and happiness naturally flourish, supported by the reliability that modern life demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfProfessionalCleaning;
