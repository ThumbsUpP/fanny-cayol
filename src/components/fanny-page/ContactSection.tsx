import React from 'react';
import SectionHeading from './SectionHeading';
import './ContactSection.scss';
import type { ContactCard } from './types';

type ContactSectionProps = {
  cards: ContactCard[];
};

const ContactSection: React.FC<ContactSectionProps> = ({ cards }) => (
  <section className="contact">
    <SectionHeading
      title="Cabinet d'ostéopathie à Autrans-Méaudre-en-Vercors"
      description="Je vous reçois chez Naturasoi, au 394 rue de Puilboreau à Autrans, uniquement sur rendez-vous."
    />
    <div className="contact__grid">
      {cards.map(({ icon, title, lines, link }, index) => (
        <article
          className="contact__card"
          key={title}
          data-animate="fade-up"
          style={{ animationDelay: `${0.08 * (index + 1)}s` }}
        >
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
);

export default ContactSection;
