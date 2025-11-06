import React from 'react';
import './HeroSection.scss';
import type { HeroContent } from './types';

const HeroSection: React.FC<HeroContent> = ({ title, description, buttons, image }) => (
  <header className="hero">
    <div className="hero__accent" />
    <div className="hero__container">
      <div className="hero__content" data-animate="fade-up">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero__actions">
          {buttons.map(({ href, variant, label, icon }, index) => (
            <a
              key={label}
              href={href}
              className={`hero__cta hero__cta--${variant}`}
              data-animate="fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {icon ? <span className="hero__cta-icon">{icon}</span> : null}
              {label}
            </a>
          ))}
        </div>
      </div>
      <div
        className="hero__image"
        style={{ backgroundImage: `url(${image})`, animationDelay: '0.18s' }}
        aria-hidden="true"
        data-animate="fade-up"
      />
    </div>
  </header>
);

export default HeroSection;
