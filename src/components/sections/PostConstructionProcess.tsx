
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PostConstructionProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Site Assessment",
      description: "Comprehensive evaluation of construction completion and cleaning requirements",
      details: "Our team conducts a thorough site inspection to assess the scope of work, identify specific cleaning challenges, and develop a customized cleaning plan that addresses all post-construction requirements."
    },
    {
      step: 2,
      title: "Debris Removal",
      description: "Systematic removal of construction debris and leftover materials",
      details: "Complete clearance of construction waste, including dust, debris, leftover materials, and packaging. We ensure proper disposal methods and site preparation for detailed cleaning."
    },
    {
      step: 3,
      title: "Deep Cleaning",
      description: "Intensive cleaning of all surfaces, fixtures, and installations",
      details: "Comprehensive cleaning including high-level dusting, surface sanitization, floor restoration, window cleaning, and fixture polishing to remove all construction residue and prepare for occupancy."
    },
    {
      step: 4,
      title: "Sanitization",
      description: "Complete sanitization and air quality improvement for safe occupancy",
      details: "Final sanitization using professional-grade disinfectants, air system cleaning, and environmental treatment to ensure the space meets health and safety standards for immediate use."
    },
    {
      step: 5,
      title: "Final Inspection",
      description: "Quality verification and move-in ready certification",
      details: "Thorough final inspection to ensure all cleaning standards are met, documentation of completed work, and official handover certification confirming the space is ready for occupancy."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Post-Construction Cleaning Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to transforming construction sites into move-in ready spaces
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

export default PostConstructionProcess;
