import React from 'react';
import './FannyPage.scss';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import BookingSection from './BookingSection';
import GiftCardSection from './GiftCardSection';
import AmbianceSection from './AmbianceSection';
import ContactSection from './ContactSection';
import ContactFormSection from './ContactFormSection';
import SiteFooter from './SiteFooter';
import {
  aboutContent,
  ambianceCards,
  bookingContent,
  contactCards,
  contactFormContent,
  footerContent,
  giftCardContent,
  heroContent,
  services,
} from './content';

const FannyPage: React.FC = () => (
  <div className="fanny-page">
    <HeroSection {...heroContent} />
    {/* <AboutSection {...aboutContent} />   */}
    <ServicesSection services={services} />
    <BookingSection {...bookingContent} />
    <GiftCardSection {...giftCardContent} />
    <AmbianceSection cards={ambianceCards} />
    <ContactSection cards={contactCards} />
    <ContactFormSection {...contactFormContent} />
    <SiteFooter {...footerContent} />
  </div>
);

export default FannyPage;
