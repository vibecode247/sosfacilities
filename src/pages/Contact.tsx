
import React from 'react';
import Layout from '@/components/Layout';
import ContactHero from '@/components/ContactHero';
import ContactInfoCards from '@/components/sections/ContactInfoCards';
import ContactFormSection from '@/components/sections/ContactFormSection';
import EmergencyContactSection from '@/components/sections/EmergencyContactSection';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <EmergencyContactSection />
    </Layout>
  );
};

export default Contact;
