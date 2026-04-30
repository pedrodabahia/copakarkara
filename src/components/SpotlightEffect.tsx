import { motion } from 'motion/react';

export function SpotlightEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(245,158,11,0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(249,115,22,0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
