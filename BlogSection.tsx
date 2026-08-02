/**
 * Blog Section - Livre ÉMERGENCE + Veille & Expertise Métier
 * Executive Minimalism Design
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Eye, ArrowRight, ShoppingCart, Mail, Target, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const veilleThemes = [
  {
    icon: Target,
    title: 'Techniques de Vente Moderne',
    description: 'Les nouvelles approches commerciales qui transforment la relation client et génèrent des résultats durables.',
    details: [
      'Méthodes de prospection digitale',
      'Social selling et personal branding',
      'Techniques de closing éthique',
      'Gestion du cycle de vente complexe',
    ],
  },
  {
    icon: Users,
    title: 'Leadership Authentique',
    description: 'Manager avec impact et authenticité, développer un style de management qui inspire confiance et engagement.',
    details: [
      'Intelligence émotionnelle en management',
      'Communication non-violente',
      'Gestion des conflits et médiation',
      'Motivation et engagement des équipes',
    ],
  },
  {
    icon: Sparkles,
    title: 'Soft Skills',
    description: 'Les compétences humaines et relationnelles qui font la différence dans un environnement professionnel exigeant.',
    details: [
      'Écoute active et empathie',
      'Prise de parole en public',
      'Gestion du stress et résilience',
      'Négociation et influence positive',
    ],
  },
];

const CONTACT_EMAIL = 'sbizsolutions@outlook.fr';

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null);
  const subscribeMailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Inscription Veille Métier - Sam's Biz Solutions")}&body=${encodeURIComponent("Bonjour,\n\nJe souhaite m'abonner à votre veille métier pour recevoir vos publications sur les techniques de vente, le leadership et les soft skills.\n\nCordialement")}`;

  return (
    <section id="blog" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Livre & Veille
          </span>
          <h2 className="text-foreground mb-6">
            Ressources et <span className="text-gold">expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon ouvrage et restez informé des dernières tendances en vente, leadership et soft skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Livre ÉMERGENCE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border"
          >
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={20} className="text-gold" />
                <span className="text-gold font-medium tracking-widest uppercase text-sm">
                  Mon ouvrage
                </span>
              </div>

              {/* Book display - centered, full image visible */}
              <div className="flex flex-col items-center text-center">
                {/* Book Cover - full image, no crop */}
                <div className="mb-8 relative group">
                  <div className="absolute -inset-3 bg-gold/10 rounded-2xl blur-lg group-hover:bg-gold/15 transition-colors duration-500" />
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gold/20">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663280180379/Ca9UdQGyeDkLywgwouUDBB/IMG_0090_484bab3a.jpg"
                      alt="Livre ÉMERGENCE Samira Ghezali - formation leadership et soft skills"
                      className="w-full max-w-[280px] h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Book Info */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  ÉMERGENCE
                </h3>
                <p className="text-gold font-medium mb-3">
                  Un chemin de résilience
                </p>
                <p className="text-muted-foreground text-sm mb-2 italic">
                  "Je ne suis pas courageuse, je suis vivante"
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Par <strong className="text-foreground">Samira Ghezali</strong> — Éditions L'Atelier Disruptif
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8"
                >
                  <a
                    href="https://pay.sumup.com/b2c/QUUILD21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Commander mon ouvrage
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: Veille & Expertise Métier */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border"
          >
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Eye size={20} className="text-gold" />
                <span className="text-gold font-medium tracking-widest uppercase text-sm">
                  Veille & Expertise Métier
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Je réalise une veille constante sur les thématiques suivantes pour garantir 
                des formations toujours à la pointe :
              </p>

              {/* Thématiques - Cliquables */}
              <div className="space-y-3 mb-6">
                {veilleThemes.map((theme, index) => (
                  <motion.div
                    key={theme.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <button
                      onClick={() => setExpandedTheme(expandedTheme === index ? null : index)}
                      className="w-full text-left flex items-start gap-3 p-4 rounded-xl bg-background hover:bg-gold/5 border border-transparent hover:border-gold/20 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                        <theme.icon size={20} className="text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-display font-semibold text-foreground mb-0.5">
                            {theme.title}
                          </h4>
                          <ArrowRight
                            size={16}
                            className={`text-gold transition-transform duration-300 flex-shrink-0 ml-2 ${
                              expandedTheme === index ? 'rotate-90' : 'group-hover:translate-x-1'
                            }`}
                          />
                        </div>
                        <p className="text-muted-foreground text-sm">{theme.description}</p>
                      </div>
                    </button>

                    {/* Expanded details */}
                    {expandedTheme === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-[52px] mt-1 mb-2"
                      >
                        <div className="bg-gold/5 rounded-lg p-4 border-l-2 border-gold">
                          <p className="text-xs text-gold font-medium uppercase tracking-wider mb-2">
                            Sujets de veille
                          </p>
                          <ul className="space-y-1.5">
                            {theme.details.map((detail) => (
                              <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`mailto:sbizsolutions@outlook.fr?subject=${encodeURIComponent('Demande d\'information - ' + theme.title)}&body=${encodeURIComponent('Bonjour,\n\nJe souhaite en savoir plus sur votre veille en ' + theme.title + '.\n\nCordialement')}`}
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                          >
                            <Mail size={14} />
                            En savoir plus
                            <ArrowRight size={14} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Accroche Jury */}
              <div className="bg-gold/5 border-l-4 border-gold rounded-r-lg p-4 mb-6">
                <p className="text-foreground text-sm leading-relaxed">
                  En tant que <strong>Jury d'examen (MUM, AMUM, NTC)</strong>, je garantis un contenu 
                  pédagogique toujours aligné sur les derniers référentiels d'État.
                </p>
              </div>

              {/* CTA - S'abonner à la veille */}
              <div className="bg-foreground rounded-xl p-5">
                <p className="text-background font-semibold mb-3 flex items-center gap-2">
                  <Mail size={18} className="text-gold" />
                  Restez informé
                </p>
                <p className="text-white/70 text-sm mb-4">
                  Recevez mes publications et analyses sur les dernières tendances en vente, leadership et soft skills.
                </p>
                <a
                  href={subscribeMailtoUrl}
                  className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold rounded-md h-10 flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail size={16} />
                  S'abonner à la veille
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
