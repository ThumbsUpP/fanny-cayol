import React from 'react';
import SectionHeading from './SectionHeading';
import './ServicesSection.scss';
import type { Service } from './types';

type ServicesSectionProps = {
  services: Service[];
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => (
  <section className="services">
    <SectionHeading
      title="Mes soins & prestations"
      description="Chaque soin est pensé pour vous offrir un moment unique de détente et de récupération. Sélectionnez l'accompagnement qui répond à vos besoins du moment."
    />
    <div className="services__grid">
      {services.map(({ title, description, duration, image }, index) => (
        <article
          className="services__card"
          key={title}
          data-animate="fade-up"
          style={{ animationDelay: `${0.08 * (index + 1)}s` }}
        >
          <div className="services__media">
            <img src={image} alt={title} loading="lazy" />
          </div>
          <div className="services__body">
            <h3>{title}</h3>
            <span className="services__duration">{duration}</span>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesSection;
