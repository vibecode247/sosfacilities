
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyContactSection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Emergency Cleaning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 for urgent cleaning requirements
          </p>
          <a href="tel:+919791616004">
            <Button size="lg" className="bg-white text-secondary-500 hover:bg-gray-100 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContactSection;
