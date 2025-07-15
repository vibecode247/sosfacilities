
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
          {/* Main Story Content */}
          <div className="text-xl text-gray-600 space-y-8 leading-relaxed">
            <p>
              Every morning, <strong className="text-secondary-500">financial institutions across Tamil Nadu</strong> face a critical challenge: ensuring their ATM networks operate flawlessly while maintaining the highest standards of security and cleanliness. Behind every smooth transaction lies a story of professional maintenance that most customers never see, yet always experience.
            </p>

            <p>
              When banks partner with professional ATM maintenance services, they're not just purchasing cleaning—they're investing in <strong className="text-primary-500">compliance assurance, operational reliability, and brand reputation</strong>. Our security-cleared, well-trained professionals understand that every touchscreen cleaned, every keypad sanitized, and every security system maintained represents a bank's commitment to excellence.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border-l-4 border-primary-500 my-12">
              <h3 className="text-2xl font-bold text-secondary-500 mb-4">From the Bank's Perspective</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Professional ATM maintenance transforms our operational challenges into competitive advantages. <strong>Reduced downtime means increased revenue</strong>, while consistent cleanliness reinforces our professional image. Most importantly, comprehensive documentation and compliance with banking standards protect us from regulatory concerns, all delivered at cost-effective rates with complete transparency."
              </p>
            </div>

            <p>
              But the true measure of professional ATM maintenance isn't found in institutional benefits alone—it's witnessed in the daily experiences of thousands of customers who rely on these machines for their banking needs. Every person approaching an ATM carries expectations of safety, reliability, and hygiene that professional maintenance helps fulfill.
            </p>

            <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl border-l-4 border-secondary-500 my-12">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">From the Customer's Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "When I approach a well-maintained ATM, I immediately notice the difference. <strong>Clean touchscreens respond accurately</strong>, sanitized keypads provide peace of mind, and the overall environment feels secure and professional. Fast, reliable transactions become the norm rather than the exception, making my banking experience consistently positive."
              </p>
            </div>

            <p>
              This is where the magic of professional ATM maintenance reveals itself—<strong className="text-secondary-500">creating a seamless connection between institutional excellence and customer satisfaction</strong>. When banks invest in quality maintenance, customers experience the benefits through every interaction, building trust and loyalty that extends far beyond individual transactions.
            </p>

            <p>
              The Johnson Diversey professional cleaning solutions we employ, combined with our comprehensive documentation and safety protocols, ensure that <strong className="text-primary-500">every ATM becomes a testament to the bank's commitment to customer care</strong>. It's a story that writes itself through clean interfaces, reliable operations, and the confidence customers feel with every use.
            </p>

            <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">The Perfect Partnership</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Professional ATM maintenance creates a win-win ecosystem where <strong>banks achieve operational excellence</strong> while <strong>customers enjoy superior banking experiences</strong>. It's not just about cleaning machines—it's about building trust, ensuring reliability, and maintaining the standards that modern banking demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMMaintenanceBenefits;
