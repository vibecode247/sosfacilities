
import React from 'react';
import { CheckCircle, Sparkles, Users, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [{
    title: "Deep Cleaning",
    description: "Comprehensive cleaning solutions for homes and offices with eco-friendly products.",
    icon: Sparkles,
    image: "/lovable-uploads/f5332c6e-828f-4a8e-89d7-01309f501ed8.png",
    features: ["Eco-friendly products", "Professional equipment", "Detailed sanitization"],
    link: "/deep-cleaning"
  }, {
    title: "Housekeeping Workforce",
    description: "Trained and reliable housekeeping staff for residential and commercial properties.",
    icon: Users,
    image: "/lovable-uploads/470f93b0-1f9a-4376-ad97-b735458e77df.png",
    features: ["Trained professionals", "Background verified", "Flexible scheduling"],
    link: "/housekeeping"
  }, {
    title: "ATM Maintenance",
    description: "Specialized cleaning and maintenance services for ATM machines and banking facilities.",
    icon: Building,
    image: "/lovable-uploads/c94c9938-1a10-4d0e-9e3d-0e4d9ed68893.png",
    features: ["Security compliant", "Technical expertise", "24/7 availability"],
    link: "/atm-maintenance"
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-outfit">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to meet your specific needs
          </p>
        </div>

        {/* Desktop and Mobile Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:hidden lg:grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 neomorphism-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-500 font-outfit">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button className="w-full bg-gradient-primary group-hover:shadow-lg transition-all duration-300">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          {/* Deep Cleaning - Full Width */}
          <div className="mb-8">
            {(() => {
              const IconComponent = services[0].icon;
              return (
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 neomorphism-card overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={services[0].image} 
                      alt={services[0].title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-secondary-500 font-outfit">{services[0].title}</h3>
                    <p className="text-gray-600 mb-4">{services[0].description}</p>
                    <ul className="space-y-2 mb-6">
                      {services[0].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={services[0].link}>
                      <Button className="w-full bg-gradient-primary group-hover:shadow-lg transition-all duration-300">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })()}
          </div>

          {/* Housekeeping Workforce and ATM Maintenance - Two Columns */}
          <div className="grid grid-cols-2 gap-8">
            {services.slice(1).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index + 1} className="group hover:shadow-xl transition-all duration-500 border-0 neomorphism-card overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-secondary-500 font-outfit">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full bg-gradient-primary group-hover:shadow-lg transition-all duration-300">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
