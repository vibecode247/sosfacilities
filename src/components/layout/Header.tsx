
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Housekeeping Workforce', path: '/housekeeping' },
    { name: 'ATM Maintenance', path: '/atm-maintenance' },
    { name: 'Deep Cleaning', path: '/deep-cleaning' },
    { name: 'Contact', path: '/contact' }
  ];

  // Filter out About and Contact for desktop navigation only
  const desktopNavItems = navItems.filter(item => 
    item.name !== 'About' && item.name !== 'Contact'
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold logo-gradient-animated font-oswald">
                SOS Facilities
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {desktopNavItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`font-medium text-sm transition-colors duration-200 hover:text-primary-600 relative ${
                    location.pathname === item.path ? 'text-primary-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop Only */}
            <div className="hidden lg:block">
              <Button 
                onClick={openQuoteModal}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 font-medium"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 rounded-lg bg-primary-600 text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
      </header>
    </>
  );
};

export default Header;
