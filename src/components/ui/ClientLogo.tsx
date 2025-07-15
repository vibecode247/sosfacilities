
import React from 'react';
import { ClientLogo as ClientLogoType } from '@/data/clientLogos';
import OptimizedImage from './OptimizedImage';

interface ClientLogoProps {
  client: ClientLogoType;
  index: number;
  priority?: boolean;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client, index, priority = false }) => {
  return (
    <div 
      key={`${client.name}-${index}`}
      className="flex-shrink-0 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-3 md:p-4 lg:p-5 xl:p-6 flex items-center justify-center"
    >
      <OptimizedImage
        src={client.logo}
        alt={`${client.name} logo`}
        size="logo"
        priority={priority}
        lazy={!priority}
      />
    </div>
  );
};

export default ClientLogo;
