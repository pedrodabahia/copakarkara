import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  index?: number;
}

export function TestimonialCard({ text, author, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-amber-500/30 rounded-lg p-6 md:p-8 hover:border-amber-500/60 transition-all duration-300 group-hover:scale-[1.02] overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          <Quote className="w-10 h-10 text-amber-500 mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

          <p className="text-base md:text-lg text-zinc-200 mb-6 italic leading-relaxed">
            "{text}"
          </p>

          <div className="flex items-center justify-between">
            <p className="text-sm text-amber-400 font-black">— {author}</p>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
