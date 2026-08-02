/**
 * Contact Section - Executive Minimalism Design
 * Lead generation forms with diagnostic booking and contact
 * All forms use <a href="mailto:"> for direct email delivery
 */

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Linkedin
} from 'lucide-react';

// Configuration
const CALENDLY_LINK = 'mailto:sbizsolutions@outlook.fr';
const CONTACT_EMAIL = 'sbizsolutions@outlook.fr';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mailtoRef = useRef<HTMLAnchorElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(`Nouveau message de ${formData.name} - Sam's Biz Solutions`);
    const body = encodeURIComponent(
      `Nom : ${formData.name}\n` +
      `Email : ${formData.email}\n` +
      `Téléphone : ${formData.phone || 'Non renseigné'}\n` +
      `Entreprise : ${formData.company || 'Non renseignée'}\n\n` +
      `Message :\n${formData.message}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Créer un lien temporaire et cliquer dessus pour garantir l'ouverture
    const link = document.createElement('a');
    link.href = buildMailtoUrl();
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Contact
          </span>
          <h2 className="text-foreground mb-6">
            Prêt à <span className="text-gold">transformer</span> vos équipes ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Réservez votre diagnostic offert de 30 minutes ou contactez-moi pour discuter de vos besoins
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Diagnostic Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card id="diagnostic" className="h-full border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-4">
                  <Calendar size={28} className="text-charcoal" />
                </div>
                <CardTitle className="font-display text-2xl">
                  Diagnostic Offert
                </CardTitle>
                <CardDescription className="text-base">
                  30 minutes pour analyser vos besoins et définir ensemble la meilleure stratégie de formation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Benefits */}
                <div className="space-y-3">
                  {[
                    'Analyse de vos enjeux actuels',
                    'Identification des axes d\'amélioration',
                    'Recommandations personnalisées',
                    'Devis sur mesure sans engagement',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Time slots info */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white border border-border">
                  <Clock size={20} className="text-gold" />
                  <div>
                    <p className="font-medium text-foreground">Créneaux disponibles</p>
                    <p className="text-sm text-muted-foreground">Du lundi au vendredi, 9h - 18h</p>
                  </div>
                </div>

                {/* CTA Button - Lien direct vers Calendly */}
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold h-14 text-base rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar size={20} />
                  Réserver mon créneau
                </a>

                <p className="text-center text-sm text-muted-foreground">
                  Ou appelez-moi directement au{' '}
                  <a href="tel:+33666383107" className="text-gold hover:underline font-medium">
                    06 66 38 31 07
                  </a>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <Mail size={28} className="text-gold" />
                </div>
                <CardTitle className="font-display text-2xl">
                  Envoyez-moi un message
                </CardTitle>
                <CardDescription className="text-base">
                  Remplissez le formulaire ci-dessous, votre application email s'ouvrira automatiquement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou posez vos questions..."
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-foreground hover:bg-foreground/90 text-background font-semibold h-14 text-base"
                  >
                    Envoyer le message
                    <Send size={18} className="ml-2" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Vous pouvez aussi m'écrire directement à{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline font-medium">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
            { icon: Phone, label: 'Téléphone', value: '06 66 38 31 07', href: 'tel:+33666383107' },
            { icon: MapPin, label: 'Localisation', value: 'Pontoise, Val-d\'Oise', href: 'https://maps.google.com/?q=Pontoise,+Val-d%27Oise,+France' },
            { icon: Linkedin, label: 'LinkedIn', value: 'Suivez-moi', href: 'https://www.linkedin.com/in/samiraghezali/' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <item.icon size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-medium text-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
