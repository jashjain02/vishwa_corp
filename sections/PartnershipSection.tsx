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
    description: 'Reliable specialty copper and copper alloy supply for industrial and electrical infrastructure requirements worldwide.',
  },
  {
    title: 'OEM & Industrial Supply',
    description: 'Long-term copper and copper alloy supply partnerships tailored for industrial OEMs and engineering projects.',
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
      <div className="mx-auto flex max-w-[1440px] items-center gap-16 px-[64px] py-[100px]">

        <div className="relative h-[646px] w-[657px] shrink-0 overflow-hidden rounded-2xl">
          <Image src={handshakePhoto} alt="Industrial partnership handshake at a copper manufacturing facility" fill className="object-cover" />
        </div>

        <div className="flex w-[555px] flex-col items-start gap-10">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#006AFF]/20 bg-[#006AFF]/10 px-[13px] py-[7px]">
              <HandshakeIcon />
              <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">
                Partnership Program
              </span>
            </div>

            <h2 id="partnership-heading" className="w-full text-[56px] font-medium leading-[1.1] text-[#050505]">
              Building Strategic Metal Partnerships Across Global &amp; Indian Markets.
            </h2>

            <p className="w-[520px] text-[16px] leading-[26px] tracking-[-0.31px] text-[#050505]/70">
              We partner with global manufacturers, industrial OEMs, and specialty alloy brands
              for long-term copper and copper alloy supply collaborations. From bulk raw
              material supply to custom alloy partnerships, we help businesses scale with
              reliable, consistent material quality.
            </p>
          </div>

          <div className="flex items-start gap-4">
            {CARDS.map((card) => (
              <div key={card.title} className="flex w-[269.5px] flex-col gap-1">
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
