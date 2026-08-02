/**
 * Formulaire d'inscription aux formations inter-entreprises
 * Utilise <a href="mailto:"> pour l'envoi direct des données par email
 * Design: Executive Minimalism - Couleurs Sam's Biz Solutions
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  MessageSquare,
  Calendar,
  Send
} from 'lucide-react';

const CONTACT_EMAIL = 'sbizsolutions@outlook.fr';

interface FormationRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  formationName: string;
  sessionDate: string;
}

export default function FormationRegistrationForm({ 
  isOpen, 
  onClose, 
  formationName, 
  sessionDate 
}: FormationRegistrationFormProps) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    fonction: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Inscription formation : ${formationName} - ${sessionDate}`
    );
    const body = encodeURIComponent(
      `INSCRIPTION FORMATION INTER-ENTREPRISES\n` +
      `========================================\n\n` +
      `Formation : ${formationName}\n` +
      `Session : ${sessionDate}\n\n` +
      `INFORMATIONS DU PARTICIPANT\n` +
      `----------------------------\n` +
      `Nom : ${formData.nom}\n` +
      `Prénom : ${formData.prenom}\n` +
      `Email : ${formData.email}\n` +
      `Téléphone : ${formData.telephone}\n` +
      `Entreprise : ${formData.entreprise || 'Non renseignée'}\n` +
      `Fonction : ${formData.fonction || 'Non renseignée'}\n\n` +
      `Message :\n${formData.message || 'Aucun message'}\n\n` +
      `---\n` +
      `Envoyé depuis le site Sam's Biz Solutions`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-charcoal px-6 py-4 rounded-t-2xl flex items-center justify-between sticky top-0">
            <div>
              <h3 className="text-white font-semibold text-lg">Réserver ma place</h3>
              <p className="text-white/60 text-sm">Places limitées à 14 apprenants</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Formation Info */}
          <div className="px-6 py-4 bg-gold/10 border-b border-gold/20">
            <div className="flex items-center gap-3">
              <Calendar className="text-gold" size={20} />
              <div>
                <p className="font-semibold text-foreground">{formationName}</p>
                <p className="text-gold font-medium">{sessionDate}</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <div className="space-y-4">
              {/* Nom et Prénom */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email professionnel *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Téléphone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="06 00 00 00 00"
                  />
                </div>
              </div>

              {/* Entreprise et Fonction */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Entreprise
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Fonction
                  </label>
                  <input
                    type="text"
                    name="fonction"
                    value={formData.fonction}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="Votre poste"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message ou questions
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none"
                    placeholder="Avez-vous des questions ou des besoins spécifiques ?"
                  />
                </div>
              </div>

              {/* Info financement */}
              <div className="bg-gold/10 rounded-lg p-3 text-sm">
                <p className="text-foreground">
                  <strong>Financement OPCO possible</strong> — Nous vous accompagnons dans vos démarches de prise en charge.
                </p>
              </div>

              {/* Submit Button - Lien mailto direct */}
              <a
                href={buildMailtoUrl()}
                className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={18} />
                Envoyer mon inscription
              </a>

              <p className="text-xs text-muted-foreground text-center">
                En cliquant, votre application email s'ouvrira avec un message pré-rempli à envoyer à{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline font-medium">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
