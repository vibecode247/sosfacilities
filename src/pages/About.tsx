import React from 'react';
import Layout from '@/components/Layout';
import AboutHero from '@/components/AboutHero';
import CoreValues from '@/components/CoreValues';
const About = () => {
  return <Layout>
      <AboutHero />
      
      {/* Our Story Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-outfit">Our Story</h2>
            <div className="text-xl text-gray-600 max-w-none mx-auto">
              <p className="mb-4">SOS Facilities is a facility management services company specialized in housekeeping manpower deployment and integrated cleaning solutions. Established in 2011 and headquartered in Coimbatore, we deliver ISO 9001:2015 certified services across Tamil Nadu with a proven record of consistency, compliance, and client retention.</p>
              
              <p className="mb-4">Our core strength lies in supplying well trained, background-verified, and uniformed manpower for daily housekeeping, janitorial, and deep-cleaning requirements across corporate offices, IT parks, banks, healthcare institutions, industrial premises, and residential societies. We follow standard operating procedures (SOPs) aligned with industry benchmarks to ensure hygienic, safe, and well-maintained environments.</p>
              
              <p className="mb-4">SOS Facilities combine industry readiness, technology-enabled supervision, and process-driven service delivery to ensure your facilities remain spotless, safe, and professionally maintained — day in and day out.</p>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-outfit">Vision</h2>
            <div className="text-xl text-gray-600 max-w-4xl mx-auto">
              <p>To be the most trusted facility and housekeeping workforce management company in Tamil Nadu — setting industry benchmarks in quality, safety, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-outfit">Mission</h2>
            <div className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              <p>To provide professional housekeeping and janitorial manpower services that meet the operational needs of businesses, institutions, and residences.</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg font-semibold text-gray-700 mb-6">We are committed to:</p>
              <div className="grid gap-4 text-left">
                <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To give trained, polite staff who work with care</p>
                </div>
                <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To use good tools and safe cleaning products</p>
                </div>
                <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To always be on time and do what we promise</p>
                </div>
                <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To make customers feel satisfied and happy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />
    </Layout>;
};
export default About;