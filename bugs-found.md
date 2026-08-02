# Bugs identifiés sur le site publié

## Site publié vs code local : DÉCALAGE
Le site publié montre encore l'ancienne version ! On voit :
- "Notre différence" au lieu de "Ma différence" dans le header (index 8)
- "contact@samsbizsolutions.com" au lieu de "contactsamsbizsolutions@gmail.com" (index 65, 83)
- "Formation certifiée Qualiopi" au lieu de "processus certifié Qualiopi" dans le Hero
- "pas par un formateur de PowerPoint" encore visible
- Footer a encore le formulaire newsletter avec input email (index 81, 82)
- Le site publié n'a PAS les dernières modifications

## Problèmes techniques identifiés :
1. window.location.href = mailto:... bloqué par navigateurs modernes sur certains contextes
2. Le site publié est une ancienne version - les corrections locales ne sont pas déployées
3. Les boutons "Réserver ma place" sur les formations 6,7,8 n'ont pas le lien (index 30,31)
