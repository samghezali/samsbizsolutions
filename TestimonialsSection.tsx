/**
 * Testimonials Section - Executive Minimalism Design
 * Real Google reviews from Sam's Biz Solutions clients
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Janilson DIAS FERNANDES',
    role: 'Dirigeant — Bureau d\'étude AMO/MOE',
    content: "Mon équipe est très satisfaite, nous sommes un Bureau d'étude AMO/MOE, les services de Samira ont pour but d'apporter un plus sur la posture de mes chefs de projets!",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Sana El Kertoubi',
    role: 'Créatrice d\'entreprise',
    content: "J'ai eu la chance d'être accompagnée par Samira dans mon projet de création d'entreprise, et je ne peux que la recommander chaleureusement. Son professionnalisme, sa bienveillance et son écoute ont été des piliers essentiels tout au long de mon parcours. Elle a su me guider avec clarté, patience et une vraie sensibilité humaine. Grâce à elle, j'ai pu structurer mon projet pas à pas, me poser les bonnes questions et gagner en confiance.",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Agence Anglophile',
    role: 'Formation prospection/closing',
    content: "J'ai suivi la formation en prospection/closing et moi qui n'aime d'habitude pas le commercial, j'ai vraiment apprécié. La formatrice est à l'écoute et très pédagogue, surtout que nous avons fait des jeux de rôle pour pratiquer les appels de prospection. Feedback très instructif. Encore merci à vous!",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Angélique Joulin',
    role: 'Participante formation 6 mois',
    content: "Nous avons eu la chance de suivre une formation de 6 mois avec Samira. Tout au long du parcours, elle a fait preuve d'un grand professionnalisme, d'une bienveillance constante et d'une réelle capacité d'écoute. Elle transmet ses connaissances avec passion et rend chaque séance à la fois enrichissante et motivante. Grâce à elle, une véritable dynamique de groupe s'est installée.",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Moran Kat',
    role: 'Participante formation',
    content: "Tout au long de la formation, Samira a su transmettre ses connaissances mais aussi son énergie, sa patience et sa passion aux apprenants. Grâce à Samira, nous avons progressé, appris et même dépassé nos propres limites. Je tiens à lui dire un grand merci pour son investissement et son accompagnement.",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Nathalie LOCHET',
    role: 'Cliente accompagnée',
    content: "Une personne professionnelle, à l'écoute qui ne vend pas du rêve. Merci Samira pour ta disponibilité et ta bienveillance.",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Oceane Cangina',
    role: 'Participante formation',
    content: "Très bonne formatrice, s'exprime bien. Formation vraiment agréable et vraiment instructive. J'ai appris beaucoup d'informations durant cette formation. Je conseille!",
    rating: 5,
    source: 'Google',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex + 3 < testimonials.length;

  const goBack = () => {
    if (canGoBack) setCurrentIndex(currentIndex - 1);
  };

  const goForward = () => {
    if (canGoForward) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section id="temoignages" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Témoignages
          </span>
          <h2 className="text-foreground mb-6">
            Ce que disent mes <span className="text-gold">clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des retours authentiques de personnes que j'ai eu le plaisir d'accompagner
          </p>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md border border-border">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground text-sm">({testimonials.length} avis)</span>
          </div>
        </motion.div>

        {/* Testimonials Grid with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={goBack}
              disabled={!canGoBack}
              className="rounded-full bg-white shadow-md border-border hover:border-gold disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </Button>
          </div>
          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={goForward}
              disabled={!canGoForward}
              className="rounded-full bg-white shadow-md border-border hover:border-gold disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              >
                <Card className="h-full border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500 group">
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <Quote size={20} className="text-gold" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-gold text-gold"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        via {testimonial.source}
                      </span>
                    </div>

                    {/* Content */}
                    <p className="text-foreground mb-6 leading-relaxed text-sm">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="font-semibold text-gold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goBack}
              disabled={!canGoBack}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goForward}
              disabled={!canGoForward}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* CTA to Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.google.com/search?q=Sam's+Biz+Solutions+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
          >
            Voir tous les avis sur Google
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              <path fill="currentColor" d="M5 5v14h14v-7h-2v5H7V7h5V5H5z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
