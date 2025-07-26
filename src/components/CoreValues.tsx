
import React from 'react';
import { Users, Cpu, Target, Clock, Shield, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CoreValues = () => {
  const values = [
    {
      icon: Users,
      title: 'Training First',
      description: 'We invest in our workforce with training, respect, and growth',
      gradient: 'from-blue-500 to-purple-600',
      bgPattern: 'from-blue-50/30 to-purple-50/20',
      titleHoverClass: 'group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent'
    },
    {
      icon: Cpu,
      title: 'Modern Tools',
      description: 'We embrace tools and tech that raise cleaning standards',
      gradient: 'from-amber-500 to-orange-600',
      bgPattern: 'from-amber-50/30 to-orange-50/20',
      titleHoverClass: 'group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent'
    },
    {
      icon: Target,
      title: 'Customer Preferences',
      description: 'Tailored solutions for commercial, and residential environments',
      gradient: 'from-emerald-500 to-teal-600',
      bgPattern: 'from-emerald-50/30 to-teal-50/20',
      titleHoverClass: 'group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent'
    },
    {
      icon: Clock,
      title: 'Year-Round Supply',
      description: 'Uninterrupted manpower supply with shift-based coverage',
      gradient: 'from-rose-500 to-pink-600',
      bgPattern: 'from-rose-50/30 to-pink-50/20',
      titleHoverClass: 'group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent'
    },
    {
      icon: Shield,
      title: 'Safety Protocols',
      description: 'Focus on hygienic, safe chemical usage, and PPE compliance',
      gradient: 'from-indigo-500 to-blue-600',
      bgPattern: 'from-indigo-50/30 to-blue-50/20',
      titleHoverClass: 'group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Improvement',
      description: 'Continuously improving our processes and adopting eco-friendly solutions',
      gradient: 'from-violet-500 to-purple-600',
      bgPattern: 'from-violet-50/30 to-purple-50/20',
      titleHoverClass: 'group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent'
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Enhanced Background with distinctive patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e63946' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Diagonal Wave Pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%231d3557' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 20px'
        }}></div>

        {/* Geometric floating elements with enhanced variety */}
        <div className="absolute top-16 left-8 w-24 h-24 bg-primary-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-24 right-12 w-32 h-32 bg-secondary-100/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-amber-100/30 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* New geometric shapes */}
        <div className="absolute top-24 right-1/4 w-12 h-12 bg-primary-200/25 rotate-45 animate-float" style={{animationDelay: '1s', borderRadius: '20%'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-secondary-200/20 animate-float" style={{
          animationDelay: '3s',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}></div>
        <div className="absolute top-1/4 right-8 w-10 h-10 bg-amber-200/30 animate-float" style={{
          animationDelay: '2.5s',
          clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
        }}></div>

        {/* Animated gradient mesh overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary-300/30 to-transparent animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-300/30 to-transparent animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-gradient-radial from-amber-300/20 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        </div>

        {/* Section border patterns */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-300/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-300/40 to-transparent"></div>
        
        {/* Subtle grid pattern enhancement */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced title section with pattern accents */}
        <div className="text-center mb-12 relative">
          {/* Decorative pattern behind title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 opacity-[0.05]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e63946' fill-opacity='0.6'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-30 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-outfit relative">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed relative">
            The fundamental principles that guide everything we do and define who we are as Tamil Nadu's most trusted cleaning service provider
          </p>

          {/* Decorative pattern elements around title */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-secondary-300 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${value.bgPattern})`,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Enhanced card background pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl"
                         style={{background: `linear-gradient(135deg, ${value.gradient})`}}></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full blur-xl opacity-50"
                         style={{background: `linear-gradient(135deg, ${value.gradient})`}}></div>
                    
                    {/* Pattern overlay on cards */}
                    <div className="absolute inset-0 opacity-[0.08]" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  <CardContent className="p-6 text-center relative z-10">
                    {/* Icon with enhanced styling */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 bg-gradient-to-br ${value.gradient} shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                    </div>

                    <h3 className={`text-xl font-bold mb-4 font-outfit text-gray-800 transition-all duration-300 ${value.titleHoverClass}`}>
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>

                    <div className={`mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </CardContent>

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none`}></div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enhanced bottom decorative element with patterns */}
        <div className="text-center mt-12 relative">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-primary-400"></div>
            <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          
          {/* Pattern accent below decorative element */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-[0.06]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23e63946' d='M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 16.77l-6.18 2.25L7 12.14 2 7.27l6.91-1.01L12 0z'/%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
