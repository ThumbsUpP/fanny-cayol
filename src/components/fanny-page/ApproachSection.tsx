import React from 'react';
import SectionHeading from './SectionHeading';
import type { ApproachContent } from './types';

import './ApproachSection.scss';

const ApproachSection: React.FC<ApproachContent> = ({
  heading,
  headingLevel,
  sections,
}) => {
  return (
    <section className="approach" id="approche_et_valeurs" aria-labelledby="approche-et-valeurs-heading">
      <SectionHeading title={heading} titleTag={headingLevel} id="approche-et-valeurs-heading" />
      <div className="approach__grid">
        {sections.map(
          ({ id, heading: sectionHeading, headingLevel: sectionHeadingLevel, text, icon }, index) => {
            return (
              <article
                className="approach__item"
                key={id}
                id={id}
                data-animate="fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {icon && (
                  <div className="approach__item-icon">
                    <img src={icon} alt={sectionHeading} />
                  </div>
                )}
                {React.createElement(sectionHeadingLevel, { className: 'approach__item-heading' }, sectionHeading)}
                <p>{text}</p>
              </article>
            );
          },
        )}
      </div>
    </section>
  );
};

export default ApproachSection;
