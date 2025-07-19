
import React from 'react';
import { Building2, Users, Sparkles, Droplets, FloorPlan, WindowIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AMCCleaningServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Office Deep Cleaning AMC",
      description: "Comprehensive annual contracts for office deep cleaning and maintenance",
      details: ["Quarterly deep cleaning schedules", "High-touch surface sanitization", "Carpet and upholstery cleaning", "Air vent and duct cleaning", "Complete workstation sanitization"],
      backgroundImage: "/lovable-uploads/3122335d-d1bb-492d-8da0-e0d1b6505ecd.png"
    },
    {
      icon: Users,
      title: "Housekeeping Staff AMC",
      description: "Annual contracts for dedicated housekeeping manpower solutions",
      details: ["Trained housekeeping professionals", "Flexible staffing arrangements", "Regular performance monitoring", "Staff replacement guarantee", "Attendance and productivity tracking"],
      backgroundImage: "/lovable-uploads/09b19526-e0bb-49e2-bcd1-0a87676c1673.png"
    },
    {
      icon: Sparkles,
      title: "Facility Cleaning AMC",
      description: "Complete facility maintenance contracts for corporate environments",
      details: ["Daily cleaning schedules", "Common area maintenance", "Reception and lobby cleaning", "Conference room upkeep", "Pantry and kitchen cleaning"],
      backgroundImage: "/lovable-uploads/56dfadc0-ae1c-4f2d-bd64-9f24edccd25e.png"
    },
    {
      icon: Droplets,
      title: "Washroom Maintenance AMC",
      description: "Specialized washroom cleaning and maintenance contracts",
      details: ["Daily sanitization protocols", "Consumables replenishment", "Fixture maintenance and repair", "Odor control systems", "Hygiene compliance monitoring"],
      backgroundImage: "/lovable-uploads/3122335d-d1bb-492d-8da0-e0d1b6505ecd.png"
    },
    {
      icon: FloorPlan,
      title: "Floor Care & Polishing AMC",
      description: "Professional floor maintenance and restoration contracts",
      details: ["Regular floor polishing schedules", "Deep scrubbing and cleaning", "Marble and tile restoration", "Anti-slip treatment application", "Floor protection and sealing"],
      backgroundImage: "/lovable-uploads/09b19526-e0bb-49e2-bcd1-0a87676c1673.png"
    },
    {
      icon: WindowIcon,
      title: "Window Cleaning AMC",
      description: "Annual contracts for comprehensive window and glass cleaning",
      details: ["High-rise window cleaning", "Interior and exterior glass", "Frame and sill cleaning", "Safety protocol compliance", "Weather-resistant scheduling"],
      backgroundImage: "/lovable-uploads/56dfadc0-ae1c-4f2d-bd64-9f24edccd25e.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">AMC Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Annual Maintenance Contracts for all your corporate cleaning and housekeeping needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 neomorphism-card">
                {/* Square Image with Bottom Banner */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={service.backgroundImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                  />
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
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Promotional Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Flexible Contract Terms</h3>
              <div className="w-24 h-1 bg-white/80 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg leading-relaxed opacity-90">
                Our AMC contracts are designed to be flexible and cost-effective. Choose from quarterly, half-yearly, or annual payment options. Get dedicated account management, priority service response, and significant cost savings compared to ad-hoc cleaning services. All contracts include performance guarantees and service level agreements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AMCCleaningServices;
