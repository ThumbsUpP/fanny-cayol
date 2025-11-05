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
    <div className="booking__media">
      <img src={image} alt={imageAlt} loading="lazy" />
    </div>
    <div className="booking__content">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="booking__actions">
        {actions.map(({ label, href, variant }) => (
          <a key={label} href={href} className={`booking__cta booking__cta--${variant}`}>
            {label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BookingSection;
