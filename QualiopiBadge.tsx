/**
 * Badge Qualiopi - Affichage de la certification
 * Design: Executive Minimalism
 */

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface QualiopiBadgeProps {
  variant?: 'full' | 'compact' | 'inline';
  showCertificate?: boolean;
}

export default function QualiopiBadge({ variant = 'full', showCertificate = true }: QualiopiBadgeProps) {
  const certNumber = 'QUA008437';
  const validityStart = '09/04/2025';
  const validityEnd = '08/04/2028';

  if (variant === 'inline') {
    return (
      <a
        href="/documents/certificat-qualiopi.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
      >
        <img 
          src="https://www.qualiopi.fr/wp-content/uploads/2020/10/Qualiopi-300dpi-Avec-Marianne.png" 
          alt="Qualiopi formation OPCO finançable" 
          className="h-8 w-auto"
        />
        <span>Processus certifié Qualiopi</span>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-4 shadow-sm border border-border inline-flex items-center gap-4"
      >
        <img 
          src="https://www.qualiopi.fr/wp-content/uploads/2020/10/Qualiopi-300dpi-Avec-Marianne.png" 
          alt="Qualiopi formation OPCO finançable" 
          className="h-12 w-auto"
        />
        <div>
          <p className="font-semibold text-foreground text-sm">Processus certifié Qualiopi</p>
          <p className="text-xs text-muted-foreground">N° {certNumber}</p>
        </div>
        {showCertificate && (
          <a
            href="/documents/certificat-qualiopi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-dark transition-colors"
            title="Voir le certificat"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </motion.div>
    );
  }

  // Variant 'full'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Logo Qualiopi */}
        <div className="flex-shrink-0">
          <img 
            src="https://www.qualiopi.fr/wp-content/uploads/2020/10/Qualiopi-300dpi-Avec-Marianne.png" 
            alt="Logo Qualiopi formation commerciale Val-d'Oise Oise Île-de-France" 
            className="h-24 md:h-28 w-auto"
          />
        </div>

        {/* Informations */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-display font-bold text-foreground mb-2">
            Organisme avec processus certifié Qualiopi
          </h3>
          <p className="text-muted-foreground mb-4">
            La certification qualité a été délivrée au titre de la catégorie d'action suivante :
            <br />
            <strong className="text-foreground">Actions de formation</strong> (L.6313-1 - 1°)
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <div className="bg-gold/10 px-3 py-1.5 rounded-full">
              <span className="text-muted-foreground">N° </span>
              <span className="font-semibold text-gold">{certNumber}</span>
            </div>
            <div className="bg-background px-3 py-1.5 rounded-full border border-border">
              <span className="text-muted-foreground">Valide du </span>
              <span className="font-medium text-foreground">{validityStart}</span>
              <span className="text-muted-foreground"> au </span>
              <span className="font-medium text-foreground">{validityEnd}</span>
            </div>
          </div>
        </div>

        {/* Lien vers certificat */}
        {showCertificate && (
          <div className="flex-shrink-0">
            <a
              href="/documents/certificat-qualiopi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
              Voir le certificat
            </a>
          </div>
        )}
      </div>

      {/* Mention légale */}
      <p className="text-xs text-muted-foreground mt-6 text-center md:text-left">
        Certificat vérifiable sur{' '}
        <a 
          href="https://www.certif-icpf.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          www.certif-icpf.org
        </a>
      </p>
    </motion.div>
  );
}
