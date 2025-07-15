import React from 'react';
import { Award, Star, Shield } from 'lucide-react';
const TrustSection = () => {
  return <section className="py-20 bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 relative overflow-hidden">
      {/* Main brand gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 to-secondary-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-500/5"></div>
      
      {/* Modern geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        {/* Large geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-float" style={{
        animationDelay: '0s'
      }}></div>
        <div className="absolute top-20 right-16 w-24 h-24 border border-primary-300/30 transform rotate-45" style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      }}></div>
        
        {/* Medium geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-white/15 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-primary-300/25 transform rotate-12"></div>
        
        {/* Small floating elements */}
        <div className="absolute top-2/3 left-16 w-12 h-12 border border-white/20 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="relative md:absolute md:bottom-10 md:right-10 md:top-auto top-1/4 right-1/4 w-28 h-28 border border-primary-300/30 transform rotate-45 animate-float" style={{
        animationDelay: '1.5s',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      }}></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent transform rotate-12"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary-300/15 via-primary-300/5 to-transparent transform -rotate-12"></div>
        
        {/* Corner accents */}
        <div className="absolute bottom-20 left-20 w-6 h-6 border border-white/25 rounded-full animate-float" style={{
        animationDelay: '0.8s'
      }}></div>
        <div className="absolute top-16 right-32 w-4 h-4 border border-primary-300/20 transform rotate-45"></div>
      </div>
      
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
      backgroundSize: '40px 40px'
    }}></div>
      
      {/* Floating accent dots */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary-400/40 rounded-full animate-float"></div>
      <div className="absolute bottom-24 left-24 w-2 h-2 bg-white/30 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 left-16 w-2.5 h-2.5 bg-primary-300/35 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute bottom-1/3 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-float" style={{
      animationDelay: '0.5s'
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-outfit">Why Choose SOS Facilities?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ISO Certification */}
          <div className="text-center text-white group">
            <div className="relative">
              <div className="w-16 h-16 bg-primary-500/20 border-2 border-primary-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-105 group-hover:bg-primary-500/30 transition-all duration-300">
                <Award className="w-8 h-8 text-primary-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">ISO 9001:2015 Certified</h3>
              
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
              <p className="text-gray-200 leading-relaxed">
                From over 1,000+ satisfied customers across Tamil Nadu
              </p>
            </div>
          </div>

          {/* Satisfaction Guarantee */}
          <div className="text-center text-white group">
            <div className="relative">
              <div className="w-16 h-16 bg-primary-500/20 border-2 border-primary-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-105 group-hover:bg-primary-500/30 transition-all duration-300">
                <Shield className="w-8 h-8 text-primary-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">100% Satisfaction Guarantee</h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TrustSection;