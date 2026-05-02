import { motion } from 'motion/react';
import { MapPin, Calendar, Ticket, MessageCircle, Award, Users, TrendingUp, Target, ExternalLink, ChevronRight } from 'lucide-react';
import { Countdown } from './components/Countdown';
import { FightCard } from './components/FightCard';
import { SponsorCard } from './components/SponsorCard';
import { TestimonialCard } from './components/TestimonialCard';
import { ChampionCard } from './components/ChampionCard';
import { LiveStreamSection } from './components/LiveStreamSection';
import { EventGallery } from './components/EventGallery';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { ParticleEffect } from './components/ParticleEffect';
import { LightningEffect } from './components/LightningEffect';
import { SmokeEffect } from './components/SmokeEffect';
import { SpotlightEffect } from './components/SpotlightEffect';

import daniloFlyer from './imagesFighters/danilo.jpeg';
import adriano from './imagesFighters/adriano.jpeg';
import benicios from './imagesFighters/benicios.jpeg';
import elias from './imagesFighters/elias.jpeg';
import geberson from './imagesFighters/geberson.jpeg';
import teo from './imagesFighters/teo.jpeg';
import vandamme from './imagesFighters/vandamme.jpeg';
import werick from './imagesFighters/werick.jpeg';
import paulo from './imagesFighters/paulo.jpeg';
import david from './imagesFighters/david.jpeg';
import gabriel from './imagesFighters/gabriel.jpeg';
import andre from './imagesFighters/andre.jpeg';
import xavier from './imagesFighters/xavier.jpeg';



export default function App() {
  const whatsappNumber = '5573999649599';
  const eventDate = '2026-05-16T19:00:00';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse na Copa Karkará`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <ScrollToTop />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

        {/* Grunge texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        {/* Dynamic effects */}
        <ParticleEffect count={40} />
        <LightningEffect />
        <SmokeEffect />
        <SpotlightEffect />

        {/* Enhanced Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />

        {/* Metallic particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-block relative">
                <motion.h1
                  className="text-6xl md:text-9xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-orange-500 tracking-tighter relative"
                  style={{
                    textShadow: '0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(249,115,22,0.3)',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  COPA KARKARÁ
                </motion.h1>
                <motion.div
                  className="h-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full shadow-[0_0_20px_rgba(245,158,11,0.8)]"

                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            <motion.p
              className="text-xl md:text-3xl mb-8 text-zinc-300 font-black tracking-wide"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              A GUERRA VAI COMEÇAR EM POSTO DA MATA
            </motion.p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-amber-500/30 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.6)' }}
              >
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="text-sm md:text-base text-zinc-300">Ginásio Angelo Magalhães</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-amber-500/30 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.6)' }}
              >
                <Calendar className="w-5 h-5 text-amber-500" />
                <span className="text-sm md:text-base text-zinc-300 font-black">16 de Maio</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-amber-500/30 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.6)' }}
              >
                <Ticket className="w-5 h-5 text-amber-500" />
                <span className="text-sm md:text-base text-zinc-300">R$ 10 + 1kg de alimento</span>
              </motion.div>
            </div>

            <motion.div
              className="mb-12 flex flex-col justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-sm text-amber-400 mb-4 tracking-widest uppercase">Faltam apenas</p>
              <Countdown targetDate={eventDate}/>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
              onClick={handleWhatsAppClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-lg overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(245,158,11,0.8),inset_0_0_20px_rgba(249,115,22,0.5)]" />

                {/* Fire particles on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      
                      key={i}
                      className="absolute bottom-0 w-1 h-1 bg-amber-300 rounded-full"
                      style={{ left: `${i * 10}%` }}
                      initial={{ y: 0, opacity: 0 }}
                      whileHover={{
                        y: -30,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.05,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>

                <span className="relative z-10 font-black tracking-wide text-black flex items-center gap-2 drop-shadow-lg">
                  QUERO IR
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={handleWhatsAppClick}
                className="group relative px-8 py-4 bg-zinc-900 border-2 border-amber-500 rounded-lg overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-amber-500"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(245,158,11,0.5)',
                      '0 0 25px rgba(245,158,11,0.8)',
                      '0 0 10px rgba(245,158,11,0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative z-10 font-black tracking-wide flex items-center gap-2 group-hover:text-black transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  FALAR NO WHATSAPP
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Smoke effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

        {/* Fighter silhouettes placeholder */}
        <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none">
          <div className="absolute bottom-0 left-[10%] w-64 h-96 bg-gradient-to-t from-black via-zinc-900/50 to-transparent opacity-20 blur-sm" />
          <div className="absolute bottom-0 right-[10%] w-64 h-96 bg-gradient-to-t from-black via-zinc-900/50 to-transparent opacity-20 blur-sm" />
        </div>
      </section>

      {/* Sobre o Evento */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
        <ParticleEffect count={20} />
        <SmokeEffect />

        {/* Diagonal lightning strikes */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{
                textShadow: [
                  '0 0 20px rgba(245,158,11,0.3)',
                  '0 0 40px rgba(245,158,11,0.5)',
                  '0 0 20px rgba(245,158,11,0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
                O MAIOR EVENTO DE BOXE DA REGIÃO
              </h2>
              <div className="h-1 w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
            </motion.div>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-6">
              A primeira edição da Copa Karkará chega para marcar história em Posto da Mata,
              reunindo atletas, emoção e combates eletrizantes em uma noite inesquecível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, number: '15', text: 'Lutas Confirmadas' },
              { icon: Users, number: '6', text: 'Eventos Realizados' },
              { icon: Award, number: '1', text: 'Graduação Muay Thai' },
              { icon: TrendingUp, number: '100%', text: 'Ação e Emoção' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-amber-500/30 rounded-xl p-6 text-center hover:border-amber-500 transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <item.icon className="w-12 h-12 text-amber-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  </motion.div>

                  <motion.div
                    className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-600 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.number}
                  </motion.div>

                  <p className="relative text-zinc-400 font-black tracking-wide text-sm">{item.text}</p>

                  {/* Corner accents */}
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-zinc-900/50 via-zinc-800/50 to-zinc-900/50 border border-amber-500/30 rounded-xl p-8">
              <p className="text-zinc-500 mb-3 text-sm tracking-widest uppercase">Organizado por</p>
              <motion.p
                className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-3"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(245,158,11,0.3)',
                    '0 0 30px rgba(245,158,11,0.6)',
                    '0 0 20px rgba(245,158,11,0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MARILTON KARKARÁ
              </motion.p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lutas Principais */}
      <section id="lutas" className="relative py-20 md:py-32 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

        <ParticleEffect count={30} />
        <LightningEffect />
        <SpotlightEffect />

        {/* Arena spotlights */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-amber-500/30 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-orange-500/30 via-transparent to-transparent" />

        <div className="relative container justfy-center mx-auto px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block">
              <motion.h2
                className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400"
                style={{
                  textShadow: '0 0 30px rgba(245,158,11,0.4)',
                }}
              >
                LUTAS PRINCIPAIS
              </motion.h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
            </div>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
              Confrontos épicos que vão definir a história da Copa Karkará
            </p>
          </motion.div>

          <FightCard fighter1="Danilo Moraes" fighter2="Leo Said" image={daniloFlyer} colorBg={'orange'} corTexto={'black'}/>
          <FightCard fighter1="Van Damme" fighter2="Maycon" image={vandamme} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Adriano" fighter2="Edgar" image={adriano} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="André Coroa" fighter2="Carlos Henrique" image={andre} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Rafael Xavier" fighter2="Erik Bredoff" image={xavier} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Victor Matias" fighter2="Benícios" image={benicios} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Elias" fighter2="Darlan" image={elias} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Geberson" fighter2="Douglas" image={geberson} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Paulo Felipe" fighter2="Luan Lopes" image={paulo} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Téo" fighter2="Leonam" image={teo} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Werick" fighter2="Erick Silva" image={werick} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="David" fighter2="Athos" image={david} colorBg={'black'} corTexto={'white'}/>
          <FightCard fighter1="Hélio" fighter2="Gabriel" image={gabriel} colorBg={'black'} corTexto={'white'}/>



        </div>
      </section>

      {/* Champions Section */}
      <section id="campeoes" className="relative py-20 md:py-32 bg-gradient-to-b from-zinc-900 via-amber-950/5 to-black overflow-hidden">
        {/* Gold glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-500/10 rounded-full blur-[150px]" />

        {/* Floating gold particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500"
              style={{
                textShadow: '0 0 40px rgba(245,158,11,0.5)',
              }}
            >
              CAMPEÕES DA NOITE
            </motion.h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(245,158,11,0.8)]" />
            <p className="text-amber-200/60 mt-6 max-w-2xl mx-auto">
              Após o evento, os grandes campeões da Copa Karkará serão celebrados aqui
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ChampionCard
              name="A ser definido"
              category="Luta Principal"
              title="Cinturão Principal"
              method="Resultado aguardado"
              index={0}
            />
            <ChampionCard
              name="A ser definido"
              category="Luta secundária"
              title="Cinturão Especial"
              method="Resultado aguardado"
              index={1}
            />
            <ChampionCard
              name="A ser definido"
              category="Melhor Luta"
              title="Prêmio da Noite"
              method="Resultado aguardado"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <LiveStreamSection status="upcoming" />

      {/* Event Gallery */}
      <EventGallery />

      {/* Patrocinadores */}
      <section className="relative py-20 md:py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
              PATROCÍNIO OFICIAL
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
            <p className="text-zinc-500 mt-4">Marcas que acreditam no poder do esporte</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <SponsorCard name="UNILABS" index={0} />
            <SponsorCard name="DA PRAÇA" index={0} />
            <SponsorCard name="REMEQ" index={0} />
            <SponsorCard name="TAICIELLE" index={0} />
            <SponsorCard name="STUDIO MATOS" index={0} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-zinc-900 to-black border-2 border-dashed border-amber-500/30 rounded-lg p-8 flex flex-col items-center justify-center min-h-[120px] hover:border-amber-500/60 transition-all cursor-pointer"
            >
              <Award className="w-12 h-12 text-amber-500/30 group-hover:text-amber-500/60 transition-colors mb-3" />
              <span className="text-zinc-600 font-black text-sm group-hover:text-zinc-500 transition-colors">SEJA PATROCINADOR</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
              O QUE DIZEM SOBRE NÓS
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
            <p className="text-zinc-500 mt-4">Depoimentos de quem já viveu a experiência</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              text="Evento que movimenta a cidade."
              author="João Silva"
              index={0}
            />
            <TestimonialCard
              text="Noite histórica para o esporte local."
              author="Maria Santos"
              index={1}
            />
            <TestimonialCard
              text="Estrutura e emoção de alto nível."
              author="Pedro Costa"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="contato" className="relative py-20 md:py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
              COMO CHEGAR
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)] mb-8" />

            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-6 h-6 text-amber-500" />
              <p className="text-xl md:text-2xl text-zinc-300">
                BR-418 - Ao lado do Bahia dos Anjos
              </p>
            </div>
            <p className="text-lg text-zinc-400 mb-8">Posto da Mata - Bahia</p>

            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border-2 border-amber-500/20 rounded-xl p-4 md:p-8 max-w-4xl mx-auto mb-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.1),transparent_70%)]" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <MapPin className="w-16 h-16 text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]" />
                </motion.div>
                <div className="absolute inset-0 border-2 border-amber-500/20 rounded-lg" />

                {/* Pulse rings */}
                <motion.div
                  className="absolute w-24 h-24 border-2 border-amber-500/30 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Ginásio+Angelo+Magalhães+Posto+da+Mata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-black font-black rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VER NO MAPA
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/30 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]" />

        <ParticleEffect count={50} />
        <LightningEffect />
        <SmokeEffect />

        {/* Electric energy bursts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '50%',
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-500 leading-tight drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              VOCÊ VAI ASSISTIR AO VIVO<br />OU OUVIR FALAR DEPOIS?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 flex-wrap">
              <motion.button
              onClick={handleWhatsAppClick}
                className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.4)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(245,158,11,0.5), inset 0 0 30px rgba(249,115,22,0.3)',
                      '0 0 60px rgba(249,115,22,0.8), inset 0 0 40px rgba(245,158,11,0.5)',
                      '0 0 30px rgba(245,158,11,0.5), inset 0 0 30px rgba(249,115,22,0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Explosive particles */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <motion.div

                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, (Math.random() - 0.5) * 100],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                      }}
                    />
                  ))}
                </div>

                <span className="relative z-10 font-black tracking-wide text-black flex items-center gap-2 text-lg drop-shadow-lg">
                  GARANTIR PRESENÇA
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={handleWhatsAppClick}
                className="group relative px-10 py-5 bg-zinc-900 border-2 border-amber-500 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(245,158,11,0.5)',
                      '0 0 40px rgba(245,158,11,1)',
                      '0 0 20px rgba(245,158,11,0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative z-10 font-black tracking-wide flex items-center gap-2 text-lg group-hover:text-black transition-colors">
                  <MessageCircle className="w-6 h-6" />
                  FALAR NO WHATSAPP
                </span>
              </motion.button>

              <motion.button
                className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 border-2 border-red-500 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(239,68,68,0.5)',
                      '0 0 40px rgba(239,68,68,0.8)',
                      '0 0 20px rgba(239,68,68,0.5)',
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="relative z-10 font-black tracking-wide flex items-center gap-2 text-lg text-white">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    🔴
                  </motion.div>
                  ASSISTIR ONLINE
                </span>
              </motion.button>
            </div>

            <div className="text-zinc-400">
              <p className="mb-2">Entre em contato:</p>
              <a href={`tel:+${whatsappNumber}`} className="text-2xl md:text-3xl font-black text-amber-500 hover:text-amber-400 transition-colors">
                (73) 99964-9599
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">
                COPA KARKARÁ
              </h3>
              <p className="text-zinc-600 text-sm">O maior evento de luta da região</p>
            </div>

            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-amber-400 transition-colors">Sobre</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Lutas</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Ingressos</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Contato</a>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mb-8" />

          <div className="text-center">
            <p className="text-zinc-600 text-sm mb-2">
              © 2026 Studio Matos - Todos os direitos reservados
            </p>
            <p className="text-zinc-700 text-xs">
              Site desenvolvido pela Studio Matos | @digitalmatos
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}