import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Ticket } from 'lucide-react';
import { useState } from 'react';

export function Header() {
    const whatsappNumber = '5573999649599';
    const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse na Copa Karkará`, '_blank');
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.95)']
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(245,158,11,0)', 'rgba(245,158,11,0.2)']
  );

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Lutas', href: '#lutas' },
    { label: 'Campeões', href: '#campeoes' },
    { label: 'Ao Vivo', href: '#live' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      style={{
        backgroundColor: headerBackground,
        borderBottom: `1px solid`,
        borderColor: headerBorder,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              COPA KARKARÁ
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-black text-zinc-400 hover:text-amber-400 transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black rounded-lg text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Ticket className="w-4 h-4" />
              INGRESSOS
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-amber-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-amber-500/20 py-4"
          >
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-black text-zinc-400 hover:text-amber-400 transition-colors tracking-wide py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black rounded-lg text-sm flex items-center justify-center gap-2">
                <Ticket className="w-4 h-4" />
                INGRESSOS
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
