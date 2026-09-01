import type {
  AboutContent,
  AmbianceCard,
  ApproachContent,
  AudiencesContent,
  BookingContent,
  ContactCard,
  ContactFormContent,
  FooterContent,
  GiftCardContent,
  HeroContent,
  Service,
} from './types';

const images = {
  hero: '/images/profile-picture.jpg',
  about: '/images/maison-de-sante.jpeg',
  osteopathy: '/images/cabinet.jpeg',
  wellnessMassage: '/images/maison-de-sante.jpeg',
  expressMassage: '/images/montagne.jpeg',
  lymphatic: '/images/montagne-2.jpeg',
  booking: '/images/maison-de-sante.jpeg',
  ambianceNature: '/images/montagne.jpeg',
  ambianceCabin: '/images/cabinet.jpeg',
  ambianceCare: '/images/maison-de-sante.jpeg',
  contactForm: '/images/cabinet.jpeg',
  ecoute: '/images/ecoute.png',
  formation: '/images/formation.png',
  hollistic: '/images/hollistic.png',
  perso: '/images/perso.png',
  drainage: '/images/drainage.jpeg',
  osteo: '/images/osteo.jpg',
  massage: '/images/massage.jpg',
  reflexology: '/images/plantaire.jpeg',
} as const;

export const heroContent: HeroContent = {
  title: 'Fanny Cayol-Peridon, ostéopathe à Autrans',
  description:
    "Ostéopathe D.O. et diplômée d'État en kinésithérapie, je vous reçois sur rendez-vous au cabinet Naturasoi pour une consultation adaptée à votre âge, votre activité et vos besoins.",
  image: images.hero,
  imageAlt: 'Portrait de Fanny Cayol-Peridon',
  buttons: [
    {
      label: 'Appeler maintenant',
      href: 'tel:0668378616',
      variant: 'primary',
      icon: '📞',
    },
    {
      label: 'Prendre rendez-vous',
      href: 'https://www.doctolib.fr/osteopathe/autrans-meaudre-en-vercors/fanny-cayol-peridon-autrans-meaudre-en-vercors',
      variant: 'secondary',
    },
  ],
};

export const aboutContent: AboutContent = {
  image: images.about,
  imageAlt: 'Massage professionnel dans un cadre naturel',
  title: 'Ostéopathe D.O. à Autrans',
  description:
    "Formée et inspirée par plusieurs années d'exercice en Guadeloupe, j'ai appris l'importance de la douceur et du lien avec la nature. Aujourd'hui, je vous accueille dans un cadre calme et bienveillant où chaque soin est une invitation au lâcher-prise.",
  highlights: [
    {
      title: 'Expérience holistique',
      description:
        "Mon diplôme d'État en kinésithérapie enrichit aujourd'hui ma pratique d'ostéopathe.",
    },
    {
      title: 'Ancrée dans la nature',
      description:
        'Une pratique personnalisée, au cœur du Vercors, à Autrans-Méaudre-en-Vercors.',
    },
  ],
};

export const services: Service[] = [
  {
    title: 'Ostéopathie',
    duration: '45 min / 60 €',
    description:
      "Une consultation personnalisée fondée sur l'écoute, l'examen clinique et des techniques manuelles adaptées.",
    image: images.osteo,
  },
  {
    title: 'Drainage lymphatique',
    duration: '1 h / 70 €',
    description: 'Un soin manuel destiné à favoriser une sensation de légèreté et de détente.',
    image: images.drainage,
  },
  {
    title: 'Réflexologie plantaire',
    duration: '45 min / 60 €',
    description:
      "Réduit les tensions du corps par l'intermédiaire de pressions et massage des pieds.",
    image: images.reflexology,
  },
];

export const bookingContent: BookingContent = {
  image: images.booking,
  imageAlt: "Client profitant d'un massage relaxant",
  title: "Prendre rendez-vous en ostéopathie à Autrans",
  description:
    'Réservez votre consultation en ligne sur Doctolib ou contactez-moi directement par téléphone.',
  actions: [
    {
      label: '06 68 37 86 16',
      href: 'tel:0668378616',
      variant: 'primary',
    },
    {
      label: 'Doctolib',
      href: 'https://www.doctolib.fr/osteopathe/autrans-meaudre-en-vercors/fanny-cayol-peridon-autrans-meaudre-en-vercors',
      variant: 'secondary',
    },
  ],
};

export const giftCardContent: GiftCardContent = {
  title: 'Offrez un moment de détente',
  description:
    "Faites plaisir à vos proches avec une carte cadeau personnalisée. Choisissez le soin, indiquez le destinataire et le message qui l'accompagne. Une attention qui fait du bien et se réserve en ligne.",
  ctaLabel: 'Acheter un bon cadeau',
  ctaHref: 'mailto:fcayolperidon@gmail.com?subject=Je souhaite offrir un bon cadeau pour un massage&body=Bonjour Fanny,%0D%0A%0D%0AJe souhaiterais offrir un bon cadeau pour un massage.%0D%0A%0D%0AMes coordonnées :%0D%0ANom : [Votre nom]%0D%0ATéléphone : [Votre numéro de téléphone]%0D%0A%0D%0APouvez-vous me donner plus d\'informations sur :%0D%0A- Les différents types de soins disponibles%0D%0A- Les tarifs%0D%0A- La validité du bon cadeau%0D%0A- Les modalités de réservation%0D%0A%0D%0AMerci par avance pour votre retour.%0D%0A%0D%0ACordialement',
  ctaIcon: '🎁',
};

export const ambianceCards: AmbianceCard[] = [
  {
    title: 'Inspiration tropicale',
    description: 'Mon parcours en Guadeloupe nourrit une approche douce et naturelle.',
    image: images.ambianceNature,
  },
  {
    title: 'Cadre apaisant',
    description: 'À Autrans-Méaudre, profitez d’un lieu calme au cœur du Vercors.',
    image: images.ambianceCabin,
  },
  {
    title: 'Approche bienveillante',
    description: 'Chaque geste est pensé pour votre confort et votre équilibre.',
    image: images.ambianceCare,
  },
];

export const contactCards: ContactCard[] = [
  {
    icon: '📍',
    title: 'Adresse',
    lines: ['Chez Naturasoi', '394 rue de Puilboreau', '38880 Autrans-Méaudre-en-Vercors'],
  },
  {
    icon: '📞',
    title: 'Téléphone',
    lines: ['06 68 37 86 16'],
    link: 'tel:0668378616',
  },
  {
    icon: '🕓',
    title: 'Horaires',
    lines: ['Sur rendez-vous uniquement', 'Du lundi au samedi'],
  },
  {
    icon: '💻',
    title: 'Réservation en ligne',
    lines: ['Doctolib'],
    link: 'https://www.doctolib.fr/osteopathe/autrans-meaudre-en-vercors/fanny-cayol-peridon-autrans-meaudre-en-vercors',
  },
];

export const contactFormContent: ContactFormContent = {
  image: images.contactForm,
  imageAlt: 'Écriture sur un carnet dans une ambiance zen',
  title: 'Restons en contact',
  description:
    'Une question ou un besoin particulier ? Écrivez-moi et je vous répondrai rapidement pour construire ensemble votre moment de bien-être.',
  ctaLabel: 'Écrire un message',
  ctaHref: 'mailto:fcayolperidon@gmail.com',
};

export const approachContent: ApproachContent = {
  heading: 'Approche & Valeurs',
  headingLevel: 'h2',
  sections: [
    {
      id: 'approche_personnalisee',
      heading: 'Approche Personnalisée',
      headingLevel: 'h3',
      text: "Chaque patient est unique. J'adapte la consultation à votre histoire, à vos besoins et à votre condition physique.",
      icon: images.perso,
    },
    {
      id: 'ecoute_attentive',
      heading: 'Écoute Attentive',
      headingLevel: 'h3',
      text: "L'écoute guide chaque consultation afin de comprendre votre motif, vos antécédents et vos attentes.",
      icon: images.ecoute,
    },
    {
      id: 'formation_continue',
      heading: 'Formation et expérience',
      headingLevel: 'h3',
      text: "Ostéopathe D.O. diplômée en 2013 et masseuse-kinésithérapeute diplômée d'État en 2004, je poursuis régulièrement des formations qui enrichissent ma pratique d'ostéopathe.",
      icon: images.formation,
    },
    {
      id: 'bien_etre_holistique',
      heading: 'Approche globale',
      headingLevel: 'h3',
      text: "Mon approche prend en compte l'ensemble du corps et votre contexte de vie, avec des techniques manuelles choisies selon votre situation.",
      icon: images.hollistic,
    },
  ],
};

export const audiencesContent: AudiencesContent = {
  heading: 'Pour qui ?',
  headingLevel: 'h2',
  categories: [
    {
      id: 'nourrissons_enfants',
      heading: 'Nourrissons & enfants',
      headingLevel: 'h3',
      text: "Je reçois les nourrissons et les enfants avec des gestes doux, adaptés à leur âge et à leur développement. La consultation d'ostéopathie ne remplace pas le suivi du pédiatre ou du médecin.",
    },
    {
      id: 'adultes',
      heading: 'Adultes',
      headingLevel: 'h3',
      text: "La consultation est adaptée à votre quotidien, qu'il s'agisse de tensions, d'inconforts musculo-squelettiques ou d'un besoin d'accompagnement manuel.",
    },
    {
      id: 'sportifs',
      heading: 'Sportifs',
      headingLevel: 'h3',
      text: "Ski nordique, trail, randonnée ou vélo : l'ostéopathie peut accompagner votre mobilité, votre préparation et votre récupération, en complément du suivi médical lorsqu'il est nécessaire.",
    },
    {
      id: 'personnes_agees',
      heading: 'Personnes âgées',
      headingLevel: 'h3',
      text: "Les techniques sont adaptées avec attention au confort, à la mobilité et aux antécédents de chacun, en coordination avec le parcours de soins habituel.",
    },
  ],
};

export const footerContent: FooterContent = {
  title: 'Fanny Cayol-Peridon',
  subtitle: "Ostéopathe D.O. · Diplômée d'État en kinésithérapie",
  address: 'Chez Naturasoi · 394 rue de Puilboreau, 38880 Autrans-Méaudre-en-Vercors',
  phoneLabel: '06 68 37 86 16',
  phoneHref: 'tel:0668378616',
  appointmentLabel: 'Doctolib',
  appointmentHref: 'https://www.doctolib.fr/osteopathe/autrans-meaudre-en-vercors/fanny-cayol-peridon-autrans-meaudre-en-vercors',
  links: [
    { label: 'Mentions légales', href: '/mentions-legales/' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite/' },
  ],
};
