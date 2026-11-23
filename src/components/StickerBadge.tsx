import { motion } from 'framer-motion';

interface StickerBadgeProps {
  children: React.ReactNode;
  className?: string;
  tilt?: 'neg' | 'pos';
}

export function StickerBadge({ children, className = '', tilt = 'neg' }: StickerBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: tilt === 'neg' ? -10 : 10 }}
      animate={{ scale: 1, rotate: tilt === 'neg' ? -4 : 6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`inline-block border-4 border-navy bg-white rounded-full px-4 py-1.5 font-heading text-sm text-navy uppercase transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
