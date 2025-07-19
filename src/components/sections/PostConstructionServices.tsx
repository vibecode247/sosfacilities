
import React from 'react';
import { Trash2, Sparkles, WindowIcon, FloorPlan, Paintbrush, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PostConstructionServices = () => {
  const services = [
    {
      icon: Trash2,
      title: "Construction Debris Removal",
      description: "Complete removal of construction waste and leftover materials",
      details: ["Dust and debris clearance", "Material disposal management", "Site waste sorting", "Eco-friendly disposal methods", "Clean site handover"],
      backgroundImage: "/lovable-uploads/56dfadc0-ae1c-4f2d-bd64-9f24edccd25e.png"
    },
    {
      icon: Sparkles,
      title: "Deep Dust & Dirt Cleaning",
      description: "Intensive cleaning to remove construction dust from all surfaces",
      details: ["High-level dusting", "Surface sanitization", "Air vent cleaning", "Ceiling and wall cleaning", "HVAC system cleaning"],
      backgroundImage: "/lovable-uploads/3122335d-d1bb-492d-8da0-e0d1b6505ecd.png"
    },
    {
      icon: WindowIcon,
      title: "Window & Glass Cleaning",
      description: "Professional cleaning of all glass surfaces and window fixtures",
      details: ["Interior and exterior glass", "Window frame cleaning", "Sill and track cleaning", "Mirror and glass door cleaning", "Streak-free finish guarantee"],
      backgroundImage: "/lovable-uploads/09b19526-e0bb-49e2-bcd1-0a87676c1673.png"
    },
    {
      icon: FloorPlan,
      title: "Floor Restoration & Cleaning",
      description: "Complete floor cleaning, polishing, and restoration services",
      details: ["Deep floor scrubbing", "Grout cleaning and sealing", "Floor polishing and waxing", "Carpet deep cleaning", "Anti-slip treatment application"],
      backgroundImage: "/lovable-uploads/56dfadc0-ae1c-4f2d-bd64-9f24edccd25e.png"
    },
    {
      icon: Paintbrush,
      title: "Paint Splatter Removal",
      description: "Safe removal of paint stains and construction residue",
      details: ["Paint spot removal", "Adhesive residue cleaning", "Surface restoration", "Protective coating application", "Damage-free cleaning methods"],
      backgroundImage: "/lovable-uploads/3122335d-d1bb-492d-8da0-e0d1b6505ecd.png"
    },
    {
      icon: Lightbulb,
      title: "Fixture & Fitting Cleaning",
      description: "Detailed cleaning of all installed fixtures and fittings",
      details: ["Light fixture cleaning", "Switch and outlet cleaning", "Hardware polishing", "Appliance cleaning", "Fixture protection application"],
      backgroundImage: "/lovable-uploads/09b19526-e0bb-49e2-bcd1-0a87676c1673.png"
    },
    {
      icon: Shield,
      title: "Final Sanitization",
      description: "Complete sanitization for safe occupancy and use",
      details: ["Antibacterial treatment", "Air quality improvement", "Surface disinfection", "Washroom sanitization", "Move-in ready certification"],
      backgroundImage: "/lovable-uploads/56dfadc0-ae1c-4f2d-bd64-9f24edccd25e.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Post-Construction Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cleaning solutions to transform construction sites into move-in ready spaces
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
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
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
              <h3 className="text-3xl font-bold mb-4">Project Completion Ready</h3>
              <div className="w-24 h-1 bg-white/80 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg leading-relaxed opacity-90">
                Our post-construction cleaning ensures your project is completely ready for occupancy. From initial debris removal to final sanitization, we handle every detail with precision and care. Get move-in ready spaces that meet health and safety standards, delivered on time and within budget.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PostConstructionServices;
