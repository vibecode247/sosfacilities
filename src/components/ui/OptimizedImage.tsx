import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: 'logo' | 'hero' | 'content' | 'profile';
  lazy?: boolean;
  priority?: boolean;
  fallback?: string;
}

const sizeConfig = {
  logo: {
    containerClass: 'w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-52 xl:h-28',
    imageClass: 'h-full w-full max-w-full object-contain'
  },
  hero: {
    containerClass: 'w-full h-full',
    imageClass: 'w-full h-full object-cover'
  },
  content: {
    containerClass: 'w-full h-auto',
    imageClass: 'w-full h-auto object-cover'
  },
  profile: {
    containerClass: 'w-full h-full',
    imageClass: 'w-full h-full object-cover'
  }
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  size = 'content',
  lazy = true,
  priority = false,
  fallback,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isInView || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isInView, priority]);

  // For now, just use original src since we don't have WebP versions
  const getOptimizedSrc = (originalSrc: string) => {
    return originalSrc;
  };

  const config = sizeConfig[size];
  const imageSrc = isInView ? getOptimizedSrc(src) : '';

  const handleLoad = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const handleError = () => {
    setIsError(true);
    // Use original src as fallback instead of a separate fallback prop
    if (imgRef.current && imgRef.current.src !== src) {
      imgRef.current.src = src;
      setIsError(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        config.containerClass,
        className
      )}
    >
      {isInView && (
        <>
          {/* Loading placeholder */}
          {!isLoaded && !isError && (
            <div className="absolute inset-0 bg-muted animate-pulse rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Error placeholder */}
          {isError && !fallback && (
            <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Image unavailable</span>
            </div>
          )}

          {/* Actual image */}
          <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              config.imageClass,
              'transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading={priority ? 'eager' : (lazy ? 'lazy' : 'eager')}
            {...(priority && { fetchpriority: 'high' })}
            {...props}
          />
        </>
      )}
    </div>
  );
};

export default OptimizedImage;