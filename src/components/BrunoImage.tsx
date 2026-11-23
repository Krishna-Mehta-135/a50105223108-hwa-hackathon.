import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BrunoImageProps {
  variant: 'door' | 'sniff' | 'happy' | 'sleep' | 'jump';
  className?: string;
  bob?: boolean;
}

export function BrunoImage({ variant, className = '', bob = false }: BrunoImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const imageMap: Record<string, string> = {
    door: '/images/bruno-door.jpg',
    sniff: '/images/bruno-sniff.jpg',
    happy: '/images/bruno-happy.jpg',
    sleep: '/images/bruno-sleep.jpg',
    jump: '/images/bruno-jump.jpg',
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
      ref={imgRef}
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
