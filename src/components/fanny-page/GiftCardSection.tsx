import React from 'react';
import './GiftCardSection.scss';
import type { GiftCardContent } from './types';

const GiftCardSection: React.FC<GiftCardContent> = ({
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaIcon,
}) => (
  <section className="gift-card" data-animate="fade-up">
    <div className="gift-card__content">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={ctaHref} className="gift-card__cta" data-animate="fade-up" style={{ animationDelay: '0.12s' }}>
        <span aria-hidden="true">{ctaIcon}</span> {ctaLabel}
      </a>
    </div>
  </section>
);

export default GiftCardSection;
