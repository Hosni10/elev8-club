import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import { 
  Trophy, Globe2, Users, Target, Activity, Brain, Lightbulb, 
  CheckCircle2, MapPin, Mail, Phone, ChevronRight 
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* football training soccer player dribbling */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1920" 
            alt="Football training" 
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              {t('nav.home')} • {t('nav.programs')}
            </span>
          </motion.div>
          
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase max-w-5xl mx-auto drop-shadow-2xl"
          >
            {t('hero.headline').split('.').map((part, i, arr) => (
              <span key={i}>
                {part}{i !== arr.length - 1 && '.'}
                <br className="hidden md:block" />
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {t('hero.subhead')}
          </motion.p>
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#programs" className="btn-primary">
              {t('hero.join')}
            </a>
            <a href="#about" className="btn-outline">
              {t('hero.learn')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT & STATS SECTION */}
      <section id="about" className="py-24 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-sm font-black text-primary uppercase tracking-widest mb-4">{t('about.title')}</h2>
            <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
              "{t('about.desc')}"
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Trophy, label: t('about.stats.years'), value: "10+" },
              { icon: Globe2, label: t('about.stats.countries'), value: "4" },
              { icon: Target, label: t('about.stats.champs'), value: "5" },
              { icon: Users, label: t('about.stats.ratio'), value: "1:12" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center group"
              >
                <stat.icon className="w-10 h-10 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="lg:w-1/2"
            >
              {/* football boots ball */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1000" 
                  alt="Football" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-8 border-l-4 border-primary pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
                {t('story.title')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                {t('story.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">
              {t('methodology.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {(t('methodology.pillars', { returnObjects: true }) as Array<{title: string, desc: string}>).map((pillar, idx) => {
              const icons = [Target, Activity, Brain, Lightbulb, Trophy];
              const Icon = icons[idx];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-400">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COACHES SECTION */}
      <section id="coaches" className="py-24 bg-card/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-6">
                  {t('coaches.title')}
                </h2>
                <p className="text-lg text-gray-300 mb-8 font-medium">
                  {t('coaches.desc')}
                </p>
                <div className="hidden lg:block">
                  <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo mark" className="w-32 opacity-20 grayscale" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(t('coaches.credentials', { returnObjects: true }) as string[]).map((cred, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-xl flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="font-bold text-white leading-snug">{cred}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-24 relative overflow-hidden">
        {/* Pitch lines background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&q=80&w=1920" alt="pitch" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic text-glow">
              {t('programs.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(t('programs.levels', { returnObjects: true }) as Array<{title: string, subtitle: string}>).map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 mix-blend-overlay"></div>
                <div className="glass-card p-10 relative z-10 h-full flex flex-col justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <h3 className="text-5xl font-black text-white mb-4 group-hover:text-primary transition-colors">{prog.title}</h3>
                  <p className="text-xl text-gray-300 font-bold">{prog.subtitle}</p>
                  
                  <div className={`mt-8 w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all self-start ${isRtl ? 'rotate-180' : ''}`}>
                    <ChevronRight className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & DIFFERENTIATORS */}
      <section className="py-24 bg-card/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Achievements */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-black text-white uppercase italic mb-10 flex items-center gap-4">
                <Trophy className="text-secondary" size={36} />
                {t('achievements.title')}
              </h2>
              <div className="space-y-6">
                {(t('achievements.items', { returnObjects: true }) as Array<{title: string, desc: string}>).map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-16 h-16 rounded-xl bg-black border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-secondary transition-colors">
                      <span className="font-black text-secondary">{item.title}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-300 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Differentiators */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-black text-white uppercase italic mb-10 text-glow">
                {t('diff.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(t('diff.items', { returnObjects: true }) as string[]).map((item, idx) => (
                  <div key={idx} className="glass-card p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GALLERY / TESTIMONIALS */}
      <section id="gallery" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">
              {t('testimonials.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {(t('testimonials.items', { returnObjects: true }) as Array<{text: string, author: string}>).map((test, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-10 rounded-3xl relative"
              >
                <div className="text-6xl text-primary/20 absolute top-4 left-6 font-serif">"</div>
                <p className="text-xl text-white font-medium leading-relaxed mb-6 relative z-10">
                  {test.text}
                </p>
                <p className="text-primary font-bold tracking-wider uppercase">— {test.author}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=800" alt="Kids football training" className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=800" alt="Football coaching" className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800" alt="Stadium lights" className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=800" alt="Football pitch" className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase italic mb-8">
              {t('partnership.title')}
            </h2>
            <p className="text-xl text-black/80 font-bold leading-relaxed mb-10 max-w-3xl mx-auto">
              {t('partnership.desc')}
            </p>
            <a href="#contact" className="inline-block bg-black text-white font-black uppercase tracking-wider px-10 py-5 hover:bg-gray-900 hover:scale-105 transition-all shadow-2xl">
              {t('partnership.cta')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic text-glow">
              {t('contact.title')}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-card p-10 rounded-3xl">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert(t('contact.form.success')); }}>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">{t('contact.form.name')}</label>
                    <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">{t('contact.form.email')}</label>
                      <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">{t('contact.form.phone')}</label>
                      <input type="tel" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">{t('contact.form.ageGroup')}</label>
                    <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                      <option className="bg-black text-white" value="u6-u8">U6 - U8</option>
                      <option className="bg-black text-white" value="u10">U10</option>
                      <option className="bg-black text-white" value="u12-u14">U12 - U14</option>
                      <option className="bg-black text-white" value="elite">Elite Teams</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">{t('contact.form.message')}</label>
                    <textarea rows={4} required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary rounded-lg">
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="glass-card p-8 rounded-2xl flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-2xl font-bold text-white" dir="ltr">+20 111 156 6623</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-lg md:text-xl font-bold text-white break-all">elevatefootballacademyuae@gmail.com</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl font-bold text-white">{t('contact.info.location')}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-48 bg-card rounded-2xl border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 group-hover:bg-black/40 transition-colors">
                  <span className="text-white font-bold tracking-widest uppercase">Google Maps Area</span>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="Elev8 Logo" 
              className="h-12 w-12 object-contain"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
          <p className="text-gray-500 font-medium">
            © {new Date().getFullYear()} Elev8 Football Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
