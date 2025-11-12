import React from 'react';
import './FannyPage.scss';
import HeroSection from './HeroSection';
import ApproachSection from './ApproachSection';
import AudiencesSection from './AudiencesSection';
import ServicesSection from './ServicesSection';
import BookingSection from './BookingSection';
import GiftCardSection from './GiftCardSection';
import ContactSection from './ContactSection';
import ContactFormSection from './ContactFormSection';
import SiteFooter from './SiteFooter';
import {
  approachContent,
  audiencesContent,
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
    <ApproachSection {...approachContent} />
    <AudiencesSection {...audiencesContent} />
    <ServicesSection services={services} />
    <BookingSection {...bookingContent} />
    <GiftCardSection {...giftCardContent} />
    <ContactSection cards={contactCards} />
    <ContactFormSection {...contactFormContent} />
    <SiteFooter {...footerContent} />
  </div>
);

export default FannyPage;
