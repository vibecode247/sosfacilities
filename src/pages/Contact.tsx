
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { seoData } from '@/data/seoData';
import ContactHero from '@/components/ContactHero';
import ContactInfoCards from '@/components/sections/ContactInfoCards';
import ContactFormSection from '@/components/sections/ContactFormSection';
import EmergencyContactSection from '@/components/sections/EmergencyContactSection';

const Contact = () => {
  return (
    <Layout>
      <SEO {...seoData.contact} />
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <EmergencyContactSection />
    </Layout>
  );
};

export default Contact;
