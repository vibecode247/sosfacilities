
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            The Deep Cleaning Transformation Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where comprehensive restoration meets lasting cleanliness through specialized deep cleaning expertise
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Story Content */}
          <div className="text-xl text-gray-600 space-y-8 leading-relaxed">
            <p>
              When spaces accumulate months or years of hidden grime, everyday cleaning simply isn't enough. <strong className="text-secondary-500">Property owners across Tamil Nadu</strong> face the reality that deep, embedded dirt, stubborn stains, and neglected areas require specialized attention that goes far beyond routine maintenance. Whether it's a newly purchased home, post-construction debris, or simply the need for a fresh start, deep cleaning represents a complete transformation.
            </p>

            <p>
              Professional deep cleaning services understand that every surface tells a story of neglect that can be rewritten. Our trained specialists tackle <strong className="text-primary-500">grout restoration, appliance deep cleaning, ceiling cobweb removal, and hard-to-reach corner sanitization</strong> with precision tools and techniques that homeowners simply don't possess. The result isn't just cleanliness—it's restoration to like-new condition.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border-l-4 border-primary-500 my-12">
              <h3 className="text-2xl font-bold text-secondary-500 mb-4">From the Property Owner's Perspective</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Deep cleaning transforms our investment into something truly special. <strong>Hidden allergens are eliminated, surfaces regain their original luster</strong>, and every room feels renewed and refreshed. Most importantly, we gain confidence that our space is hygienically clean from top to bottom, while protecting our investment through proper maintenance that extends the life of fixtures, appliances, and finishes."
              </p>
            </div>

            <p>
              But the true impact of deep cleaning extends beyond the immediate visual transformation—it creates healthier living environments where families can thrive. Every parent understands the challenge of maintaining truly clean spaces when daily life creates constant mess, and traditional cleaning methods can only address surface-level concerns.
            </p>

            <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl border-l-4 border-secondary-500 my-12">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">From the Family's Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "After professional deep cleaning, our home feels completely transformed. <strong>Air quality improves dramatically as hidden dust and allergens are eliminated</strong>, while previously neglected areas become pristine and hygienic. Most beautifully, we experience the psychological boost of living in a space that's been restored to its full potential—creating an environment where wellness and happiness naturally flourish."
              </p>
            </div>

            <p>
              This is where the magic of professional deep cleaning reveals itself—<strong className="text-secondary-500">creating a foundation of cleanliness that makes ongoing maintenance effortless</strong>. When businesses invest in comprehensive deep cleaning, they create impressive spaces that reflect professionalism and attention to detail. When families choose deep cleaning services, they establish a baseline of cleanliness that transforms daily living.
            </p>

            <p>
              Our expertise in Chennai's specific challenges—from monsoon moisture damage to construction dust infiltration—combined with advanced equipment and specialized techniques, ensures that <strong className="text-primary-500">every space achieves a level of cleanliness that becomes the new standard</strong>. It's a story that unfolds through spotless grout that looks brand new, appliances that function like new, and the satisfaction that comes from knowing every corner has been professionally addressed.
            </p>

            <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">The Complete Transformation</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Professional deep cleaning creates a dramatic reset where <strong>properties achieve their full potential</strong> while <strong>occupants experience the profound impact of truly clean environments</strong>. It's not just about removing dirt—it's about creating spaces where health, productivity, and peace of mind naturally thrive, supported by the thoroughness that only professional expertise can deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepCleaningBenefits;
