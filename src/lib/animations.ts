
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

export const useHoverImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onTouchStart: () => setIsHovered(true),
    onTouchEnd: () => setIsHovered(false),
  };

  return { isHovered, hoverProps };
};

export const imageHoverAnimation = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.05, 
    rotate: 1,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const containerHoverAnimation = {
  initial: { 
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" 
  },
  hover: { 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const useUploadAnimation = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  
  const startUpload = () => {
    setUploadState('uploading');
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState('success');
          return 100;
        }
        return prev + 5;
      });
    }, 150);
    
    return () => clearInterval(interval);
  };
  
  const resetUpload = () => {
    setUploadState('idle');
    setUploadProgress(0);
  };
  
  return { uploadProgress, uploadState, startUpload, resetUpload };
};

export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};
