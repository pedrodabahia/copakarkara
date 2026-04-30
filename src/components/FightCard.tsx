import { motion } from 'motion/react';
import { Trophy, Flame } from 'lucide-react';
import { useState } from 'react';

interface FightCardProps {
  fighter1: string;
  fighter2: string;
  type?: 'main' | 'title';
  index?: number;
}

export function FightCard({ fighter1, fighter2, type, index = 0 }: FightCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Multiple glow layers for intensity */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />

      {/* Electric sparks on hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          ))}
        </>
      )}

      <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border-2 border-amber-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 overflow-hidden group-hover:scale-[1.02]">
        {/* Crack energy background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Fire texture overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,146,60,0.2),transparent_50%)]" />

        {type && (
          <div className="flex items-center gap-2 mb-4 relative z-10">
            {type === 'main' ? (
              <motion.div
                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
              >
                <Flame className="w-5 h-5 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              </motion.div>
            ) : (
              <Trophy className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            )}
            <span className="text-xs md:text-sm text-amber-400 font-black tracking-wider uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
              {type === 'main' ? 'MAIN EVENT' : 'DISPUTA ESPECIAL'}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 relative z-10">
          <div className="flex-1 text-right">
            <motion.h3
              className="text-lg md:text-2xl font-black text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              animate={isHovered ? { textShadow: ['0 0 10px rgba(255,255,255,0.3)', '0 0 20px rgba(245,158,11,0.5)', '0 0 10px rgba(255,255,255,0.3)'] } : {}}
              transition={{ duration: 0.5 }}
            >
              {fighter1}
            </motion.h3>
            <div className="h-1 bg-gradient-to-l from-amber-500 via-orange-500 to-transparent rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
          </div>

          <motion.div
            className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 relative"
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            VS
            {isHovered && (
              <motion.div
                className="absolute inset-0 blur-xl bg-gradient-to-b from-amber-400 to-orange-600 opacity-50"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          <div className="flex-1 text-left">
            <motion.h3
              className="text-lg md:text-2xl font-black text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              animate={isHovered ? { textShadow: ['0 0 10px rgba(255,255,255,0.3)', '0 0 20px rgba(245,158,11,0.5)', '0 0 10px rgba(255,255,255,0.3)'] } : {}}
              transition={{ duration: 0.5 }}
            >
              {fighter2}
            </motion.h3>
            <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-transparent rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
          </div>
        </div>

        {/* Punch impact flash */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 1.5 }}
          />
        )}
      </div>
    </motion.div>
  );
}
