import React from 'react';
import './HeroSection.scss';
import type { HeroContent } from './types';

const HeroSection: React.FC<HeroContent> = ({
  title,
  description,
  buttons,
  image,
  imageAlt = '',
}) => (
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
      <div className="hero__image" data-animate="fade-up" style={{ animationDelay: '0.18s' }}>
        <img
          src={image}
          alt={imageAlt}
          fetchPriority="high"
          decoding="async"
          width={420}
          height={525}
        />
      </div>
    </div>
  </header>
);

export default HeroSection;
