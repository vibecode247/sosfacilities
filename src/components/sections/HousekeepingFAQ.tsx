
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HousekeepingFAQ = () => {
  const faqs = [
    {
      question: "What types of housekeeping staff do you provide?",
      answer: "We provide trained, local and North Indian housekeeping staff for various roles including office cleaners, residential helpers, industrial cleaners, hospital cleaning staff, and specialized deep cleaning teams. All our staff are experienced in handling Tamil Nadu's specific cleaning challenges like monsoon dampness and dust management."
    },
    {
      question: "How quickly can you deploy housekeeping staff?",
      answer: "We can deploy housekeeping staff within 1-6 hours depending on your location and requirements. For residential spaces, we typically respond within 1-3 hours, while specialized industrial cleaning may take 4-6 hours to ensure proper team assembly."
    },
    {
      question: "Are your housekeeping staff trained and verified?",
      answer: "Yes, all our housekeeping staff undergo comprehensive background verification, skills training, and are familiar with local Tamil and regional languages. They are trained in professional cleaning techniques, safety protocols, and customer service standards."
    },
    {
      question: "What are your pricing models for housekeeping staff?",
      answer: "We offer flexible pricing including hourly rates, monthly packages, and contract-based pricing for long-term requirements. Our rates are competitive and designed to be affordable for Tamil Nadu businesses and families, with transparent billing and no hidden costs."
    },
    {
      question: "Do you handle staff compliance and documentation?",
      answer: "Absolutely! We take care of all ESI, PF registrations, proper invoicing, and compliance documentation. You don't need to worry about payroll management, insurance, or legal formalities - we handle everything for you."
    },
    {
      question: "Can I get housekeeping staff for both residential and commercial spaces?",
      answer: "We don’t provide staff for individual homes. But we do offer housekeeping manpower for residential societies like apartments and gated communities, covering common areas, parking, lobbies, staircases, and more."
    },
    {
      question: "What if I'm not satisfied with the housekeeping staff provided?",
      answer: "We offer flexible replacement policies. If you're not satisfied with our staff's performance, we can replace them within 24-48 hours. We also provide ongoing supervision and quality checks to ensure consistent service standards."
    },
    {
      question: "Do your staff work during festivals and holidays?",
      answer: "We understand the importance of local festivals and customs in Tamil Nadu. We can arrange staff coverage during festivals and holidays with advance notice, ensuring your cleaning needs are met while respecting cultural celebrations."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-24 h-24 border border-primary-200 rounded-full animate-float"></div>
        <div className="absolute top-32 right-24 w-16 h-16 border border-secondary-200 transform rotate-45 animate-float" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border border-primary-300 rounded-full animate-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 border border-secondary-300 transform rotate-12 animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our housekeeping staffing solutions in Tamil Nadu
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-4 sm:px-8 py-4 sm:py-6 text-left text-base sm:text-lg font-semibold text-secondary-500 hover:no-underline hover:bg-gray-50 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <span className="pr-4 break-words leading-relaxed">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-8 pb-4 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Still have questions?</p>
          <div className="inline-flex items-center space-x-2 text-primary-500 font-semibold text-sm sm:text-base">
            <span>Contact us for personalized assistance</span>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousekeepingFAQ;
