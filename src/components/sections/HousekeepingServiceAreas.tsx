import React from 'react';
import { Building2, Briefcase, Factory, MapPin, Home, Heart, GraduationCap, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const HousekeepingServiceAreas = () => {
  const serviceAreas = [{
    title: "Commercial Spaces",
    icon: Building2,
    description: "Housekeeping for commercial and retail sector",
    areas: ["Malls & Theatres", "Showrooms & Shops", "Banks & Finances"],
    color: "#3B82F6",
    image: "/lovable-uploads/6f0c0ca8-8672-4775-8a7a-25ca087f0a4c.png"
  }, {
    title: "Corporate & IT Spaces",
    icon: Briefcase,
    description: "Housekeeping staff for corporate environments",
    areas: ["Offices", "IT Parks", "Business Centers"],
    color: "#8B5CF6",
    image: "/lovable-uploads/b90be705-3d21-4ed1-8b5b-a13f96160f6f.png"
  }, {
    title: "Industries & Factories",
    icon: Factory,
    description: "Industrial housekeeping and maintenance",
    areas: ["Factories", "Industries", "Warehouses"],
    color: "#F59E0B",
    image: "/lovable-uploads/890dad75-3795-4e84-bc08-f0a469a28fb2.png"
  }, {
    title: "Public & Convention Spaces",
    icon: MapPin,
    description: "Large venue housekeeping services",
    areas: ["Government Buildings", "Auditoriums", "Cultural Halls"],
    color: "#10B981",
    image: "/lovable-uploads/57a4aaf0-a9ac-44aa-ab70-961a8dfcde65.png"
  }, {
    title: "Residential Societies",
    icon: Home,
    description: "Home and community housekeeping",
    areas: ["Apartments", "Villas", "Gated Communities"],
    color: "#EC4899",
    image: "/lovable-uploads/8b084a81-5adb-4497-81e1-4a5436cd6456.png"
  }, {
    title: "Healthcare Facilities",
    icon: Heart,
    description: "Specialized medical facility housekeeping",
    areas: ["Hospitals", "Clinics", "Medical Centers"],
    color: "#EF4444",
    image: "/lovable-uploads/7773c9ab-8afe-4570-b766-289c3458a3df.png"
  }, {
    title: "Educational Institutions",
    icon: GraduationCap,
    description: "Educational environment maintenance",
    areas: ["Schools", "Colleges", "Universities"],
    color: "#6366F1",
    image: "/lovable-uploads/59702afd-0777-4aff-bf06-6fa402136a9d.png"
  }, {
    title: "Hospitality Sector",
    icon: Coffee,
    description: "Tourism and hospitality housekeeping",
    areas: ["Hotels", "Restaurants", "Resorts"],
    color: "#F59E0B",
    image: "/lovable-uploads/a6b6a17c-c433-4471-bc10-b9543721cfe0.png"
  }];
  return <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Expertise Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto"> On-demand housekeeping workforce solutions for every type of space — clean, compliant, and consistent.</p>
        </div>

        {/* Mobile-First Card Grid - Updated with 4 cards per row on desktop */}
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {serviceAreas.map((area, index) => <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl">
              {/* Image Section */}
              <div className="relative">
                <AspectRatio ratio={16 / 10}>
                  <img src={area.image} alt={`${area.title} cleaning services`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </AspectRatio>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Bottom Icon */}
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm" style={{
                backgroundColor: `${area.color}90`
              }}>
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
                    {area.areas.map((location, idx) => <span key={idx} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {location}
                      </span>)}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10 px-4">
          <p className="text-gray-600 mb-4">Need housekeeping staff for a different sector?</p>
          <div className="inline-flex items-center space-x-2 text-primary-500 font-semibold">
            <span>Contact us for customized solutions</span>
            
          </div>
        </div>
      </div>
    </section>;
};
export default HousekeepingServiceAreas;