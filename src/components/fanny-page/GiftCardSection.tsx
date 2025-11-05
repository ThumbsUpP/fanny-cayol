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
  <section className="gift-card">
    <div className="gift-card__content">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={ctaHref} className="gift-card__cta">
        <span aria-hidden="true">{ctaIcon}</span> {ctaLabel}
      </a>
    </div>
  </section>
);

export default GiftCardSection;
