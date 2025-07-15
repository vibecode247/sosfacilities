
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceAreasSection = () => {
  const serviceAreas = [
    'Chennai',
    'Coimbatore', 
    'Tiruppur',
    'Erode',
    'Madurai',
    'Salem'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-outfit">
            Our Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide professional cleaning services across major cities in Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
          {serviceAreas.map((area, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 neomorphism-card overflow-hidden"
            >
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary-500 font-outfit">
                  {area}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Don't see your location?</p>
          <Link to="/contact">
            <Button className="bg-gradient-primary hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us for Your Area
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
