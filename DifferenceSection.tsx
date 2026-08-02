/**
 * Difference Section - Executive Minimalism Design
 * Unique value propositions with bold statements
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Sparkles, TrendingUp, Award } from 'lucide-react';

const differences = [
  {
    icon: Target,
    title: '100% Pratique',
    description: 'Mises en situation réelles, pas de théorie sans fin. Vous apprenez en faisant, pas en écoutant.',
    highlight: 'Zéro PowerPoint interminable',
  },
  {
    icon: Sparkles,
    title: 'Zéro Bullshit',
    description: 'Approche directe, franche et bienveillante. On va droit au but, avec respect et authenticité.',
    highlight: 'Parler vrai, agir juste',
  },
  {
    icon: TrendingUp,
    title: 'Résultats Durables',
    description: 'Des transformations qui durent, pas des effets de mode. Vos équipes évoluent vraiment.',
    highlight: 'Impact mesurable',
  },
  {
    icon: Award,
    title: 'Processus certifié Qualiopi',
    description: 'Formations finançables par votre OPCO ou votre entreprise. Qualité garantie et reconnue.',
    highlight: 'Financement facilité',
  },
];

export default function DifferenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="difference" className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Notre Différence
          </span>
          <h2 className="text-white mb-6">
            Pourquoi choisir{' '}
            <span className="text-gold">Sam's Biz Solutions</span> ?
          </h2>
          <p className="text-lg text-white/70">
            Une approche unique qui fait la différence dans vos résultats
          </p>
        </motion.div>

        {/* Differences Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {differences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-500 hover:bg-white/10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                  <item.icon size={28} className="text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlight tag */}
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium">
                  {item.highlight}
                </span>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="font-display text-2xl md:text-3xl text-white/90 italic max-w-3xl mx-auto">
            "Vendre et conseiller deviendront votre ADN."
          </blockquote>
          <div className="w-16 h-1 bg-gold mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
