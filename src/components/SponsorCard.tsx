import { motion } from 'motion/react';

interface SponsorCardProps {
  name: string;
  index?: number;
}

export function SponsorCard({ name, index = 0 }: SponsorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      <div className="relative bg-white rounded-lg p-8 flex items-center justify-center min-h-[120px] shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 group-hover:scale-105 overflow-hidden">
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />

        <span className="relative text-2xl md:text-3xl font-black text-black tracking-tight">
          {name}
        </span>

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-500/20 group-hover:border-amber-500/60 transition-colors" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-500/20 group-hover:border-amber-500/60 transition-colors" />
      </div>
    </motion.div>
  );
}
