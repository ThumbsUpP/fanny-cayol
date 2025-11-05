import type {
  AboutContent,
  AmbianceCard,
  BookingContent,
  ContactCard,
  ContactFormContent,
  FooterContent,
  GiftCardContent,
  HeroContent,
  Service,
} from './types';

export const heroContent: HeroContent = {
  eyebrow: 'Bienvenue chez Fanny Cayol-Peridon',
  title: 'Entre montagne et bien-être, prenez un moment pour vous',
  description:
    'Installée à Autrans-Méaudre, je vous accompagne avec bienveillance pour soulager vos tensions, rééquilibrer votre corps et vous offrir une parenthèse de douceur.',
  buttons: [
    {
      label: 'Appeler maintenant',
      href: 'tel:0668378616',
      variant: 'primary',
      icon: '📞',
    },
    {
      label: 'Prendre rendez-vous',
      href: 'https://share.google/8mC8xm2MKbQ72ALVs',
      variant: 'secondary',
    },
  ],
};

export const aboutContent: AboutContent = {
  image: 'https://images.unsplash.com/photo-1599059812633-4d1353162593?auto=format&w=1400&q=60',
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
    image:
      'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&w=1200&q=60',
  },
  {
    title: 'Massage bien-être',
    duration: '1 h / 60 €',
    description: 'Détente profonde pour un lâcher-prise total et une relaxation complète.',
    image:
      'https://images.unsplash.com/photo-1621009372659-ec37f97073b2?auto=format&w=1200&q=60',
  },
  {
    title: 'Massage express',
    duration: '30 min / 30 €',
    description: 'La pause idéale pour relâcher les tensions du quotidien.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&w=1200&q=60',
  },
  {
    title: 'Drainage lymphatique',
    duration: '1 h / 70 €',
    description: 'Stimule la circulation et apporte une sensation de légèreté.',
    image:
      'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&w=1200&q=60',
  },
];

export const bookingContent: BookingContent = {
  image: 'https://images.unsplash.com/photo-1596176530528-3ed3c8ac9c26?auto=format&w=1400&q=60',
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
      href: 'https://share.google/8mC8xm2MKbQ72ALVs',
      variant: 'secondary',
    },
  ],
};

export const giftCardContent: GiftCardContent = {
  title: 'Offrez un moment de détente',
  description:
    "Faites plaisir à vos proches avec une carte cadeau personnalisée. Choisissez le soin, indiquez le destinataire et le message qui l'accompagne. Une attention qui fait du bien et se réserve en ligne.",
  ctaLabel: 'Acheter un bon cadeau',
  ctaHref: 'mailto:fanny@example.com',
  ctaIcon: '🎁',
};

export const ambianceCards: AmbianceCard[] = [
  {
    title: 'Inspiration tropicale',
    description: 'Mon parcours en Guadeloupe nourrit une approche douce et naturelle.',
    image:
      'https://images.unsplash.com/photo-1680983468499-7e6690652f83?auto=format&w=1200&q=60',
  },
  {
    title: 'Cadre apaisant',
    description: 'À Autrans-Méaudre, profitez d’un lieu calme au cœur du Vercors.',
    image:
      'https://images.unsplash.com/photo-1687721761035-b61774890cc9?auto=format&w=1200&q=60',
  },
  {
    title: 'Approche bienveillante',
    description: 'Chaque geste est pensé pour votre confort et votre équilibre.',
    image:
      'https://images.unsplash.com/photo-1729324738509-7935838d5ef9?auto=format&w=1200&q=60',
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
    link: 'https://share.google/8mC8xm2MKbQ72ALVs',
  },
];

export const contactFormContent: ContactFormContent = {
  image: 'https://images.unsplash.com/photo-1622947344865-a7fcf40e88e7?auto=format&w=1400&q=60',
  imageAlt: 'Écriture sur un carnet dans une ambiance zen',
  title: 'Restons en contact',
  description:
    'Une question ou un besoin particulier ? Écrivez-moi et je vous répondrai rapidement pour construire ensemble votre moment de bien-être.',
  ctaLabel: 'Écrire un message',
  ctaHref: 'mailto:fanny@example.com',
};

export const footerContent: FooterContent = {
  title: 'Fanny Cayol-Peridon',
  subtitle: 'Kinésithérapeute · Ostéopathe · Masseuse',
  address: '12 impasse de la Molière, 38880 Autrans-Méaudre',
  phoneLabel: '06 68 37 86 16',
  phoneHref: 'tel:0668378616',
  appointmentLabel: 'Doctolib',
  appointmentHref: 'https://share.google/8mC8xm2MKbQ72ALVs',
  links: [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
  ],
};
