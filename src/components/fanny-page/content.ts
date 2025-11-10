import type {
  AboutContent,
  AmbianceCard,
  ApproachContent,
  AudiencesContent,
  BookingContent,
  ContactCard,
  ContactFormContent,
  ExperienceContent,
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
  reflexology: '/images/montagne-2.jpeg',
} as const;

export const heroContent: HeroContent = {
  title: 'Ostéopathe & Masseuse à Autrans-Méaudre',
  description:
    'Fanny Cayol-Peridon vous accompagne avec une approche douce, personnalisée et ancrée dans la nature pour soulager vos tensions, rééquilibrer votre corps et retrouver votre bien-être.',
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

export const experienceContent: ExperienceContent = {
  heading: 'Expérience professionnelle',
  headingLevel: 'h1',
  description:
    "Initialement Kinésithérapeute diplômée d'État, j'ai enrichi ma pratique avec des formations complémentaires en massage et je suis devenue Ostéopathe afin de proposer un soin thérapeutique complet et de haute qualité.",
};

export const aboutContent: AboutContent = {
  image: images.about,
  imageAlt: 'Massage professionnel dans un cadre naturel',
  title: 'Kinésithérapeute, Ostéopathe & Masseuse',
  description:
    "Formée et inspirée par plusieurs années d'exercice en Guadeloupe, j'ai appris l'importance de la douceur et du lien avec la nature. Aujourd'hui, je vous accueille dans un cadre calme et bienveillant où chaque soin est une invitation au lâcher-prise.",
  highlights: [
    {
      title: 'Expérience holistique',
      description:
        "Une double casquette de kinésithérapeute et d'ostéopathe pour des soins adaptés à chaque besoin.",
    },
    {
      title: 'Ancrée dans la nature',
      description:
        'Une pratique inspirée par la Guadeloupe et pensée pour votre bien-être à Autrans-Méaudre.',
    },
  ],
};

export const services: Service[] = [
  {
    title: 'Ostéopathie',
    duration: '45 min / 60 €',
    description: 'Soulage les tensions profondes et rééquilibre votre corps en douceur.',
    image: images.osteo,
  },
  {
    title: 'Massage bien-être',
    duration: '1 h / 70 €',
    description: 'Détente profonde pour un lâcher-prise total et une relaxation complète.',
    image: images.massage,
  },
  {
    title: 'Massage express',
    duration: '30 min / 35 €',
    description: 'La pause idéale pour relâcher les tensions du quotidien.',
    image: images.expressMassage,
  },
  {
    title: 'Drainage lymphatique',
    duration: '1 h / 70 €',
    description: 'Stimule la circulation et apporte une sensation de légèreté.',
    image: images.drainage,
  },
  {
    title: 'Réflexologie plantaire',
    duration: '45 min / 60 €',
    description:
      'La réflexologie plantaire utilise le massage et la pression sur des zones spécifiques du pied liées aux organes du corps. Elle apaise les tensions nerveuses, soutient le système immunitaire et rétablit l’équilibre énergétique (Qi). Parfaite pour la détente, la récupération sportive et l’apaisement des douleurs chroniques.',
    image: images.reflexology,
  },
];

export const bookingContent: BookingContent = {
  image: images.booking,
  imageAlt: "Client profitant d'un massage relaxant",
  title: 'Réservez votre moment de bien-être',
  description:
    'Deux façons simples et rapides de prendre rendez-vous selon votre préférence. Chaque séance est programmée sur-mesure, dans une atmosphère apaisante.',
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
    lines: ['12 impasse de la Molière', '38880 Autrans-Méaudre'],
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
  headingLevel: 'h1',
  sections: [
    {
      id: 'approche_personnalisee',
      heading: 'Approche Personnalisée',
      headingLevel: 'h2',
      text: 'Chaque patient est unique. Je m\'engage à fournir des soins sur mesure, adaptés à vos besoins personnels et à votre condition physique.',
      icon: images.perso,
    },
    {
      id: 'ecoute_attentive',
      heading: 'Écoute Attentive',
      headingLevel: 'h2',
      text: 'L\'écoute est la première étape de tout traitement efficace. Vous serez toujours entendu, et vos préoccupations, pleinement comprises.',
      icon: images.ecoute,
    },
    {
      id: 'formation_continue',
      heading: 'Formation Continue',
      headingLevel: 'h2',
      text: 'Je suis constamment à la recherche de nouvelles techniques et de formations pour rester à la pointe de la kinésithérapie et de l\'ostéopathie, vous garantissant ainsi les meilleurs soins possibles.',
      icon: images.formation,
    },
    {
      id: 'bien_etre_holistique',
      heading: 'Bien-être Holistique',
      headingLevel: 'h2',
      text: 'Ma vision de la santé est holistique, cherchant à optimiser votre bien-être général, pas seulement à traiter les symptômes. Les techniques douces sont au coeur de cette approche tissulaire et psycho-émotionnelle.',
      icon: images.hollistic,
    },
  ],
};

export const audiencesContent: AudiencesContent = {
  heading: 'Pour qui ?',
  headingLevel: 'h1',
  categories: [
    {
      id: 'nourrissons_enfants',
      heading: 'Nourrissons & enfants',
      headingLevel: 'h2',
      text: 'Dans mon cabinet, les plus jeunes bénéficient de soins adaptés qui respectent leur développement et leur croissance. La kinésithérapie et l’ostéopathie pour les nourrissons et les enfants visent à corriger les déséquilibres précoces, soutenir le développement moteur et traiter les troubles spécifiques de la petite enfance (coliques, troubles du sommeil, problèmes posturaux…).',
    },
    {
      id: 'adultes',
      heading: 'Adultes',
      headingLevel: 'h2',
      text: 'Que ce soit pour des douleurs de dos, des troubles musculo-squelettiques ou simplement pour un bien-être général, mon approche en kinésithérapie et ostéopathie aide les adultes de tous âges. Les traitements sont personnalisés pour répondre aux besoins individuels, favorisant une récupération optimale et un maintien de la santé corporelle.',
    },
    {
      id: 'sportifs',
      heading: 'Sportifs',
      headingLevel: 'h2',
      text: 'Je propose des services de kinésithérapie et d’ostéopathie qui ciblent la prévention des blessures, le traitement des affections sportives et l’amélioration de la performance. Les soins sont conçus pour accélérer la récupération et optimiser la fonction physique, essentielle à toute activité sportive.',
    },
    {
      id: 'personnes_agees',
      heading: 'Personnes âgées',
      headingLevel: 'h2',
      text: 'Mon cabinet offre des soins spécialement conçus pour les personnes âgées, visant à améliorer leur mobilité et à réduire leurs douleurs. Les techniques de kinésithérapie et d’ostéopathie adaptées aux besoins des seniors aident à maintenir l’autonomie et à améliorer la qualité de vie générale.',
    },
  ],
};

export const footerContent: FooterContent = {
  title: 'Fanny Cayol-Peridon',
  subtitle: 'Kinésithérapeute · Ostéopathe · Masseuse',
  address: '12 impasse de la Molière, 38880 Autrans-Méaudre',
  phoneLabel: '06 68 37 86 16',
  phoneHref: 'tel:0668378616',
  appointmentLabel: 'Doctolib',
  appointmentHref: 'https://www.doctolib.fr/osteopathe/autrans-meaudre-en-vercors/fanny-cayol-peridon-autrans-meaudre-en-vercors',
  links: [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
  ],
};
