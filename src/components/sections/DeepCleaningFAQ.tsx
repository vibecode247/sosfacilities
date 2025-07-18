import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const DeepCleaningFAQ = () => {
  const faqs = [{
    question: "What's included in your deep cleaning service?",
    answer: "Our deep cleaning service includes comprehensive cleaning of all rooms, kitchen deep cleaning with appliance cleaning, bathroom sanitization, floor polishing, window cleaning, furniture dusting, cobweb removal, and specialized cleaning of hard-to-reach areas. We use eco-friendly products and professional-grade equipment for thorough results."
  }, {
    question: "How long does a deep cleaning service take?",
    answer: "Deep cleaning duration varies based on property size and condition. For a 1-2 BHK home, it typically takes 4-6 hours. For 3-4 BHK homes, it can take 6-8 hours. Commercial spaces may require 8-12 hours depending on the area and cleaning requirements. We provide time estimates during our initial consultation."
  }, {
    question: "Do you provide deep cleaning equipment and supplies?",
    answer: "Yes, we bring all necessary equipment and eco-friendly cleaning supplies. Our team comes equipped with professional vacuum cleaners, steam cleaners, specialized brushes, microfiber cloths, and safe cleaning chemicals. You don't need to provide anything - we handle everything."
  }, {
    question: "What's the difference between regular cleaning and deep cleaning?",
    answer: "Regular cleaning covers daily maintenance like dusting, mopping, and basic sanitization. Deep cleaning is comprehensive and includes cleaning inside appliances, scrubbing grout, removing built-up grime, cleaning light fixtures, detailed bathroom sanitization, and reaching areas that aren't part of routine cleaning."
  }, {
    question: "How often should I schedule deep cleaning services?",
    answer: "We recommend deep cleaning every 3-6 months for residential properties, depending on usage and family size. Commercial spaces may need monthly or quarterly deep cleaning. Post-construction or renovation, immediate deep cleaning is essential. We can customize a schedule based on your specific needs."
  }, {
    question: "Are your cleaning products safe for children and pets?",
    answer: "Absolutely! We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. Our cleaning solutions are biodegradable and free from harsh chemicals. We can also accommodate specific requirements if you have allergies or sensitivities."
  }, {
    question: "Do you offer post-construction deep cleaning?",
    answer: "Yes, we specialize in post-construction cleaning services. This includes dust removal from all surfaces, cleaning construction residue, window cleaning, floor polishing, fixture cleaning, and making your space move-in ready. We handle both residential and commercial post-construction cleanup."
  }, {
    question: "What are your pricing and payment options?",
    answer: "Our pricing is transparent and based on property size, cleaning requirements, and frequency. We offer competitive rates starting from ₹2,999 for residential deep cleaning. Payment can be made via cash, UPI, card, or bank transfer. We provide detailed quotations before starting any work."
  }];
  return <section className="py-12 sm:py-20 bg-gray-50 relative overflow-hidden">
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
            Common questions about our deep cleaning services in Coimbatore
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border-0 overflow-hidden">
                <AccordionTrigger className="px-4 sm:px-8 py-4 sm:py-6 text-left text-base sm:text-lg font-semibold text-secondary-500 hover:no-underline hover:bg-gray-50 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <span className="pr-4 break-words leading-relaxed">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-8 pb-4 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Still have questions?</p>
          <div className="inline-flex items-center space-x-2 text-primary-500 font-semibold text-sm sm:text-base">
            <span>Contact us for personalized assistance</span>
            
          </div>
        </div>
      </div>
    </section>;
};
export default DeepCleaningFAQ;