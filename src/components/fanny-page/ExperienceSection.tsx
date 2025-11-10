import React from 'react';
import SectionHeading from './SectionHeading';
import './ExperienceSection.scss';
import type { ExperienceContent } from './types';

const ExperienceSection: React.FC<ExperienceContent> = ({
  heading,
  headingLevel,
  description,
  details = [],
}) => (
  <section
    className="experience"
    id="experience_professionnelle"
    aria-labelledby="experience-heading"
  >
    <SectionHeading title={heading} titleTag={headingLevel} id="experience-heading" />
    <div className="experience__card" data-animate="fade-up">
      <p className="experience__description">{description}</p>
      {details.length > 0 && (
        <ul className="experience__list">
          {details.map((detail) => (
            <li key={detail} className="experience__item">
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  </section>
);

export default ExperienceSection;
