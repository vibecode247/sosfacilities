
import React, { useState, useEffect } from 'react';
import { allClientLogos, createLogoCycles } from '@/data/allClientLogos';
import { ClientLogo } from '@/data/clientLogos';
import OptimizedImage from '@/components/ui/OptimizedImage';

const HappyCustomersSection = () => {
  const [currentCycleIndex, setCurrentCycleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  // Create cycles with different sizes for different screen sizes
  const mobileCycles = createLogoCycles(allClientLogos, 12); // 3 columns × 4 rows
  const tabletCycles = createLogoCycles(allClientLogos, 16); // 4 columns × 4 rows
  const largeCycles = createLogoCycles(allClientLogos, 20); // 5 columns × 4 rows
  const xlCycles = createLogoCycles(allClientLogos, 24); // 6 columns × 4 rows

  useEffect(() => {
    if (isPaused) return;

    // Responsive timing: mobile (6s), tablet (7s), desktop (8s)
    const getDisplayDuration = () => {
      if (window.innerWidth < 640) return 6000; // mobile
      if (window.innerWidth < 1024) return 7000; // tablet
      return 8000; // desktop
    };

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentCycleIndex((prevIndex) => (prevIndex + 1) % mobileCycles.length);
        setIsVisible(true);
      }, 300); // Half of the transition duration
    }, getDisplayDuration());

    return () => clearInterval(interval);
  }, [mobileCycles.length, isPaused]);

  const LogoGrid = ({ logos, gridClass }: { logos: ClientLogo[], gridClass: string }) => (
    <div className={`grid gap-3 ${gridClass}`}>
      {logos.map((client, index) => (
        <div
          key={`${client.name}-${index}`}
          className="flex-shrink-0 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-2 md:p-3 lg:p-3 xl:p-4 flex items-center justify-center aspect-[3/2]"
        >
          <OptimizedImage
            src={client.logo}
            alt={`${client.name} logo`}
            size="logo"
            lazy={true}
            className="max-h-6 md:max-h-8 lg:max-h-10 xl:max-h-12"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Happy Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across industries for reliable cleaning solutions
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile Grid (3 columns) */}
          <div 
            className={`block sm:hidden transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <LogoGrid 
              logos={mobileCycles[currentCycleIndex % mobileCycles.length] || []} 
              gridClass="grid-cols-3" 
            />
          </div>

          {/* Tablet Grid (4 columns) */}
          <div 
            className={`hidden sm:block lg:hidden transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <LogoGrid 
              logos={tabletCycles[currentCycleIndex % tabletCycles.length] || []} 
              gridClass="grid-cols-4" 
            />
          </div>

          {/* Large Grid (5 columns) */}
          <div 
            className={`hidden lg:block xl:hidden transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <LogoGrid 
              logos={largeCycles[currentCycleIndex % largeCycles.length] || []} 
              gridClass="grid-cols-5" 
            />
          </div>

          {/* Extra Large Grid (6 columns) */}
          <div 
            className={`hidden xl:block transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <LogoGrid 
              logos={xlCycles[currentCycleIndex % xlCycles.length] || []} 
              gridClass="grid-cols-6" 
            />
          </div>
        </div>

        {/* Cycle Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: mobileCycles.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCycleIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentCycleIndex
                  ? 'bg-primary-500 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Show logo cycle ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomersSection;
