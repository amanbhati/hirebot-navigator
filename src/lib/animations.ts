
import { useEffect, useState, useRef } from 'react';

export const useInView = (options = {}, once = true) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once && observer && element) {
          observer.unobserve(element);
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options, once]);

  return { ref, isInView };
};

export const useLazyImage = (src: string, placeholderSrc?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || '');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
    return () => {
      img.onload = null;
    };
  }, [src]);

  return { imageSrc, imageLoaded };
};

export const staggerAnimation = (index: number, baseDelay = 0.05) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5, 
      delay: baseDelay * index,
      ease: [0.22, 1, 0.36, 1]
    }
  };
};
