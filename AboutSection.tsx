/**
 * About Section - Executive Minimalism Design
 * Personal introduction with expertise highlights
 * Updated: Focus on 17 years of field experience, no creation date
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Target, Heart, Sparkles, Award } from 'lucide-react';

const expertise = [
  {
    icon: Target,
    title: 'Communication & Posture',
    description: 'Leadership et prise de parole impactante',
  },
  {
    icon: Heart,
    title: 'Intelligence Relationnelle',
    description: 'Stratégie commerciale éthique et authentique',
  },
  {
    icon: Sparkles,
    title: 'Transformation Durable',
    description: 'Déclics, ajustements et résultats concrets',
  },
];

const values = [
  '17 ans de terrain commercial',
  'Processus certifié Qualiopi',
  'Approche 100% pratique',
  'Jury d\'examen : EC, CV, AMUM, MUM, NTC',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="a-propos" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/samira-ghezali.jpg"
                  alt="Samira Ghezali formatrice commerciale Qualiopi Val-d'Oise Pontoise"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-gold text-charcoal rounded-xl p-4 sm:p-6 shadow-xl"
              >
                <div className="text-center">
                  <span className="font-display text-2xl sm:text-3xl font-bold block">17 ans</span>
                  <span className="text-sm font-medium">de terrain commercial</span>
                </div>
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Section label */}
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              À propos
            </span>

            <h2 className="text-foreground mb-6">
              17 ans d'expertise{' '}
              <span className="text-gold">terrain</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Après <strong className="text-foreground">17 ans d'expérience commerciale sur le terrain</strong>, 
              j'ai créé Sam's Biz Solutions pour transmettre ce que j'ai appris face aux clients.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aujourd'hui <strong className="text-foreground">avec processus certifié Qualiopi</strong>, je forme des équipes 
              commerciales qui veulent performer sans sacrifier l'humain.
            </p>

            <blockquote className="quote-gold text-xl text-foreground mb-8">
              Mon approche : 100% pratique, zéro bullshit. 
              Parce que c'est en situation réelle qu'on progresse vraiment.
            </blockquote>

            {/* Values list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </motion.div>
              ))}
            </div>

            {/* Expertise cards */}
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background hover:bg-gold/5 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
