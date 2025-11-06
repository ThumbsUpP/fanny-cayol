import React from 'react';
import './SectionHeading.scss';
import type { HeadingLevel } from './types';

type SectionHeadingProps = {
  title: string;
  description?: string;
  titleTag?: HeadingLevel;
  id?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  titleTag = 'h2',
  id,
}) => (
  <div className="section-heading" data-animate="fade-up">
    {React.createElement(titleTag, { id, className: 'section-heading__title' }, title)}
    {description && <p className="section-heading__description">{description}</p>}
  </div>
);

export default SectionHeading;
