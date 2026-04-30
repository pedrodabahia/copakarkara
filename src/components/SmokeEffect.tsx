import { motion } from 'motion/react';

export function SmokeEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-64 h-64 rounded-full"
          style={{
            left: `${i * 25}%`,
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -300],
            scale: [1, 2.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
