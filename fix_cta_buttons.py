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
    
    # Remplacer le bouton CTA "Réserver mon diagnostic offert" par un bouton d'inscription
    # Pattern 1 - avec asChild et div wrapper
    old_cta1 = '''<Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                  <a href="https://calendly.com/sghezali/proposition-partenariat" target="_blank" rel="noopener noreferrer">
                    Réserver mon diagnostic offert
                  </a>
                </Button>'''
    
    new_cta1 = '''<Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold"
                  onClick={() => setIsRegistrationOpen(true)}
                >
                  Réserver ma place à cette formation
                </Button>'''
    
    content = content.replace(old_cta1, new_cta1)
    
    # Pattern 2 - sans div wrapper (FormationDevCommercial style)
    old_cta2 = '''<Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                <a href="https://calendly.com/sghezali/proposition-partenariat" target="_blank" rel="noopener noreferrer">
                  Réserver mon diagnostic offert
                </a>
              </Button>'''
    
    new_cta2 = '''<Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold"
                onClick={() => setIsRegistrationOpen(true)}
              >
                Réserver ma place à cette formation
              </Button>'''
    
    content = content.replace(old_cta2, new_cta2)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Updated CTA in {filename}")

print("All CTA buttons updated!")
