
import React, { useEffect, useRef } from 'react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

const CounterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const counter1 = useCounterAnimation(13, 2000, '+');
  const counter2 = useCounterAnimation(200, 2500, '+');
  const counter3 = useCounterAnimation(3, 3000, 'K+');

  const counters = [
    {
      label: "Years Experience",
      value: counter1.count,
      startAnimation: counter1.startAnimation
    },
    {
      label: "Happy Clients", 
      value: counter2.count,
      startAnimation: counter2.startAnimation
    },
    {
      label: "Happy Customers",
      value: counter3.count,
      startAnimation: counter3.startAnimation
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start all counter animations with staggered delays
          setTimeout(() => counter1.startAnimation(), 200);
          setTimeout(() => counter2.startAnimation(), 400);
          setTimeout(() => counter3.startAnimation(), 600);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [counter1.startAnimation, counter2.startAnimation, counter3.startAnimation]);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-primary-500 via-primary-600 to-primary relative overflow-hidden">
      {/* Multi-layered gradient backgrounds with moving effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/80 animate-gradient-move" 
           style={{ backgroundSize: '200% 200%' }}></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary-500/20 via-transparent to-secondary-600/30 animate-gradient-pulse" 
           style={{ backgroundSize: '150% 150%' }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-secondary-500/20 animate-gradient-wave" 
           style={{ backgroundSize: '300% 300%' }}></div>
      
      {/* Moving gradient spotlight overlays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient-move" 
             style={{ backgroundSize: '400% 100%', animationDuration: '8s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-secondary-300/20 to-transparent animate-gradient-move" 
             style={{ backgroundSize: '400% 100%', animationDuration: '12s', animationDelay: '2s' }}></div>
      </div>
      
      {/* Geometric background patterns */}
      <div className="absolute inset-0 opacity-10">
        {/* Large hexagon pattern */}
        <div className="absolute top-10 left-20 w-32 h-32 border-2 border-white/20 transform rotate-12" 
             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        <div className="absolute bottom-20 right-24 w-24 h-24 border-2 border-secondary-300/30 transform -rotate-45"
             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        
        {/* Triangle patterns */}
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-white/15 transform rotate-180"
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-secondary-300/25 transform rotate-45"
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        
        {/* Circle patterns */}
        <div className="absolute top-40 left-1/4 w-28 h-28 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 border border-secondary-300/30 rounded-full"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-16 w-2 h-2 bg-secondary-300/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-24 left-16 w-4 h-4 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-20 w-2.5 h-2.5 bg-secondary-300/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-12 w-3.5 h-3.5 bg-secondary-300/35 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary-300/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">
            <span className="bg-gradient-to-r from-white via-secondary-300 to-white bg-clip-text text-transparent animate-gradient-move" 
                  style={{ backgroundSize: '200% 100%' }}>
              Our Track Record
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Years of dedicated service and thousands of satisfied customers across Tamil Nadu
          </p>
        </div>
        
        {/* counters grid with circular design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counters.map((counter, index) => (
            <div key={index} className="text-center text-white relative group flex flex-col items-center">
              {/* Moving gradient border for circular cards */}
              <div className="absolute inset-0 w-40 h-40 mx-auto bg-gradient-to-r from-white/20 via-secondary-300/30 to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move" 
                   style={{ backgroundSize: '200% 100%', animationDelay: `${index * 0.5}s` }}></div>
              
              {/* Moving gradient background behind numbers */}
              <div className="absolute inset-0 w-40 h-40 mx-auto bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-full animate-gradient-pulse" 
                   style={{ animationDelay: `${index * 0.3}s` }}></div>
              
              {/* Circular counter content */}
              <div className="relative z-10 w-40 h-40 flex flex-col items-center justify-center backdrop-blur-sm bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white animate-fade-in font-mono tabular-nums" 
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  {counter.value}
                </div>
                <div className="text-lg opacity-90 animate-fade-in text-center px-4" 
                     style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                  {counter.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative border with moving gradient */}
        <div className="mt-12 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient-move" 
               style={{ backgroundSize: '200% 100%' }}></div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
