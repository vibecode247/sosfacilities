
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const StaffingProcess = () => {
  const processSteps = [{
    step: 1,
    title: "Assessment",
    description: "Evaluate your facility needs and requirements",
    details: "We conduct a thorough evaluation of your facility's specific needs, requirements, and operational standards to understand the scope of housekeeping services required."
  }, {
    step: 2,
    title: "Screening",
    description: "Background verification and skill assessment",
    details: "Our rigorous screening process includes comprehensive background checks, skill assessments, and verification of credentials to ensure only qualified professionals join our team."
  }, {
    step: 3,
    title: "Training",
    description: "Specialized training for your facility type",
    details: "We provide specialized training programs tailored to your specific facility type, ensuring our staff understands your unique requirements and quality standards."
  }, {
    step: 4,
    title: "Deployment",
    description: "Assign trained staff to your facility",
    details: "We carefully assign trained and qualified housekeeping professionals to your facility, ensuring seamless integration with your operations and immediate productivity."
  }, {
    step: 5,
    title: "Monitor",
    description: "Ongoing supervision and quality assurance",
    details: "Continuous monitoring, supervision, and quality assurance ensure consistent service delivery and maintain the highest standards of housekeeping excellence."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text pt-8">Our Staffing Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to providing you with the best housekeeping professionals
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

export default StaffingProcess;
