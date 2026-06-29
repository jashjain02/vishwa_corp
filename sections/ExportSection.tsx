import React from 'react';
import Image from 'next/image';
import exportWorldMap from '../assets/images/export-world-map.png';

const GlobeIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6.42" stroke="#006AFF" strokeWidth="1.17" />
    <path d="M0.58 7H13.42" stroke="#006AFF" strokeWidth="1.17" strokeLinecap="round" />
    <path
      d="M7 0.58C8.6 2.2 9.5 4.5 9.5 7C9.5 9.5 8.6 11.8 7 13.42C5.4 11.8 4.5 9.5 4.5 7C4.5 4.5 5.4 2.2 7 0.58Z"
      stroke="#006AFF"
      strokeWidth="1.17"
      strokeLinejoin="round"
    />
  </svg>
);

/** Figma node 34:455 — "We Export from India to 45+ Countries." */
export const ExportSection: React.FC = () => {
  return (
    <section aria-labelledby="export-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center gap-[126px] px-[64px] py-[120px]">

        {/* Left — badge, heading, body */}
        <div className="flex w-[473px] shrink-0 flex-col gap-4">
          <div className="flex w-fit items-center gap-2 rounded-full border border-[#BFD9FF] bg-[#EAF2FF] px-[13px] py-2">
            <GlobeIcon />
            <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.04em] text-[#006AFF]">
              Global Footprint
            </span>
          </div>

          <h2
            id="export-heading"
            className="text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-[#0A0A0F]"
          >
            We Supply Specialty Copper to 45+ Countries.
          </h2>

          <p className="text-[15px] leading-relaxed text-[#6B6B6B]">
            From our manufacturing facility in Maharashtra to ports in Mumbai, JNPT and Chennai —
            our supply chain delivers oxygen-free copper, copper alloys and precision components
            reliably to every major industrial market.
          </p>
        </div>

        {/* Right — World map with export routes */}
        <div className="relative flex-1">
          <Image
            src={exportWorldMap}
            alt="World map showing Vishwa Corporation's specialty copper export routes from India"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ExportSection;
