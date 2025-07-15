
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
              <p className="mb-4">Founded in 2011, SOS Facilities began with a simple mission: to provide reliable, professional cleaning services to the growing business community in Coimbatore. What started as a small family business has grown into Tamil Nadu's most trusted cleaning service provider.</p>
              
              <p className="mb-4">Our journey from a local startup to an ISO 9001:2015 certified company reflects our unwavering commitment to quality and customer satisfaction. We've built our reputation on consistent service delivery, trained professionals, and innovative cleaning solutions that exceed expectations.</p>
              
              <p className="mb-4">Today, we proudly serve over 200 clients and have satisfied more than 3000 customers across various sectors including residential, commercial, and industrial spaces. Our expertise extends to specialized services like ATM maintenance, deep cleaning, and comprehensive housekeeping solutions.</p>
              
              <p>With 13+ years of experience and a dedicated team of professionals, we continue to set new standards in the cleaning industry while maintaining our core values of integrity, excellence, and environmental responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />
    </Layout>;
};
export default About;
