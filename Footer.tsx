/**
 * Footer Component - Executive Minimalism Design
 * All links use <a href="mailto:"> for direct email delivery
 */

import { Link } from 'wouter';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowRight,
  Award
} from 'lucide-react';

const CONTACT_EMAIL = 'sbizsolutions@outlook.fr';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Formations', href: '#formations' },

  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'Règlement intérieur', href: '/reglement-interieur' },
  { label: 'RGPD', href: '/rgpd' },
];

const newsletterMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Inscription Newsletter - Sam's Biz Solutions")}&body=${encodeURIComponent("Bonjour,\n\nJe souhaite m'inscrire à votre newsletter pour recevoir vos conseils et actualités sur le leadership et la vente.\n\nCordialement")}`;

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#accueil" className="block mb-6">
              <span className="font-display text-xl font-semibold">
                Sam's <span className="text-gold">Biz</span> Solutions
              </span>
              <span className="block text-xs text-gold/80 tracking-[0.15em] uppercase mt-1">
                Votre partenaire formation
              </span>
            </a>

            <p className="text-white/70 mb-6 leading-relaxed">
              Votre partenaire formation pour transformer vos équipes commerciales 
              en forces de vente authentiques.
            </p>

            {/* Certifications */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <Award size={24} className="text-gold" />
              <div>
                <p className="font-medium text-sm">Processus certifié Qualiopi</p>
                <p className="text-xs text-white/50">Finançable OPCO</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Informations</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4 text-sm">
              Recevez mes conseils et actualités sur le leadership et la vente.
            </p>
            <a
              href={newsletterMailto}
              className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold h-12 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              S'inscrire à la newsletter
              <ArrowRight size={16} />
            </a>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} />
                {CONTACT_EMAIL}
              </a>
              <a
                href="tel:+33666383107"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                06 66 38 31 07
              </a>
              <div className="flex items-center gap-3 text-white/70 text-sm pt-2 border-t border-white/10 mt-2">
                <span className="text-gold font-medium">Référente Handicap :</span>
                <a href="tel:+33666383107" className="hover:text-gold transition-colors">06 66 38 31 07</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NDA Mention */}
      <div className="border-t border-white/10">
        <div className="container py-4">
          <p className="text-white/40 text-xs text-center leading-relaxed">
            Sam's Biz Solutions – Prestataire d'actions de formation déclaré sous le numéro NDA 11950911695 auprès de la direction du Travail du Val d'Oise. Cet enregistrement ne vaut pas agrément de l'État.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Sam's Biz Solutions. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/samiraghezali/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
