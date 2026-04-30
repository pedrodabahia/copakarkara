import { motion } from 'motion/react';

interface AthleteCardProps {
  name: string;
  rank: number;
  category?: string;
  index?: number;
}

export function AthleteCard({ name, rank, category = 'Peso Médio', index = 0 }: AthleteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-xl font-black text-black">#{rank}</span>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-1">{name}</h3>
        <p className="text-sm text-zinc-400">{category}</p>
      </div>
    </motion.div>
  );
}
