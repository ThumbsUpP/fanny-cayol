import React from 'react';
import './HeroSection.scss';
import type { HeroContent } from './types';

const HeroSection: React.FC<HeroContent> = ({ eyebrow, title, description, buttons }) => (
  <header className="hero">
    <div className="hero__accent" />
    <div className="hero__content">
      <span className="hero__eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="hero__actions">
        {buttons.map(({ href, variant, label, icon }) => (
          <a key={label} href={href} className={`hero__cta hero__cta--${variant}`}>
            {icon ? <span className="hero__cta-icon">{icon}</span> : null}
            {label}
          </a>
        ))}
      </div>
    </div>
    <div className="hero__image" aria-hidden="true" />
  </header>
);

export default HeroSection;
