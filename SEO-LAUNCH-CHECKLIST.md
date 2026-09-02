# SEO local — checklist de lancement

État de l’audit : 2 septembre 2026. Cette checklist complète les optimisations intégrées à la branche `v2`.

## Cibles par page

| Page | Intention principale |
| --- | --- |
| `/` | ostéopathe Autrans, ostéopathe Autrans-Méaudre-en-Vercors |
| `/osteopathie/` | consultation ostéopathie Autrans |
| `/osteopathie-femme/` | ostéopathe femme, grossesse et post-partum à Autrans |
| `/osteopathie-pediatrique/` | ostéopathe bébé et enfant à Autrans |
| `/drainage-lymphatique/` | drainage lymphatique Autrans |
| `/massages/` | massage Autrans |
| `/fanny-cayol-peridon/` | Fanny Cayol Peridon ostéopathe |
| `/cabinet-tarifs-rendez-vous/` | cabinet, tarif, rendez-vous et itinéraire |

Les titres, H1, descriptions, liens internes et données structurées suivent cette répartition. Il ne faut pas multiplier des pages quasi identiques pour les communes voisines sans contenu réellement spécifique.

## Informations à confirmer avant publication

- Tarif actuel d’une consultation d’ostéopathie.
- Horaires ou jours de consultation exacts.
- URL de réservation définitive (Perfactive, Planity ou autre).
- Orthographe commerciale exacte affichée dans la fiche Google : `Fanny Cayol Peridon` ou `Fanny Cayol-Peridon`.
- Formulation postale exacte de l’adresse : elle doit être strictement identique sur le site, Google et les annuaires.
- Photos finales : portrait, consultation, salle de soin, entrée et repère extérieur.

## Priorité n°1 : fiche d’établissement Google

1. Revendiquer et faire valider la fiche si nécessaire.
2. Utiliser la catégorie principale la plus précise disponible pour l’ostéopathie et seulement des catégories secondaires réellement exercées.
3. Remplacer l’ancienne adresse, les anciens horaires, l’ancien lien Doctolib et toute mention laissant croire que des séances de kinésithérapie sont proposées à NATURASOI.
4. Ajouter le site en HTTPS avec le domaine canonique `www`, le téléphone, l’itinéraire, les prestations et leurs tarifs confirmés.
5. Ajouter régulièrement de vraies photos du lieu et de Fanny.
6. Demander des avis authentiques aux patients, sans contrepartie ni texte imposé, puis répondre sobrement sans révéler d’information de santé.

Google indique que les résultats locaux reposent surtout sur la pertinence, la distance et la notoriété ; une fiche complète, les avis et les liens externes contribuent à ces signaux.

## Corriger les citations externes

Plusieurs sources encore visibles dans les résultats associent Fanny à l’ancienne adresse, à la kinésithérapie ou à d’anciens tarifs. Corriger d’abord les fiches existantes vaut mieux que créer de nombreux profils supplémentaires.

- Vercors Expérience : corriger le titre professionnel, les horaires et l’ancien lien de réservation.
- Lemedecin.fr : demander la mise à jour ou la suppression des anciennes adresses, anciens actes et anciens tarifs.
- Planity / NATURASOI : aligner les prestations, tarifs et modalités de rendez-vous avec le site définitif.
- PagesJaunes, Doqi, Gudule et autres agrégateurs : contrôler au minimum nom, activité, adresse, téléphone et URL.
- NATURASOI : obtenir si possible une page dédiée à Fanny avec un lien vers son site.

La chaîne à rendre identique partout est : nom de la praticienne + activité actuelle + adresse + téléphone + URL.

## Liens locaux utiles

- Demander à NATURASOI, à l’office de tourisme et aux annuaires institutionnels locaux de mettre à jour leur fiche et de conserver un lien direct vers le site.
- Chercher quelques partenariats éditoriaux réels avec des acteurs du Vercors : associations sportives, événements locaux, professionnels de la périnatalité ou structures avec lesquelles Fanny travaille effectivement.
- Éviter les achats de lots de backlinks, les annuaires sans rapport et les ancres artificiellement répétées.

## Mise en ligne et indexation

1. Déployer le contenu complet du dossier `dist` sur Cloudflare Pages.
2. Vérifier les codes HTTP des pages, de `/robots.txt` et de `/sitemap.xml` : le sitemap ne doit jamais renvoyer la page d’accueil HTML.
3. Garder une seule version canonique : `https://www.fanny-cayol-peridon.fr/`. Les variantes HTTP et sans `www` doivent rediriger en 301.
4. Ajouter le domaine dans Google Search Console, soumettre `https://www.fanny-cayol-peridon.fr/sitemap.xml`, inspecter la page d’accueil et demander une indexation.
5. Tester les données structurées avec le Rich Results Test puis contrôler les éventuelles erreurs dans Search Console.
6. Vérifier que le sous-domaine Cloudflare `pages.dev` n’est pas indexé ; au besoin, lui ajouter un en-tête `X-Robots-Tag: noindex` avec son nom exact.

## Mesure sur 8 à 12 semaines

- Search Console : impressions, clics et position sur les requêtes contenant `ostéopathe`, `Autrans`, `Méaudre`, `Fanny Cayol`.
- Fiche Google : appels, clics vers le site, demandes d’itinéraire et demandes de rendez-vous.
- Site : clics sur SMS, téléphone et itinéraire, seulement après mise en place d’une mesure d’audience conforme au consentement requis.
- Consigner les changements de fiche, avis, citations et contenus afin de relier les évolutions à des actions précises.

Une première place ne peut pas être garantie : la distance entre l’utilisateur et le cabinet reste un facteur que le site ne contrôle pas. L’objectif est de maximiser la pertinence et la notoriété de Fanny dans la zone réellement desservie.
