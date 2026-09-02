# Plan d’action SEO vérifié

URL : `https://ef5f6a5e.fanny-cayol.pages.dev/`

## 1. Contrôles de lancement — indispensables, sans changement de code maintenant

1. Après le déploiement sur `www.fanny-cayol-peridon.fr`, vérifier que la réponse HTML ne contient plus `X-Robots-Tag: noindex`.
   - Impact : critique uniquement si le header reste présent en production.
   - Effort : très faible.
   - Dépendance : déploiement de production.
2. Vérifier que `https://www.fanny-cayol-peridon.fr/sitemap.xml` renvoie bien du XML avec les 10 URL de la nouvelle version.
   - Impact : élevé pour la découverte et le suivi des pages.
   - Effort : très faible.
   - Dépendance : déploiement de production.

## 2. Quick win réalisé

1. `public/images/profile-picture.jpg` a été compressée de 383 801 à 199 985 octets, avec les dimensions 1 254 × 1 254 inchangées.
   - Réduction : 47,9 %.
   - Validation visuelle : conforme.
   - Validation technique : build Astro réussi sans erreur ni avertissement.

## 3. Améliorations facultatives

1. Enrichir légèrement la page d’accueil seulement si une question utile manque réellement : déroulement d’une première consultation, zone desservie ou modalités de rendez-vous.
   - Ne pas ajouter 16 mots uniquement pour satisfaire le seuil heuristique de 500 mots.
2. Tester un `/llms.txt` concis si l’on souhaite expérimenter l’exposition aux assistants IA.
   - Ne pas le considérer comme un prérequis de crawl ou d’indexation.
3. Définir explicitement une politique pour les robots IA dans `robots.txt` uniquement après décision métier sur l’entraînement, l’indexation et les citations.

## 4. Hors périmètre SEO, à traiter séparément si souhaité

Le skill signale l’absence de HSTS, CSP, X-Frame-Options et Permissions-Policy sur le preview. C’est un chantier de sécurité/CDN distinct ; ne pas le mélanger au score SEO ni l’appliquer sans vérifier les réglages Cloudflare de production.

## Éléments à ne pas corriger

- Ne pas remplacer les liens `sms:` : ils sont valides sur mobile.
- Ne pas créer de pages Wikipédia ou Wikidata pour satisfaire le rapport.
- Ne pas ajouter de hreflang à un site monolingue.
- Ne pas traiter les 10 pages comme orphelines : le crawl vérifié confirme leur maillage.
- Ne pas modifier la canonique de production sur le preview.
