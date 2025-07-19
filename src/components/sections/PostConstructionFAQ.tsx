
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PostConstructionFAQ = () => {
  const faqs = [
    {
      question: "What's included in post-construction cleaning services?",
      answer: "Our comprehensive service includes debris removal, deep dusting, window and glass cleaning, floor restoration, paint splatter removal, fixture cleaning, washroom sanitization, air vent cleaning, and final sanitization. We ensure the space is completely move-in ready."
    },
    {
      question: "How long does post-construction cleaning typically take?",
      answer: "Timing depends on project size and complexity. Small residential projects typically take 1-2 days, while larger commercial spaces may require 3-7 days. We provide detailed timelines during our initial assessment and work to meet your project handover deadlines."
    },
    {
      question: "Do you handle hazardous materials and construction waste disposal?",
      answer: "We handle standard construction debris and dust removal. For hazardous materials like asbestos or lead paint residue, we coordinate with certified specialists. All waste disposal follows environmental regulations and proper disposal methods."
    },
    {
      question: "Can you work around final construction activities?",
      answer: "Yes, we coordinate closely with construction teams to work efficiently around ongoing activities. We typically begin with areas that are completely finished and adjust our schedule to accommodate final installations and touch-ups."
    },
    {
      question: "What safety measures do you follow during post-construction cleaning?",
      answer: "Our team follows strict safety protocols including proper PPE, confined space procedures, electrical safety, and chemical handling guidelines. All staff are trained in construction site safety and we coordinate with site safety officers."
    },
    {
      question: "Do you provide any guarantees or warranties on your work?",
      answer: "Yes, we provide quality guarantees and will return to address any areas that don't meet our standards at no additional cost. We also provide documentation and certification that the space is ready for occupancy."
    },
    {
      question: "How do you price post-construction cleaning projects?",
      answer: "Pricing is based on square footage, scope of work, timeline requirements, and specific challenges. We provide detailed written estimates after site assessment. Our pricing is transparent with no hidden costs, and we offer competitive rates for quality service."
    },
    {
      question: "Can you coordinate with other trades for final project completion?",
      answer: "Absolutely. We regularly coordinate with electricians, plumbers, painters, and other trades to ensure efficient project completion. Our flexible scheduling helps keep your project on track for successful handover."
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
            Common questions about our post-construction cleaning services
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
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Need a custom solution for your project?</p>
          <div className="inline-flex items-center space-x-2 text-primary-500 font-semibold text-sm sm:text-base">
            <span>Contact us for personalized consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostConstructionFAQ;
