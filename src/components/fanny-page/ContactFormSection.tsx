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
    <div className="contact-form__media">
      <img src={image} alt={imageAlt} loading="lazy" />
    </div>
    <div className="contact-form__content">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={ctaHref} className="contact-form__cta">
        {ctaLabel}
      </a>
    </div>
  </section>
);

export default ContactFormSection;
