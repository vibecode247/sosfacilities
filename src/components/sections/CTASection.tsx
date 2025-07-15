
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const CTASection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-outfit">
            Rate Us Now & Get 30% Discount
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your experience and enjoy exclusive savings on your next cleaning service. 
            Your feedback helps us serve you better!
          </p>
          <div className="flex justify-center">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="bg-gradient-primary hover:shadow-lg transition-all duration-300 px-8 py-4 text-lg">
                <Star className="w-5 h-5 mr-2" />
                Rate Us & Save 30%
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
