import React from 'react';
import './FannyPage.scss';

const heroButtons = [
  {
    label: 'Appeler maintenant',
    href: 'tel:0668378616',
    className: 'hero__cta hero__cta--primary',
    icon: '📞',
  },
  {
    label: 'Prendre rendez-vous',
    href: 'https://share.google/8mC8xm2MKbQ72ALVs',
    className: 'hero__cta hero__cta--secondary',
  },
];

const aboutHighlights = [
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
];

const services = [
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

const ambiance = [
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

const contactDetails = [
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

const footerLinks = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Politique de confidentialité', href: '#' },
];

const FannyPage: React.FC = () => {
  return (
    <div className="fanny-page">
      <header className="hero">
        <div className="hero__accent" />
        <div className="hero__content">
          <span className="hero__eyebrow">Bienvenue chez Fanny Cayol-Peridon</span>
          <h1>Entre montagne et bien-être, prenez un moment pour vous</h1>
          <p>
            Installée à Autrans-Méaudre, je vous accompagne avec bienveillance pour soulager vos
            tensions, rééquilibrer votre corps et vous offrir une parenthèse de douceur.
          </p>
          <div className="hero__actions">
            {heroButtons.map(({ href, className, label, icon }) => (
              <a key={label} href={href} className={className}>
                {icon ? <span className="hero__cta-icon">{icon}</span> : null}
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__image" aria-hidden="true" />
      </header>

      <section className="about">
        <div className="about__image">
          <img
            src="https://images.unsplash.com/photo-1599059812633-4d1353162593?auto=format&w=1400&q=60"
            alt="Massage professionnel dans un cadre naturel"
            loading="lazy"
          />
        </div>
        <div className="about__content">
          <h2>Kinésithérapeute, Ostéopathe &amp; Masseuse</h2>
          <p>
            Formée et inspirée par plusieurs années d&apos;exercice en Guadeloupe, j&apos;ai appris
            l&apos;importance de la douceur et du lien avec la nature. Aujourd&apos;hui, je vous
            accueille dans un cadre calme et bienveillant où chaque soin est une invitation au
            lâcher-prise.
          </p>
          <ul className="about__highlights">
            {aboutHighlights.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <h2>Mes soins &amp; prestations</h2>
          <p>
            Chaque soin est pensé pour vous offrir un moment unique de détente et de récupération.
            Sélectionnez l&apos;accompagnement qui répond à vos besoins du moment.
          </p>
        </div>
        <div className="services__grid">
          {services.map(({ title, description, duration, image }) => (
            <article className="services__card" key={title}>
              <div className="services__media">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="services__body">
                <h3>{title}</h3>
                <span className="services__duration">{duration}</span>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="booking">
        <div className="booking__media">
          <img
            src="https://images.unsplash.com/photo-1596176530528-3ed3c8ac9c26?auto=format&w=1400&q=60"
            alt="Client profitant d'un massage relaxant"
            loading="lazy"
          />
        </div>
        <div className="booking__content">
          <h2>Réservez votre moment de bien-être</h2>
          <p>
            Deux façons simples et rapides de prendre rendez-vous selon votre préférence. Chaque
            séance est programmée sur-mesure, dans une atmosphère apaisante.
          </p>
          <div className="booking__actions">
            <a href="tel:0668378616" className="booking__cta booking__cta--primary">
              06 68 37 86 16
            </a>
            <a
              href="https://share.google/8mC8xm2MKbQ72ALVs"
              className="booking__cta booking__cta--secondary"
            >
              Doctolib
            </a>
          </div>
        </div>
      </section>

      <section className="gift-card">
        <div className="gift-card__content">
          <h2>Offrez un moment de détente</h2>
          <p>
            Faites plaisir à vos proches avec une carte cadeau personnalisée. Choisissez le soin,
            indiquez le destinataire et le message qui l&apos;accompagne. Une attention qui fait du
            bien et se réserve en ligne.
          </p>
          <a href="mailto:fanny@example.com" className="gift-card__cta">
            <span aria-hidden="true">🎁</span> Acheter un bon cadeau
          </a>
        </div>
      </section>

      <section className="ambiance">
        <div className="section-heading">
          <h2>Un espace inspiré par la nature</h2>
          <p>
            L&apos;ambiance du cabinet mêle chaleur tropicale et douceur montagnarde pour une
            immersion sensorielle complète.
          </p>
        </div>
        <div className="ambiance__grid">
          {ambiance.map(({ title, description, image }) => (
            <article className="ambiance__card" key={title}>
              <img src={image} alt={title} loading="lazy" />
              <div className="ambiance__body">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="section-heading">
          <h2>Me trouver à Autrans-Méaudre</h2>
          <p>Le cabinet est situé au cœur du Vercors, facilement accessible et entouré de nature.</p>
        </div>
        <div className="contact__grid">
          {contactDetails.map(({ icon, title, lines, link }) => (
            <article className="contact__card" key={title}>
              <div className="contact__icon" aria-hidden="true">
                {icon}
              </div>
              <h3>{title}</h3>
              <ul>
                {lines.map((line) => (
                  <li key={line}>
                    {link ? (
                      <a href={link} target="_blank" rel="noreferrer">
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-form">
        <div className="contact-form__media">
          <img
            src="https://images.unsplash.com/photo-1622947344865-a7fcf40e88e7?auto=format&w=1400&q=60"
            alt="Écriture sur un carnet dans une ambiance zen"
            loading="lazy"
          />
        </div>
        <div className="contact-form__content">
          <h2>Restons en contact</h2>
          <p>
            Une question ou un besoin particulier ? Écrivez-moi et je vous répondrai rapidement
            pour construire ensemble votre moment de bien-être.
          </p>
          <a href="mailto:fanny@example.com" className="contact-form__cta">
            Écrire un message
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h3>Fanny Cayol-Peridon</h3>
          <p>Kinésithérapeute · Ostéopathe · Masseuse</p>
          <p>12 impasse de la Molière, 38880 Autrans-Méaudre</p>
          <a href="tel:0668378616">06 68 37 86 16</a> ·{' '}
          <a href="https://share.google/8mC8xm2MKbQ72ALVs" target="_blank" rel="noreferrer">
            Doctolib
          </a>
        </div>
        <div className="site-footer__links">
          {footerLinks.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default FannyPage;
