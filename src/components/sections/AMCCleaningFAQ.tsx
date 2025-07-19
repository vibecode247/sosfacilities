
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AMCCleaningFAQ = () => {
  const faqs = [
    {
      question: "What are the benefits of choosing an AMC over ad-hoc cleaning services?",
      answer: "AMC contracts offer significant cost savings (typically 15-25% less than ad-hoc services), guaranteed service quality, priority response, dedicated account management, predictable budgeting, and consistent cleaning standards. You also get service level agreements with performance guarantees."
    },
    {
      question: "What types of cleaning services are included in corporate AMC contracts?",
      answer: "Our AMC contracts include daily housekeeping, deep cleaning schedules, washroom maintenance, floor care, window cleaning, carpet cleaning, waste management, sanitization services, and specialized cleaning for conference rooms, pantries, and common areas."
    },
    {
      question: "How flexible are the contract terms and payment options?",
      answer: "We offer flexible contract terms from 6 months to 3 years with quarterly, half-yearly, or annual payment options. Contracts can be customized based on your facility size, cleaning frequency, and specific requirements. We also provide options for seasonal adjustments and service modifications."
    },
    {
      question: "How do you ensure consistent quality throughout the contract period?",
      answer: "We maintain quality through regular supervisor visits, monthly quality audits, customer feedback systems, staff training programs, and detailed checklists. Each client gets a dedicated account manager and we provide monthly service reports with performance metrics."
    },
    {
      question: "What happens if we're not satisfied with the service quality?",
      answer: "Our contracts include service level agreements with quality guarantees. If service standards aren't met, we provide immediate corrective action, service credits, or staff replacement as needed. We also conduct regular review meetings to ensure continuous improvement."
    },
    {
      question: "Do you provide cleaning supplies and equipment as part of the AMC?",
      answer: "Yes, all cleaning supplies, equipment, and consumables are included in our AMC contracts. We use professional-grade, eco-friendly products and maintain all equipment. You don't need to worry about procurement, storage, or replacement of cleaning materials."
    },
    {
      question: "How do you handle staff absences and replacements?",
      answer: "Our AMC contracts include staff replacement guarantees. We maintain backup staff to ensure uninterrupted service during absences, holidays, or staff turnover. All replacement staff are equally trained and background-verified to maintain service consistency."
    },
    {
      question: "Can we modify services or scale up/down during the contract period?",
      answer: "Yes, our contracts allow for reasonable modifications based on changing business needs. Whether you need to add new areas, adjust cleaning frequency, or scale services up or down, we can accommodate changes with appropriate contract amendments and pricing adjustments."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about our Annual Maintenance Contracts for cleaning services
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

export default AMCCleaningFAQ;
