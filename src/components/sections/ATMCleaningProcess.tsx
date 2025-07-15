
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ATMCleaningProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Security clearance and ATM condition evaluation",
      details: "Our security-cleared technicians conduct a thorough assessment of the ATM's condition, security protocols, and specific cleaning requirements while ensuring safety compliance."
    },
    {
      step: 2,
      title: "Preparation",
      description: "Setup with Johnson Diversey products and safety protocols",
      details: "We prepare specialized Johnson Diversey cleaning products and professional equipment, ensuring all safety protocols are followed and the ATM area is secured."
    },
    {
      step: 3,
      title: "Deep Cleaning",
      description: "Systematic cleaning inside and outside with garbage removal",
      details: "Comprehensive cleaning of all ATM components including interior cash dispenser, exterior panels, screens, keypads, cameras, and complete garbage removal from inside and outside the ATM."
    },
    {
      step: 4,
      title: "Documentation",
      description: "Cleaning reports with images and time stamps",
      details: "We provide detailed cleaning reports with before and after photographs, time-stamped documentation, and service completion certificates for your records."
    },
    {
      step: 5,
      title: "Quality Check",
      description: "Final safety inspection and service verification",
      details: "Our team conducts a comprehensive quality inspection, ensures all safety protocols were followed, and verifies that the ATM is ready for normal operation."
    }
  ];

  const ProcessCard = ({ step, title, description, details }: typeof processSteps[0]) => (
    <div className="relative h-full">
      <Card className="h-full hover:shadow-lg transition-all duration-300 group bg-white border border-gray-200/50">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <span className="text-white font-bold text-xl">{step}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-secondary-500">{title}</h3>
          <p className="text-primary-600 text-sm font-medium mb-3">{description}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{details}</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section className="pt-8 pb-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our ATM Cleaning Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach ensuring thorough cleaning, complete documentation, and safety assurance
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Show carousel on mobile and tablet, grid on desktop */}
          <div className="lg:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {processSteps.map((step, index) => (
                  <CarouselItem key={index}>
                    <ProcessCard {...step} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
          </div>
          
          {/* Desktop grid layout - 5 columns for 5 steps */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMCleaningProcess;
