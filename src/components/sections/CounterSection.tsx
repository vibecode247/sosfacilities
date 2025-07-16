
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
    <section ref={sectionRef} className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-white">
            Our Track Record
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Years of dedicated service and thousands of satisfied customers across Tamil Nadu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center text-white flex flex-col items-center">
              <div className="w-40 h-40 flex flex-col items-center justify-center bg-white/10 rounded-full border border-white/20">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white font-mono tabular-nums">
                  {counter.value}
                </div>
                <div className="text-lg opacity-90 text-center px-4">
                  {counter.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
