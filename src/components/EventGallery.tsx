import { motion } from 'motion/react';
import { Image, Camera } from 'lucide-react';

const galleryItems = [
  { title: 'Momentos da Torcida', icon: Camera },
  { title: 'Destaques das Lutas', icon: Image },
  { title: 'Campeões', icon: Camera },
  { title: 'Celebrações', icon: Image },
  { title: 'Fãs', icon: Camera },
  { title: 'Bastidores', icon: Image },
];

export function EventGallery() {
  return (
    <section id="galeria" className="relative py-20 md:py-32 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
            GALERIA DO EVENTO
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full mb-4" />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Momentos épicos capturados durante a maior noite de luta da região
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 border border-amber-500/20 group-hover:border-amber-500/60 transition-all duration-300" />

              <div className="relative h-full flex flex-col items-center justify-center p-8 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300" />

                <item.icon className="w-12 h-12 text-amber-500/50 group-hover:text-amber-400 transition-colors mb-4" />
                <h3 className="text-lg font-black text-zinc-500 group-hover:text-amber-400 transition-colors text-center">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 mt-2 group-hover:text-zinc-400 transition-colors">
                  Em breve
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 mb-4">Compartilhe seus momentos com #CopaKarkara</p>
          <div className="flex justify-center gap-4">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <div
                key={social}
                className="px-4 py-2 bg-zinc-900 border border-amber-500/30 rounded-lg text-sm text-zinc-400 hover:border-amber-500 hover:text-amber-400 transition-colors cursor-pointer"
              >
                {social}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
