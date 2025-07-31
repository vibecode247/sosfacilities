
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Calculator, Send } from 'lucide-react';
import { quoteFormSchema, type QuoteFormData } from '@/schemas/formValidation';

const QuoteForm = () => {
  const { toast } = useToast();
  
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      serviceType: '',
      location: '',
      propertyType: '',
      propertySize: '',
      preferredDate: '',
      additionalRequirements: ''
    }
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Simulate form submission
      console.log('Quote form submitted:', data);
      
      toast({
        title: "Quote Request Submitted",
        description: "We'll get back to you within 2 hours during business hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-secondary-500 mb-2">Get Your Free Quote</h2>
        <p className="text-gray-600">Tell us about your cleaning needs and we'll provide a customized quote</p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
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
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                    <SelectItem value="housekeeping">Housekeeping Workforce</SelectItem>
                    <SelectItem value="atm-maintenance">ATM Maintenance</SelectItem>
                    <SelectItem value="multiple">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="propertySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Size (sq ft)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 1000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="preferredDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="additionalRequirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Requirements</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Please describe your specific cleaning requirements, frequency needed, special instructions, etc." 
                  className="min-h-[100px]"
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
          <Send className="w-5 h-5 mr-2" />
          {form.formState.isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          * Required fields. We'll respond within 2 hours during business hours.
        </p>
      </form>
    </Form>
  );
};

export default QuoteForm;
