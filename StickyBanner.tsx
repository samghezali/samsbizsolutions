/**
 * Sticky Banner - Tunnel de conversion
 * Bandeau fixe visible au scroll avec CTA Calendly
 * Apparaît après avoir scrollé 400px, se positionne au-dessus du header
 * z-index 50 > header z-40
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Phone } from 'lucide-react';

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Vérifier si déjà fermé dans cette session
    const wasDismissed = sessionStorage.getItem('stickyBannerDismissed');
    if (wasDismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 400);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem('stickyBannerDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] text-white shadow-lg"
        >
          <div className="container flex items-center justify-between py-2 gap-3">
            {/* Message */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Calendar size={16} className="text-[#C4A77D] flex-shrink-0" />
              <p className="text-xs sm:text-sm font-medium truncate">
                <span className="hidden md:inline">
                  Diagnostic offert 30 min — Vérifiez votre éligibilité au financement OPCO
                </span>
                <span className="hidden sm:inline md:hidden">
                  Diagnostic offert — Financement OPCO
                </span>
                <span className="sm:hidden">
                  Diagnostic offert 30 min
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Calendly CTA */}
              <a
                href="mailto:sbizsolutions@outlook.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#C4A77D] hover:bg-[#B8956D] text-[#1A1A1A] font-semibold text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 hover:shadow-lg whitespace-nowrap"
              >
                <Calendar size={14} className="hidden sm:block" />
                <span className="hidden sm:inline">Réserver maintenant</span>
                <span className="sm:hidden">Réserver</span>
              </a>

              {/* Phone CTA - mobile only */}
              <a
                href="tel:+33666383107"
                className="sm:hidden inline-flex items-center justify-center bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Appeler"
              >
                <Phone size={14} />
              </a>

              {/* Close */}
              <button
                onClick={handleDismiss}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Fermer le bandeau"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
