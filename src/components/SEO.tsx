import React, { useEffect } from 'react';
import { useSEO, SEOData } from '@/hooks/useSEO';

interface SEOProps extends SEOData {
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({ structuredData, ...seoData }) => {
  useSEO(seoData);

  useEffect(() => {
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [structuredData]);

  return null;
};

export default SEO;