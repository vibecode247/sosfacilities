import React from 'react';
import { Award, Star, Shield } from 'lucide-react';
const TrustSection = () => {
  return (
    <section className="py-16 bg-primary">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-outfit">Why Choose SOS Facilities?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 100% Satisfaction */}
          <div className="text-center text-white group">
            <div className="relative">
              <div className="w-16 h-16 bg-white/10 border-2 border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:bg-white/20 transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">100% Satisfaction</h3>
              <p className="text-white/90 leading-relaxed">
                If not happy, get full money-back guarantee
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="text-center text-white group">
            <div className="relative">
              {/* Five Star Icons */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">4.8 Star Rating</h3>
              <p className="text-white/90 leading-relaxed">
                From over 1,000+ satisfied customers across Tamil Nadu
              </p>
            </div>
          </div>

          {/* ISO Certification */}
          <div className="text-center text-white group">
            <div className="relative">
              <div className="w-16 h-16 bg-white/10 border-2 border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:bg-white/20 transition-all duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">MSME Certified</h3>
              <p className="text-white/90 leading-relaxed">
                ISO 9001:2015 and BNI recommended 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustSection;