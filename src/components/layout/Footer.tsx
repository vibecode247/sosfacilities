import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-secondary-600 via-secondary-500 to-primary-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <span className="font-bold font-oswald text-2xl">SOS Facilities</span>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional cleaning and housekeeping services in Coimbatore, Tamil Nadu. 
              ISO 9001:2015 certified for quality excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="text-gray-300">+91 97916 16004</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="text-gray-300">info@sosfacilities.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-gray-300">62/2, Anna Nagar - 641045</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Working Hours</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
              <div>Sunday: Closed</div>
              <div>Emergency: 24/7 Available</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 SOS Facilities. All rights reserved. | Designed for excellence in Coimbatore.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;