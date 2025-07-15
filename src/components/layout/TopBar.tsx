
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="hidden md:block bg-secondary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary-400" />
              <span>+91 97916 16004</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary-400" />
              <span>info@sosfacilities.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>62/2, Anna Nagar - 641045</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-primary-400" />
            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
