import React from 'react';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
const AboutHero = () => {
  return <section className="min-h-[80vh] bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
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
                <span className="block">13+ Years of Excellence in Cleaning</span>
                
              </span>
              
              {/* Tablet: 2-line structure */}
              <span className="hidden md:block lg:hidden">
                <span className="block">13+ Years of Excellence</span>
                <span className="block text-primary-400 mt-2">in Cleaning</span>
              </span>
              
              {/* Desktop: Original 3-line structure */}
              <span className="hidden lg:block">
                13+ Years of
                <span className="block text-primary-400 mt-2">Excellence</span>
                in Cleaning
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>From a small family business in 2011 to Tamil Nadu's most trusted ISO 9001:2015 certified cleaning service provider. </p>

            
          </div>

          {/* Right Visual - Organic Blob Shape */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="relative max-w-md mx-auto">
              
              {/* Background Organic Blobs */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-72 h-80 bg-gradient-to-br from-rose-200/30 via-orange-200/40 to-amber-200/30 animate-float blur-sm" style={{
                borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                animationDelay: '0s',
                animationDuration: '8s'
              }}></div>
                <div className="absolute top-8 right-2 w-64 h-72 bg-gradient-to-br from-sky-200/25 via-blue-200/35 to-indigo-200/25 animate-float blur-sm" style={{
                borderRadius: '38% 62% 63% 37% / 70% 33% 67% 30%',
                animationDelay: '2s',
                animationDuration: '10s'
              }}></div>
              </div>

              {/* Main Organic Container */}
              <div className="relative">
                <div className="w-80 h-96 mx-auto relative overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 via-rose-50/20 to-orange-50/15 backdrop-blur-sm" style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'float 6s ease-in-out infinite, gradient-pulse 4s ease-in-out infinite'
              }}>
                  {/* Image Container with organic mask */}
                  <div className="absolute inset-2 overflow-hidden" style={{
                  borderRadius: '58% 42% 33% 67% / 62% 32% 68% 38%'
                }}>
                    <img src="/lovable-uploads/4d27076c-1b89-427f-970f-7d539abebd04.png" alt="SOS Facilities professional cleaning team" className="w-full h-full object-cover scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-rose-100/10"></div>
                  </div>

                  {/* Organic overlay accent */}
                  <div className="absolute bottom-4 right-4 w-24 h-32 bg-gradient-to-br from-amber-300/40 to-orange-400/30 backdrop-blur-sm" style={{
                  borderRadius: '45% 55% 65% 35% / 25% 75% 25% 75%'
                }}></div>
                </div>

                {/* Floating elements with organic shapes */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/90 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center animate-float text-sm" style={{
                borderRadius: '65% 35% 70% 30% / 60% 40% 60% 40%',
                animationDelay: '1s'
              }}>
                  <div className="font-bold text-primary-500 text-lg">13+</div>
                  <div className="text-gray-600 text-xs">Years</div>
                </div>

                <div className="absolute -bottom-8 -left-6 w-24 h-16 bg-gradient-to-r from-orange-400/90 to-primary-500/90 backdrop-blur-sm shadow-xl flex items-center justify-center animate-float text-white text-sm" style={{
                borderRadius: '40% 60% 70% 30% / 40% 60% 40% 60%',
                animationDelay: '1.5s'
              }}>
                  <div className="text-center">
                    <div className="font-bold">ISO</div>
                    <div className="opacity-80 text-xs">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default AboutHero;