import { motion } from 'motion/react';
import { Trophy, Award } from 'lucide-react';

interface ChampionCardProps {
  name: string;
  category: string;
  title: string;
  method: string;
  index?: number;
}

export function ChampionCard({ name, category, title, method, index = 0 }: ChampionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-br from-amber-950 via-black to-zinc-950 border-2 border-amber-500/50 rounded-xl p-6 md:p-8 hover:border-amber-400 transition-all duration-300 overflow-hidden group-hover:scale-105">
        {/* Gold shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />

        {/* Champion photo placeholder */}
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center overflow-hidden border-4 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.5)]">
          <Trophy className="w-16 h-16 text-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-xs text-amber-400 font-black tracking-widest uppercase">Campeão</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 mb-2 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            {name}
          </h3>

          <p className="text-sm text-amber-200/80 mb-2">{category}</p>

          <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-4" />

          <p className="text-sm font-black text-amber-400 mb-1">{title}</p>
          <p className="text-xs text-zinc-400">{method}</p>
        </div>

        {/* Gold particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '10%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
