/**
 * Hero Section — Immersive Executive Dark
 * Signature : courbe de performance dorée qui se dessine à l'écran
 * (métier de Samira = progression commerciale, traduite en visuel)
 * Contenu, CTA et SEO conservés à l'identique de la version précédente.
 */

import { Button } from '@/components/ui/button';
import { motion, useReducedMotion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Star, Briefcase, Euro, Lightbulb } from 'lucide-react';

const highlights = [
  { icon: Briefcase, label: "17 ans d'expérience terrain" },
  { icon: Award, label: 'Processus certifié Qualiopi' },
  { icon: Euro, label: 'Finançable OPCO' },
  { icon: Star, label: 'Jury : EC, CV, AMUM, MUM, NTC' },
];

/** Compteur animé (17, 8, 5...) qui monte quand il entre à l'écran */
function CountUp({ to, suffix = '', duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduced = useReducedMotion();
  const [val, setVal] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/** Titre révélé mot à mot */
function KineticTitle() {
  const reduced = useReducedMotion();
  const line1 = ['Formation', 'Commerciale', '&', 'Leadership'];
  return (
    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-cream mb-6">
      {line1.map((word, i) => (
        <motion.span
          key={word + i}
          className="inline-block mr-[0.28em]"
          initial={reduced ? false : { opacity: 0, y: 28, rotateX: 40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.55, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
      <motion.span
        className="block text-gold italic mt-1"
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        en Île-de-France et Oise
      </motion.span>
    </h1>
  );
}

/** Signature : courbe de performance qui se dessine, avec points de données */
function PerformanceCurve() {
  const reduced = useReducedMotion();
  return (
    <svg
      viewBox="0 0 640 420"
      fill="none"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Grille discrète */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="0"
          y1={90 + i * 90}
          x2="640"
          y2={90 + i * 90}
          stroke="oklch(0.98 0.005 90 / 0.07)"
          strokeWidth="1"
        />
      ))}

      {/* Aire sous la courbe */}
      <motion.path
        d="M20 360 C140 340 200 300 300 240 C400 180 480 140 620 60 L620 420 L20 420 Z"
        fill="url(#goldArea)"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
      />

      {/* La courbe elle-même — se dessine */}
      <motion.path
        d="M20 360 C140 340 200 300 300 240 C400 180 480 140 620 60"
        stroke="oklch(0.72 0.12 85)"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
      />

      {/* Flèche de fin */}
      <motion.path
        d="M596 84 L622 58 L618 94"
        stroke="oklch(0.72 0.12 85)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={reduced ? false : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.3 }}
      />

      {/* Points de données pulsants */}
      {[
        { cx: 130, cy: 336 },
        { cx: 300, cy: 240 },
        { cx: 480, cy: 141 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="10" fill="oklch(0.72 0.12 85 / 0.25)" className="sbs-pulse" />
          <motion.circle
            cx={p.cx}
            cy={p.cy}
            r="5"
            fill="oklch(0.72 0.12 85)"
            initial={reduced ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 1 + i * 0.35 }}
          />
        </g>
      ))}

      <defs>
        <linearGradient id="goldArea" x1="320" y1="60" x2="320" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="oklch(0.72 0.12 85)" stopOpacity="0.22" />
          <stop offset="1" stopColor="oklch(0.72 0.12 85)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="accueil"
      className="sbs-grain relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: 'oklch(0.16 0.012 65)' }}
    >
      {/* Halos dorés ambiants */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="sbs-float absolute -top-32 right-[10%] w-[480px] h-[480px] rounded-full blur-3xl" style={{ background: 'oklch(0.72 0.12 85 / 0.10)' }} />
        <div className="sbs-float absolute bottom-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full blur-3xl" style={{ background: 'oklch(0.42 0.08 145 / 0.12)', animationDelay: '-4s' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne gauche — contenu */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={reduced ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gold/40 text-gold bg-gold/10 backdrop-blur-sm"
            >
              <Award size={16} />
              <span>Processus certifié Qualiopi</span>
            </motion.div>

            <KineticTitle />

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-cream/70 mb-8 max-w-xl leading-relaxed"
            >
              Formation commerciale et leadership avec processus certifié Qualiopi à Pontoise, Cergy,
              Beauvais et dans toute l'Île-de-France. Finançable par votre OPCO. Conçue par une
              professionnelle avec <strong className="text-cream">17 ans de terrain commercial</strong>.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-4 sm:px-8 h-12 sm:h-14 text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
              >
                <a
                  href="mailto:sbizsolutions@outlook.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-center"
                >
                  <span className="hidden sm:inline">Diagnostic offert – Vérifiez votre éligibilité OPCO</span>
                  <span className="sm:hidden">Diagnostic offert</span>
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-cream/25 text-cream bg-transparent hover:border-gold hover:text-gold hover:bg-gold/5 h-12 sm:h-14 text-base transition-all duration-300"
              >
                <a href="#formations">Découvrir mes formations</a>
              </Button>
            </motion.div>

            {/* Bandeau OPCO */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="border-l-4 border-gold rounded-r-xl p-4 sm:p-5 mb-8 bg-gradient-to-r from-gold/15 to-transparent"
            >
              <div className="flex items-start gap-3">
                <div className="bg-gold/20 rounded-full p-2 flex-shrink-0">
                  <Lightbulb size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-cream mb-1">
                    Saviez-vous que cette formation peut être 100% financée par votre OPCO ?
                  </p>
                  <p className="text-sm text-cream/60">
                    → Réservez votre diagnostic offert pour vérifier votre éligibilité et obtenir un devis
                    sans engagement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-cream/10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-cream/15 bg-cream/5 backdrop-blur-sm"
                >
                  <item.icon size={16} className="text-gold" />
                  <span className="text-sm font-medium text-cream/85">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colonne droite — courbe de performance + image + chiffres */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Courbe signature */}
              <div className="relative rounded-2xl overflow-hidden border border-cream/10 bg-gradient-to-b from-cream/[0.04] to-transparent p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-1">
                  Votre trajectoire
                </p>
                <p className="font-display text-xl sm:text-2xl text-cream mb-4 italic">
                  De la formation à la performance
                </p>
                <PerformanceCurve />

                {/* Chiffres clés animés */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-cream/10">
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-gold">
                      <CountUp to={17} />
                    </p>
                    <p className="text-xs sm:text-sm text-cream/60 mt-1">ans de terrain</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-gold">
                      <CountUp to={10} suffix="+" />
                    </p>
                    <p className="text-xs sm:text-sm text-cream/60 mt-1">formations au catalogue</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-gold">
                      <CountUp to={5} suffix="/5" />
                    </p>
                    <p className="text-xs sm:text-sm text-cream/60 mt-1">avis Google</p>
                  </div>
                </div>
              </div>

              {/* Image formation, réduite en carte flottante */}
              <motion.div
                initial={reduced ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-8 rounded-xl overflow-hidden shadow-2xl border border-gold/30 w-[42%] max-w-[220px] hidden sm:block"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663280180379/Ca9UdQGyeDkLywgwouUDBB/hero-training-new_491101ef.jpg"
                  alt="Formation commerciale Qualiopi Val-d'Oise - Sam's Biz Solutions Pontoise Île-de-France"
                  className="w-full h-32 object-cover"
                  loading="eager"
                />
                <div className="bg-charcoal/90 backdrop-blur px-3 py-2 flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                  <span className="text-cream text-xs font-semibold ml-1">Note Google</span>
                </div>
              </motion.div>

              {/* Décor */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/25 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
