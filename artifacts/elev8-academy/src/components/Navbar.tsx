import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.programs'), href: '#programs' },
    { name: t('nav.coaches'), href: '#coaches' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-white/10 py-3 shadow-lg' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="Elev8 Logo" 
              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <span className="font-display font-black text-2xl tracking-tighter text-white uppercase italic">
              ELEV<span className="text-primary text-glow">8</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-primary text-sm font-bold text-white transition-all hover:bg-white/5"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggleLang} className="text-white">
              <span className="font-bold text-sm">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-wider text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
