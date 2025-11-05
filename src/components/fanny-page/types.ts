export type HeroButton = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  icon?: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  buttons: HeroButton[];
};

export type Highlight = {
  title: string;
  description: string;
};

export type AboutContent = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  highlights: Highlight[];
};

export type Service = {
  title: string;
  duration: string;
  description: string;
  image: string;
};

export type BookingAction = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
};

export type BookingContent = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  actions: BookingAction[];
};

export type GiftCardContent = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaIcon: string;
};

export type AmbianceCard = {
  title: string;
  description: string;
  image: string;
};

export type ContactCard = {
  icon: string;
  title: string;
  lines: string[];
  link?: string;
};

export type ContactFormContent = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  title: string;
  subtitle: string;
  address: string;
  phoneLabel: string;
  phoneHref: string;
  appointmentLabel: string;
  appointmentHref: string;
  links: FooterLink[];
};
