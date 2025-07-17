import React from 'react';
import { Building2, Briefcase, Factory, MapPin, Home, Heart, GraduationCap, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

const HousekeepingServiceAreas = () => {
  const serviceAreas = [{
    title: "Commercial & Retail",
    icon: Building2,
    description: "Professional cleaning for commercial spaces",
    areas: ["Malls & Theatres", "Showrooms & Shops", "Banks & Finances"],
    color: "#3B82F6",
    image: "/lovable-uploads/6f0c0ca8-8672-4775-8a7a-25ca087f0a4c.png",
    staffCount: "150+",
    responseTime: "2-4 hrs"
  }, {
    title: "Corporate & IT Spaces",
    icon: Briefcase,
    description: "Dedicated staff for corporate environments",
    areas: ["Offices", "IT Parks", "Business Centers"],
    color: "#8B5CF6",
    image: "/lovable-uploads/b90be705-3d21-4ed1-8b5b-a13f96160f6f.png",
    staffCount: "200+",
    responseTime: "1-2 hrs"
  }, {
    title: "Industries & Factories",
    icon: Factory,
    description: "Industrial cleaning and maintenance",
    areas: ["Factories", "Industries", "Warehouses"],
    color: "#F59E0B",
    image: "/lovable-uploads/890dad75-3795-4e84-bc08-f0a469a28fb2.png",
    staffCount: "120+",
    responseTime: "4-6 hrs"
  }, {
    title: "Public & Convention Spaces",
    icon: MapPin,
    description: "Large venue cleaning services",
    areas: ["Government Buildings", "Auditoriums", "Cultural Halls"],
    color: "#10B981",
    image: "/lovable-uploads/57a4aaf0-a9ac-44aa-ab70-961a8dfcde65.png",
    staffCount: "80+",
    responseTime: "3-5 hrs"
  }, {
    title: "Residential Spaces",
    icon: Home,
    description: "Home and community cleaning",
    areas: ["Apartments", "Villas", "Gated Communities"],
    color: "#EC4899",
    image: "/lovable-uploads/8b084a81-5adb-4497-81e1-4a5436cd6456.png",
    staffCount: "300+",
    responseTime: "1-3 hrs"
  }, {
    title: "Healthcare Facilities",
    icon: Heart,
    description: "Specialized medical facility cleaning",
    areas: ["Hospitals", "Clinics", "Medical Centers"],
    color: "#EF4444",
    image: "/lovable-uploads/7773c9ab-8afe-4570-b766-289c3458a3df.png",
    staffCount: "90+",
    responseTime: "1-2 hrs"
  }, {
    title: "Educational Institutions",
    icon: GraduationCap,
    description: "Educational environment maintenance",
    areas: ["Schools", "Colleges", "Universities"],
    color: "#6366F1",
    image: "/lovable-uploads/59702afd-0777-4aff-bf06-6fa402136a9d.png",
    staffCount: "180+",
    responseTime: "2-4 hrs"
  }, {
    title: "Hospitality Sector",
    icon: Coffee,
    description: "Tourism and hospitality cleaning",
    areas: ["Hotels", "Restaurants", "Resorts"],
    color: "#F59E0B",
    image: "/lovable-uploads/a6b6a17c-c433-4471-bc10-b9543721cfe0.png",
    staffCount: "250+",
    responseTime: "1-2 hrs"
  }];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            On-demand Staffing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional housekeeping workforce staffing for diverse industries and sectors
          </p>
        </div>

        {/* Mobile-First Card Grid - Updated with 4 cards per row on desktop */}
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {serviceAreas.map((area, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl"
            >
              {/* Image Section */}
              <div className="relative">
                <AspectRatio ratio={16 / 10}>
                  <img 
                    src={area.image} 
                    alt={`${area.title} cleaning services`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <Badge 
                    className="text-white text-xs font-medium px-2 py-1"
                    style={{ backgroundColor: area.color }}
                  >
                    {area.staffCount} Staff
                  </Badge>
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: area.color }}
                    ></div>
                    <span className="text-xs font-medium text-gray-700">
                      {area.responseTime}
                    </span>
                  </div>
                </div>

                {/* Bottom Icon */}
                <div className="absolute bottom-3 left-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                    style={{ backgroundColor: `${area.color}90` }}
                  >
                    <area.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-5 space-y-4">
                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 font-outfit leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Service Areas */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Coverage Areas
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {area.areas.map((location, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10 px-4">
          <p className="text-gray-600 mb-4">Need housekeeping staff for a different sector?</p>
          <div className="inline-flex items-center space-x-2 text-primary-500 font-semibold">
            <span>Contact us for customized solutions</span>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousekeepingServiceAreas;
