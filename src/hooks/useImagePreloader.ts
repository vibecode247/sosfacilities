import { useState, useEffect, useCallback } from 'react';

interface UseImagePreloaderProps {
  imageSrcs: string[];
  priority?: number; // Number of images to preload immediately
}

export const useImagePreloader = ({ imageSrcs, priority = 3 }: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
  const [preloadedCount, setPreloadedCount] = useState(0);

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (loadedImages.has(src)) {
        resolve();
        return;
      }

      setLoadingImages(prev => new Set(prev).add(src));

      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(src));
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(src);
          return newSet;
        });
        setPreloadedCount(prev => prev + 1);
        resolve();
      };
      img.onerror = () => {
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(src);
          return newSet;
        });
        reject(new Error(`Failed to load image: ${src}`));
      };
      img.src = src;
    });
  }, [loadedImages]);

  const preloadImages = useCallback(async (srcs: string[]) => {
    const promises = srcs.map(src => preloadImage(src).catch(() => {})); // Ignore errors
    await Promise.allSettled(promises);
  }, [preloadImage]);

  useEffect(() => {
    if (imageSrcs.length > 0) {
      // Preload priority images immediately
      const priorityImages = imageSrcs.slice(0, priority);
      preloadImages(priorityImages);
    }
  }, [imageSrcs, priority, preloadImages]);

  const isImageLoaded = useCallback((src: string) => loadedImages.has(src), [loadedImages]);
  const isImageLoading = useCallback((src: string) => loadingImages.has(src), [loadingImages]);

  return {
    preloadImages,
    isImageLoaded,
    isImageLoading,
    loadedCount: loadedImages.size,
    preloadedCount,
    totalImages: imageSrcs.length
  };
};