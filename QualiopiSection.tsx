/**
 * Qualiopi Certification Section - Executive Minimalism Design
 * Displays official Qualiopi certification with download link
 * Certificate: QUA008437 - Valid 09/04/2025 to 08/04/2028
 * Now includes official Qualiopi logo
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle2, Shield, FileText } from 'lucide-react';

const certificationDetails = [
  {
    label: 'Numéro de certificat',
    value: 'QUA008437',
  },
  {
    label: 'NDA',
    value: '11950911695',
  },
  {
    label: 'SIREN',
    value: '949917314',
  },
  {
    label: 'Validité',
    value: '09/04/2025 au 08/04/2028',
  },
];

const benefits = [
  'Formations finançables par votre OPCO',
  'Qualité de formation garantie',
  'Processus certifié République Française',
  'Actions de formation (L.6313-1 - 1°)',
];

export default function QualiopiSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gold/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Official Qualiopi Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img 
                src="/images/logo-qualiopi-actions-formation.png" 
                alt="Certification Qualiopi organisme formation commerciale Oise Val-d'Oise"
                className="h-20 sm:h-28 lg:h-32 w-auto object-contain"
              />
            </motion.div>

            <h2 className="text-foreground mb-4">
              Organisme certifié{' '}
              <span className="text-gold">Qualiopi</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sam's Biz Solutions est un organisme de formation avec processus certifié Qualiopi, 
              attestant de la qualité du processus de formation mis en œuvre. 
              Cette certification vous permet de bénéficier de financements OPCO.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold"
              >
                <a href="/documents/certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer">
                  <Download size={18} className="mr-2" />
                  Voir le certificat Qualiopi
                </a>
              </Button>

            </div>
          </motion.div>

          {/* Certificate Card Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-border p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              {/* Header with official text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">Certificat Qualiopi</h3>
                  <p className="text-sm text-muted-foreground">Processus certifié - République Française</p>
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Actions de formation
                </div>
              </div>

              {/* Certificate holder */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1">Titulaire</p>
                <p className="font-display text-xl font-semibold text-foreground">
                  Madame Samira GHEZALI
                </p>
                <p className="text-gold font-medium">Sam's Biz Solutions</p>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {certificationDetails.map((detail) => (
                  <div key={detail.label} className="bg-background rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">{detail.label}</p>
                    <p className="font-medium text-foreground text-sm">{detail.value}</p>
                  </div>
                ))}
              </div>

              {/* Category */}
              <div className="bg-gold/10 rounded-lg p-4 border border-gold/20">
                <div className="flex items-start gap-3">
                  <FileText size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Catégorie d'actions certifiée
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Les actions de formation (L.6313-1 - 1°)
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-charcoal text-white rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-gold" />
                <div>
                  <p className="font-semibold text-sm">Certifié ICPF</p>
                  <p className="text-xs text-white/70">Organisme accrédité</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
