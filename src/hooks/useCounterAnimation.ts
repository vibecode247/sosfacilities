
import { useState, useEffect } from 'react';

export const useCounterAnimation = (target: number, duration: number = 2000, suffix: string = '') => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500); // Delay start for staggered effect
    
    return () => clearTimeout(timer);
  }, [target, duration, isVisible]);

  const startAnimation = () => setIsVisible(true);

  return { count: `${count}${suffix}`, startAnimation };
};
