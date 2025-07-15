
import React from 'react';
import { CheckCircle, Star, IndianRupee, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PricingPackages = () => {
  const pricingPackages = [
    {
      name: "Residential Deep Clean",
      price: "2,999",
      subtitle: "Starting from",
      description: "Perfect for 1-3 BHK homes",
      features: [
        "Kitchen deep cleaning",
        "Bathroom sanitization", 
        "Floor polishing",
        "Window cleaning",
        "Furniture dusting",
        "Cobweb removal"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Commercial Deep Clean", 
      price: "5,999",
      subtitle: "Starting from",
      description: "Ideal for office spaces",
      features: [
        "Workstation sanitization",
        "Meeting rooms cleaning",
        "Common area cleaning", 
        "Carpet cleaning",
        "Computer & keyboard cleaning",
        "Glass & fixture cleaning"
      ],
      popular: true,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Premium Deep Clean",
      price: "8,999", 
      subtitle: "Starting from",
      description: "For large commercial spaces",
      features: [
        "Specialized equipment cleaning",
        "Post-construction cleanup",
        "Upholstery deep cleaning",
        "Air duct cleaning",
        "High-rise window cleaning",
        "Industrial-grade sanitization"
      ],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Deep Cleaning Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your deep cleaning needs in Coimbatore. Professional service with guaranteed satisfaction.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Single responsive grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className="relative pt-7 pb-4">
                <Card className={`h-full hover:shadow-2xl transition-all duration-500 border border-gray-200/50 bg-white/90 backdrop-blur-sm hover:bg-white/95 overflow-visible group ${pkg.popular ? 'ring-2 ring-primary-500 md:scale-105' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 text-sm font-semibold z-50">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Home className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-secondary-500">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{pkg.description}</p>
                    <div className="mb-4 md:mb-6">
                      <div className="text-3xl md:text-4xl font-bold text-red-600 mb-1 flex items-center justify-center">
                        <IndianRupee className="w-6 h-6 md:w-8 md:h-8 mr-1" strokeWidth={3} />
                        {pkg.price}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">{pkg.subtitle}</div>
                    </div>
                    <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-left">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0 mr-2 md:mr-3" />
                          <span className="text-gray-600 text-xs md:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' : 'bg-primary-500 hover:bg-primary-600'} text-white py-2 md:py-3 text-sm md:text-lg font-semibold transition-all duration-300`}>
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
