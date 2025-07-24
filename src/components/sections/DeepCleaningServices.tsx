
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceDetailsModal from '@/components/ServiceDetailsModal';

const DeepCleaningServices = () => {
  const [selectedService, setSelectedService] = useState<typeof mainServices[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainServices = [
    {
      title: "Full Home Cleaning",
      description: "Comprehensive residential cleaning for apartments and villas",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      isImage: true,
      imageUrl: "/lovable-uploads/7fef2693-0bdc-42ac-9893-c087a6c5b073.png",
      details: [{
        name: "Apartment Cleaning",
        services: ["Restroom Cleaning", "Kitchen Cleaning", "Window Cleaning", "Furniture Cleaning", "Shampoo wash for Sofa", "Floor Cleaning", "Vacuum Cleaning", "Ceiling Dusting", "Cobweb Cleaning", "Fixtures Cleaning", "Doors & Frames Cleaning", "Fans & Switch Boards Cleaning", "Chair, Table, & Cabinets Cleaning", "Carpet & Mattress Cleaning", "Glass Cleaning", "Wall Cleaning"]
      }, {
        name: "Villa Cleaning",
        services: ["All Apartment Cleaning Services", "Terrace Cleaning", "Parking Area Cleaning", "Garden Cleaning", "Exterior wall dusting & cobweb cleaning"]
      }]
    }, {
      title: "IT Sector AMC Cleaning",
      description: "Specialized maintenance cleaning for IT offices and workspaces",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      isImage: true,
      imageUrl: "/lovable-uploads/c3ed7dc4-32f9-46ea-80fd-326466025591.png",
      details: [{
        name: "Office Deep Clean",
        services: ["Floor Cleaning", "Restroom Cleaning", "Glass cleaning", "Shampoo wash for chair and sofa", "Carpet Cleaning", "Window Cleaning", "Furniture & Fixtures Cleaning", "Dust free Vacuum Cleaning", "Cobweb Cleaning", "Computer & keyboard Cleaning", "Fan, Switch, Door cleaning"]
      }]
    }, {
      title: "Industrial Cleaning",
      description: "Heavy-duty cleaning for manufacturing and industrial facilities",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      isImage: true,
      imageUrl: "/lovable-uploads/46c77589-96a6-4e1c-8175-c5ac353d419c.png",
      details: [{
        name: "Heavy Duty Cleaning",
        services: ["Floor Cleaning", "High roof cobweb cleaning", "Machine Cleaning", "Glass Cleaning", "Signage board & ACP board cleaning"]
      }]
    }, {
      title: "Glass Cleaning",
      description: "Professional glass cleaning for commercial and residential spaces",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      isImage: true,
      imageUrl: "/lovable-uploads/bfa898ac-ff6f-484c-8482-01ac092ea7de.png",
      details: [{
        name: "Specialized Glass Services",
        services: ["Commercial Showroom", "Premium Villas", "High rise building", "Hotels & Restaurants"]
      }]
    }, {
      title: "Commercial Cleaning",
      description: "Complete cleaning solutions for commercial establishments",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      isImage: true,
      imageUrl: "/lovable-uploads/ace9859f-640a-4783-a4f9-1e9d3c7b4008.png",
      details: [{
        name: "Business Establishments",
        services: ["Showroom", "Hospitals", "Floor cleaning", "Carpet Cleaning", "Institutions", "Malls & Theatres"]
      }]
    }, {
      title: "Signage & ACP Board Cleaning",
      description: "Specialized cleaning for outdoor signage and ACP boards",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      isImage: true,
      imageUrl: "/lovable-uploads/b0ae7f8a-9d96-46db-a77a-e5e3f1660e0c.png",
      details: [{
        name: "Exterior Cleaning",
        services: ["Signage Cleaning", "ACP Board Cleaning"]
      }]
    }
  ];

  const featuredService = mainServices[0];
  const otherServices = mainServices.slice(1);

  const getOverlayColor = (serviceTitle: string) => {
    switch (serviceTitle) {
      case "IT Sector AMC Cleaning":
        return "bg-green-600/40";
      case "Industrial Cleaning":
        return "bg-orange-600/40";
      case "Glass Cleaning":
        return "bg-cyan-600/40";
      case "Commercial Cleaning":
        return "bg-purple-600/40";
      case "Signage & ACP Board Cleaning":
        return "bg-red-600/40";
      default:
        return "bg-primary-600/40";
    }
  };

  const handleViewDetails = (service: typeof mainServices[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const renderServiceCard = (service: typeof mainServices[0], index: number) => (
    <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:bg-white/95 overflow-hidden h-full shadow-lg">
      <CardContent className="p-0">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.imageUrl} 
            alt={service.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: service.title === "Full Home Cleaning" ? 'center 60%' : 'center center' }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          {/* Background Layer for Text with service-specific color */}
          <div className={`absolute bottom-0 left-0 right-0 backdrop-blur-sm ${getOverlayColor(service.title)}`}>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{service.title}</h3>
              <p className="text-white/95 text-xs sm:text-sm">{service.description}</p>
            </div>
          </div>
        </div>
        
        {/* View Details Button */}
        <div className="p-4 sm:p-6">
          <Button
            onClick={() => handleViewDetails(service)}
            variant="outline"
            className="w-full hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-blue-50/30 transition-all duration-300 text-primary-600 border-primary-200 hover:border-primary-300"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Deep Cleaning Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions for every space and requirement. Click on any service to explore detailed offerings.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Service - Full Width */}
          <div className="mb-6 sm:mb-8">
            {renderServiceCard(featuredService, 0)}
          </div>

          {/* Other Services - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherServices.map((service, index) => renderServiceCard(service, index + 1))}
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        service={selectedService}
      />
    </section>
  );
};

export default DeepCleaningServices;
