export const site = {
  name: 'Fanny Cayol Peridon',
  alternateNames: [],
  role: 'Ostéopathe',
  description:
    "Cabinet d'ostéopathie de Fanny Cayol Peridon à Autrans, au sein de NATURASOI.",
  professionalLine: "Ostéopathe · Diplômée d'État de masseur-kinésithérapeute",
  url: 'https://www.fanny-cayol-peridon.fr',
  phoneDisplay: '06 68 37 86 16',
  phoneHref: 'tel:+33668378616',
  smsHref: 'sms:+33668378616',
  addressLine: '394 rue Puilboreau',
  locality: '38880 Autrans',
  place: 'NATURASOI',
  latitude: 45.17392,
  longitude: 5.544935,
  mapUrl:
    'https://www.google.com/maps/dir/?api=1&destination=394+rue+Puilboreau+38880+Autrans',
  externalProfiles: {
    vercorsExperience:
      'https://www.vercors-experience.com/fanny-cayol-peridon-kinesitherapeute-osteopathe.html',
  },
} as const;

export const areaServed = [
  { '@type': 'City', name: 'Autrans-Méaudre-en-Vercors' },
  { '@type': 'AdministrativeArea', name: 'Vercors' },
] as const;

export const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Ostéopathie', href: '/osteopathie/' },
  { label: 'Femmes', href: '/osteopathie-femme/' },
  { label: 'Pédiatrie', href: '/osteopathie-pediatrique/' },
  { label: 'Drainage', href: '/drainage-lymphatique/' },
  { label: 'Massages', href: '/massages/' },
  { label: 'Fanny', href: '/fanny-cayol-peridon/' },
] as const;

export const serviceLinks = [
  {
    eyebrow: 'Pour tous les âges',
    title: 'Ostéopathie',
    description:
      "Une consultation manuelle personnalisée, guidée par l'écoute, l'examen et votre motif de consultation.",
    href: '/osteopathie/',
    number: '01',
  },
  {
    eyebrow: 'À chaque étape de vie',
    title: 'Ostéopathie de la femme',
    description:
      'Un accompagnement adapté pendant la grossesse, après la naissance et au fil des évolutions du corps.',
    href: '/osteopathie-femme/',
    number: '02',
  },
  {
    eyebrow: 'Nourrissons & enfants',
    title: 'Ostéopathie pédiatrique',
    description:
      "Des gestes doux, un temps d'échange avec les parents et une consultation adaptée à chaque âge.",
    href: '/osteopathie-pediatrique/',
    number: '03',
  },
  {
    eyebrow: 'Doux ou dynamique',
    title: 'Drainage lymphatique',
    description:
      'Deux approches personnalisées pour accompagner la circulation, la légèreté et le bien-être.',
    href: '/drainage-lymphatique/',
    number: '04',
  },
  {
    eyebrow: 'Détente & récupération',
    title: 'Massages',
    description:
      'Relaxant, sportif, ayurvédique ou ciblé : un massage construit avec vous, selon vos attentes.',
    href: '/massages/',
    number: '05',
  },
] as const;

export const createServiceStructuredData = ({
  name,
  description,
  path,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  offers?: { name: string; price: number }[];
}) => ({
  '@type': 'Service',
  '@id': `${new URL(path, site.url).toString()}#service`,
  name,
  description,
  url: new URL(path, site.url).toString(),
  provider: { '@id': `${site.url}/#cabinet` },
  areaServed,
  ...(offers
    ? {
        offers: offers.map((offer) => ({
          '@type': 'Offer',
          name: offer.name,
          price: offer.price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: new URL(path, site.url).toString(),
        })),
      }
    : {}),
});
