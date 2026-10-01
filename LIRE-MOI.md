# Sam’s Biz Solutions — refonte visuelle

Version du 1er octobre 2026. Site préparé et testé, non publié.

## Contenu

Le dossier `out/` contient le site prêt à héberger : accueil, catalogue, dix fiches formation, page mutuelle et assurance santé, cinq pages d’information et page 404. Les anciennes adresses `.html` des formations et pages d’information sont également fournies.

Les images, les cinq polices et les documents PDF sont intégrés localement. Aucun téléchargement externe de photo ou de police n’est nécessaire au chargement des pages.

## Reconstruire

Exécuter `python3 build_site.py` depuis ce dossier. Python 3 suffit ; aucune bibliothèque supplémentaire n’est nécessaire. Le résultat est écrit dans `out/`.

Les contenus et paramètres commerciaux sont dans `build.py` et les quatre fichiers JSON. `build_site.py` applique la présentation. `site.css` et `site.js` contiennent les styles et interactions ; `static/` conserve les fichiers nécessaires à la reconstruction, dont les visuels optimisés.

Pour visualiser le site complet localement : `python3 -m http.server 8000 --directory out`, puis ouvrir `http://localhost:8000`.

## Publication

Publier le contenu de `out/` à la racine de l’hébergement. Le fichier `CNAME` conserve le domaine samsbizsolutions.fr. Le dossier est compatible avec un hébergement statique, notamment GitHub Pages ou Netlify. Aucun accès à l’hébergement n’a été utilisé et aucune mise en ligne n’a été effectuée.

Les appels à l’action de réservation ouvrent directement Calendly : https://calendly.com/samiraghezali/proposition-partenariat. Le formulaire de contact a été supprimé. Le bouton principal de l’accueil et le bloc de contact portent la mention « Réserver mon diagnostic offert — 30 min ».

## Contrôles

19 pages contrôlées dans Chromium à 1440 px et à 390 px : navigation locale, ancres, chargement des images et polices, absence de débordement horizontal, un titre principal par page, aucune erreur JavaScript. Menu mobile avec fermeture par Échap ; accordéons FAQ et destinations des boutons Calendly vérifiés sans réservation.

Les contenus commerciaux, tarifs, témoignages et mentions légales viennent des sources fournies. Cette intervention est une refonte visuelle, pas une nouvelle validation administrative ou commerciale. Les liens externes de réservation et les services tiers n’ont pas fait l’objet d’une réservation réelle.

Les logos et les PDF ont été récupérés dans l’archive SBS précédente du 22 septembre, car le ZIP de sources ne les contenait pas. Le portrait a été remplacé par la photographie transmise par Samira le 1er octobre 2026, avec un texte alternatif adapté. Le classement de Gisors et la mention de la ligne RER de Pontoise ont été corrigés.

## Visuels et polices

Photos d’illustration : Campaign Creators, Unsplash. Elles illustrent des situations professionnelles et ne représentent pas des formations ou clients SBS identifiés.

- Atelier : https://unsplash.com/photos/gMsnXqILjp4
- Collaboration : https://unsplash.com/photos/qCi_MzVODoU
- Licence : https://unsplash.com/license

Polices DM Sans et Manrope, distribuées avec leurs licences SIL Open Font License dans `static/fonts/`.

Les images sociales et captures montrent le site lui-même. Le logo et le portrait SBS ont été conservés.
