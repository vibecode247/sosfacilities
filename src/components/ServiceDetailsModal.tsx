
import React from 'react';
import { CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ServiceDetails {
  name: string;
  services: string[];
}

interface ServiceData {
  title: string;
  description: string;
  details: ServiceDetails[];
}

interface ServiceDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: ServiceData | null;
}

const ServiceDetailsModal = ({ open, onOpenChange, service }: ServiceDetailsModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary-600 mb-2">
            {service.title}
          </DialogTitle>
          <p className="text-gray-600 text-base mb-4">{service.description}</p>
        </DialogHeader>
        
        <div className="space-y-6">
          {service.details.map((category, catIndex) => (
            <div key={catIndex} className="bg-gradient-to-r from-gray-50/30 to-blue-50/20 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-4 text-primary-600">{category.name}</h4>
              <div className="space-y-3">
                {category.services.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;
