
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema, type ContactFormData } from '@/schemas/formValidation';

const ContactFormSection = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      serviceNeeded: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      console.log('Contact form submitted:', data);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-3xl bg-white/80 backdrop-blur-sm">
            {/* Enhanced title section with pattern accents */}
            <div className="text-center mb-8 relative">
              {/* Decorative pattern behind title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 opacity-[0.05]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e63946' fill-opacity='0.6'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-30 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px',
                  backgroundRepeat: 'repeat'
                }}></div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 gradient-text font-outfit relative">Send us a Message</h2>
              
              {/* Decorative pattern elements around title */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-secondary-300 to-transparent"></div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" className="rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" className="rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 XXXXX XXXXX" className="rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl [&>svg]:mr-3">
                            <SelectValue placeholder="Select your location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="coimbatore">Coimbatore</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="madurai">Madurai</SelectItem>
                          <SelectItem value="trichy">Trichy</SelectItem>
                          <SelectItem value="salem">Salem</SelectItem>
                          <SelectItem value="erode">Erode</SelectItem>
                          <SelectItem value="tirunelveli">Tirunelveli</SelectItem>
                          <SelectItem value="vellore">Vellore</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceNeeded"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl [&>svg]:mr-3">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                          <SelectItem value="housekeeping">Housekeeping Workforce</SelectItem>
                          <SelectItem value="atm-maintenance">ATM Maintenance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your cleaning requirements..." 
                          className="min-h-[120px] rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300"
                  disabled={form.formState.isSubmitting}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
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

export default ContactFormSection;
