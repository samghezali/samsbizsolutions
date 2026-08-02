/**
 * Services/Formations Section - Executive Minimalism Design
 * Training offerings with detailed cards and gold accents
 * Includes inter-enterprise session dates
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  ShoppingBag, 
  Rocket, 
  Heart, 
  Clock, 
  Monitor,
  Award,
  ArrowRight,
  Euro,
  Briefcase,
  Target,
  Users,
  Calendar,
  MessageSquare,
  Handshake,
  CalendarDays,
  Cpu
} from 'lucide-react';

const formations = [
  {
    icon: ShoppingBag,
    title: 'Vendre et Conseiller en Boutique',
    subtitle: 'Commerce de Détail',
    description: 'Acquérez les techniques de vente et de conseil adaptées au commerce de proximité. Accueil client, ventes additionnelles, fidélisation.',
    features: [
      'Techniques de vente en boutique',
      'Accueil et relation client',
      'Ventes additionnelles',
      'Fidélisation clientèle',
    ],
    duration: '2 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/commerce-detail',
    category: 'commercial',
    nextSession: null,
  },
  {
    icon: Rocket,
    title: 'Prospection & Closing',
    subtitle: 'Développer son Business',
    description: 'Adoptez une approche consultant pour développer votre activité. Ciblage, prise de contact, présentation d\'offre et closing efficace.',
    features: [
      'Ciblage et qualification',
      'Entretien de découverte',
      'Présentation d\'offre',
      'Techniques de closing',
    ],
    duration: '2 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/prospection-closing',
    category: 'commercial',
    nextSession: null,
  },
  {
    icon: Heart,
    title: 'Intégrer les Soft Skills',
    subtitle: 'Environnement de Travail',
    description: 'Développez les compétences relationnelles et émotionnelles de vos équipes pour améliorer collaboration et performance.',
    features: [
      'Communication efficace',
      'Intelligence émotionnelle',
      'Gestion des conflits',
      'Travail en équipe',
    ],
    duration: '3 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/soft-skills',
    category: 'softskills',
    nextSession: null,
  },
  {
    icon: Briefcase,
    title: 'Développement Commercial',
    subtitle: 'Pour Indépendants',
    description: 'Structurez et développez votre activité commerciale en tant qu\'indépendant. Prospection, fidélisation et croissance.',
    features: [
      'Définir sa stratégie commerciale',
      'Techniques de prospection',
      'Fidélisation clients',
      'Développer son réseau',
    ],
    duration: '3 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/developpement-commercial',
    category: 'commercial',
    nextSession: null,
  },
  {
    icon: Target,
    title: 'Closing pour Consultants',
    subtitle: 'Vente de Services',
    description: 'Maîtrisez l\'art du closing adapté aux prestations de services et au conseil. Transformez vos prospects en clients.',
    features: [
      'Posture de vente consultative',
      'Techniques de closing adaptées',
      'Gestion des objections',
      'Négociation tarifaire',
    ],
    duration: '2 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/closing-consultants',
    category: 'commercial',
    nextSession: null,
  },
  {
    icon: Users,
    title: 'Gestion Relation Client',
    subtitle: 'Expérience Client',
    description: 'Créez une expérience client fluide et positive pour fidéliser et renforcer l\'image de votre entreprise.',
    features: [
      'Accueil et première impression',
      'Écoute active',
      'Gestion des réclamations',
      'Fidélisation',
    ],
    duration: '3 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/relation-client',
    category: 'commercial',
    nextSession: null,
  },
  {
    icon: Calendar,
    title: 'Organisation Commerciale',
    subtitle: 'Efficacité & Productivité',
    description: 'Gagnez en efficacité dans la prospection et le suivi client grâce à une organisation optimisée.',
    features: [
      'Structuration de l\'agenda',
      'Hiérarchisation des priorités',
      'Outils de prospection',
      'Suivi et relance',
    ],
    duration: '3 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/organisation-commerciale',
    category: 'commercial',
    nextSession: null,
  },
  {
    icon: MessageSquare,
    title: 'Communication d\'équipe',
    subtitle: 'Posture Professionnelle',
    description: 'Améliorez la communication et la cohésion d\'équipe pour un environnement de travail plus harmonieux.',
    features: [
      'Communication non violente',
      'Assertivité',
      'Gestion des tensions',
      'Intelligence collective',
    ],
    duration: '2 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/communication-equipe',
    category: 'softskills',
    nextSession: null,
  },
  {
    icon: Cpu,
    title: 'L\'IA, Assistante Professionnelle',
    subtitle: 'Productivité & Innovation',
    description: 'Apprenez concrètement à utiliser l\'IA pour gagner du temps, structurer l\'information, produire des contenus professionnels et optimiser votre organisation.',
    features: [
      'Outils IA concrets (ChatGPT, Copilot...)',
      'Production de contenus assistée',
      'Automatisation des tâches',
      'Organisation optimisée par l\'IA',
    ],
    duration: '2 jours',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/ia-assistante-professionnelle',
    category: 'softskills',
    nextSession: null,
  },
  {
    icon: Cpu,
    title: 'Intelligence Artificielle Appliquée',
    subtitle: 'Productivité Professionnelle',
    description: 'Utilisez l\'IA pour structurer votre travail, produire plus rapidement et améliorer vos activités commerciales ou pédagogiques.',
    features: [
      'Comprendre les IA génératives',
      'Formuler des prompts efficaces',
      'Produire des contenus professionnels',
      'Préparer des rendez-vous commerciaux',
    ],
    duration: '1 jour',
    price: 'À partir de 450€ HT/stagiaire',
    format: 'Présentiel / Distanciel',
    link: '/formation/ia-productivite',
    category: 'softskills',
    nextSession: null,
  },

];

const categories = [
  { id: 'all', label: 'Toutes' },
  { id: 'commercial', label: 'Commercial & Vente' },
  { id: 'softskills', label: 'Soft Skills' },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFormations = activeCategory === 'all' 
    ? formations 
    : formations.filter(f => f.category === activeCategory);

  return (
    <section id="formations" className="py-24 md:py-32 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Nos Formations
          </span>
          <h2 className="text-foreground mb-6">
            <span className="text-gold">10 formations avec processus certifié Qualiopi sur les actions de formation</span> pour 
            transformer vos équipes
          </h2>
          <p className="text-lg text-muted-foreground">
            Chaque formation est conçue pour apporter des résultats concrets et durables, 
            avec une approche 100% pratique issue de 17 ans de terrain.
          </p>
        </motion.div>

        {/* Certifications badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8"
        >
          <div className="flex items-center gap-3 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-border">
            <Award size={20} className="text-gold sm:w-6 sm:h-6" />
            <span className="font-medium text-sm sm:text-base">Processus certifié Qualiopi</span>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-border">
            <span className="text-xs sm:text-sm text-muted-foreground">Finançable OPCO & Entreprise</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gold text-charcoal'
                  : 'bg-white border border-border text-muted-foreground hover:border-gold/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Formation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFormations.map((formation, index) => (
            <motion.div
              key={formation.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              layout
            >
              <Card className="sbs-card-glow h-full group border-border overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <formation.icon size={20} className="text-gold" />
                    </div>
                    <span className="text-gold text-sm font-medium">{formation.subtitle}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                    {formation.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {formation.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {formation.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sessions sur mesure */}
                  <div className="bg-gold/10 rounded-lg p-3 border border-gold/20">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays size={16} className="text-gold" />
                      <span className="font-medium text-foreground">Sessions sur mesure</span>
                    </div>
                    <p className="text-gold font-semibold mt-1">Entrées et sorties permanentes toute l'année</p>
                    <Link href={formation.link}>
                      <span className="text-xs text-gold hover:underline mt-1 inline-block cursor-pointer">
                        → Découvrir le programme
                      </span>
                    </Link>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Monitor size={14} />
                      <span>{formation.format}</span>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 text-sm">
                    <Euro size={14} className="text-gold" />
                    <span className="font-semibold text-foreground">{formation.price}</span>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 border-gold/30 hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 group/btn"
                  >
                    <Link href={formation.link}>
                      <span className="flex items-center justify-center gap-2">
                        Voir le programme
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Besoin d'une formation sur mesure ? Nous créons des programmes adaptés à vos besoins spécifiques.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8"
          >
            <Link href="/#contact" className="flex items-center gap-2">
              Demander un devis personnalisé
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
