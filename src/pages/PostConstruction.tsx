
import React from 'react';
import Layout from '@/components/Layout';
import ServiceHero from '@/components/ServiceHero';
import PostConstructionServices from '@/components/sections/PostConstructionServices';
import PostConstructionBenefits from '@/components/sections/PostConstructionBenefits';
import PostConstructionProcess from '@/components/sections/PostConstructionProcess';
import PostConstructionFAQ from '@/components/sections/PostConstructionFAQ';
import PostConstructionCTA from '@/components/sections/PostConstructionCTA';
import PostConstructionClientShowcase from '@/components/sections/PostConstructionClientShowcase';

const PostConstruction = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ServiceHero title="Professional Post-Construction Deep Cleaning Services" buttonText="Get Cleaning Quote" />

      {/* Services Section */}
      <PostConstructionServices />

      {/* Client Showcase Section */}
      <PostConstructionClientShowcase />

      {/* Process Section */}
      <PostConstructionProcess />

      {/* Benefits Section */}
      <PostConstructionBenefits />

      {/* FAQ Section */}
      <PostConstructionFAQ />

      {/* CTA Section */}
      <PostConstructionCTA />
    </Layout>
  );
};

export default PostConstruction;
