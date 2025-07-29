
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { seoData } from '@/data/seoData';
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
      <SEO {...seoData.deepCleaning} />
      {/* Hero Section */}
      <ServiceHero title="Intensive Deep Cleaning Solutions for All Sectors" buttonText="Get Free Estimate" />

      {/* Services Section */}
      <DeepCleaningServices />

      {/* Process Section */}
      <CleaningProcess />

      {/* Benefits Section */}
      <DeepCleaningBenefits />

      {/* Client Showcase Section - Moved above FAQ */}
      <DeepCleaningClientShowcase />

      {/* FAQ Section */}
      <DeepCleaningFAQ />

      {/* CTA Section */}
      <DeepCleaningCTA />
    </Layout>
  );
};

export default DeepCleaning;
