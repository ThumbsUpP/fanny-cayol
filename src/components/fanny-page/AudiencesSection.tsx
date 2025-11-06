import React from 'react';
import SectionHeading from './SectionHeading';
import './AudiencesSection.scss';
import type { AudiencesContent } from './types';

const AudiencesSection: React.FC<AudiencesContent> = ({
  heading,
  headingLevel,
  categories,
}) => {
  return (
    <section className="audiences" id="publics_et_soins" aria-labelledby="publics-et-soins-heading">
      <SectionHeading title={heading} titleTag={headingLevel} id="publics-et-soins-heading" />
      <div className="audiences__grid">
        {categories.map(({ id, heading: categoryHeading, headingLevel: categoryHeadingLevel, text }, index) => {
          return (
            <article
              className="audiences__item"
              key={id}
              id={id}
              data-animate="fade-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              {React.createElement(categoryHeadingLevel, { className: 'audiences__item-heading' }, categoryHeading)}
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AudiencesSection;
