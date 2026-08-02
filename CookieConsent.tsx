/**
 * Bannière de consentement cookies RGPD
 * Design: Executive Minimalism - Couleurs Sam's Biz Solutions
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Délai pour afficher la bannière après le chargement de la page
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-charcoal px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Cookie className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Gestion des cookies</h3>
                  <p className="text-white/60 text-sm">Votre vie privée nous importe</p>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!showDetails ? (
                <>
                  <p className="text-muted-foreground mb-6">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                    analyser notre trafic et personnaliser nos contenus. En cliquant sur "Accepter tout", 
                    vous consentez à l'utilisation de tous les cookies. Vous pouvez également 
                    personnaliser vos préférences.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-gold hover:bg-gold-dark text-charcoal font-semibold flex-1"
                    >
                      <Check size={18} className="mr-2" />
                      Accepter tout
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      className="flex-1"
                    >
                      Refuser tout
                    </Button>
                    <Button
                      onClick={() => setShowDetails(true)}
                      variant="ghost"
                      className="flex-1"
                    >
                      <Settings size={18} className="mr-2" />
                      Personnaliser
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {/* Cookies nécessaires */}
                    <div className="flex items-start justify-between p-4 bg-background rounded-lg border border-border">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">Cookies nécessaires</h4>
                          <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">Requis</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-gold rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Cookies analytiques */}
                    <div className="flex items-start justify-between p-4 bg-background rounded-lg border border-border">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Cookies analytiques</h4>
                        <p className="text-sm text-muted-foreground">
                          Ces cookies nous permettent de mesurer l'audience et d'améliorer notre site.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.analytics ? 'bg-gold justify-end' : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </button>
                      </div>
                    </div>

                    {/* Cookies marketing */}
                    <div className="flex items-start justify-between p-4 bg-background rounded-lg border border-border">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Cookies marketing</h4>
                        <p className="text-sm text-muted-foreground">
                          Ces cookies sont utilisés pour vous proposer des publicités personnalisées.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.marketing ? 'bg-gold justify-end' : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleSavePreferences}
                      className="bg-gold hover:bg-gold-dark text-charcoal font-semibold flex-1"
                    >
                      Enregistrer mes préférences
                    </Button>
                    <Button
                      onClick={() => setShowDetails(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      Retour
                    </Button>
                  </div>
                </>
              )}

              {/* Lien politique de confidentialité */}
              <p className="text-xs text-muted-foreground mt-4 text-center">
                En savoir plus sur notre{' '}
                <a href="/mentions-legales" className="text-gold hover:underline">
                  politique de confidentialité
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
