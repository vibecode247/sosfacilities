
import React from 'react';
import Layout from '@/components/Layout';
import ServiceHero from '@/components/ServiceHero';
import AMCCleaningServices from '@/components/sections/AMCCleaningServices';
import AMCCleaningBenefits from '@/components/sections/AMCCleaningBenefits';
import AMCCleaningProcess from '@/components/sections/AMCCleaningProcess';
import AMCCleaningFAQ from '@/components/sections/AMCCleaningFAQ';
import AMCCleaningCTA from '@/components/sections/AMCCleaningCTA';
import AMCCleaningClientShowcase from '@/components/sections/AMCCleaningClientShowcase';

const AMCCorporates = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ServiceHero title="Annual Maintenance Contracts for Corporates" buttonText="Get AMC Proposal" />

      {/* Services Section */}
      <AMCCleaningServices />

      {/* Client Showcase Section */}
      <AMCCleaningClientShowcase />

      {/* Process Section */}
      <AMCCleaningProcess />

      {/* Benefits Section */}
      <AMCCleaningBenefits />

      {/* FAQ Section */}
      <AMCCleaningFAQ />

      {/* CTA Section */}
      <AMCCleaningCTA />
    </Layout>
  );
};

export default AMCCorporates;
