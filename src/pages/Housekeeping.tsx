import React from 'react';
import { Users, Clock, Shield, CheckCircle, Star, Award, Wrench, Shirt, IndianRupee, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ServiceHero from '@/components/ServiceHero';
import HousekeepingServiceAreas from '@/components/sections/HousekeepingServiceAreas';
import BenefitsOfProfessionalCleaning from '@/components/sections/BenefitsOfProfessionalCleaning';
import StaffingProcess from '@/components/sections/StaffingProcess';
import HousekeepingFAQ from '@/components/sections/HousekeepingFAQ';
import HousekeepingClientShowcase from '@/components/sections/HousekeepingClientShowcase';

const Housekeeping = () => {
  const staffBenefits = [
    {
      icon: Wrench,
      title: "Trained Workforce",
      description: "Skilled Tamil & North Indian staff"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Always on, always reliable"
    },
    {
      icon: Shirt,
      title: "Professional Uniforms",
      description: "Clean, branded appearance"
    },
    {
      icon: IndianRupee,
      title: "Affordable Pricing",
      description: "Quality service, fair rates"
    },
    {
      icon: FileCheck,
      title: "Full Compliance",
      description: "ESI, PF and all govt statutory"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <ServiceHero 
        title="Housekeeping Workforce"
        buttonText="Hire Staff Now"
      />

      {/* Service Areas Section */}
      <HousekeepingServiceAreas />

      {/* Why Choose Our Staff Section with Background Patterns */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary-300 rounded-full animate-float"></div>
          <div className="absolute top-32 right-24 w-24 h-24 border border-secondary-300 transform rotate-45" 
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          
          {/* Medium geometric shapes */}
          <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-primary-200 rounded-full animate-float" 
               style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-secondary-200 transform rotate-12"></div>
          
          {/* Small floating elements */}
          <div className="absolute top-2/3 left-16 w-12 h-12 border border-primary-300 rounded-full animate-float" 
               style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-secondary-300 transform rotate-45 animate-float" 
               style={{ animationDelay: '1.5s', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          
          {/* Diagonal accent lines */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-primary-200 via-primary-100 to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-secondary-200 via-secondary-100 to-transparent transform -rotate-12"></div>
          
          {/* Corner accents */}
          <div className="absolute bottom-32 left-32 w-6 h-6 border border-primary-200 rounded-full animate-float" 
               style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-40 right-40 w-4 h-4 border border-secondary-200 transform rotate-45"></div>
        </div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-3" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(226,57,70,0.3) 1px, transparent 0)',
               backgroundSize: '30px 30px'
             }}></div>
        
        {/* Floating accent dots */}
        <div className="absolute top-24 right-32 w-3 h-3 bg-primary-200 rounded-full animate-float"></div>
        <div className="absolute bottom-28 left-28 w-2 h-2 bg-secondary-200 rounded-full animate-float" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-12 w-2.5 h-2.5 bg-primary-300 rounded-full animate-float" 
             style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-16 w-1.5 h-1.5 bg-secondary-300 rounded-full animate-float" 
             style={{ animationDelay: '0.5s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Why Choose Our Staff?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality assurance and reliability you can trust
            </p>
          </div>

          {/* Desktop and Mobile Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 md:hidden lg:grid">
            {staffBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 neomorphism-card h-full">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-secondary-500 leading-tight">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            {/* Trained Workforce - Full Width */}
            <div className="mb-8">
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 neomorphism-card h-full">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(staffBenefits[0].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-secondary-500 leading-tight">{staffBenefits[0].title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{staffBenefits[0].description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Rest of the cards - Two Columns */}
            <div className="grid grid-cols-2 gap-6">
              {staffBenefits.slice(1).map((benefit, index) => (
                <Card key={index + 1} className="group hover:shadow-xl transition-all duration-500 border-0 neomorphism-card h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-secondary-500 leading-tight">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase Section - All logos consolidated */}
      <HousekeepingClientShowcase />

      {/* Staffing Process Section */}
      <StaffingProcess />

      {/* Benefits of Professional Cleaning Section */}
      <BenefitsOfProfessionalCleaning />

      {/* FAQ Section */}
      <HousekeepingFAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Reliable Housekeeping Staff?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your requirements and get matched with the perfect housekeeping professionals
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-secondary-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Staff Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Housekeeping;
