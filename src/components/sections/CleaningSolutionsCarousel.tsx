
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, Wind, Building2, Fan, Sofa, Trees, WashingMachine, Bug, Car, Volume2, Archive, Palette, ChefHat, Square, Bed, DoorOpen, Layers, Monitor, Armchair } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CleaningSolutionsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const userInteractionTimer = useRef<NodeJS.Timeout | null>(null);

  const cleaningSolutions = [{
    title: "Carpet Cleaning",
    icon: Home,
    description: "Deep carpet cleaning and stain removal",
    image: "/lovable-uploads/3b9c573b-0953-42f5-970f-b7fb57dd8223.png"
  }, {
    title: "Window Cleaning",
    icon: Square,
    description: "Crystal clear windows inside and out",
    image: "/lovable-uploads/ac59c6af-e534-4e2d-9b89-07901f3a34ec.png"
  }, {
    title: "Terrace Cleaning",
    icon: Building2,
    description: "Complete terrace and balcony cleaning",
    image: "/lovable-uploads/1ddff61c-f031-4e62-a6f7-26bd49e2c748.png"
  }, {
    title: "Switchboard & Fans Cleaning",
    icon: Fan,
    description: "Electrical fixtures and fan maintenance",
    image: "/lovable-uploads/88251c0d-ab76-4571-903f-7ee2d2aaa9b0.png"
  }, {
    title: "High-rise Cleaning",
    icon: Building2,
    description: "Specialized high-altitude cleaning services",
    image: "/lovable-uploads/c85443ea-9f60-47cf-84d8-6f2aac5650bb.png"
  }, {
    title: "Sofa Cleaning",
    icon: Sofa,
    description: "Professional upholstery and fabric care",
    image: "/lovable-uploads/db4bef71-5cae-4a3a-be8f-0dde6002bb2e.png"
  }, {
    title: "Garden Cleaning",
    icon: Trees,
    description: "Outdoor space maintenance and cleanup",
    image: "/lovable-uploads/fe6eca5d-7036-43d8-91e5-68ab9244d99a.png"
  }, {
    title: "Restroom Cleaning",
    icon: WashingMachine,
    description: "Hygienic restroom sanitization",
    image: "/lovable-uploads/d1042c6e-bf3a-4912-83da-444731b4d8d8.png"
  }, {
    title: "Machinery Cleaning",
    icon: Wind,
    description: "Industrial equipment cleaning",
    image: "/lovable-uploads/68726efe-3ade-4191-b03b-42af5bdfb294.png"
  }, {
    title: "Cobweb Cleaning",
    icon: Bug,
    description: "Spider web and pest residue removal",
    image: "/lovable-uploads/1544b880-e9a8-4445-9c9b-da0cb0ee8f3f.png"
  }, {
    title: "Parking Area Cleaning",
    icon: Car,
    description: "Complete parking space maintenance",
    image: "/lovable-uploads/9a64698d-8d69-414f-b4c5-5a1e2cba3e40.png"
  }, {
    title: "Wall Cleaning",
    icon: Home,
    description: "Interior and exterior wall cleaning",
    image: "/lovable-uploads/df022425-f2a5-444a-8c16-0d6adeca06cd.png"
  }, {
    title: "Signage Cleaning",
    icon: Volume2,
    description: "Commercial sign maintenance",
    image: "/lovable-uploads/7dedbe0a-8494-4e8c-8ccd-6628afbb8ba1.png"
  }, {
    title: "Cabinets Cleaning",
    icon: Archive,
    description: "Kitchen and storage cabinet care",
    image: "/lovable-uploads/1338b641-a2e4-491f-ae56-8900433fcff7.png"
  }, {
    title: "Stain Cleaning",
    icon: Palette,
    description: "Specialized stain removal services",
    image: "/lovable-uploads/3f73d186-d2fb-4487-988b-a36e42571a2b.png"
  }, {
    title: "Kitchen Cleaning",
    icon: ChefHat,
    description: "Complete kitchen sanitization",
    image: "/lovable-uploads/9497868b-2a63-4d09-8bb3-b9bf5c3ff92c.png"
  }, {
    title: "Glass Cleaning",
    icon: Square,
    description: "Spotless glass surface cleaning",
    image: "/lovable-uploads/de3314d8-e032-4a3e-a61d-c758c0fe0c84.png"
  }, {
    title: "Vehicle Cleaning",
    icon: Car,
    description: "Professional vehicle detailing",
    image: "/lovable-uploads/df6209b3-d138-4b30-a661-5c62927ecf36.png"
  }, {
    title: "Mattress Cleaning",
    icon: Bed,
    description: "Deep mattress cleaning and sanitization",
    image: "/lovable-uploads/7327dc65-c26d-42fc-8ecd-e46ba8614957.png"
  }, {
    title: "Doors & Frames Cleaning",
    icon: DoorOpen,
    description: "Door and frame maintenance",
    image: "/lovable-uploads/2de8c5a7-71e2-4c67-a312-7478d265e893.png"
  }, {
    title: "Floor Cleaning",
    icon: Layers,
    description: "All floor types professional cleaning",
    image: "/lovable-uploads/9d031b5e-b22a-4541-996b-02884c297636.png"
  }, {
    title: "Computers Cleaning",
    icon: Monitor,
    description: "Electronic equipment cleaning",
    image: "/lovable-uploads/3a384748-21b6-4edf-a38d-682a2a51be7c.png"
  }, {
    title: "High-roof Cleaning",
    icon: Building2,
    description: "Elevated roof cleaning services",
    image: "/lovable-uploads/190720c9-e8d2-4623-874c-5f1472465b58.png"
  }, {
    title: "Furniture Cleaning",
    icon: Armchair,
    description: "Complete furniture care and maintenance",
    image: "/lovable-uploads/510ffe7c-1b42-4338-88fb-ce65fbd616c0.png"
  }];

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentItemsPerSlide = itemsPerSlide[screenSize];
  const totalSlides = Math.ceil(cleaningSolutions.length / currentItemsPerSlide);

  useEffect(() => {
    if (isPaused || userInteracted) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 2000); // Changed from 5000ms to 2000ms for faster auto-scroll
    
    return () => clearInterval(timer);
  }, [totalSlides, isPaused, userInteracted]);

  const handleUserInteraction = () => {
    setUserInteracted(true);
    
    // Clear existing timer
    if (userInteractionTimer.current) {
      clearTimeout(userInteractionTimer.current);
    }
    
    // Reset user interaction after 10 seconds
    userInteractionTimer.current = setTimeout(() => {
      setUserInteracted(false);
    }, 10000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    handleUserInteraction();
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    handleUserInteraction();
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    handleUserInteraction();
    setCurrentSlide(index);
  };

  useEffect(() => {
    return () => {
      if (userInteractionTimer.current) {
        clearTimeout(userInteractionTimer.current);
      }
    };
  }, []);

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * currentItemsPerSlide;
    return cleaningSolutions.slice(startIndex, startIndex + currentItemsPerSlide);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text font-outfit">Our Specialized Cleaning Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions for every space and requirement
          </p>
        </div>

        <div 
          className="relative max-w-7xl mx-auto" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-lg">
            {/* Navigation arrows positioned inside the carousel */}
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0} 
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white disabled:bg-gray-100/80 disabled:cursor-not-allowed rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 z-20 hover:scale-105 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 backdrop-blur-sm border border-white/20" 
              aria-label="Previous slide"
            >
              <ChevronLeft className={`w-5 h-5 md:w-6 md:h-6 ${currentSlide === 0 ? 'text-gray-400' : 'text-secondary-500'}`} />
            </button>
            
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === totalSlides - 1} 
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white disabled:bg-gray-100/80 disabled:cursor-not-allowed rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 z-20 hover:scale-105 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 backdrop-blur-sm border border-white/20" 
              aria-label="Next slide"
            >
              <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 ${currentSlide === totalSlides - 1 ? 'text-gray-400' : 'text-secondary-500'}`} />
            </button>

            {/* Carousel content with padding to avoid arrow overlap */}
            <div className="px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8">
              <div className={`grid gap-4 md:gap-6 ${screenSize === 'mobile' ? 'grid-cols-1' : screenSize === 'tablet' ? 'grid-cols-2' : 'grid-cols-4'} grid-rows-1`}>
                {getCurrentSlideItems().map((solution, index) => (
                  <Card key={`${currentSlide}-${index}`} className="group hover:shadow-xl transition-all duration-300 border-0 neomorphism-card overflow-hidden cursor-pointer">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={solution.image} alt={solution.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 group-hover:from-black/75 transition-all duration-300"></div>
                      
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10">
                        <div className="bg-white/25 backdrop-blur-sm rounded-full p-2 md:p-3 group-hover:bg-white/35 transition-all duration-300 border border-white/20">
                          <solution.icon className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-lg" />
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 lg:p-6 z-10">
                        <div className="bg-white/15 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                          <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-2 text-white group-hover:text-primary-100 transition-colors duration-300 line-clamp-2 font-outfit">
                            {solution.title}
                          </h3>
                          <p className="text-white/90 text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary-500/20 to-transparent pointer-events-none"></div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToSlide(index)} 
                className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-full ${currentSlide === index ? 'bg-primary-500 w-8 md:w-10 h-3 md:h-4 shadow-md' : 'bg-gray-300 hover:bg-gray-400 w-3 md:w-4 h-3 md:h-4'}`} 
                aria-label={`Go to slide ${index + 1}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningSolutionsCarousel;
