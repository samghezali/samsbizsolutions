import re

formations = [
    {
        "file": "FormationDevCommercial.tsx",
        "name": "Développement Commercial",
        "date": "24 et 26 février 2026"
    },
    {
        "file": "FormationRelationClient.tsx",
        "name": "Gestion de la Relation Client",
        "date": "4 et 5 mars 2026"
    },
    {
        "file": "FormationClosingConsultants.tsx",
        "name": "Closing pour Consultants",
        "date": "12 et 13 mars 2026"
    },
    {
        "file": "FormationOrganisation.tsx",
        "name": "Organisation Commerciale",
        "date": "9 et 10 mars 2026"
    },
    {
        "file": "FormationCommunication.tsx",
        "name": "Communication d'Équipe",
        "date": "16 et 17 mars 2026"
    },
    {
        "file": "FormationCommerce.tsx",
        "name": "Vendre et Conseiller en Boutique",
        "date": "18 et 19 mars 2026"
    }
]

for formation in formations:
    filepath = f"/home/ubuntu/sams-biz-solutions/client/src/pages/{formation['file']}"
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # 1. Add useState import
    content = content.replace(
        "import { useEffect } from 'react';",
        "import { useEffect, useState } from 'react';"
    )
    
    # 2. Add FormationRegistrationForm import
    content = content.replace(
        "import Footer from '@/components/Footer';",
        "import Footer from '@/components/Footer';\nimport FormationRegistrationForm from '@/components/FormationRegistrationForm';"
    )
    
    # 3. Add state after function declaration
    # Find the export default function line and add state after useEffect
    pattern = r"(export default function \w+\(\) \{)\n(\s+useEffect)"
    replacement = r"\1\n  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);\n\n\2"
    content = re.sub(pattern, replacement, content)
    
    # 4. Replace Calendly link with button
    content = re.sub(
        r'<a \s*\n\s*href="https://calendly\.com/sghezali/proposition-partenariat" \s*\n\s*target="_blank" \s*\n\s*rel="noopener noreferrer"\s*\n\s*className="text-sm text-gold hover:underline mt-2 inline-block"\s*\n\s*>\s*\n\s*→ Réserver ma place pour cette session\s*\n\s*</a>',
        '<button \n                  onClick={() => setIsRegistrationOpen(true)}\n                  className="text-sm text-gold hover:underline mt-2 inline-block font-medium"\n                >\n                  → Réserver ma place pour cette session\n                </button>',
        content
    )
    
    # 5. Add modal before closing div
    modal_code = f'''
      {{/* Modal d'inscription */}}
      <FormationRegistrationForm
        isOpen={{isRegistrationOpen}}
        onClose={{() => setIsRegistrationOpen(false)}}
        formationName="{formation['name']}"
        sessionDate="{formation['date']}"
      />'''
    
    # Find the pattern <Footer /> followed by </div> and insert modal
    content = re.sub(
        r'(<Footer />)\s*\n(\s*</div>\s*\n\s*\);)',
        r'\1\n' + modal_code + r'\n    </div>\n  );',
        content
    )
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Updated {formation['file']}")

print("All formations updated!")
