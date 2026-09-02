# Audit SEO agentique — site de développement

- URL auditée : `https://ef5f6a5e.fanny-cayol.pages.dev/`
- Périmètre : audit complet d’une page, complété par un crawl interne de niveau 1
- Date : 2 septembre 2026
- Score vérifié après optimisation : **97/100 — Excellent**
- Confiance : **élevée** pour le HTML, les métadonnées, le maillage, le sitemap et les images ; performance terrain non mesurée

Le score brut de `69/100` produit par `generate_report.py` n’est pas retenu. Il attribue notamment `0` à PageSpeed (API limitée), au hreflang (site monolingue), à `llms.txt` et à des signaux Wikipédia/Wikidata non applicables à ce cabinet local. Il transforme aussi un lien `sms:` valide en lien cassé et contredit son propre crawl sur le maillage interne.

## Résumé

### Principaux constats

1. **Aucun blocage SEO à corriger dans le code actuel.** Le titre, la description, le H1, la canonique, le maillage, les données structurées et les images visibles sont correctement configurés.
2. **L’optimisation d’image a été appliquée :** `public/images/profile-picture.jpg`, utilisée pour Open Graph/Twitter et `primaryImageOfPage`, est passée de 383 801 à 199 985 octets sans changement de dimensions.
3. **Deux vérifications de mise en production sont indispensables :** disparition du `X-Robots-Tag: noindex` propre au preview Cloudflare et remplacement de l’ancien `/sitemap.xml` de production par le sitemap XML valide de la nouvelle version.

### Opportunités

1. Ajouter quelques lignes de contenu uniquement si elles répondent à une vraie question de patient ; le comptage principal trouve 484 mots, soit seulement 16 mots sous le seuil heuristique de 500 mots du skill.
2. Tester éventuellement un fichier `llms.txt`, mais comme expérimentation GEO, pas comme correctif d’indexation.

## Carte de score vérifiée

| Catégorie | Score | Justification |
| --- | ---: | --- |
| On-page SEO | 100/100 | Titre descriptif, meta description, un H1, hiérarchie H2/H3 cohérente, canonique de production |
| Qualité du contenu | 83/100 | Intention locale claire, identité et qualifications visibles, services détaillés ; 484 mots selon le parseur principal contre un seuil heuristique de 500 |
| Technique | 100/100 | HTTP 200, HTTPS, aucune redirection, viewport mobile, sitemap preview valide ; `noindex` preview explicitement exclu |
| Données structurées | 100/100 | JSON-LD avec WebSite, Person, MedicalBusiness/LocalBusiness, MedicalWebPage et ItemList |
| Images | 100/100 | Alt, dimensions, WebP visible, priorité LCP et lazy-loading corrects ; image sociale JPEG réduite à 199 985 octets |

Score global : `(100 + 83 + 100 + 100 + 100) / 5 = 96,6`, arrondi à **97/100**. La performance n’est pas incluse dans cette moyenne faute de mesure PageSpeed exploitable ; le précédent audit Lighthouse local de cette même version atteignait 99/100 en performance.

## Constats vérifiés

| Zone | Sévérité | Confiance | Constat | Preuve | Correction |
| --- | --- | --- | --- | --- | --- |
| Images sociales | Conforme | Confirmé | L’image sociale est maintenant sous le seuil de 200 Ko du skill | `public/images/profile-picture.jpg` : 199 985 octets, 1 254 × 1 254 ; réduction de 47,9 % | Aucune action supplémentaire |
| Déploiement | Info | Confirmé | Le preview Cloudflare n’est pas indexable | En-tête HTTP `X-Robots-Tag: noindex` | Aucun changement de code ; vérifier son absence sur le domaine de production |
| Sitemap | Info | Confirmé | Le sitemap du preview est valide, mais l’URL de production sert encore l’ancien site HTML | Le validateur accepte `dist/sitemap.xml` et le preview contient 10 URL ; `https://www.fanny-cayol-peridon.fr/sitemap.xml` renvoie actuellement du HTML | Contrôle post-déploiement sur le domaine final |
| Contenu | Info | Confirmé | La page est juste sous le seuil quantitatif interne du skill | `parse_html.py` : 484 mots ; `readability.py` : 263, ce qui révèle une extraction incohérente | Ne pas ajouter de texte de remplissage ; enrichir seulement avec une réponse utile à l’intention locale |
| GEO | Info | Confirmé | Aucun `llms.txt` n’est publié | `/llms.txt` renvoie 404 | Expérimentation facultative, sans priorité SEO actuelle démontrée par cet audit |
| Mesure | Info | Confirmé | PageSpeed n’a pas produit de score | API Google limitée après la séquence de retries bornée | Réutiliser Lighthouse ou relancer PageSpeed avec une clé si des données de terrain sont nécessaires |

## Points conformes

- Titre : `Ostéopathe à Autrans | Fanny Cayol Peridon`.
- Meta description descriptive et locale.
- Canonique volontairement dirigée vers `https://www.fanny-cayol-peridon.fr/`.
- Un H1 et une hiérarchie H2/H3 structurée.
- 10 pages découvertes et reliées par la navigation ; aucun orphelin confirmé.
- Deux images de contenu avec alt et dimensions ; l’image principale WebP pèse 56 680 octets et l’image sociale JPEG 199 985 octets.
- Open Graph complet (7/7) et Twitter Card principal complet ; les champs `twitter:site` et `twitter:creator` sont optionnels.
- JSON-LD riche et cohérent avec l’activité, la personne, l’adresse, les services et la page.
- HTTPS, statut 200, aucune chaîne de redirection.
- `robots.txt` autorise le crawl général et annonce le sitemap canonique.

## Faux positifs ou limites du skill observés

| Sortie brute | Verdict après vérification |
| --- | --- |
| Lien `sms:` déclaré cassé | Faux positif : schéma d’URL volontaire que le vérificateur ne sait pas tester |
| 10 pages orphelines et 10 pages sans lien sortant | Faux positif : le crawl interne trouve 100 liens et 10 liens par page en moyenne |
| H1 absent et contenu de 12 mots dans `article_seo.py` | Faux positif : ce parseur d’article ne convient pas à la structure de cette page d’accueil ; `parse_html.py` trouve bien le H1 et 484 mots |
| `llms.txt` absent considéré critique | Surévaluation : à conserver au mieux comme expérimentation facultative |
| Hreflang à 0 | Non applicable à un site uniquement en français |
| Wikipédia/Wikidata manquants | Non applicable ; il ne faut pas créer ces fiches uniquement pour le SEO |
| Quatre en-têtes de sécurité classés critiques SEO | Sujet de durcissement sécurité/CDN, pas un défaut SEO démontré sur ce preview |
| Sitemap de production « XML invalide » | Le validateur tente de parser l’ancien HTML de production ; le sitemap construit et celui du preview sont valides |

## Limites de l’environnement

- Le `noindex` du sous-domaine `pages.dev` est un comportement de préproduction attendu et a été exclu du score et des corrections.
- L’API PageSpeed publique a limité la requête ; aucune valeur CrUX ne doit donc être déduite de cette exécution.
- Les lenteurs réseau Cloudflare ont été exclues comme demandé.
- Dix fichiers de référence du skill dépassent sa propre limite de fraîcheur de 90 jours, dont les références Core Web Vitals, Google SEO, schéma et la grille d’audit.

## Conclusion

Le site est prêt sur le plan SEO technique pour la mise en production et l’image sociale est désormais optimisée. Le build Astro passe sans erreur ni avertissement. La priorité restante est de vérifier les deux conditions de lancement : `noindex` absent et sitemap XML servi en production.
