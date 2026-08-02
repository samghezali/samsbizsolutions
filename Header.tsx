/**
 * Header Component - Executive Minimalism Design
 * Sticky navigation with gold accents, minimalist aesthetic
 * Text-only logo - clean and professional
 * Fixed below notification banner
 */

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#formations', label: 'Formations' },
  { href: '#difference', label: 'Ma différence' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#blog', label: 'Blog' },
  { href: '#zones', label: 'Zones' },

  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-cream py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - Texte uniquement */}
        <a href="#accueil" className="flex flex-col group">
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            <span className="text-foreground">Sam's</span>{' '}
            <span className="text-gold">Biz</span>{' '}
            <span className="text-foreground">Solutions</span>
          </span>
          <span className="text-[10px] md:text-xs text-gold tracking-[0.15em] uppercase">
            Votre partenaire formation
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground animated-underline transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 transition-all duration-300 hover:shadow-lg"
          >
            <a href="mailto:sbizsolutions@outlook.fr" target="_blank" rel="noopener noreferrer">
              Diagnostic offert
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gold/10 rounded-lg transition-colors"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-foreground py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold mt-2"
              >
                <a href="mailto:sbizsolutions@outlook.fr" target="_blank" rel="noopener noreferrer">
                  Diagnostic offert
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
