
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Send } from 'lucide-react';

const QuoteForm = () => {
  return (
    <form className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-secondary-500 mb-2">Get Your Free Quote</h2>
        <p className="text-gray-600">Tell us about your cleaning needs and we'll provide a customized quote</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <Input placeholder="Your full name" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
        <Input type="email" placeholder="your.email@example.com" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
              <SelectItem value="housekeeping">Housekeeping Workforce</SelectItem>
              <SelectItem value="atm-maintenance">ATM Maintenance</SelectItem>
              <SelectItem value="multiple">Multiple Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your location" />
            </SelectTrigger>
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Size (sq ft)</label>
          <Input type="number" placeholder="e.g., 1000" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
        <Input type="date" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
        <Textarea 
          placeholder="Please describe your specific cleaning requirements, frequency needed, special instructions, etc." 
          className="min-h-[100px]"
        />
      </div>

      <Button size="lg" className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300">
        <Send className="w-5 h-5 mr-2" />
        Get My Free Quote
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Required fields. We'll respond within 2 hours during business hours.
      </p>
    </form>
  );
};

export default QuoteForm;
