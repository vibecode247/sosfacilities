
import React from 'react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const AMCCleaningCTA = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Cost-Effective Cleaning Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a customized AMC proposal and discover how much you can save with our annual contracts
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={openQuoteModal}
              className="bg-white text-secondary-500 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Get AMC Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMCCleaningCTA;
