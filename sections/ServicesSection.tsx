'use client';

import React, { useState } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  stat?: string;
  Icon: React.FC;
}

const WrenchIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 23 23" fill="none" aria-hidden="true">
    <path
      d="M13.7 5.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1c.32-.32.86-.22.98.22.3 1.1.28 2.26-.05 3.35-.33 1.09-.97 2.06-1.84 2.8-.87.74-1.93 1.22-3.05 1.38-1.13.16-2.28 0-3.32-.47l-7.9 7.9c-.4.4-.94.62-1.5.62-.56 0-1.1-.23-1.5-.63-.4-.4-.62-.94-.62-1.5s.23-1.1.62-1.5l7.9-7.9c-.47-1.04-.63-2.19-.47-3.32.16-1.13.64-2.18 1.38-3.05.74-.87 1.7-1.5 2.79-1.84 1.1-.33 2.26-.35 3.35-.05.44.12.54.66.22.98L13.7 5.3Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlaneIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 21 21" fill="none" aria-hidden="true">
    <path
      d="M15.8 17.4 14 9.2l3.5-3.5c1.5-1.5 2-3.5 1.5-4.5-1-.5-3 0-4.5 1.5L11 6.2 2.8 4.4c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L7 10.2 5 13.2H2L1 14.2l3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 18 23" fill="none" aria-hidden="true">
    <path
      d="M17 12c0 5-3.5 7.5-7.66 9-.22.07-.45.07-.67 0C4.5 19.5 1 17 1 12V5c0-.27.1-.52.29-.71.19-.19.44-.29.71-.29 2 0 4.5-1.2 6.24-2.72.21-.19.48-.28.76-.28s.55.1.76.28C11.51 2.81 14 4 16 4c.27 0 .52.1.71.29.19.19.29.44.29.71v7Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 11.5 9.5 13.5l4-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MedalIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M9.47 1 11 9.53a.5.5 0 0 1-.8.49L6.6 7.31a.5.5 0 0 0-.6 0l-3.58 2.69a.5.5 0 0 1-.79-.49L3.02 1"
      stroke="white"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.4" />
  </svg>
);

const BriefcaseIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M1 17c0 .53.21 1.04.59 1.41.37.38.88.59 1.41.59h14c.53 0 1.04-.21 1.41-.59.38-.37.59-.88.59-1.41V6.5l-5 3V6.5l-5 3V3c0-.53-.21-1.04-.59-1.41C7.04 1.21 6.53 1 6 1H3c-.53 0-1.04.21-1.41.59C1.21 1.96 1 2.47 1 3v14Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.4" />
    <path d="M1 7H13" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    <path
      d="M7 1C8.5 2.6 9.3 4.7 9.3 7C9.3 9.3 8.5 11.4 7 13C5.5 11.4 4.7 9.3 4.7 7C4.7 4.7 5.5 2.6 7 1Z"
      stroke="white"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    style={{ transition: 'transform 250ms ease', transform: open ? 'none' : 'rotate(180deg)' }}
  >
    <path
      d="M4.44 15.06a1.5 1.5 0 0 0 2.12 0L12 9.62l5.44 5.44a1.5 1.5 0 0 0 2.12-2.12l-6.5-6.5a1.5 1.5 0 0 0-2.12 0l-6.5 6.5a1.5 1.5 0 0 0 0 2.12Z"
      fill="white"
    />
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SERVICES: ServiceItem[] = [
  {
    title: 'Precision Engineering',
    description:
      'Advanced casting, extrusion, drawing, CNC turning, milling and grinding capabilities enable us to manufacture copper alloys, engineering materials and precision components that consistently meet complex technical drawings and stringent conductivity, strength and dimensional tolerances.',
    stat: '±0.01mm Manufacturing Accuracy',
    Icon: WrenchIcon,
  },
  {
    title: 'Rapid Turnaround',
    description:
      'Streamlined production workflows and in-house stock of copper, copper alloys and engineering-grade materials allow us to dispatch orders and machined components faster than industry standard without compromising quality.',
    Icon: PlaneIcon,
  },
  {
    title: 'Global Material Standards',
    description:
      'Our copper alloys, engineering materials and precision components are manufactured to international material specifications including ASTM, EN, JIS and BS standards, ensuring consistent composition, conductivity and mechanical performance — audit-ready at every stage.',
    Icon: ShieldIcon,
  },
  {
    title: 'Expert Metallurgical Team',
    description:
      'Our metallurgists and engineers bring decades of specialised experience across material selection, process planning for casting, extrusion and CNC machining, and technical drawing interpretation for critical applications.',
    Icon: MedalIcon,
  },
  {
    title: 'Comprehensive Material Range',
    description:
      'From oxygen-free, electrolytic, beryllium, chromium, zirconium, tellurium and molybdenum copper to high-performance engineering alloys and precision-machined components — a complete portfolio under one roof.',
    Icon: BriefcaseIcon,
  },
  {
    title: 'Proven Track Record',
    description:
      'Industrial clients across 45+ export markets trust Vishwa Corporation for repeat orders of specialty copper alloys, engineering materials and precision components, with reliable on-time delivery and consistent performance.',
    Icon: GlobeIcon,
  },
];

/** Figma node 34:3765 — "Built for the World's Most Demanding Industries." */
export const ServicesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section aria-labelledby="services-heading" className="w-full bg-[#050505]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-12 px-6 py-12 sm:px-8 md:px-12 md:py-16 wide:flex-row wide:gap-[80px] lg:px-[64px] lg:py-[120px]">

        {/* ── Left: badge, heading, body, CTA ── */}
        <div className="flex w-full flex-col items-start gap-8 wide:flex-1 lg:gap-10">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/20 px-[13px] py-[7px]">
              <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-white">
                Competitive Edge
              </span>
            </div>
            <h2 id="services-heading" className="w-full text-[28px] font-medium leading-[1.1] text-white sm:text-[36px] md:text-[44px] lg:w-[min-content] lg:min-w-full lg:text-[56px]">
              Built for the World&apos;s Most Demanding Industries.
            </h2>
            <p className="w-full text-[15px] leading-[24px] text-white/70 wide:w-[411px] lg:text-[16px] lg:leading-[26px]">
              Eighteen years of specialty copper, advanced engineering materials and precision
              manufacturing experience, supplying electrical, aerospace, defence, marine, energy
              and heavy engineering industries across the globe.
            </p>
          </div>

          <a
            href="#contact"
            className="flex h-[52px] items-center gap-3 rounded-full bg-[#006AFF] px-6 py-[12px] lg:h-[56px] lg:px-8 lg:py-[14px]"
          >
            <span className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.36px] text-white lg:text-[18px]">
              Contact Us Now
            </span>
            <ArrowRightIcon />
          </a>
        </div>

        {/* ── Right: icon-rail accordion timeline ── */}
        <div className="relative grid w-full grid-cols-[40px_1fr] gap-x-4 gap-y-[10px] sm:grid-cols-[48px_1fr] sm:gap-x-6 wide:w-[780px] wide:shrink-0 wide:grid-cols-[56px_1fr] wide:gap-x-[40px]">
          <div className="absolute bottom-5 left-5 top-5 w-px bg-white/10 sm:bottom-6 sm:left-6 sm:top-6 lg:bottom-[28px] lg:left-[28px] lg:top-[28px]" />

          {SERVICES.map((service, i) => {
            const isOpen = openIndex === i;
            const { Icon } = service;
            return (
              <React.Fragment key={service.title}>
                <div className="relative z-10 flex size-10 items-center justify-center rounded-full p-1 sm:size-12 wide:size-[56px]" style={{ background: isOpen ? 'rgba(0,106,255,0.18)' : '#121212' }}>
                  <div
                    className="flex size-8 items-center justify-center rounded-full sm:size-10 wide:size-[48px]"
                    style={{ background: isOpen ? '#006AFF' : '#252525' }}
                  >
                    <Icon />
                  </div>
                </div>

                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-body-${i}`}
                  className="relative z-10 flex flex-col items-start rounded-[20px] p-4 text-left sm:p-5 lg:p-6"
                  style={{
                    background: isOpen ? 'linear-gradient(135deg, #3a8bfc, #006aff)' : '#121212',
                  }}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-[17px] font-medium leading-[1.2] tracking-[0.15px] text-white sm:text-[20px] lg:text-[24px]">
                      {service.title}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </div>

                  <div
                    className="grid w-full transition-[grid-template-rows] duration-250 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div id={`service-body-${i}`} className="overflow-hidden">
                      <p className="pt-4 text-[16px] leading-[24px] tracking-[0.15px] text-white">
                        {service.description}
                      </p>
                      {service.stat && (
                        <p className="pt-2 text-[16px] uppercase leading-[24px] tracking-[0.15px] text-white">
                          {service.stat}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
