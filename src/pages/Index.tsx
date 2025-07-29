
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { seoData, localBusinessSchema } from '@/data/seoData';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ServiceAreasSection from '@/components/sections/ServiceAreasSection';
import TrustSection from '@/components/sections/TrustSection';
import CleaningSolutionsCarousel from '@/components/sections/CleaningSolutionsCarousel';
import CounterSection from '@/components/sections/CounterSection';
import HappyCustomersSection from '@/components/sections/HappyCustomersSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <SEO {...seoData.home} structuredData={localBusinessSchema} />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CleaningSolutionsCarousel />
      <CounterSection />
      <HappyCustomersSection />
      <TestimonialSection />
      <CTASection />
      <ServiceAreasSection />
    </Layout>
  );
};

export default Index;
