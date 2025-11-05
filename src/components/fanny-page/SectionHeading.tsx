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
  <div className="section-heading">
    {React.createElement(titleTag, { id }, title)}
    {description && <p>{description}</p>}
  </div>
);

export default SectionHeading;
