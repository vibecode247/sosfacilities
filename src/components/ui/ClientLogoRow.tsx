
import React from 'react';
import ClientLogo from './ClientLogo';
import { ClientLogo as ClientLogoType } from '@/data/clientLogos';

interface ClientLogoRowProps {
  logos: ClientLogoType[];
  animationClass: string;
  marginClass?: string;
  priorityCount?: number;
}

const ClientLogoRow: React.FC<ClientLogoRowProps> = ({ logos, animationClass, marginClass = "mb-8", priorityCount = 6 }) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`relative ${marginClass}`}>
      <div className={`flex ${animationClass} space-x-4 md:space-x-6 lg:space-x-8 w-max`}>
        {duplicatedLogos.map((client, index) => (
          <ClientLogo 
            key={`${client.name}-${index}`} 
            client={client} 
            index={index} 
            priority={index < priorityCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogoRow;
