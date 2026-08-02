/**
 * Zones d'Intervention Section - SEO Local
 * Liste les zones géographiques couvertes pour le référencement local
 * Mots-clés longue traîne intégrés dans les textes
 */

import { motion } from 'framer-motion';
import { MapPin, Train, Car, Building2 } from 'lucide-react';

const zones = [
  {
    departement: "Val-d'Oise (95)",
    villes: ['Pontoise', 'Cergy', 'Osny', "L'Isle-Adam", 'Marines', 'Argenteuil', 'Sarcelles', 'Enghien-les-Bains'],
    keyword: 'formation vente Val-d\'Oise',
  },
  {
    departement: 'Oise (60)',
    villes: ['Beauvais', 'Gisors', 'Noyon', 'Compiègne', 'Senlis', 'Chantilly', 'Creil', 'Méru'],
    keyword: 'organisme formation Qualiopi Oise',
  },
  {
    departement: 'Île-de-France',
    villes: ['Paris', 'Hauts-de-Seine (92)', 'Seine-Saint-Denis (93)', 'Val-de-Marne (94)', 'Yvelines (78)', 'Essonne (91)'],
    keyword: 'formation commerciale Île-de-France',
  },
  {
    departement: 'Eure (27)',
    villes: ['Les Andelys', 'Vernon', 'Évreux', 'Gisors (limitrophe)'],
    keyword: 'formation OPCO Gisors',
  },
];

const accessInfo = [
  { icon: Train, text: 'Gare de Pontoise – RER C / Transilien H & J' },
  { icon: Car, text: 'A15 / A115 – Parking gratuit sur place' },
  { icon: Building2, text: 'Espace Nikolsen – 20 rue Lavoisier, 95300 Pontoise' },
];

export default function ZonesInterventionSection() {
  return (
    <section id="zones" className="py-20 bg-white">
      <div className="container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin size={16} />
            Zones d'intervention
          </span>
          <h2 className="text-foreground mb-4">
            <span className="text-gold">Formation commerciale</span> en Val-d'Oise, Oise et Île-de-France
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sam's Biz Solutions intervient en <strong>présentiel à Pontoise</strong> et en <strong>distanciel</strong> dans toute la France. 
            Nos formations avec processus certifié Qualiopi sont finançables par votre OPCO, que vous soyez à Cergy, Beauvais, Gisors ou Compiègne.
          </p>
        </motion.div>

        {/* Zones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.departement}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gold/10 rounded-full p-2">
                  <MapPin size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{zone.departement}</h3>
              </div>
              <ul className="space-y-2">
                {zone.villes.map((ville) => (
                  <li key={ville} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    {ville}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gold-dark font-medium italic">
                {zone.keyword}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Access Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            Accès à notre salle de formation à Pontoise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {accessInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gold/20 rounded-full p-2 flex-shrink-0">
                  <info.icon size={18} className="text-gold-dark" />
                </div>
                <p className="text-foreground text-sm">{info.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://fr.mappy.com/plan#/route?addresses=&daddr=20+rue+Lavoisier+95300+Pontoise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <MapPin size={16} />
              Itinéraire Mappy
            </a>
          </div>
        </motion.div>

        {/* SEO Text Block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Vous cherchez une <strong>formation commerciale à Beauvais</strong>, une <strong>formation OPCO à Gisors</strong>, 
            ou un <strong>organisme de formation Qualiopi dans l'Oise</strong> ? Sam's Biz Solutions propose des formations 
            en <strong>soft skills à Cergy</strong>, en <strong>vente dans le Val-d'Oise</strong> et dans toute l'Île-de-France. 
            Nos sessions sont disponibles en présentiel à Pontoise et en distanciel pour toute la France.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
