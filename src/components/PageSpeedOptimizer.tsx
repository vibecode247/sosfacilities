import React, { useEffect } from 'react';

const PageSpeedOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources for Core Web Vitals optimization
    const preloadCriticalResources = () => {
      // Preload hero image for better LCP
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.href = '/lovable-uploads/9f9da267-3504-4ee4-b63c-21c74cb21f7a.png';
      heroImageLink.as = 'image';
      heroImageLink.type = 'image/png';
      document.head.appendChild(heroImageLink);

      // Add viewport meta for mobile optimization
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
      }
    };

    // Add critical CSS for preventing layout shift
    const addCriticalCSS = () => {
      const criticalCSS = `
        /* Critical styles to prevent CLS */
        .hero-section { min-height: 100vh; }
        .service-card { min-height: 400px; }
        .loading-skeleton { 
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `;
      
      const styleTag = document.createElement('style');
      styleTag.textContent = criticalCSS;
      document.head.appendChild(styleTag);
    };

    // Add performance monitoring
    const addPerformanceMonitoring = () => {
      // Monitor Core Web Vitals
      if ('web-vital' in window) {
        // This would integrate with web-vitals library if added
        console.info('Performance monitoring ready');
      }
    };

    preloadCriticalResources();
    addCriticalCSS();
    addPerformanceMonitoring();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PageSpeedOptimizer;