
import React from 'react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const PostConstructionCTA = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Complete Your Construction Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a detailed quote for professional post-construction cleaning and ensure your project is move-in ready
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={openQuoteModal}
              className="bg-white text-secondary-500 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Get Cleaning Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostConstructionCTA;
