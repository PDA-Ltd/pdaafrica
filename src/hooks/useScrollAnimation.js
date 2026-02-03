import { useRef, useEffect, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally, unobserve after animation to run only once
          // observer.unobserve(entry.target);
        } else {
          // Optionally, reset visibility if element scrolls out of view
          // setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};
