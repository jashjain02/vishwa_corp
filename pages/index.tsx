import React from 'react';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { WhatsAppButton } from '../components/WhatsAppButton';
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
      <Head>
        <title>Vishwa Corporation | Engineering Materials, Copper Alloys & Precision Manufacturing</title>
        <meta
          name="description"
          content="Vishwa Corporation manufactures specialty copper alloys, advanced engineering materials and precision CNC-machined components for aerospace, defence, marine, electrical and industrial applications. Exporting from India to 45+ countries."
        />
      </Head>
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
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
