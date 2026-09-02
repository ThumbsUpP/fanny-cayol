import React from 'react';
import { navigation } from '../../data/site';
import './SiteHeader.scss';

type Props = {
  currentPath: string;
};

const isCurrent = (currentPath: string, href: string) =>
  href === '/' ? currentPath === '/' : currentPath.startsWith(href);

const NavigationLinks = ({ currentPath }: Props) => (
  <>
    {navigation.map(({ label, href }) => (
      <a
        key={href}
        href={href}
        className={isCurrent(currentPath, href) ? 'is-current' : undefined}
        aria-current={isCurrent(currentPath, href) ? 'page' : undefined}
      >
        {label}
      </a>
    ))}
  </>
);

const SiteHeader: React.FC<Props> = ({ currentPath }) => (
  <header className="site-header">
    <div className="site-header__inner">
      <a className="site-header__brand" href="/">
        <span className="site-header__monogram" aria-hidden="true">FC</span>
        <span>
          <strong>Fanny Cayol Peridon</strong>
          <small>Ostéopathe à Autrans</small>
        </span>
      </a>

      <nav className="site-header__desktop" aria-label="Navigation principale">
        <NavigationLinks currentPath={currentPath} />
      </nav>

      <a className="site-header__appointment" href="/cabinet-tarifs-rendez-vous/">
        Rendez-vous
      </a>

      <details className="site-header__mobile">
        <summary>
          <span>Menu</span>
          <span className="site-header__menu-icon" aria-hidden="true"></span>
        </summary>
        <nav aria-label="Navigation mobile">
          <NavigationLinks currentPath={currentPath} />
          <a className="site-header__mobile-appointment" href="/cabinet-tarifs-rendez-vous/">
            Cabinet & rendez-vous
          </a>
        </nav>
      </details>
    </div>
  </header>
);

export default SiteHeader;
