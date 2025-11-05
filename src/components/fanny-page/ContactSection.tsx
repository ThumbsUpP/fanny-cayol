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
      title="Me trouver à Autrans-Méaudre"
      description="Le cabinet est situé au cœur du Vercors, facilement accessible et entouré de nature."
    />
    <div className="contact__grid">
      {cards.map(({ icon, title, lines, link }) => (
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
);

export default ContactSection;
