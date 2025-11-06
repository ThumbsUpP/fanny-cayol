import React from 'react';
import SectionHeading from './SectionHeading';
import './AmbianceSection.scss';
import type { AmbianceCard } from './types';

type AmbianceSectionProps = {
  cards: AmbianceCard[];
};

const AmbianceSection: React.FC<AmbianceSectionProps> = ({ cards }) => (
  <section className="ambiance">
    <SectionHeading
      title="Un espace inspiré par la nature"
      description="L'ambiance du cabinet mêle chaleur tropicale et douceur montagnarde pour une immersion sensorielle complète."
    />
    <div className="ambiance__grid">
      {cards.map(({ title, description, image }, index) => (
        <article
          className="ambiance__card"
          key={title}
          data-animate="fade-up"
          style={{ animationDelay: `${0.08 * (index + 1)}s` }}
        >
          <img src={image} alt={title} loading="lazy" />
          <div className="ambiance__body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default AmbianceSection;
