/**
 * FAQ Section - Questions fréquentes sur les formations
 * Executive Minimalism Design
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqCategories = [
  {
    title: 'Financement OPCO',
    questions: [
      {
        question: "Qu'est-ce qu'un OPCO et comment peut-il financer ma formation ?",
        answer: "Un OPCO (Opérateur de Compétences) est un organisme agréé par l'État qui collecte les contributions formation des entreprises et finance leurs actions de formation. Chaque entreprise cotise auprès d'un OPCO selon son secteur d'activité. En tant qu'organisme avec processus certifié Qualiopi, Sam's Biz Solutions peut faire financer vos formations par votre OPCO, souvent à 100%. Je m'occupe de toutes les démarches administratives pour vous."
      },
      {
        question: "Comment savoir si ma formation peut être prise en charge ?",
        answer: "Lors de notre diagnostic offert de 30 minutes, j'évalue votre éligibilité en fonction de votre OPCO, de la taille de votre entreprise et du type de formation souhaitée. Dans 90% des cas, les formations sont finançables en totalité ou en grande partie. Je vous fournis ensuite un devis détaillé et je gère les démarches auprès de votre OPCO."
      },
      {
        question: "Quel est le délai pour obtenir un financement OPCO ?",
        answer: "Le délai varie selon les OPCO, mais comptez généralement 2 à 4 semaines entre la demande et l'accord de prise en charge. C'est pourquoi je vous recommande d'anticiper et de me contacter au moins 1 mois avant la date souhaitée de formation. Je prépare votre dossier complet pour maximiser vos chances d'acceptation."
      },
      {
        question: "Que se passe-t-il si mon OPCO refuse le financement ?",
        answer: "Les refus sont rares pour les formations avec processus certifié Qualiopi, mais si cela arrive, nous explorons ensemble d'autres solutions : financement partiel, étalement du paiement, ou utilisation d'autres dispositifs (FNE-Formation, plan de développement des compétences). Je m'engage à trouver une solution adaptée à votre budget."
      },
    ]
  },
  {
    title: 'Déroulement des formations',
    questions: [
      {
        question: "Comment se déroule une formation type ?",
        answer: "Chaque formation est personnalisée selon vos besoins, mais le format type comprend : un diagnostic initial pour cibler vos objectifs, des sessions de formation (en présentiel ou distanciel) alternant théorie courte et mises en situation pratiques, des exercices concrets basés sur votre réalité métier, et un suivi post-formation pour ancrer les apprentissages. Durée : de 1 à 5 jours selon le programme."
      },
      {
        question: "Les formations sont-elles en présentiel ou à distance ?",
        answer: "Je propose les deux formats selon vos préférences et contraintes. Le présentiel favorise les mises en situation et la dynamique de groupe. Le distanciel (visioconférence) offre plus de flexibilité. Les formations hybrides combinant les deux sont également possibles. Nous définissons ensemble le format le plus adapté lors du diagnostic."
      },
      {
        question: "Combien de participants par session ?",
        answer: "Pour garantir un accompagnement personnalisé et des mises en pratique efficaces, je limite les groupes à 8 participants maximum. Les formations individuelles (coaching) sont également possibles pour un accompagnement sur-mesure. Le nombre idéal dépend de vos objectifs et du type de formation."
      },
      {
        question: "Que comprend le suivi post-formation ?",
        answer: "Chaque formation inclut un suivi de 30 jours : un point téléphonique ou visio pour faire le bilan des mises en pratique, répondre aux questions et ajuster si nécessaire. Vous repartez également avec des fiches pratiques et des outils concrets à utiliser au quotidien. Des sessions de coaching complémentaires peuvent être ajoutées selon vos besoins."
      },
    ]
  },
  {
    title: 'Prérequis et public',
    questions: [
      {
        question: "À qui s'adressent vos formations ?",
        answer: "Mes formations s'adressent aux dirigeants, managers, responsables commerciaux et équipes de vente qui souhaitent développer leurs compétences en leadership, vente éthique et soft skills. Que vous soyez une TPE, PME ou grande entreprise, les programmes sont adaptés à votre contexte et vos enjeux spécifiques."
      },
      {
        question: "Y a-t-il des prérequis pour participer ?",
        answer: "Aucun prérequis technique n'est nécessaire. La seule condition : être motivé(e) à progresser et prêt(e) à sortir de sa zone de confort ! Mes formations sont accessibles à tous niveaux d'expérience. J'adapte le contenu et les exercices au profil des participants."
      },
      {
        question: "Vos formations sont-elles accessibles aux personnes en situation de handicap ?",
        answer: "Oui, je m'engage à rendre mes formations accessibles à tous. Contactez-moi en amont pour discuter de vos besoins spécifiques et je mettrai en place les aménagements nécessaires (supports adaptés, rythme ajusté, accessibilité des locaux, etc.). Chaque situation est étudiée individuellement."
      },
    ]
  },
  {
    title: 'Certification et qualité',
    questions: [
      {
        question: "Que garantit la certification Qualiopi (processus certifié) ?",
        answer: "La certification Qualiopi est délivrée par l'État français et atteste de la qualité du processus de formation. Elle garantit : des objectifs pédagogiques clairs, des méthodes adaptées, un suivi des résultats, et une amélioration continue. C'est aussi la condition indispensable pour que vos formations soient finançables par les OPCO et autres fonds publics."
      },
      {
        question: "Les participants reçoivent-ils une attestation ?",
        answer: "Oui, chaque participant reçoit une attestation de fin de formation mentionnant les compétences acquises, la durée et les dates de formation. Cette attestation est reconnue par les OPCO et peut être intégrée à votre dossier de compétences ou votre CV."
      },
    ]
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            FAQ
          </span>
          <h2 className="text-foreground mb-6">
            Questions <span className="text-gold">fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur le financement OPCO, le déroulement des formations 
            et la certification Qualiopi (processus certifié).
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-charcoal to-charcoal/90 px-6 py-4">
                <h3 className="font-display text-xl font-semibold text-cream flex items-center gap-3">
                  <HelpCircle size={24} className="text-gold" />
                  {category.title}
                </h3>
              </div>

              {/* Questions */}
              <div className="divide-y divide-border">
                {category.questions.map((item, qIndex) => {
                  const itemId = `${catIndex}-${qIndex}`;
                  const isOpen = openItems.includes(itemId);

                  return (
                    <div key={qIndex} className="group">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-cream/50 transition-colors"
                      >
                        <span className="font-medium text-foreground group-hover:text-gold transition-colors">
                          {item.question}
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Vous avez d'autres questions ? Je suis là pour y répondre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold"
            >
              <a href="mailto:sbizsolutions@outlook.fr" target="_blank" rel="noopener noreferrer">
                Réserver un diagnostic offert
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
            >
              <a href="tel:0666383107">
                Appelez-moi : 06 66 38 31 07
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
