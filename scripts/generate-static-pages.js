import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import SEO data (we'll need to create a JS version or parse the TS file)
const baseUrl = 'https://sosfacilities.com';
const defaultImage = `${baseUrl}/lovable-uploads/bceb7b13-ddf8-44ae-a53c-c25b4ab49fce.png`;

const seoData = {
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

const routes = {
  '/': 'home',
  '/about': 'about',
  '/deep-cleaning': 'deepCleaning',
  '/housekeeping-workforce': 'housekeeping',
  '/atm-maintenance': 'atmMaintenance',
  '/amc-corporates': 'amcCorporates',
  '/post-construction': 'postConstruction',
  '/contact': 'contact'
};

function generateStaticHTML(route, seoKey) {
  const seo = seoData[seoKey];
  
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${seo.title}</title>
    <meta name="title" content="${seo.title}" />
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${seo.canonical}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:image" content="${seo.ogImage}" />
    <meta property="og:image:secure_url" content="${seo.ogImage}" />
    <meta property="og:image:alt" content="${seo.title}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:site_name" content="SOS Facilities" />
    <meta property="og:locale" content="en_IN" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${seo.canonical}" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${seo.ogImage}" />
    <meta name="twitter:image:alt" content="${seo.title}" />
    <meta name="twitter:site" content="@SOSFacilities" />
    <meta name="twitter:creator" content="@SOSFacilities" />
    
    <!-- Favicons -->
    <link rel="icon" href="/lovable-uploads/bceb7b13-ddf8-44ae-a53c-c25b4ab49fce.png" type="image/png" sizes="any">
    <link rel="apple-touch-icon" href="/lovable-uploads/bceb7b13-ddf8-44ae-a53c-c25b4ab49fce.png">
    <link rel="manifest" href="/manifest.json">
    
    <!-- DNS Prefetch for performance -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    
    <!-- Preconnect for critical fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Preload critical fonts for faster loading -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" as="style">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" as="style">
    
    <!-- Load fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=PT+Sans:wght@400;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root">
      <!-- Fallback content for scrapers -->
      <h1>${seo.title}</h1>
      <p>${seo.description}</p>
      <p>Loading SOS Facilities...</p>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

function generateStaticPages() {
  const distDir = path.resolve(__dirname, '../dist');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  // Read the built index.html as a template
  const builtIndexPath = path.join(distDir, 'index.html');
  let builtIndexContent = '';
  
  if (fs.existsSync(builtIndexPath)) {
    builtIndexContent = fs.readFileSync(builtIndexPath, 'utf8');
  }
  
  // Generate HTML files for each route
  Object.entries(routes).forEach(([route, seoKey]) => {
    if (route === '/') {
      // For home page, enhance the existing built index.html with SEO meta tags
      if (builtIndexContent) {
        const seo = seoData[seoKey];
        let enhancedHtml = builtIndexContent;
        
        // Replace or add OG image meta tag
        const ogImageRegex = /<meta property="og:image" content="[^"]*" \/>/;
        const newOgImageTag = `<meta property="og:image" content="${seo.ogImage}" />`;
        
        if (ogImageRegex.test(enhancedHtml)) {
          enhancedHtml = enhancedHtml.replace(ogImageRegex, newOgImageTag);
        } else {
          // Add before closing </head>
          enhancedHtml = enhancedHtml.replace('</head>', `    ${newOgImageTag}\n  </head>`);
        }
        
        // Replace Twitter image meta tag
        const twitterImageRegex = /<meta name="twitter:image" content="[^"]*" \/>/;
        const newTwitterImageTag = `<meta name="twitter:image" content="${seo.ogImage}" />`;
        
        if (twitterImageRegex.test(enhancedHtml)) {
          enhancedHtml = enhancedHtml.replace(twitterImageRegex, newTwitterImageTag);
        }
        
        fs.writeFileSync(builtIndexPath, enhancedHtml);
        console.log('Enhanced home page with updated OG image');
      }
      return;
    }
    
    const html = generateStaticHTML(route, seoKey);
    
    // Create directory structure for sub-routes
    const routeDir = path.join(distDir, route.slice(1)); // Remove leading slash
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    
    console.log(`Generated static HTML for ${route}`);
  });
  
  // Create _headers file for Netlify/Vercel deployment
  const headersContent = `/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

# Cache static assets
/lovable-uploads/*
  Cache-Control: public, max-age=31536000, immutable

# Cache fonts
/fonts/*
  Cache-Control: public, max-age=31536000, immutable`;
  
  fs.writeFileSync(path.join(distDir, '_headers'), headersContent);
  
  console.log('Static pages generation complete!');
}

// Run the script
generateStaticPages();