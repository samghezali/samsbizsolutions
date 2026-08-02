/**
 * Notification Banner - Top of page promotional banner
 * Displays a dismissible banner with CTA for OPCO eligibility check
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-gold to-gold-dark text-charcoal relative z-50"
        >
          <div className="container py-3">
            <div className="flex items-center justify-center gap-3 text-sm md:text-base">
              <Gift size={18} className="flex-shrink-0" />
              <span className="font-medium">
                Diagnostic offert – Vérifiez votre éligibilité OPCO
              </span>
              <a
                href="mailto:sbizsolutions@outlook.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 bg-charcoal text-cream px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-charcoal/90 transition-colors"
              >
                Réserver maintenant
                <ArrowRight size={14} />
              </a>
              <a
                href="mailto:sbizsolutions@outlook.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1 underline font-semibold"
              >
                Réserver
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-charcoal/10 rounded-full transition-colors"
            aria-label="Fermer la bannière"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
