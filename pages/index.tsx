import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { ExportSection } from '../sections/ExportSection';
import { StatsSection } from '../sections/StatsSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { InnovationSection } from '../sections/InnovationSection';
import { ProcessSection } from '../sections/ProcessSection';
import { PartnershipSection } from '../sections/PartnershipSection';
import { GlobalReachSection } from '../sections/GlobalReachSection';
import { ContactSection } from '../sections/ContactSection';
import { FooterSection } from '../sections/FooterSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExportSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <InnovationSection />
        <ProcessSection />
        <PartnershipSection />
        <GlobalReachSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default HomePage;
