/**
 * Exit Intent Popup - Tunnel de conversion
 * Détecte quand l'utilisateur déplace la souris vers le haut (intention de quitter)
 * Affiche une offre de diagnostic offert avec CTA Calendly
 * Ne s'affiche qu'une seule fois par session
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Euro, CheckCircle } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Détecte si la souris sort par le haut de la page
    if (e.clientY <= 5 && !hasShown) {
      // Vérifier si déjà affiché dans cette session
      const alreadyShown = sessionStorage.getItem('exitIntentShown');
      if (!alreadyShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    }
  }, [hasShown]);

  useEffect(() => {
    // Attendre 5 secondes avant d'activer le détecteur
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-gold to-gold-dark" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Fermer"
            >
              <X size={20} className="text-gray-500" />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                <Euro size={32} className="text-gold" />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Avant de partir...
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Votre formation peut être <strong className="text-foreground">100% financée</strong> par votre OPCO.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground">Diagnostic offert de 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground">Vérification de votre éligibilité OPCO</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground">Sans engagement, 100% confidentiel</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="mailto:sbizsolutions@outlook.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 text-base w-full justify-center"
              >
                <Calendar size={18} />
                Diagnostic offert 30 min
              </a>

              <p className="text-xs text-muted-foreground mt-4">
                Processus certifié Qualiopi — Formation finançable OPCO
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
