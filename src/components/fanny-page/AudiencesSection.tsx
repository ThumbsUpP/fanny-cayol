import React from 'react';
import './AudiencesSection.scss';
import type { AudiencesContent } from './types';

const AudiencesSection: React.FC<AudiencesContent> = ({
  heading,
  headingLevel,
  categories,
}) => {
  return (
    <section className="audiences" id="publics_et_soins" aria-labelledby="publics-et-soins-heading">
      <div className="audiences__header">
        {React.createElement(headingLevel, { id: 'publics-et-soins-heading' }, heading)}
      </div>
      <div className="audiences__grid">
        {categories.map(({ id, heading: categoryHeading, headingLevel: categoryHeadingLevel, text }) => {
          return (
            <article className="audiences__item" key={id} id={id}>
              {React.createElement(categoryHeadingLevel, undefined, categoryHeading)}
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AudiencesSection;
