
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 90430 06004",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us", 
      detail: "info@sosfacilities.com",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "62/2, Anna Nagar - 641045",
      description: "Serving across Tamil Nadu"
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon - Sat: 8AM - 8PM",
      description: "Sunday: Emergency only"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 neomorphism-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-secondary-500">{info.title}</h3>
                <p className="text-primary-500 font-semibold mb-1">{info.detail}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
