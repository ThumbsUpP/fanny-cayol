import React from 'react';
import './ContactFormSection.scss';
import type { ContactFormContent } from './types';

const ContactFormSection: React.FC<ContactFormContent> = ({
  image,
  imageAlt,
  title,
  description,
  ctaLabel,
  ctaHref,
}) => (
  <section className="contact-form">
    <div className="contact-form__media" data-animate="fade-up">
      <img src={image} alt={imageAlt} loading="lazy" />
    </div>
    <div className="contact-form__content" data-animate="fade-up" style={{ animationDelay: '0.12s' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={ctaHref} className="contact-form__cta" data-animate="fade-up" style={{ animationDelay: '0.22s' }}>
        {ctaLabel}
      </a>
    </div>
  </section>
);

export default ContactFormSection;
