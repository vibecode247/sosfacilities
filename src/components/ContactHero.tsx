
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactHero = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-8 w-16 h-16 bg-secondary-500/20 rounded-lg rotate-45 animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-32 left-8 w-12 h-12 bg-primary-500/15 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-20 right-12 w-18 h-18 bg-secondary-500/10 rounded-lg animate-float" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              {/* Mobile: 2-line structure */}
              <span className="block md:hidden">
                <span className="block">Let's Start Your Cleaning Journey</span>
                
              </span>
              
              {/* Tablet: 2-line structure */}
              <span className="hidden md:block lg:hidden">
                <span className="block">Let's Start Your Cleaning</span>
                <span className="block text-primary-400 mt-2">Journey</span>
              </span>
              
              {/* Desktop: Original 3-line structure */}
              <span className="hidden lg:block">
                Let's Start
                <span className="block text-primary-400 mt-2">Your Cleaning</span>
                Journey
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Ready for professional cleaning services? Get your free quote today and experience the SOS difference with our 24/7 emergency support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in md:mb-8 lg:mb-0" style={{
            animationDelay: '0.4s'
          }}>
              <a href="tel:+919043006004">
                <Button size="lg" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              
            </div>
          </div>

          {/* Right Visual - Organic Blob Shape */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="relative max-w-md mx-auto">
              
              {/* Background Organic Blobs */}
              <div className="absolute inset-0">
                <div className="absolute top-2 left-6 w-72 h-80 bg-gradient-to-br from-emerald-200/30 via-teal-200/40 to-cyan-200/30 animate-float blur-sm" style={{
                borderRadius: '45% 55% 70% 30% / 35% 65% 35% 65%',
                animationDelay: '1s',
                animationDuration: '9s'
              }}></div>
                <div className="absolute top-12 right-4 w-64 h-72 bg-gradient-to-br from-violet-200/25 via-purple-200/35 to-fuchsia-200/25 animate-float blur-sm" style={{
                borderRadius: '70% 30% 50% 50% / 60% 40% 60% 40%',
                animationDelay: '3s',
                animationDuration: '11s'
              }}></div>
              </div>

              {/* Main Organic Container */}
              <div className="relative">
                <div className="w-80 h-96 mx-auto relative overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 via-emerald-50/20 to-teal-50/15 backdrop-blur-sm" style={{
                borderRadius: '50% 50% 60% 40% / 45% 55% 35% 65%',
                animation: 'float 7s ease-in-out infinite, gradient-pulse 5s ease-in-out infinite'
              }}>
                  {/* Image Container with organic mask */}
                  <div className="absolute inset-2 overflow-hidden" style={{
                  borderRadius: '48% 52% 58% 42% / 47% 53% 37% 63%'
                }}>
                    <img src="/lovable-uploads/4d27076c-1b89-427f-970f-7d539abebd04.png" alt="SOS Facilities professional cleaning team" className="w-full h-full object-cover scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-emerald-100/10"></div>
                  </div>

                  {/* Organic overlay accent */}
                  <div className="absolute bottom-6 left-4 w-28 h-20 bg-gradient-to-br from-teal-300/40 to-cyan-400/30 backdrop-blur-sm" style={{
                  borderRadius: '60% 40% 30% 70% / 40% 60% 40% 60%'
                }}></div>
                </div>

                {/* Floating elements with organic shapes */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/90 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center animate-float text-sm" style={{
                borderRadius: '55% 45% 60% 40% / 65% 35% 65% 35%',
                animationDelay: '1s'
              }}>
                  <Phone className="w-5 h-5 text-primary-500 mb-1" />
                  <div className="text-gray-600 text-xs">24/7</div>
                </div>

                <div className="absolute -bottom-8 -left-6 w-24 h-16 bg-gradient-to-r from-teal-400/90 to-primary-500/90 backdrop-blur-sm shadow-xl flex items-center justify-center animate-float text-white text-sm" style={{
                borderRadius: '30% 70% 60% 40% / 50% 50% 50% 50%',
                animationDelay: '1.5s'
              }}>
                  <div className="text-center">
                    <div className="font-bold">2hrs</div>
                    <div className="opacity-80 text-xs">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;
