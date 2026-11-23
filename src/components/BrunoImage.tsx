import { forwardRef, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BrunoImageProps {
  variant: 'door' | 'sniff' | 'happy' | 'sleep' | 'jump';
  className?: string;
  bob?: boolean;
}

export const BrunoImage = forwardRef<HTMLImageElement, BrunoImageProps>(
  ({ variant, className = '', bob = false }, ref) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const imageMap: Record<string, string> = {
      door: '/images/bruno-door.webp',
      sniff: '/images/bruno-sniff.webp',
      happy: '/images/bruno-happy.webp',
      sleep: '/images/bruno-sleep.webp',
      jump: '/images/bruno-jump.webp',
    };

    useEffect(() => {
      if (!bob || !imgRef.current) return;

      const animate = () => {
        const offset = Math.sin(Date.now() / 600) * 6;
        if (imgRef.current) {
          imgRef.current.style.transform = `translateY(${offset}px)`;
        }
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [bob]);

    return (
      <motion.img
        ref={ref as unknown as React.Ref<HTMLImageElement>}
        src={imageMap[variant] || imageMap.happy}
        alt={`Bruno the golden retriever ${variant}`}
        className={className}
        draggable={false}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    );
  }
);

BrunoImage.displayName = 'BrunoImage';
