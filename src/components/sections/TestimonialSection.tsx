import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  rating: number;
  testimonial: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Facility Manager",
    company: "TechCorp Solutions",
    location: "Chennai",
    rating: 5,
    testimonial: "SOS Facilities has been maintaining our office for over 2 years. Their attention to detail and professionalism is outstanding. Our workspace has never looked better!",
    avatar: "/lovable-uploads/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Bank Manager",
    company: "State Bank of India",
    location: "Coimbatore",
    rating: 5,
    testimonial: "Their ATM maintenance service is exceptional. Quick response times and thorough cleaning ensure our ATMs are always in perfect condition for our customers.",
    avatar: "/lovable-uploads/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 3,
    name: "Meera Patel",
    title: "Homeowner",
    company: "Residential Client",
    location: "Madurai",
    rating: 5,
    testimonial: "The deep cleaning service transformed our home completely. The team was punctual, thorough, and used eco-friendly products. Highly recommended!",
    avatar: "/lovable-uploads/photo-1721322800607-8c38375eef04"
  },
  {
    id: 4,
    name: "Anand Krishnan",
    title: "Operations Head",
    company: "Manufacturing Industries",
    location: "Salem",
    rating: 5,
    testimonial: "Their industrial cleaning expertise is unmatched. They understand our specific requirements and always deliver quality service within deadlines.",
  },
  {
    id: 5,
    name: "Lakshmi Raman",
    title: "Property Manager",
    company: "Residential Complex",
    location: "Trichy",
    rating: 5,
    testimonial: "SOS Facilities manages housekeeping for our entire complex. Residents are consistently happy with the cleanliness and maintenance standards.",
  },
  {
    id: 6,
    name: "Karthik Venkat",
    title: "Store Manager",
    company: "Retail Chain",
    location: "Erode",
    rating: 5,
    testimonial: "Professional, reliable, and cost-effective. Their team ensures our stores are spotless, creating a pleasant shopping experience for our customers.",
  }
];

const TestimonialSection = () => {
  const isMobile = useIsMobile();
  
  // Determine slides to scroll based on screen size
  const getSlidesToScroll = () => {
    if (isMobile) return 1; // Mobile: 1 slide
    // For tablet and desktop, we need to check window width more precisely
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 3; // Desktop (lg+): 3 slides
      if (width >= 768) return 2;  // Tablet (md): 2 slides
    }
    return 1; // Fallback
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-primary">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-outfit">
            What Our Clients Say
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-4"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across Tamil Nadu have to say about our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: getSlidesToScroll(),
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Rating Stars */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-gray-200 mb-6 flex-grow italic text-sm md:text-base leading-relaxed">
                        "{testimonial.testimonial}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center">
                        <Avatar className="w-12 h-12 mr-4 ring-2 ring-white/30">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-primary text-white font-semibold text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {testimonial.title}, {testimonial.company}
                          </p>
                          <p className="text-xs text-gray-400 mt-1 flex items-center">
                            <span className="mr-1">📍</span> {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Navigation Arrows */}
            <CarouselPrevious className="flex -left-2 md:-left-3 lg:-left-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-white shadow-lg" />
            <CarouselNext className="flex -right-2 md:-right-3 lg:-right-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-white shadow-lg" />
          </Carousel>
        </div>

        {/* Enhanced bottom decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
