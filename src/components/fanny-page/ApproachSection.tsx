import React from 'react';
import './ApproachSection.scss';
import type { ApproachContent } from './types';

const ApproachSection: React.FC<ApproachContent> = ({
  heading,
  headingLevel,
  sections,
}) => {
  return (
    <section className="approach" id="approche_et_valeurs" aria-labelledby="approche-et-valeurs-heading">
      <div className="approach__header">
        {React.createElement(headingLevel, { id: 'approche-et-valeurs-heading' }, heading)}
      </div>
      <div className="approach__grid">
        {sections.map(({ id, heading: sectionHeading, headingLevel: sectionHeadingLevel, text }) => {
          return (
            <article className="approach__item" key={id} id={id}>
              {React.createElement(sectionHeadingLevel, undefined, sectionHeading)}
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ApproachSection;
