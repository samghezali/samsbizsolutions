#!/usr/bin/env python3
"""
Générateur de plaquettes de formation PDF pour Sam's Biz Solutions
Style: Executive Minimalism avec couleurs or/charbon/blanc
"""

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Image
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Couleurs Sam's Biz Solutions
GOLD = colors.HexColor('#C9A227')
GOLD_LIGHT = colors.HexColor('#F5EBD3')
CHARCOAL = colors.HexColor('#1A1A1A')
WHITE = colors.white
GRAY = colors.HexColor('#666666')
GRAY_LIGHT = colors.HexColor('#F5F5F5')

# Dimensions
PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 2*cm

# Formations data
formations = [
    {
        "id": "prospection-closing",
        "titre": "Prospection & Closing",
        "sous_titre": "Transformez vos compétences commerciales",
        "duree": "2 jours (14 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "11 et 12 février 2026",
        "public": "Indépendants, TPE, PME",
        "objectifs": [
            "Prospecter efficacement avec vos contraintes de temps et budget",
            "Mener des entretiens commerciaux convaincants et naturels",
            "Conclure vos ventes avec confiance et authenticité",
            "Développer votre chiffre d'affaires de manière durable"
        ],
        "programme": [
            ("Jour 1 : Stratégie & Prospection", [
                "Construire sa stratégie commerciale",
                "Définir son positionnement et sa cible idéale",
                "Structurer son offre et fixer ses tarifs",
                "Maîtriser la prospection moderne",
                "Techniques adaptées aux indépendants",
                "Outils digitaux accessibles et performants"
            ]),
            ("Jour 2 : Vente & Closing", [
                "L'entretien commercial gagnant",
                "Préparer et structurer ses rendez-vous",
                "Techniques de questionnement et découverte",
                "Conclure ses ventes",
                "Traiter les objections spécifiques",
                "Techniques de closing respectueuses"
            ])
        ]
    },
    {
        "id": "soft-skills",
        "titre": "Soft Skills Commerciaux",
        "sous_titre": "Développez votre intelligence relationnelle",
        "duree": "2 jours (14 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "19 et 20 février 2026",
        "public": "Commerciaux, managers, dirigeants",
        "objectifs": [
            "Développer son intelligence émotionnelle",
            "Maîtriser l'écoute active et l'empathie",
            "Adapter sa communication à chaque interlocuteur",
            "Gérer le stress et les situations difficiles"
        ],
        "programme": [
            ("Jour 1 : Intelligence émotionnelle", [
                "Comprendre ses émotions et celles des autres",
                "Développer son empathie commerciale",
                "L'écoute active comme outil de vente",
                "Adapter son discours au profil client"
            ]),
            ("Jour 2 : Communication avancée", [
                "Techniques de persuasion éthique",
                "Gestion du stress en situation commerciale",
                "Résolution de conflits",
                "Construire des relations durables"
            ])
        ]
    },
    {
        "id": "dev-commercial",
        "titre": "Développement Commercial",
        "sous_titre": "Structurez votre croissance",
        "duree": "3 jours (21 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "24 et 26 février 2026",
        "public": "Dirigeants, responsables commerciaux",
        "objectifs": [
            "Élaborer une stratégie commerciale efficace",
            "Identifier et qualifier les opportunités",
            "Structurer son pipeline commercial",
            "Piloter sa performance avec des indicateurs clés"
        ],
        "programme": [
            ("Jour 1 : Stratégie commerciale", [
                "Analyse de marché et positionnement",
                "Définition des cibles prioritaires",
                "Construction de l'offre de valeur",
                "Plan d'action commercial"
            ]),
            ("Jour 2 : Prospection structurée", [
                "Organisation de la prospection",
                "Outils de gestion commerciale",
                "Qualification des leads",
                "Suivi et relance efficace"
            ]),
            ("Jour 3 : Pilotage et performance", [
                "Indicateurs clés de performance",
                "Tableaux de bord commerciaux",
                "Optimisation du cycle de vente",
                "Plan d'amélioration continue"
            ])
        ]
    },
    {
        "id": "relation-client",
        "titre": "Gestion de la Relation Client",
        "sous_titre": "Fidélisez par l'excellence",
        "duree": "2 jours (14 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "4 et 5 mars 2026",
        "public": "Équipes commerciales et service client",
        "objectifs": [
            "Créer une expérience client fluide et positive",
            "Maîtriser les techniques d'écoute active",
            "Gérer efficacement les réclamations",
            "Fidéliser les clients par un service d'excellence"
        ],
        "programme": [
            ("Jour 1 : Accueil et relation", [
                "Les fondamentaux de l'accueil client",
                "Créer une première impression positive",
                "Communication verbale et non-verbale",
                "Adapter son accueil au profil client"
            ]),
            ("Jour 2 : Fidélisation", [
                "Gestion des réclamations",
                "Transformer un client mécontent en ambassadeur",
                "Techniques de fidélisation",
                "Suivi et satisfaction client"
            ])
        ]
    },
    {
        "id": "closing-consultants",
        "titre": "Closing pour Consultants",
        "sous_titre": "Vendez votre expertise avec assurance",
        "duree": "2 jours (14 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "12 et 13 mars 2026",
        "public": "Consultants, freelances, experts",
        "objectifs": [
            "Valoriser son expertise sans se dévaloriser",
            "Structurer une proposition commerciale percutante",
            "Maîtriser les techniques de closing adaptées",
            "Négocier ses tarifs avec confiance"
        ],
        "programme": [
            ("Jour 1 : Positionnement expert", [
                "Définir sa valeur ajoutée unique",
                "Structurer son offre de services",
                "Présenter son expertise avec impact",
                "Construire sa crédibilité"
            ]),
            ("Jour 2 : Closing et négociation", [
                "Techniques de closing pour consultants",
                "Gérer les objections sur le prix",
                "Négocier sans se dévaloriser",
                "Fidéliser ses clients"
            ])
        ]
    },
    {
        "id": "organisation",
        "titre": "Organisation Commerciale",
        "sous_titre": "Optimisez votre efficacité",
        "duree": "2 jours (14 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "9 et 10 mars 2026",
        "public": "Commerciaux, entrepreneurs",
        "objectifs": [
            "Gagner en efficacité dans la prospection",
            "Structurer son agenda commercial",
            "Hiérarchiser ses priorités",
            "Maîtriser les outils de suivi client"
        ],
        "programme": [
            ("Jour 1 : Structuration", [
                "Analyser son emploi du temps actuel",
                "Identifier les voleurs de temps",
                "Planifier ses plages de prospection",
                "Équilibrer administratif et commercial"
            ]),
            ("Jour 2 : Outils et méthodes", [
                "Outils de gestion commerciale",
                "Automatisation des tâches répétitives",
                "Suivi et reporting efficace",
                "Plan d'action personnalisé"
            ])
        ]
    },
    {
        "id": "communication",
        "titre": "Communication d'Équipe",
        "sous_titre": "Renforcez la cohésion",
        "duree": "2 jours (14 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "16 et 17 mars 2026",
        "public": "Managers, équipes",
        "objectifs": [
            "Améliorer la communication au sein de l'équipe",
            "Renforcer la cohésion d'équipe",
            "Maîtriser la communication non violente",
            "Gérer les tensions avec intelligence collective"
        ],
        "programme": [
            ("Jour 1 : Communication non violente", [
                "Les principes de la CNV",
                "Observer sans juger",
                "Exprimer ses besoins clairement",
                "Formuler des demandes constructives"
            ]),
            ("Jour 2 : Cohésion d'équipe", [
                "Développer l'assertivité",
                "Gestion des conflits",
                "Feedback constructif",
                "Créer une dynamique positive"
            ])
        ]
    },
    {
        "id": "vente-boutique",
        "titre": "Vendre en Boutique",
        "sous_titre": "Excellence du commerce de détail",
        "duree": "2 jours (14 heures)",
        "tarif": "À partir de 450€ HT/stagiaire",
        "date_session": "18 et 19 mars 2026",
        "public": "Vendeurs, gérants de boutique",
        "objectifs": [
            "Maîtriser l'accueil client en boutique",
            "Conseiller avec expertise et empathie",
            "Augmenter le panier moyen",
            "Fidéliser la clientèle locale"
        ],
        "programme": [
            ("Jour 1 : Accueil et conseil", [
                "L'accueil en boutique",
                "Identifier les besoins du client",
                "Techniques de conseil personnalisé",
                "Présentation des produits"
            ]),
            ("Jour 2 : Vente et fidélisation", [
                "Techniques de vente additionnelle",
                "Gestion des objections",
                "Encaissement et prise de congé",
                "Fidélisation de la clientèle"
            ])
        ]
    }
]

def create_cover_page(c, formation):
    """Crée la page de couverture"""
    width, height = A4
    
    # Fond dégradé (simulé avec un rectangle)
    c.setFillColor(CHARCOAL)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Bande dorée en haut
    c.setFillColor(GOLD)
    c.rect(0, height - 8*cm, width, 8*cm, fill=1, stroke=0)
    
    # Logo placeholder (cercle doré)
    c.setFillColor(WHITE)
    c.circle(width/2, height - 4*cm, 2*cm, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 18)
    c.drawCentredString(width/2, height - 4.3*cm, "Sam's")
    c.setFont("Helvetica", 8)
    c.drawCentredString(width/2, height - 4.8*cm, "BIZ SOLUTIONS")
    
    # Titre principal
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Oblique", 32)
    c.drawCentredString(width/2, height - 12*cm, "Formation")
    
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 36)
    # Gérer les titres longs
    titre = formation["titre"].upper()
    if len(titre) > 20:
        mots = titre.split()
        mid = len(mots) // 2
        ligne1 = " ".join(mots[:mid])
        ligne2 = " ".join(mots[mid:])
        c.drawCentredString(width/2, height - 14*cm, ligne1)
        c.drawCentredString(width/2, height - 15.5*cm, ligne2)
    else:
        c.drawCentredString(width/2, height - 14*cm, titre)
    
    # Sous-titre
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 16)
    c.drawCentredString(width/2, height - 18*cm, formation["sous_titre"])
    
    # Encadré bas
    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    c.roundRect(2*cm, 3*cm, width - 4*cm, 2.5*cm, 10, fill=0, stroke=1)
    
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 11)
    c.drawCentredString(width/2, 4.5*cm, formation["public"])
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 11)
    c.drawCentredString(width/2, 3.8*cm, "Bien plus qu'une formation. Un véritable accompagnement !")

def create_page2(c, formation):
    """Page 2: Présentation et objectifs"""
    width, height = A4
    
    # Fond blanc
    c.setFillColor(WHITE)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Badge "Réservez"
    c.setFillColor(GOLD)
    c.circle(3*cm, height - 3*cm, 1.5*cm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(3*cm, height - 2.7*cm, "Réservez")
    c.drawCentredString(3*cm, height - 3*cm, "votre")
    c.drawCentredString(3*cm, height - 3.3*cm, "formation !")
    
    # Titre section
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(2*cm, height - 6*cm, "FORMATION")
    c.setFont("Helvetica", 22)
    c.drawString(2*cm, height - 7*cm, formation["titre"].upper())
    
    # Description
    c.setFont("Helvetica", 11)
    c.setFillColor(GRAY)
    y = height - 9*cm
    c.drawString(2*cm, y, "Cette formation intensive vous donnera les clés pour :")
    
    # Objectifs avec checkmarks
    c.setFillColor(GOLD)
    y -= 1.5*cm
    for obj in formation["objectifs"]:
        # Checkmark
        c.setFillColor(GOLD_LIGHT)
        c.rect(2*cm, y - 0.3*cm, 0.6*cm, 0.6*cm, fill=1, stroke=0)
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 14)
        c.drawString(2.15*cm, y - 0.1*cm, "✓")
        
        # Texte
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 11)
        c.drawString(3*cm, y, obj)
        y -= 1*cm
    
    # Section Informations pratiques
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(width/2 + 1*cm, height - 6*cm, "INFORMATIONS")
    c.setFont("Helvetica", 16)
    c.drawString(width/2 + 1*cm, height - 7*cm, "PRATIQUES")
    
    # Infos
    infos = [
        ("Dates de la formation :", formation["date_session"]),
        ("Horaires :", "9h30 à 17h30"),
        ("Lieu de la formation :", "Espace Nikolsen"),
        ("", "20 rue Lavoisier, 95300 PONTOISE"),
        ("Participants :", "Places limitées à 14 apprenants")
    ]
    
    y = height - 9*cm
    for label, value in infos:
        if label:
            c.setFillColor(GOLD)
            c.setFont("Helvetica-Bold", 10)
            c.drawString(width/2 + 1*cm, y, label)
            y -= 0.5*cm
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 10)
        c.drawString(width/2 + 1*cm, y, value)
        y -= 0.8*cm
    
    # Logo bas de page
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(2*cm, 2*cm, "Sam's")
    c.setFont("Helvetica", 8)
    c.drawString(2*cm, 1.5*cm, "BIZ SOLUTIONS")

def create_page3(c, formation):
    """Page 3: Programme détaillé"""
    width, height = A4
    
    # Fond blanc
    c.setFillColor(WHITE)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Titre
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(2*cm, height - 3*cm, "PROGRAMME DÉTAILLÉ")
    c.setFont("Helvetica", 18)
    c.drawString(2*cm, height - 4*cm, "DE LA FORMATION")
    
    # Programme
    y = height - 6*cm
    col_width = (width - 4*cm) / 2
    
    for i, (jour_titre, items) in enumerate(formation["programme"]):
        x = 2*cm + (i % 2) * col_width
        if i == 2:  # 3ème jour, nouvelle ligne
            y -= 10*cm
            x = 2*cm
        
        # Titre du jour
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 12)
        c.drawString(x, y, f"Jour {i+1} :")
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 14)
        titre_jour = jour_titre.split(":")[1].strip() if ":" in jour_titre else jour_titre
        c.drawString(x, y - 0.6*cm, titre_jour)
        
        # Horaires
        c.setFillColor(WHITE)
        c.setStrokeColor(GOLD)
        c.rect(x, y - 1.8*cm, 3*cm, 0.7*cm, fill=0, stroke=1)
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(x + 0.3*cm, y - 1.5*cm, "9H30 à 17H30")
        
        # Items
        item_y = y - 3*cm
        for item in items[:4]:  # Max 4 items par colonne
            c.setFillColor(GOLD_LIGHT)
            c.rect(x, item_y - 0.2*cm, 0.5*cm, 0.5*cm, fill=1, stroke=0)
            c.setFillColor(GOLD)
            c.setFont("Helvetica-Bold", 12)
            c.drawString(x + 0.1*cm, item_y, "✓")
            
            c.setFillColor(CHARCOAL)
            c.setFont("Helvetica", 9)
            # Tronquer si trop long
            if len(item) > 40:
                item = item[:37] + "..."
            c.drawString(x + 0.8*cm, item_y, item)
            item_y -= 0.8*cm
    
    # Pied de page
    c.setFillColor(GOLD)
    c.rect(0, 0, width, 1.5*cm, fill=1, stroke=0)
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica", 10)
    c.drawString(2*cm, 0.5*cm, "FORMATION")
    c.setFont("Helvetica-Bold", 10)
    c.drawString(5*cm, 0.5*cm, formation["titre"].upper())

def create_page4(c, formation):
    """Page 4: Formatrice et tarifs"""
    width, height = A4
    
    # Fond blanc
    c.setFillColor(WHITE)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Section formatrice
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica", 18)
    c.drawString(2*cm, height - 3*cm, "VOTRE FORMATRICE")
    c.setFont("Helvetica-Bold", 22)
    c.drawString(2*cm, height - 4*cm, "SAMIRA GHEZALI")
    
    # Description
    c.setFont("Helvetica", 10)
    c.setFillColor(GRAY)
    texte = """17 ans d'expérience commerciale et entrepreneure depuis 2022, 
Samira combine une expertise terrain solide avec la réalité vécue 
de l'entrepreneur indépendant. Elle maîtrise parfaitement les défis 
commerciaux spécifiques aux indépendants pour les avoir surmontés elle-même."""
    
    y = height - 5.5*cm
    for ligne in texte.split("\n"):
        c.drawString(2*cm, y, ligne.strip())
        y -= 0.5*cm
    
    # Certifications
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(2*cm, height - 9*cm, "Certifications & garanties :")
    
    certifs = [
        "Formatrice certifiée Qualiopi (QUA008437)",
        "Spécialiste du développement commercial",
        "Méthodes éprouvées et adaptées"
    ]
    
    y = height - 10.5*cm
    for certif in certifs:
        c.setFillColor(GOLD_LIGHT)
        c.rect(2*cm, y - 0.2*cm, 0.5*cm, 0.5*cm, fill=1, stroke=0)
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(2.1*cm, y, "✓")
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 10)
        c.drawString(2.8*cm, y, certif)
        y -= 0.8*cm
    
    # Section tarifs
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica", 18)
    c.drawCentredString(width/2, height - 15*cm, "TARIFS &")
    c.setFont("Helvetica-Bold", 18)
    c.drawCentredString(width/2, height - 16*cm, "FINANCEMENTS")
    
    # Encadré tarif
    c.setFillColor(GOLD_LIGHT)
    c.rect(2*cm, height - 21*cm, width - 4*cm, 4*cm, fill=1, stroke=0)
    
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 28)
    c.drawString(2.5*cm, height - 18*cm, formation["tarif"].split("/")[0])
    c.setFont("Helvetica", 14)
    c.drawString(2.5*cm, height - 19*cm, "par stagiaire")
    
    c.setFont("Helvetica-Bold", 14)
    c.drawString(2.5*cm, height - 20*cm, "Financement possible")
    c.setFont("Helvetica", 12)
    c.drawString(2.5*cm, height - 20.7*cm, "avec votre OPCO")
    
    # Conditions
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(width/2 + 1*cm, height - 18*cm, "Conditions :")
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica", 9)
    c.drawString(width/2 + 1*cm, height - 18.7*cm, "Activité déclarée et à jour de cotisations")
    c.drawString(width/2 + 1*cm, height - 19.3*cm, "pour la formation professionnelle (OPCO).")
    
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(width/2 + 1*cm, height - 20.3*cm, "OPCO concernés :")
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica", 9)
    c.drawString(width/2 + 1*cm, height - 21*cm, "OPCO des Entrepreneurs, AGEFICE, FIFPL")
    
    # Logo
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(2*cm, 2*cm, "Sam's")
    c.setFont("Helvetica", 8)
    c.drawString(2*cm, 1.5*cm, "BIZ SOLUTIONS")

def create_page5(c, formation):
    """Page 5: Public et résultats"""
    width, height = A4
    
    # Fond blanc
    c.setFillColor(WHITE)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Section Public
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 20)
    c.drawString(2*cm, height - 3*cm, "PUBLIC")
    c.setFont("Helvetica", 20)
    c.drawString(2*cm, height - 4*cm, "CONCERNÉ")
    
    c.setFont("Helvetica", 11)
    c.setFillColor(GRAY)
    c.drawString(2*cm, height - 5.5*cm, "Cette formation s'adresse exclusivement")
    c.drawString(2*cm, height - 6.2*cm, "aux professionnels :")
    
    publics = [
        "Entrepreneurs avec activité déclarée",
        "Dirigeants de TPE souhaitant développer leur CA",
        "Dirigeants de SARL à la recherche de nouveaux clients",
        "Professionnels libéraux en exercice",
        "Consultants et freelances établis"
    ]
    
    y = height - 8*cm
    for pub in publics:
        c.setFillColor(GOLD_LIGHT)
        c.rect(2*cm, y - 0.2*cm, 0.5*cm, 0.5*cm, fill=1, stroke=0)
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(2.1*cm, y, "✓")
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 10)
        c.drawString(2.8*cm, y, pub)
        y -= 0.8*cm
    
    # Section Résultats
    c.setFillColor(GOLD_LIGHT)
    c.rect(width/2, height - 12*cm, width/2 - 2*cm, 8*cm, fill=1, stroke=0)
    
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(width/2 + 0.5*cm, height - 5*cm, "Résultats attendus :")
    
    c.setFont("Helvetica", 9)
    resultats = [
        "Construire un plan commercial structuré",
        "Prospecter de manière organisée",
        "Mener des entretiens commerciaux naturels",
        "Conclure vos ventes avec confiance",
        "Développer votre chiffre d'affaires"
    ]
    
    y = height - 6.5*cm
    for res in resultats:
        c.drawString(width/2 + 0.5*cm, y, "• " + res)
        y -= 0.7*cm
    
    # Prérequis
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(2*cm, height - 14*cm, "Prérequis :")
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica", 10)
    c.drawString(2*cm, height - 15*cm, "Avoir une activité professionnelle déclarée")
    c.drawString(2*cm, height - 15.6*cm, "et cotiser à un OPCO.")
    
    # Moyens pédagogiques
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(2*cm, height - 17*cm, "Moyens pédagogiques :")
    
    moyens = [
        "Livret de formation complet et personnalisé",
        "Démonstrations et mise en pratique",
        "Kit de prospection adapté à votre activité",
        "Suivi post-formation : accès e-mail (1 mois)"
    ]
    
    y = height - 18.5*cm
    for moyen in moyens:
        c.setFillColor(CHARCOAL)
        c.setFont("Helvetica", 9)
        c.drawString(2*cm, y, "• " + moyen)
        y -= 0.6*cm
    
    # Contact
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(width/2, height - 17*cm, "Contact")
    
    c.setFont("Helvetica", 10)
    c.drawString(width/2, height - 18.5*cm, "Si vous avez des questions concernant")
    c.drawString(width/2, height - 19.2*cm, "nos formations, leur contenu et modalités,")
    c.drawString(width/2, height - 19.9*cm, "n'hésitez pas à nous écrire à l'adresse :")
    
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(width/2, height - 21*cm, "sghezali@samsbizsolutions.com")
    
    # Pied de page
    c.setFillColor(GOLD)
    c.rect(0, 0, width, 1.5*cm, fill=1, stroke=0)
    c.setFillColor(CHARCOAL)
    c.setFont("Helvetica", 10)
    c.drawString(2*cm, 0.5*cm, "FORMATION")
    c.setFont("Helvetica-Bold", 10)
    c.drawString(5*cm, 0.5*cm, formation["titre"].upper())

def create_page6(c, formation):
    """Page 6: Page de fin"""
    width, height = A4
    
    # Fond charbon
    c.setFillColor(CHARCOAL)
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Logo
    c.setFillColor(GOLD)
    c.roundRect(width/2 - 2*cm, height - 10*cm, 4*cm, 4*cm, 15, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 20)
    c.drawCentredString(width/2, height - 8.3*cm, "Sam's")
    c.setFont("Helvetica", 9)
    c.drawCentredString(width/2, height - 9*cm, "BIZ SOLUTIONS")
    
    # Slogan
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 14)
    c.drawCentredString(width/2, height - 12*cm, "Ne laissez plus le commercial freiner")
    c.drawCentredString(width/2, height - 12.8*cm, "votre réussite d'entrepreneur !")
    
    # Coordonnées
    c.setFont("Helvetica-Bold", 12)
    c.drawCentredString(width/2, 8*cm, "Samira GHEZALI")
    c.setFillColor(GOLD)
    c.setFont("Helvetica", 10)
    c.drawCentredString(width/2, 7.3*cm, "Gérante & Fondatrice")
    
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(width/2, 6*cm, "Nikolsen | 20 Rue Lavoisier, 95300 PONTOISE")
    
    c.setFont("Helvetica", 10)
    c.drawCentredString(width/2, 5*cm, "sghezali@samsbizsolutions.com | 06 66 38 31 07")
    
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(width/2, 4*cm, "www.samsbizsolutions.com")
    
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 8)
    c.drawCentredString(width/2, 2.5*cm, "SIRET : 949 917 314 00021")

def generate_plaquette(formation, output_dir):
    """Génère une plaquette PDF complète pour une formation"""
    filename = os.path.join(output_dir, f"plaquette-{formation['id']}.pdf")
    
    c = canvas.Canvas(filename, pagesize=A4)
    
    # Page 1: Couverture
    create_cover_page(c, formation)
    c.showPage()
    
    # Page 2: Présentation
    create_page2(c, formation)
    c.showPage()
    
    # Page 3: Programme
    create_page3(c, formation)
    c.showPage()
    
    # Page 4: Formatrice et tarifs
    create_page4(c, formation)
    c.showPage()
    
    # Page 5: Public et résultats
    create_page5(c, formation)
    c.showPage()
    
    # Page 6: Page de fin
    create_page6(c, formation)
    
    c.save()
    print(f"✓ Plaquette générée : {filename}")
    return filename

def main():
    output_dir = "/home/ubuntu/sams-biz-solutions/plaquettes"
    os.makedirs(output_dir, exist_ok=True)
    
    print("=" * 50)
    print("Génération des plaquettes Sam's Biz Solutions")
    print("=" * 50)
    
    generated_files = []
    for formation in formations:
        filepath = generate_plaquette(formation, output_dir)
        generated_files.append(filepath)
    
    print("\n" + "=" * 50)
    print(f"✓ {len(generated_files)} plaquettes générées avec succès !")
    print("=" * 50)
    
    return generated_files

if __name__ == "__main__":
    main()
