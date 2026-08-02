/**
 * KineticBand — bandeau défilant des domaines de formation
 * Fait le pont visuel entre le hero sombre et le reste du site clair.
 * Pause au survol ; désactivé si prefers-reduced-motion.
 */

const domains = [
  'Vente en boutique',
  'Prospection & Closing',
  'Relation client',
  'Leadership',
  'Soft skills',
  'Communication',
  'Organisation',
  'IA & Productivité',
  'Développement commercial',
];

export default function KineticBand() {
  const items = [...domains, ...domains]; // duplication pour boucle infinie

  return (
    <div
      className="sbs-marquee overflow-hidden border-y border-gold/20 py-4"
      style={{ background: 'oklch(0.18 0.012 65)' }}
      aria-hidden="true"
    >
      <div className="sbs-marquee-track">
        {items.map((d, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display italic text-lg sm:text-xl text-cream/80 px-6 whitespace-nowrap">
              {d}
            </span>
            <span className="text-gold text-xl select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
