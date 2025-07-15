import React from 'react';
import { Shield, CreditCard, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const ATMMaintenanceServices = () => {
  const services = [{
    icon: CreditCard,
    title: "Interior Cleaning",
    description: "Complete internal cleaning and sanitization",
    details: ["Cash dispenser cleaning and maintenance", "Card reader cleaning and calibration", "Receipt printer cleaning and paper refill", "Internal component dusting and sanitization", "Garbage removal from cash compartment"],
    backgroundImage: "/lovable-uploads/3122335d-d1bb-492d-8da0-e0d1b6505ecd.png"
  }, {
    icon: Shield,
    title: "Exterior Cleaning",
    description: "Professional exterior maintenance and screen care",
    details: ["Touch screen cleaning with anti-bacterial solutions", "Keypad cleaning and sanitization", "Exterior panel cleaning and polishing", "Branding and signage maintenance", "Weather protection checks"],
    backgroundImage: "/lovable-uploads/09b19526-e0bb-49e2-bcd1-0a87676c1673.png"
  }, {
    icon: Trash2,
    title: "Waste Management",
    description: "Complete garbage removal inside and outside ATM",
    details: ["Internal waste bin emptying", "External area garbage collection", "Receipt disposal management", "Surrounding area cleaning", "Sanitary waste handling"],
    backgroundImage: "/lovable-uploads/56dfadc0-ae1c-4f2d-bd64-9f24edccd25e.png"
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">ATM Care</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive cleaning and maintenance solutions for ATM center using Johnson Diversey products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 neomorphism-card ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                {/* Square Image with Bottom Banner */}
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-square md:aspect-[2/1] lg:aspect-square' : 'aspect-square'}`}>
                  <img src={service.backgroundImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  {/* Bottom Banner with Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-primary/80 backdrop-blur-sm text-white">
                    <div className="px-6 py-4">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                      {/* Simple animated underline */}
                      <div className="w-16 h-0.5 bg-white/80 mt-2 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Content Below Image */}
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{detail}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default ATMMaintenanceServices;