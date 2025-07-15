
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ATMMaintenanceFAQ = () => {
  const faqs = [
    {
      question: "Are your staff security cleared for ATM maintenance?",
      answer: "Yes, all our technicians undergo thorough background verification and security clearance processes. They are trained to follow banking security protocols and handle sensitive ATM environments with complete confidentiality."
    },
    {
      question: "What products do you use for ATM cleaning?",
      answer: "We exclusively use Johnson Diversey products, which are professional-grade cleaning solutions specifically designed for electronic equipment and banking environments. These products are safe, effective, and meet industry standards."
    },
    {
      question: "Do you provide cleaning reports and documentation?",
      answer: "Absolutely! We provide comprehensive cleaning reports with before and after photographs, time-stamped documentation, service completion certificates, and maintenance recommendations for your records."
    },
    {
      question: "Can you clean ATMs during business hours?",
      answer: "Yes, we offer flexible scheduling including business hours, after-hours, weekends, and holidays. We work around your operational needs to minimize disruption to your banking services."
    },
    {
      question: "What safety measures do you follow during ATM cleaning?",
      answer: "We follow strict safety protocols including proper equipment handling, secure area management, emergency procedures, and compliance with banking security standards. Safety is our top priority in every service."
    },
    {
      question: "Do you handle garbage removal from ATM areas?",
      answer: "Yes, we provide complete waste management including garbage removal from inside the ATM (cash compartments, receipt bins) and outside areas (surrounding space, external waste bins) as part of our comprehensive service."
    },
    {
      question: "What is your response time for emergency cleaning?",
      answer: "We offer 24/7 emergency services with rapid response times. For urgent issues like spills, vandalism, or security concerns, we can typically respond within 2-4 hours depending on location."
    },
    {
      question: "How do you ensure quality and consistency?",
      answer: "We maintain quality through trained professionals, standardized procedures, regular supervision, customer feedback, and detailed documentation. Every service is backed by our quality assurance guarantee."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about our ATM maintenance and cleaning services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-gray-200 rounded-lg sm:rounded-xl px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left py-4 sm:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="text-base sm:text-lg font-semibold text-secondary-500 pr-4 break-words leading-relaxed">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ATMMaintenanceFAQ;
