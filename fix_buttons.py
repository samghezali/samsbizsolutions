import re

formations = [
    "FormationProspection.tsx",
    "FormationSoftSkills.tsx",
    "FormationDevCommercial.tsx",
    "FormationRelationClient.tsx",
    "FormationClosingConsultants.tsx",
    "FormationOrganisation.tsx",
    "FormationCommunication.tsx",
    "FormationCommerce.tsx"
]

for filename in formations:
    filepath = f"/home/ubuntu/sams-biz-solutions/client/src/pages/{filename}"
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Remplacer le bouton "Demander un devis" par un bouton qui ouvre le formulaire
    # Pattern pour le bouton Demander un devis
    old_button = '''<Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                  <a href="https://calendly.com/sghezali/proposition-partenariat" target="_blank" rel="noopener noreferrer">
                    <Phone size={18} className="mr-2" />
                    Demander un devis
                  </a>
                </Button>'''
    
    new_button = '''<Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold"
                  onClick={() => setIsRegistrationOpen(true)}
                >
                  <Calendar size={18} className="mr-2" />
                  Réserver ma place
                </Button>'''
    
    content = content.replace(old_button, new_button)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Updated {filename}")

print("All buttons updated!")
