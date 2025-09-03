import { SEOData } from '@/hooks/useSEO';

const baseUrl = 'https://sosfacilities.com';
const defaultImage = `${baseUrl}/lovable-uploads/2e2eb3a5-749e-42b0-a19e-c07c4d27c802.png`;

export const seoData: Record<string, SEOData> = {
  home: {
    title: 'SOS Facilities - Professional Housekeeping & Cleaning Services in Coimbatore',
    description: 'Leading facility management company in Coimbatore offering professional housekeeping, deep cleaning, AMC services, and trained staff solutions since 2011.',
    keywords: 'housekeeping services Coimbatore, facility management, cleaning services, AMC cleaning, trained staff, post construction cleaning',
    ogImage: defaultImage,
    canonical: `${baseUrl}/`
  },
  about: {
    title: 'About SOS Facilities - Leading Facility Management Company Since 2011',
    description: 'Established in 2011, SOS Facilities is Coimbatore\'s trusted partner for comprehensive facility management, housekeeping, and cleaning services with trained professionals.',
    keywords: 'about SOS Facilities, facility management company, housekeeping company Coimbatore, cleaning company history',
    ogImage: defaultImage,
    canonical: `${baseUrl}/about`
  },
  deepCleaning: {
    title: 'Professional Deep Cleaning Services in Coimbatore | SOS Facilities',
    description: 'Comprehensive deep cleaning services for offices, homes, and commercial spaces in Coimbatore. Expert team, advanced equipment, and eco-friendly solutions.',
    keywords: 'deep cleaning Coimbatore, intensive cleaning, office deep cleaning, home deep cleaning, commercial cleaning',
    ogImage: defaultImage,
    canonical: `${baseUrl}/deep-cleaning`
  },
  housekeeping: {
    title: 'Corporate Housekeeping Services | Trained Staff | SOS Facilities',
    description: 'Professional corporate housekeeping services with trained and verified staff for offices, hospitals, hotels, and commercial establishments in Coimbatore.',
    keywords: 'corporate housekeeping, office cleaning, trained housekeeping staff, commercial cleaning services Coimbatore',
    ogImage: defaultImage,
    canonical: `${baseUrl}/housekeeping-workforce`
  },
  atmMaintenance: {
    title: 'ATM Cleaning & Maintenance Services | Security Cleared Staff | SOS Facilities',
    description: 'Specialized ATM cleaning and maintenance services with security-cleared staff. Ensuring hygiene and functionality of ATM machines across Coimbatore.',
    keywords: 'ATM cleaning, ATM maintenance, security cleared staff, bank cleaning services, ATM hygiene',
    ogImage: defaultImage,
    canonical: `${baseUrl}/atm-maintenance`
  },
  amcCorporates: {
    title: 'Annual Maintenance Contracts for Corporate Cleaning Services | SOS Facilities',
    description: 'Comprehensive AMC solutions for corporate cleaning and facility management. Cost-effective annual contracts with guaranteed service quality and trained staff.',
    keywords: 'AMC cleaning, annual maintenance contract, corporate AMC, facility management contract, cleaning AMC Coimbatore',
    ogImage: defaultImage,
    canonical: `${baseUrl}/amc-corporates`
  },
  postConstruction: {
    title: 'Post Construction Cleaning Services | Professional Deep Clean | SOS Facilities',
    description: 'Specialized post-construction cleaning services for new buildings, renovated spaces, and construction sites. Professional deep cleaning for move-in ready spaces.',
    keywords: 'post construction cleaning, building cleaning, renovation cleaning, construction site cleaning, move-in cleaning',
    ogImage: defaultImage,
    canonical: `${baseUrl}/post-construction`
  },
  contact: {
    title: 'Contact SOS Facilities - Get Quote for Cleaning Services in Coimbatore',
    description: 'Get in touch with SOS Facilities for professional cleaning and facility management services. Free quotes, emergency services, and expert consultation available.',
    keywords: 'contact SOS Facilities, cleaning services quote, facility management contact, Coimbatore cleaning company',
    ogImage: defaultImage,
    canonical: `${baseUrl}/contact`
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SOS Facilities",
  "description": "Professional facility management and cleaning services company in Coimbatore",
  "url": baseUrl,
  "logo": defaultImage,
  "image": defaultImage,
  "telephone": "+91-9025920259",
  "email": "info@sosfacilities.com",
  "foundingDate": "2011",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Coimbatore"
    },
    {
      "@type": "State",
      "name": "Tamil Nadu"
    }
  ],
  "serviceType": [
    "Facility Management",
    "Housekeeping Services",
    "Deep Cleaning",
    "Post Construction Cleaning",
    "ATM Maintenance",
    "Annual Maintenance Contracts"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cleaning and Facility Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Housekeeping",
          "description": "Professional housekeeping services for offices and commercial spaces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Cleaning",
          "description": "Intensive deep cleaning services for all types of properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post Construction Cleaning",
          "description": "Specialized cleaning services for newly constructed or renovated buildings"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AMC Services",
          "description": "Annual Maintenance Contracts for ongoing facility management"
        }
      }
    ]
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  }
};