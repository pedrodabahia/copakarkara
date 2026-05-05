import { motion } from 'motion/react';
import { Play, Calendar } from 'lucide-react';

interface LiveStreamSectionProps {
  status: 'upcoming' | 'live' | 'replay';
}

export function LiveStreamSection({ status = 'upcoming' }: LiveStreamSectionProps) {
  return (
    <section id="live" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
            TRANSMISSÃO AO VIVO
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Sponsor banner */}
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-amber-500/30 rounded-t-xl p-4 flex items-center justify-center gap-4">
            <span className="text-sm text-zinc-400">Patrocínio:</span>
            <span className="text-xl font-black text-white">UNILABS</span>
          </div>

          {/* Video player */}
          <div className="relative md:w-full md:h-full w-full h-full bg-black border-x-2 border-amber-500/30 aspect-video flex items-center justify-center overflow-hidden">
            {status === 'upcoming' && (
              <div className="text-center p-8">
                <Calendar className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">EM BREVE</h3>
                <p className="text-zinc-400 mb-6">A transmissão começará em breve</p>
                <div className="text-2xl font-black text-amber-500">16 DE MAIO</div>
              </div>
            )}

            {status === 'live' && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className='w-full h-full md:col-span-2'>
                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Kr3aCtAixPc"
                title="live"
                allow="autoplay; encrypted-media"
                allowFullScreen
                />

              </div>
              <div className="bg-zinc-900 hidden md:block rounded-xl">
                <iframe
                  src="https://www.youtube.com/live_chat?v=LYrNWoIsc54&embed_domain=localhost"
                  width="100%"
                  height="500">
                </iframe>
              </div>
            </div>  
            )}

            {status === 'replay' && (
              <div className="text-center p-8">
                <Play className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  ASSISTA A REPRISE COMPLETA
                </h3>
                <button className="mt-4 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black rounded-lg hover:scale-105 transition-transform">
                  ASSISTIR AGORA
                </button>
              </div>
            )}

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400/50 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Chat/Energy area */}
          <div className="bg-gradient-to-b from-zinc-900 to-black border-x-2 border-b-2 border-amber-500/30 rounded-b-xl p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-amber-500">1.2K+</div>
                  <div className="text-xs text-zinc-500">Espectadores</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-amber-500">15</div>
                  <div className="text-xs text-zinc-500">Lutas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-amber-500">LIVE</div>
                  <div className="text-xs text-zinc-500">Status</div>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-zinc-400">Chat ativo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
