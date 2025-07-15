
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const CleaningProcess = () => {
  const processSteps = [{
    step: 1,
    title: "Assessment",
    description: "Initial inspection and customized cleaning plan",
    details: "Our professional team conducts a thorough assessment of your space to understand specific cleaning requirements and create a tailored cleaning strategy."
  }, {
    step: 2,
    title: "Preparation",
    description: "Setup of professional equipment and eco-friendly products",
    details: "We prepare all specialized equipment and eco-friendly cleaning products, ensuring we have everything needed for comprehensive deep cleaning."
  }, {
    step: 3,
    title: "Deep Clean",
    description: "Systematic cleaning using advanced techniques",
    details: "Our trained professionals execute the cleaning plan using advanced techniques and professional-grade equipment to achieve exceptional results."
  }, {
    step: 4,
    title: "Quality Check",
    description: "Final inspection meeting ISO standards",
    details: "We conduct a comprehensive quality inspection to ensure all work meets our high standards and your complete satisfaction."
  }];

  const ProcessCard = ({
    step,
    title,
    description,
    details
  }: typeof processSteps[0]) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Deep Cleaning Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach ensuring thorough cleaning and complete customer satisfaction
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
          
          {/* Desktop grid layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;
