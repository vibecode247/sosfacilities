
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, navItems }: MobileMenuProps) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
      <nav className="container mx-auto px-4 py-4 space-y-2">
        {navItems.map(item => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`block font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
              location.pathname === item.path 
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-4 mt-4 border-t border-gray-200">
          <a href="tel:+919791616004" className="flex items-center space-x-3 text-gray-600 mb-4 p-2">
            <Phone className="w-5 h-5 text-primary-500" />
            <span className="font-medium">+91 97916 16004</span>
          </a>
          <Button className="w-full bg-gradient-primary py-3 font-semibold">
            Get Quote
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
