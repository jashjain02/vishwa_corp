import React from 'react';
import Image from 'next/image';
import handshakePhoto from '../assets/images/partnership-handshake.jpg';

interface PartnershipCard {
  title: string;
  description: string;
}

const CARDS: PartnershipCard[] = [
  {
    title: 'Global Export Partnerships',
    description: 'Reliable specialty copper alloy, engineering material and precision component supply for industrial and electrical infrastructure requirements worldwide.',
  },
  {
    title: 'OEM & Industrial Supply',
    description: 'Long-term material and precision component supply partnerships tailored for industrial OEMs and engineering projects.',
  },
];

const HandshakeIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M11 17 2 8l4.5-4.5c.7-.7 1.86-.7 2.56 0L11 5"
      stroke="#006AFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 17l9-9-4.5-4.5c-.7-.7-1.86-.7-2.56 0L13 5"
      stroke="#006AFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8l3 3a2 2 0 0 0 2.83 0 2 2 0 0 0 0-2.83l-2.5-2.5"
      stroke="#006AFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Figma node 34:3838 — "Building Strategic Metal Partnerships Across Global & Indian Markets." */
export const PartnershipSection: React.FC = () => {
  return (
    <section aria-labelledby="partnership-heading" className="w-full bg-[#f7f7f7]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-[64px] lg:py-[100px]">

        <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[360px] lg:h-[646px] lg:w-[657px]">
          <Image src={handshakePhoto} alt="Industrial partnership handshake at a precision manufacturing facility" fill className="object-cover" />
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:w-[555px] lg:gap-10">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#006AFF]/20 bg-[#006AFF]/10 px-[13px] py-[7px]">
              <HandshakeIcon />
              <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">
                Partnership Program
              </span>
            </div>

            <h2 id="partnership-heading" className="w-full text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] md:text-[44px] lg:text-[56px]">
              Building Strategic Engineering Partnerships Across Global &amp; Indian Markets.
            </h2>

            <p className="w-full text-[15px] leading-[24px] tracking-[-0.31px] text-[#050505]/70 lg:w-[520px] lg:text-[16px] lg:leading-[26px]">
              We partner with global manufacturers, industrial OEMs, and engineering brands for
              long-term supply collaborations across specialty copper alloys, advanced engineering
              materials and precision-machined components. From bulk raw material supply to
              custom component partnerships, we help businesses scale with reliable, consistent
              quality.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-4 sm:flex-row">
            {CARDS.map((card) => (
              <div key={card.title} className="flex w-full flex-col gap-1 sm:w-[269.5px]">
                <p className="text-[16px] font-semibold leading-[24px] text-[#050505]">{card.title}</p>
                <p className="text-[14px] leading-[20px] text-[#54657a]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
