import React from 'react';
import './AboutSection.scss';
import type { AboutContent } from './types';

const AboutSection: React.FC<AboutContent> = ({
  image,
  imageAlt,
  title,
  description,
  highlights,
}) => (
  <section className="about">
    <div className="about__image">
      <img src={image} alt={imageAlt} loading="lazy" />
    </div>
    <div className="about__content">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="about__highlights">
        {highlights.map((highlight) => (
          <li key={highlight.title}>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutSection;
