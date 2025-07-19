
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AMCCleaningProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Comprehensive facility evaluation and needs analysis",
      details: "Our team conducts a thorough site assessment to understand your facility's unique cleaning requirements, traffic patterns, and specific needs, ensuring a customized AMC proposal."
    },
    {
      step: 2,
      title: "Proposal",
      description: "Customized AMC proposal with detailed service schedules",
      details: "We prepare a comprehensive proposal outlining service schedules, cleaning protocols, staffing requirements, and cost breakdowns tailored to your facility's specific needs."
    },
    {
      step: 3,
      title: "Contract",
      description: "Service level agreements and contract finalization",
      details: "Detailed contract execution with clear service level agreements, performance metrics, quality standards, and flexible terms that align with your business requirements."
    },
    {
      step: 4,
      title: "Implementation",
      description: "Service deployment with trained staff and equipment",
      details: "Smooth transition to AMC services with dedicated staff deployment, equipment setup, and initial deep cleaning to establish baseline standards for ongoing maintenance."
    },
    {
      step: 5,
      title: "Monitoring",
      description: "Continuous quality monitoring and performance tracking",
      details: "Regular quality audits, performance reviews, and feedback collection ensure consistent service delivery. Monthly reports track compliance with service level agreements."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our AMC Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to delivering consistent cleaning excellence through structured contracts
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

export default AMCCleaningProcess;
