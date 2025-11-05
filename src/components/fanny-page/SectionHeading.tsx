import React from 'react';
import './SectionHeading.scss';

type SectionHeadingProps = {
  title: string;
  description: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => (
  <div className="section-heading">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default SectionHeading;
