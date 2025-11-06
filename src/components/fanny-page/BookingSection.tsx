import React from 'react';
import './BookingSection.scss';
import type { BookingContent } from './types';

const BookingSection: React.FC<BookingContent> = ({
  image,
  imageAlt,
  title,
  description,
  actions,
}) => (
  <section className="booking">
    <div className="booking__media" data-animate="fade-up">
      <img src={image} alt={imageAlt} loading="lazy" />
    </div>
    <div className="booking__content" data-animate="fade-up" style={{ animationDelay: '0.12s' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="booking__actions">
        {actions.map(({ label, href, variant }, index) => (
          <a
            key={label}
            href={href}
            className={`booking__cta booking__cta--${variant}`}
            data-animate="fade-up"
            style={{ animationDelay: `${0.08 * (index + 1)}s` }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BookingSection;
