import { motion } from 'motion/react';

export function LightningEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-50"
        animate={{
          opacity: [0, 0.8, 0],
          scaleY: [0, 1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-50"
        animate={{
          opacity: [0, 0.8, 0],
          scaleY: [0, 1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute top-0 left-2/3 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-50"
        animate={{
          opacity: [0, 0.8, 0],
          scaleY: [0, 1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 2.5,
        }}
      />
    </div>
  );
}
