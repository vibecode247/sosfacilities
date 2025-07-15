
import React from 'react';
import Layout from '@/components/Layout';
import ServiceHero from '@/components/ServiceHero';
import DeepCleaningServices from '@/components/sections/DeepCleaningServices';
import DeepCleaningBenefits from '@/components/sections/DeepCleaningBenefits';
import CleaningProcess from '@/components/sections/CleaningProcess';
import PricingPackages from '@/components/sections/PricingPackages';
import DeepCleaningFAQ from '@/components/sections/DeepCleaningFAQ';
import DeepCleaningCTA from '@/components/sections/DeepCleaningCTA';
import DeepCleaningClientShowcase from '@/components/sections/DeepCleaningClientShowcase';

const DeepCleaning = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ServiceHero title="Deep Cleaning Services" buttonText="Get Free Estimate" />

      {/* Services Section */}
      <DeepCleaningServices />

      {/* Client Showcase Section */}
      <DeepCleaningClientShowcase />

      {/* Process Section - Moved here from below Benefits */}
      <CleaningProcess />

      {/* Benefits Section */}
      <DeepCleaningBenefits />

      {/* Pricing Section */}
      <PricingPackages />

      {/* FAQ Section */}
      <DeepCleaningFAQ />

      {/* CTA Section */}
      <DeepCleaningCTA />
    </Layout>
  );
};

export default DeepCleaning;
