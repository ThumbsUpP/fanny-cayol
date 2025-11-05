import React from 'react';
import './SiteFooter.scss';
import type { FooterContent } from './types';

const SiteFooter: React.FC<FooterContent> = ({
  title,
  subtitle,
  address,
  phoneLabel,
  phoneHref,
  appointmentHref,
  appointmentLabel,
  links,
}) => (
  <footer className="site-footer">
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{address}</p>
      <a href={phoneHref}>{phoneLabel}</a> ·{' '}
      <a href={appointmentHref} target="_blank" rel="noreferrer">
        {appointmentLabel}
      </a>
    </div>
    <div className="site-footer__links">
      {links.map(({ label, href }) => (
        <a key={label} href={href}>
          {label}
        </a>
      ))}
    </div>
  </footer>
);

export default SiteFooter;
