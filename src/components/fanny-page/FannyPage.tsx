import React from 'react';
import './FannyPage.scss';
import HeroSection from './HeroSection';
import ExperienceSection from './ExperienceSection';
import ApproachSection from './ApproachSection';
import AudiencesSection from './AudiencesSection';
import ServicesSection from './ServicesSection';
import BookingSection from './BookingSection';
import GiftCardSection from './GiftCardSection';
import AmbianceSection from './AmbianceSection';
import ContactSection from './ContactSection';
import ContactFormSection from './ContactFormSection';
import SiteFooter from './SiteFooter';
import {
  ambianceCards,
  approachContent,
  audiencesContent,
  bookingContent,
  contactCards,
  contactFormContent,
  experienceContent,
  footerContent,
  giftCardContent,
  heroContent,
  services,
} from './content';

const FannyPage: React.FC = () => (
  <div className="fanny-page">
    <HeroSection {...heroContent} />
    <ExperienceSection {...experienceContent} />
    <ApproachSection {...approachContent} />
    <AudiencesSection {...audiencesContent} />
    <ServicesSection services={services} />
    <BookingSection {...bookingContent} />
    <GiftCardSection {...giftCardContent} />
    {/* <AmbianceSection cards={ambianceCards} /> */}
    <ContactSection cards={contactCards} />
    <ContactFormSection {...contactFormContent} />
    <SiteFooter {...footerContent} />
  </div>
);

export default FannyPage;
